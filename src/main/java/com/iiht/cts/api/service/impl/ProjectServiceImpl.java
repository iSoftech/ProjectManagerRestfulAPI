/**
 * 
 */
package com.iiht.cts.api.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.iiht.cts.api.exception.ResourceExistException;
import com.iiht.cts.api.exception.ResourceNotExistException;
import com.iiht.cts.api.exception.TechnicalException;
import com.iiht.cts.api.model.AppTProject;
import com.iiht.cts.api.model.AppTTask;
import com.iiht.cts.api.model.AppTUser;
import com.iiht.cts.api.repo.IProjectRepository;
import com.iiht.cts.api.repo.IUserRepository;
import com.iiht.cts.api.service.IProjectService;
import com.iiht.cts.api.vo.Project;
import com.iiht.cts.api.vo.User;

/**
 * Project Manager Restful API Service Implementation for <tt>/projects</tt> Resource with CRUD operations.
 * 
 * @author Mohamed Yusuff
 */
@Service
public class ProjectServiceImpl implements IProjectService {

	// To Log the Error Messages in case of Exceptions
	private static final Logger LOGGER = LoggerFactory.getLogger(ProjectServiceImpl.class);

	@Autowired
	private IProjectRepository projectRepository;
	
	@Autowired
	private IUserRepository userRepository;
	
	/**
	 * Returns all Projects
	 * 
	 * @return a list of {@link Project}
	 */
	@Override
	public List<Project> getAllProjects() {
		List<AppTProject> projects = null;
		List<Project> projectList = null;
		try {
			// Finds all Projects Entities
			projects = projectRepository.findAll();
			if (!CollectionUtils.isEmpty(projects)) {
				projectList = new ArrayList<>(0);
				// Builds Project Details List
				buildProjectDetailsList(projects, projectList);
			}
		} catch (Exception exc) {
			LOGGER.error("Error occurred when trying to fetch all Projects", exc);
			throw new TechnicalException(exc.getMessage(), null);
		}
		return projectList;
	}

	/**
	 * Returns requested Project
	 * 
	 * @param projectId refers to attribute {@code projectId}
	 * @return a {@link Project} identified by its id
	 */
	@Override
	public Project getProject(Long projectId) {
		Project project = null;		
		try {
			String operation = HttpMethod.GET.name();
			// Validates and Throw Exception for the Existing Resource - Project
			validateExistingResourceAndThrowException(projectId, operation);
			// Retrieves requested Project if present
			AppTProject appTProject = projectRepository.getOne(projectId);
			if (null != appTProject) {
				// Populates Project Details
				project = populateProjectDetails(appTProject);
			}
		} catch (Exception exc) {
			LOGGER.error("Error occurred when trying to fetch Project with ProjectId - " + projectId, exc);
			HttpStatus httpStatus = AnnotationUtils.findAnnotation(exc.getClass(), ResponseStatus.class).code();
			throw new TechnicalException(exc.getMessage(), httpStatus);
		}
		return project;
	}

	/**
	 * Adds a new Project
	 * 
	 * @param project refers to a new instance of {@link AppTProject}
	 * @return a newly added {@link AppTProject}
	 */
	@Override
	public Project addProject(Project project) {
		Project newlySavedProject = null;
		try {
			String operation = HttpMethod.POST.name();
			// Validates and Throws Exception for the New Resource - Project
			validateNewResourceAndThrowException(project, operation);
			// Updates the UserId If not present to avoid creating duplicate User Entities
			if (null != project.getUser() && null == project.getUser().getUserId()
					&& !StringUtils.isEmpty(project.getUser().getEmployeeId())) {
				// Finds an User by EmployeeId to determine if it is already exist
				Optional<AppTUser> userEntity = userRepository
						.findByEmployeeId(project.getUser().getEmployeeId());
				if (userEntity.isPresent()) {
					project.getUser().setUserId(userEntity.get().getUserId());
				}
			}
			// Saves and Returns the Newly Added Project
			AppTProject newProject = populateAndSaveProjectDetails(project, true);
			// Populates the Saved Project Details 
			newlySavedProject = populateProjectDetails(newProject);
		} catch (Exception exc) {
			LOGGER.error("Error occurred when trying to add a new Project", exc);
			HttpStatus httpStatus = AnnotationUtils.findAnnotation(exc.getClass(), ResponseStatus.class).code();
			throw new TechnicalException(exc.getMessage(), httpStatus);
		}
		return newlySavedProject;
	}

	/**
	 * Populates and Saves Project Details
	 * 
	 * @param project
	 * @param isNewProject
	 * @return
	 */
	private AppTProject populateAndSaveProjectDetails(Project project, boolean isNewProject) {
		// Project Details
		AppTProject appTProject = null;
		if (isNewProject) {
			// Creates a new Project Entity
			appTProject = new AppTProject();
			appTProject.setCreatedDate(new Date(System.currentTimeMillis()));
		} else {
			// Retrieves the existing Project Entity 
			appTProject = projectRepository.getOne(project.getProjectId());
			appTProject.setModifiedDate(new Date(System.currentTimeMillis()));
		}
		appTProject.setProjectName(project.getProjectName());
		appTProject.setPriority(project.getPriority());
		appTProject.setStartDate(project.getStartDate());
		appTProject.setEndDate(project.getEndDate());
		appTProject.setActive(project.getActive());
		if (null != project.getUser()) {
			AppTUser appTUser = new AppTUser();
			BeanUtils.copyProperties(project.getUser(), appTUser);
			appTProject.setUser(appTUser);
		}
		return projectRepository.save(appTProject);
	}

	/**
	 * Updates an existing Project
	 * 
	 * @param projectId refers to attribute {@code projectId}
	 * @param project refers to an edited instance of {@link AppTProject}
	 * @return an updated {@link AppTProject} identified by its id
	 */
	@Override
	public Project updateProject(Long projectId, Project project) {
		Project modifiedProject = null;
		try {
			String operation = HttpMethod.PUT.name();
			// Validates and Throw Exception for the Existing Resource - Project
			validateExistingResourceAndThrowException(projectId, operation);
			// Sets the requested ProjectId
			project.setProjectId(projectId);
			// Updates the UserId If not present to avoid creating duplicate User Entities
			if (null != project.getUser() && null == project.getUser().getUserId()
					&& !StringUtils.isEmpty(project.getUser().getEmployeeId())) {
				// Finds an User by EmployeeId to determine if it is already exist
				Optional<AppTUser> userEntity = userRepository
						.findByEmployeeId(project.getUser().getEmployeeId());
				if (userEntity.isPresent()) {
					project.getUser().setUserId(userEntity.get().getUserId());
				}
			}
			// Saves and Returns the Updated Project
			AppTProject updatedProject = populateAndSaveProjectDetails(project, false);
			// Populates the Updated Project Details 
			modifiedProject = populateProjectDetails(updatedProject);
		} catch (Exception exc) {
			LOGGER.error("Error occurred when trying to update an existing Project with ProjectId - " + projectId, exc);
			HttpStatus httpStatus = AnnotationUtils.findAnnotation(exc.getClass(), ResponseStatus.class).code();
			throw new TechnicalException(exc.getMessage(), httpStatus);
		}
		return modifiedProject;
	}
	
	/**
	 * Deletes an Existing Project
	 * 
	 * @param projectId refers to attribute {@code projectId}
	 */
	@Override
	public void deleteProject(Long projectId) {
		try {
			String operation = HttpMethod.DELETE.name();
			// Validates and Throw Exception for the Existing Resource - Project
			validateExistingResourceAndThrowException(projectId, operation);
			// Deletes the requested Project by its id if present
			projectRepository.deleteById(projectId);
		} catch (Exception exc) {
			LOGGER.error("Error occurred when trying to delete an existing Project", exc);
			HttpStatus httpStatus = AnnotationUtils.findAnnotation(exc.getClass(), ResponseStatus.class).code();
			throw new TechnicalException(exc.getMessage(), httpStatus);
		}
	}

	/**
	 * Validates and Throw Exception for the Existing Resource - Project
	 * 
	 * @param projectId refers to attribute {@code projectId}
	 * @param operation refers to attribute of {@link HttpMethod}
	 */
	private void validateExistingResourceAndThrowException(Long projectId, String operation) {
		// Finds a Project by its id to determine if it is present
		Optional<AppTProject> projectEntity = projectRepository.findById(projectId);
		// Throws Resource Not Exist Exception if not present
		if (!projectEntity.isPresent()) {
			throw new ResourceNotExistException("The requested Project with Id - " + projectId
					+ " doesn't exist. The requested operation [" + operation + "] cannot be performed.");
		}
	}
	
	/**
	 * Validates and Throws Exception for the New Resource - Project
	 * 
	 * @param projectId refers to attribute {@code projectId}
	 * @param operation refers to attribute of {@link HttpMethod}
	 */
	private void validateNewResourceAndThrowException(Project project, String operation) {
		// Finds a Project by Name to determine if it is already exist
		Optional<AppTProject> projectEntity = projectRepository.findByName(project.getProjectName());
		// Throws Resource Exist Exception if the Project already present with 
		// this Name and the ParentProject is same
		if (projectEntity.isPresent()) {
			// Throws Resource Exist Exception if referring to same Resource details
			throw new ResourceExistException("A Project with the name - '" + project.getProjectName()
					+ "' is already exist. " + "The requested operation [" + operation + "] cannot be performed.");
		}
	}

	/**
	 * Builds Project Details List
	 * 
	 * @param projects
	 * @param projectList
	 */
	private void buildProjectDetailsList(List<AppTProject> projects, List<Project> projectList) {
		for (AppTProject appTProject : projects) {
			projectList.add(populateProjectDetails(appTProject));
		}
	}

	/**
	 * Populates Project Details
	 * 
	 * @param appTProject
	 */
	private Project populateProjectDetails(AppTProject appTProject) {
		Project project = new Project();
		BeanUtils.copyProperties(appTProject, project);
		if (null != appTProject.getUser()) {
			User user = new User();
			BeanUtils.copyProperties(appTProject.getUser(), user);
			project.setUser(user);
		}
		if (null != appTProject.getTasks()) {
			project.setNoOfTasks(appTProject.getTasks().size());
			List<AppTTask> completedTasks = appTProject.getTasks().stream()
					.filter(p -> p.getActive().equalsIgnoreCase("N")).collect(Collectors.<AppTTask>toList());
			project.setCompleted(null != completedTasks ? completedTasks.size() : 0);
		}
		return project;
	}	
}