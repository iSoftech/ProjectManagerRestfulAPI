package com.iiht.cts.api.resource;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.HeadersBuilder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.iiht.cts.api.service.IProjectService;
import com.iiht.cts.api.vo.Project;
import com.iiht.cts.api.vo.ProjectResponse;

/**
 * Project Manager Restful API Controller for <tt>/projects</tt> Resource with CRUD operations.
 * 
 * @author Mohamed Yusuff
 */
@RequestMapping(value="/projects", produces="application/json")
@RestController
public class ProjectResource {

	@Autowired
	private IProjectService projectService;
	
	/**
	 * <strong>Lists all Project Entities [<tt>GET</tt>]</strong>
	 * <br>
	 * Returns all <tt>Projects</tt> available in the system with <tt>GET</tt> method
	 * for resource {@code /projects}.
	 * 
	 * <pre>
	 * {@code Response 200 (application/json)}
	 * 	
	 *	{
	 *	    "statusCode": 200,
	 *	    "message": "Projects retrieved!!",
	 *	    "response": [
	 *	        {
	 *				"projectId": 1001,
	 *	            "projectName": "Project 1",
	 *	            "priority": 10,
	 *	            "startDate": "2018-12-01",
	 *				"endDate": "2018-12-31",
	 *				"active": "Y",
	 *	        }
	 *	    ]
	 *	}
	 * </pre>
	 * 
	 * @return a list of {@link Project} with Response Status as 200 OK
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<ProjectResponse<List<Project>>> getAllProjects() {
		// Retrieves All Projects details
		List<Project> allProjects = projectService.getAllProjects();
		// Prepares Project Response with HTTPStatus as OK {200}
		ProjectResponse<List<Project>> projectResponse = (ProjectResponse<List<Project>>) ProjectResponse
				.getInstance(HttpStatus.OK.value(), "Projects retrieved!!", allProjects);
		// Returns the ResponseEntity with HTTPStatus as OK {200}
		return ResponseEntity.ok(projectResponse);
	}

	/**
	 * <strong>Creates a Project Entity [<tt>POST</tt>]</strong>
	 * <br>
	 * Adds a new <tt>Project</tt> details with <tt>POST</tt> method.
	 * 
	 * <pre>
	 * {@code Request (application/json)}
	 * 	
	 *   {
	 *	     "projectName": "Project 1",
	 *	     "priority": 10,
	 *	     "startDate": "2018-12-01",
	 *		 "endDate": "2018-12-31",
	 *   }
	 *   
	 * {@code Response 201 (application/json)}
	 * 
	 *   {
     *		"statusCode": 201,
     *		"message": "Project Created!!",
     *		"response": {
	 *	     	"projectName": "Project 1",
	 *	     	"priority": 10,
	 *	     	"startDate": "2018-12-01",
	 *		 	"endDate": "2018-12-31",
	 *			"active": "Y",
	 *  	}
	 *   }
	 * </pre>
	 * 
	 * @param project refers to a new instance of {@link Project}
	 * @return a newly added {@link Project} with Response Status as 201 Created
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<ProjectResponse<Project>> addProject(@RequestBody Project project) {
		// Adds and Returns newly added Project details
		Project savedProject = projectService.addProject(project);
		// URI Builder to build newly created resource location
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{projectId}")
				.buildAndExpand(savedProject.getProjectId()).toUri();
		// Prepares Project Response with HTTPStatus as Created {201}
		ProjectResponse<Project> projectResponse = (ProjectResponse<Project>) ProjectResponse
				.getInstance(HttpStatus.CREATED.value(), "Project Created!!", savedProject);
		// Returns the ResponseEntity with HTTPStatus as Created {201}
		return ResponseEntity.created(location).body(projectResponse);
	}
	
	/**
	 * <strong>Views a Project Entity [<tt>GET</tt>]</strong>
	 * <br>
	 * Returns a <tt>Project</tt> available in the system identified by its <tt>{id}</tt> with
	 * <tt>GET</tt> method.
	 * 
	 * <pre>
	 * {@code Request}
	 * 
	 * 	Headers
	 * 		Location: /projects/1001
	 * 
	 * {@code Response 200 (application/json)}
	 * 	
	 *  {
	 *		"statusCode": 200,
	 *		"message": "Project Retrieved!!",
	 *		"response": {
	 *   	 	"projectId": 1001,
	 *	    	"projectName": "Project 1",
	 *	    	"priority": 15,
	 *	    	"startDate": "2018-12-01",
	 *			"endDate": "2018-12-31",
	 *			"active": "Y",
	 *  	}
	 *  }
	 * </pre>
	 * 
	 * @param projectId refers to attribute {@code projectId}
	 * @return a single {@link Project} identified by its id with Response Status as 200 OK
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value="/{projectId}", method=RequestMethod.GET)
	public ResponseEntity<ProjectResponse<Project>> getProject(@PathVariable Long projectId) {
		// Retrieves requested Project details
		Project project = projectService.getProject(projectId);
		// Prepares Project Response with HTTPStatus as OK {200}		
		ProjectResponse<Project> projectResponse = (ProjectResponse<Project>) ProjectResponse
				.getInstance(HttpStatus.OK.value(), "Projects Retrieved!!", project);
		// Returns the ResponseEntity with HTTPStatus as OK {200}
		return ResponseEntity.ok(projectResponse);
	}

	/**
	 * <strong>Updates a Project Entity [<tt>PUT</tt>]</strong>
	 * <br>
	 * Updates an existing <tt>Project</tt> details identified by its
	 * <tt>{id}</tt> with <tt>PUT</tt> method.
	 * 
	 * <pre>
	 * {@code Request (application/json)}
	 * 	
	 * 	Headers
	 * 		Location: /projects/1001
	 * 	Body
	 *	    {
	 *	     	"projectName": "Project 1",
	 *	     	"priority": 15,
	 *	     	"startDate": "2018-12-01",
	 *		 	"endDate": "2018-12-31",
	 *	    }
	 * {@code Response 201 (application/json)}
	 * 
	 *  {
	 *		"statusCode": 201,
	 *		"message": "Project Updated!!",
	 *		"response": {
	 *   	 	"projectId": 1001,
	 *	     	"projectName": "Project 1",
	 *	     	"priority": 15,
	 *	     	"startDate": "2018-12-01",
	 *		 	"endDate": "2018-12-31",
	 *		 	"active": "Y",
	 *   	}
	 *  }
	 * </pre>
	 * 
	 * @param projectId refers to attribute {@code projectId}
	 * @param project refers to an edited instance of {@link Project}
	 * @return an updated {@link Project} identified by its id with Response Status as 201 Created
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value="/{projectId}", method=RequestMethod.PUT)
	public ResponseEntity<ProjectResponse<Project>> updateProject(@PathVariable Long projectId,
			@RequestBody Project project) {
		// Updates and Returns edited Project details
		Project updatedProject = projectService.updateProject(projectId, project);
		// URI Builder to build updated resource location
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.buildAndExpand(updatedProject.getProjectId()).toUri();
		// Prepares Project Response with HTTPStatus as Created {201}
		ProjectResponse<Project> projectResponse = (ProjectResponse<Project>) ProjectResponse
				.getInstance(HttpStatus.CREATED.value(), "Project Updated!!", updatedProject);
		// Returns the ResponseEntity with HTTPStatus as Created {201}
		return ResponseEntity.created(location).body(projectResponse);
	}
	
	/**
	 * <strong>Deletes a Project Entity [<tt>DELETE</tt>]</strong>
	 * <br>
	 * Deletes an existing <tt>Project</tt> details identified by its
	 * <tt>{id}</tt> with <tt>DELETE</tt> method.
	 * 
	 * <pre>
	 * {@code Request}
	 * 
	 * 	Headers
	 * 		Location: /projects/1001
	 * 
	 * {@code Response 204}
	 * </pre>
	 * 
	 * @param projectId refers to attribute {@code projectId}
	 */
	@RequestMapping(value="/{projectId}", method=RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public HeadersBuilder<?> deleteProject(@PathVariable Long projectId) {
		// Deletes the requested Project Resource with Response HTTPStatus as No Content {204}
		projectService.deleteProject(projectId);
		return ResponseEntity.noContent();
	}
}