package com.iiht.cts.api.config;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Collections;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.iiht.cts.api.service.IProjectService;
import com.iiht.cts.api.service.ITaskService;
import com.iiht.cts.api.service.IUserService;

/**
 * Task Manager Restful API Basic JUnit Mocked Tests
 * 
 * @author Mohamed Yusuff
 */
@RunWith(SpringRunner.class)
@WebMvcTest
public class ProjectManagerRestfulApiAppTests {

	private static final String APPLICATION_JSON = "application/json;charset=UTF-8";

	private MediaType contentType = MediaType.valueOf(APPLICATION_JSON);

	@Autowired
	MockMvc mockMvc;

	@MockBean
	IUserService userService;

	@MockBean
	IProjectService projectService;

	@MockBean
	ITaskService taskService;

	@Before
	public void setUp() {
		// For getAllUsers()
		Mockito.when(userService.getAllUsers()).thenReturn(Collections.emptyList());
		// For getAllProjects()
		Mockito.when(projectService.getAllProjects()).thenReturn(Collections.emptyList());
		// For getAllTasks()
		Mockito.when(taskService.getAllTasks()).thenReturn(Collections.emptyList());
	}
	
	/**
	 * Tests Spring Boot Application Context Loader
	 */
	@Test
    public void testContextLoads() {
    }
	
	/**
	 * Tests Spring Boot Application
	 */
	@Test
	public void testMain() {
		ProjectManagerRestfulApiApp.main(new String[] {
				"spring.profiles.active=test"
		});
	}
	
	@Test
	public void testGetAllUsers() throws Exception {
		// Invokes [/users] Resource and verifies the Return Response Status is 200 - OK
		// and ContentType is "application/json;charset=UTF-8"
		mockMvc.perform(MockMvcRequestBuilders.get("/users")
				.accept(APPLICATION_JSON)).andExpect(status().isOk())
		.andExpect(content().contentType(contentType));
		// Verifies If userService.getAllUsers() is invoked at least once
		Mockito.verify(userService).getAllUsers();
	}
	
	@Test
	public void testGetAllProjects() throws Exception {
		// Invokes [/projects] Resource and verifies the Return Response Status is 200 - OK
		// and ContentType is "application/json;charset=UTF-8"
		mockMvc.perform(MockMvcRequestBuilders.get("/projects")
				.accept(APPLICATION_JSON)).andExpect(status().isOk())
		.andExpect(content().contentType(contentType));
		// Verifies If projectService.getAllProjects() is invoked at least once
		Mockito.verify(projectService).getAllProjects();
	}
	
	@Test
	public void testGetAllTasks() throws Exception {
		// Invokes [/tasks] Resource and verifies the Return Response Status is 200 - OK
		// and ContentType is "application/json;charset=UTF-8"
		mockMvc.perform(MockMvcRequestBuilders.get("/tasks")
				.accept(APPLICATION_JSON)).andExpect(status().isOk())
		.andExpect(content().contentType(contentType));
		// Verifies If taskService.getAllTasks() is invoked at least once
		Mockito.verify(taskService).getAllTasks();
	}
}