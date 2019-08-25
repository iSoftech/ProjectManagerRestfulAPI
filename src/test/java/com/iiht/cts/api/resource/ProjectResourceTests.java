package com.iiht.cts.api.resource;

import static org.hamcrest.CoreMatchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.iiht.cts.api.config.ProjectManagerRestfulApiApp;
import com.iiht.cts.api.service.IProjectService;
import com.iiht.cts.api.vo.Project;
import com.iiht.cts.api.vo.User;

/**
 * Project Manager Restful API Integration Tests for Project Resource Controller
 * 
 * @author Mohamed Yusuff
 */
@RunWith(SpringRunner.class)
@SpringBootTest (
		webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT,
		classes = {ProjectManagerRestfulApiApp.class, ProjectResource.class}
)
@AutoConfigureMockMvc
@TestPropertySource(locations="classpath:application-test.properties")
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class ProjectResourceTests {
	
	// Context Path pointing to [/projects]
	private static final String CONTEXT_PATH = "/projects";

	private static final String SLASH = "/";

	private static final String APPLICATION_JSON = "application/json;charset=UTF-8";

	private MediaType contentType = MediaType.valueOf(APPLICATION_JSON);
	
	@Autowired
	MockMvc mockMvc;
	
	@Autowired
	IProjectService projectService;
	
	private Project project = null;
	
	private User user = null;
	
	
	@Before
	public void setUp() {
		// User
		user = new User(Long.valueOf(1001));
		// Project
		project = new Project();
		project.setProjectId(Long.valueOf(1001));
		project.setProjectName("Project 1");
		project.setUser(user);
	}
	
	
	/**
	 * Tests Create a Project
	 * 
	 * @throws Exception
	 */
	@Test
	public void a_testCreateProject() throws Exception {
		// Invokes [/projects] Resource with ContentType as "application/json;charset=UTF-8" and verifies the
		// Return Response Status is 201 - CREATED and ContentType as "application/json;charset=UTF-8"
		project.setProjectId(Long.valueOf(1010));
		project.setProjectName("Project 10");
		
		this.mockMvc
				.perform(post(CONTEXT_PATH).contentType(MediaType.APPLICATION_JSON_UTF8_VALUE)
						.content(new ObjectMapper().writeValueAsString(project)))
				.andExpect(status().isCreated()).andExpect(content().contentType(contentType));
	}
	
	/**
	 * Tests Create a Project Already Exist
	 * 
	 * @throws Exception
	 */
	@Test
	public void b_testCreateProjectAlreadyExist() throws Exception {
		// Invokes [/projects] Resource with ContentType as "application/json;charset=UTF-8" and verifies the
		// Return Response Status is 409 - CONFLICT
		this.mockMvc.perform(post(CONTEXT_PATH).contentType(MediaType.APPLICATION_JSON_UTF8_VALUE)
				.content(new ObjectMapper().writeValueAsString(project))).andExpect(status().isConflict());
	}
	
	/**
	 * Tests All Projects Found
	 * 
	 * @throws Exception
	 */
	@Test
	public void c_testGetAllProjectsFound() throws Exception {
		// Invokes [/projects] Resource and verifies the Return Response Status is 200 - OK
		// and ContentType is "application/json;charset=UTF-8"
		mockMvc.perform(get(CONTEXT_PATH)).andExpect(status().isOk())
				.andExpect(content().contentType(contentType));
	}
	
	/**
	 * Tests Get All Projects Invalid Resource
	 * 
	 * @throws Exception
	 */
	@Test
	public void d_testGetAllProjectsInvalidResource() throws Exception {
		// Invokes [/projects] Resource and verifies the Return Response Status is 404 - NOT_FOUND
		mockMvc.perform(get("/projectsTestResource"))
				.andExpect(status().isNotFound());
	}
	
	/**
	 * Tests Get a Project
	 * 
	 * @throws Exception
	 */
	@Test
	public void e_testGetProject() throws Exception {
		// Invokes [/projects/{projectId}] Resource and verifies the Return Response Status is 200 - OK
		// and ContentType is "application/json;charset=UTF-8" and Details are same
		mockMvc.perform(get(CONTEXT_PATH + SLASH + project.getProjectId()))
				.andExpect(status().isOk()).andExpect(content().contentType(APPLICATION_JSON))
				.andExpect(jsonPath("$.response.projectName", is((project.getProjectName()))));
	}
	
	/**
	 * Tests Get a Project Not Found
	 * 
	 * @throws Exception
	 */
	@Test
	public void f_testGetProjectNotFound() throws Exception {
		// Invokes [/projects/{projectId}] Resource and verifies the Return Response Status is 404 - NOT_FOUND
		mockMvc.perform(get(CONTEXT_PATH + SLASH + Long.valueOf(5001)))
				.andExpect(status().isNotFound()).andExpect(content().contentType(contentType));
	}
	
	/**
	 * Tests Get a Project for Invalid Argument
	 * 
	 * @throws Exception
	 */
	@Test
	public void g_testGetProjectInvalidArgument() throws Exception {
		// Invokes [/projects/{projectId}] Resource and verifies the Return Response Status is 400 - BAD_REQUEST
		// and ContentType is "application/json;charset=UTF-8"
		mockMvc.perform(get("/projects/testArg")).andExpect(status().isBadRequest());
	}
	
	/**
	 * Tests Update a Project
	 * 
	 * @throws Exception
	 */
	@Test
	public void h_testUpdateProject() throws Exception {
		// Invokes [/projects/{projectId}] Resource with ContentType as "application/json;charset=UTF-8" and
		// verifies the Return Response Status is 201 - CREATED, ContentType is "application/json;charset=UTF-8" and
		// Details are same
		// To get this updated through Business Logic
		project.setActive("N");
		this.mockMvc
				.perform(put(CONTEXT_PATH + SLASH + project.getProjectId()).contentType(MediaType.APPLICATION_JSON_UTF8_VALUE)
						.content(new ObjectMapper().writeValueAsString(project)))
				.andExpect(status().isCreated()).andExpect(content().contentType(contentType))
				.andExpect(jsonPath("$.response.projectName", is((project.getProjectName()))));
	}
	
	/**
	 * Tests Update a Project Not Exist
	 * 
	 * @throws Exception
	 */
	@Test
	public void i_testUpdateProjectNotExist() throws Exception {
		// Invokes [/projects/{projectId}] Resource with ContentType as "application/json;charset=UTF-8" and
		// verifies the Return Response Status is 404 - NOT_FOUND
		this.mockMvc.perform(put(CONTEXT_PATH + SLASH + Long.valueOf(5001)).contentType(MediaType.APPLICATION_JSON_UTF8_VALUE)
				.content(new ObjectMapper().writeValueAsString(project))).andExpect(status().isNotFound());
	}
	
	/**
	 * Tests Delete a Project
	 * 
	 * @throws Exception
	 */
	@Test
	public void j_testDeleteProject() throws Exception {
		// Invokes [/projects/{projectId}] Resource and verifies the Return Response Status is 204 - NO_CONTENT
		mockMvc.perform(delete(CONTEXT_PATH + SLASH + project.getProjectId())).andExpect(status().isNoContent());
	}
	
	/**
	 * Tests Delete a Project Not Found
	 * 
	 * @throws Exception
	 */
	@Test
	public void k_testDeleteProjectNotFound() throws Exception {
		// Invokes [/projects/{projectId}] Resource and verifies the Return Response Status is 404 - NOT_FOUND
		mockMvc.perform(delete(CONTEXT_PATH + SLASH + Long.valueOf(5001))).andExpect(status().isNotFound());
	}
}