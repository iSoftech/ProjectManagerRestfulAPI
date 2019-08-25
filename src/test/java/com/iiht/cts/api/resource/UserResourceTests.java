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
import com.iiht.cts.api.service.IUserService;
import com.iiht.cts.api.vo.User;

/**
 * Project Manager Restful API Integration Tests for User Resource Controller
 * 
 * @author Mohamed Yusuff
 */
@RunWith(SpringRunner.class)
@SpringBootTest (
		webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT,
		classes = {ProjectManagerRestfulApiApp.class, UserResource.class}
)
@AutoConfigureMockMvc
@TestPropertySource(locations="classpath:application-test.properties")
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class UserResourceTests {
	
	// Context Path pointing to [/users]
	private static final String CONTEXT_PATH = "/users";

	private static final String SLASH = "/";

	private static final String APPLICATION_JSON = "application/json;charset=UTF-8";

	private MediaType contentType = MediaType.valueOf(APPLICATION_JSON);
	
	@Autowired
	MockMvc mockMvc;
	
	@Autowired
	IUserService userService;
	
	private User user = null;
	
	
	@Before
	public void setUp() {
		// User
		user = new User();
		user.setUserId(Long.valueOf(1001));
		user.setEmployeeId(101001);
		user.setFirstName("User First Name");
		
	}
	
	
	/**
	 * Tests Create a User
	 * 
	 * @throws Exception
	 */
	@Test
	public void a_testCreateUser() throws Exception {
		// Invokes [/users] Resource with ContentType as "application/json;charset=UTF-8" and verifies the
		// Return Response Status is 201 - CREATED and ContentType as "application/json;charset=UTF-8"
		user.setUserId(Long.valueOf(1010));
		user.setFirstName("User 10");
		user.setEmployeeId(101010);
		
		this.mockMvc
				.perform(post(CONTEXT_PATH).contentType(MediaType.APPLICATION_JSON_UTF8_VALUE)
						.content(new ObjectMapper().writeValueAsString(user)))
				.andExpect(status().isCreated()).andExpect(content().contentType(contentType));
	}
	
	/**
	 * Tests Create a User Already Exist
	 * 
	 * @throws Exception
	 */
	@Test
	public void b_testCreateUserAlreadyExist() throws Exception {
		// Invokes [/users] Resource with ContentType as "application/json;charset=UTF-8" and verifies the
		// Return Response Status is 409 - CONFLICT
		this.mockMvc.perform(post(CONTEXT_PATH).contentType(MediaType.APPLICATION_JSON_UTF8_VALUE)
				.content(new ObjectMapper().writeValueAsString(user))).andExpect(status().isConflict());
	}
	
	/**
	 * Tests All Users Found
	 * 
	 * @throws Exception
	 */
	@Test
	public void c_testGetAllUsersFound() throws Exception {
		// Invokes [/users] Resource and verifies the Return Response Status is 200 - OK
		// and ContentType is "application/json;charset=UTF-8"
		mockMvc.perform(get(CONTEXT_PATH)).andExpect(status().isOk())
				.andExpect(content().contentType(contentType));
	}
	
	/**
	 * Tests Get All Users Invalid Resource
	 * 
	 * @throws Exception
	 */
	@Test
	public void d_testGetAllUsersInvalidResource() throws Exception {
		// Invokes [/users] Resource and verifies the Return Response Status is 404 - NOT_FOUND
		mockMvc.perform(get("/usersTestResource"))
				.andExpect(status().isNotFound());
	}
	
	/**
	 * Tests Get a User
	 * 
	 * @throws Exception
	 */
	@Test
	public void e_testGetUser() throws Exception {
		// Invokes [/users/{userId}] Resource and verifies the Return Response Status is 200 - OK
		// and ContentType is "application/json;charset=UTF-8" and Details are same
		mockMvc.perform(get(CONTEXT_PATH + SLASH + user.getUserId()))
				.andExpect(status().isOk()).andExpect(content().contentType(APPLICATION_JSON))
				.andExpect(jsonPath("$.response.firstName", is((user.getFirstName()))));
	}
	
	/**
	 * Tests Get a User Not Found
	 * 
	 * @throws Exception
	 */
	@Test
	public void f_testGetUserNotFound() throws Exception {
		// Invokes [/users/{userId}] Resource and verifies the Return Response Status is 404 - NOT_FOUND
		mockMvc.perform(get(CONTEXT_PATH + SLASH + Long.valueOf(5001)))
				.andExpect(status().isNotFound()).andExpect(content().contentType(contentType));
	}
	
	/**
	 * Tests Get a User for Invalid Argument
	 * 
	 * @throws Exception
	 */
	@Test
	public void g_testGetUserInvalidArgument() throws Exception {
		// Invokes [/users/{userId}] Resource and verifies the Return Response Status is 400 - BAD_REQUEST
		// and ContentType is "application/json;charset=UTF-8"
		mockMvc.perform(get("/users/testArg")).andExpect(status().isBadRequest());
	}
	
	/**
	 * Tests Update a User
	 * 
	 * @throws Exception
	 */
	@Test
	public void h_testUpdateUser() throws Exception {
		// Invokes [/users/{userId}] Resource with ContentType as "application/json;charset=UTF-8" and
		// verifies the Return Response Status is 201 - CREATED, ContentType is "application/json;charset=UTF-8" and
		// Details are same
		// To get this updated through Business Logic
		user.setLastName("User Last");
		this.mockMvc
				.perform(put(CONTEXT_PATH + SLASH + user.getUserId()).contentType(MediaType.APPLICATION_JSON_UTF8_VALUE)
						.content(new ObjectMapper().writeValueAsString(user)))
				.andExpect(status().isCreated()).andExpect(content().contentType(contentType))
				.andExpect(jsonPath("$.response.firstName", is((user.getFirstName()))))
				.andExpect(jsonPath("$.response.lastName", is((user.getLastName()))));
	}
	
	/**
	 * Tests Update a User Not Exist
	 * 
	 * @throws Exception
	 */
	@Test
	public void i_testUpdateUserNotExist() throws Exception {
		// Invokes [/users/{userId}] Resource with ContentType as "application/json;charset=UTF-8" and
		// verifies the Return Response Status is 404 - NOT_FOUND
		this.mockMvc.perform(put(CONTEXT_PATH + SLASH + Long.valueOf(5001)).contentType(MediaType.APPLICATION_JSON_UTF8_VALUE)
				.content(new ObjectMapper().writeValueAsString(user))).andExpect(status().isNotFound());
	}
	
	/**
	 * Tests Delete a User
	 * 
	 * @throws Exception
	 */
	@Test
	public void j_testDeleteUser() throws Exception {
		// Invokes [/users/{userId}] Resource and verifies the Return Response Status is 204 - NO_CONTENT
		mockMvc.perform(delete(CONTEXT_PATH + SLASH + user.getUserId())).andExpect(status().isNoContent());
	}
	
	/**
	 * Tests Delete a User Not Found
	 * 
	 * @throws Exception
	 */
	@Test
	public void k_testDeleteUserNotFound() throws Exception {
		// Invokes [/users/{userId}] Resource and verifies the Return Response Status is 404 - NOT_FOUND
		mockMvc.perform(delete(CONTEXT_PATH + SLASH + Long.valueOf(5001))).andExpect(status().isNotFound());
	}
}