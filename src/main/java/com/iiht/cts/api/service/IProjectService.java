package com.iiht.cts.api.service;

import java.util.List;

import com.iiht.cts.api.vo.Project;

/**
 * Project Manager Restful API Service Interface for <tt>/projects</tt> Resource with CRUD operations.
 * 
 * @author Mohamed Yusuff
 */
public interface IProjectService {

	/**
	 * Returns all Projects
	 * 
	 * @return a list of {@link Project}
	 */
	public List<Project> getAllProjects();
	
	/**
	 * Returns requested Project
	 * 
	 * @param projectId refers to attribute {@code projectId}
	 * @return a {@link Project} identified by its id
	 */
	public Project getProject(Long projectId);
	
	/**
	 * Adds a new Project
	 * 
	 * @param project refers to a new instance of {@link Project}
	 * @return a newly added {@link Project}
	 */
	public Project addProject(Project project);
	
	/**
	 * Updates an existing Project
	 * 
	 * @param projectId refers to attribute {@code projectId}
	 * @param project refers to an edited instance of {@link Project}
	 * @return an updated {@link Project} identified by its id
	 */
	public Project updateProject(Long projectId, Project project);
	
	/**
	 * Deletes an Existing Project
	 * 
	 * @param projectId refers to attribute {@code projectId}
	 */
	public void deleteProject(Long projectId);

/*	*//**
	 * Ends an Existing Project
	 * 
	 * @param projectId refers to attribute {@code projectId}
	 *//*
	public void endProject(Long projectId);*/
}
