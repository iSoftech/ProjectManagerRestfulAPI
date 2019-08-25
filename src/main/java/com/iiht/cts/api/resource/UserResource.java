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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.iiht.cts.api.service.IUserService;
import com.iiht.cts.api.vo.User;
import com.iiht.cts.api.vo.UserResponse;

/**
 * User Manager Restful API Controller for <tt>/users</tt> Resource with CRUD operations.
 * 
 * @author Mohamed Yusuff
 */
@RequestMapping(value="/users", produces="application/json")
@RestController
public class UserResource {

	@Autowired
	private IUserService userService;
	
	/**
	 * <strong>Lists all User Entities [<tt>GET</tt>]</strong>
	 * <br>
	 * Returns all <tt>Users</tt> available in the system with <tt>GET</tt> method
	 * for resource {@code /users}.
	 * 
	 * <pre>
	 * {@code Response 200 (application/json)}
	 * 	
	 *	{
	 *	    "statusCode": 200,
	 *	    "message": "Users retrieved!!",
	 *	    "response": [
	 *	        {
	 *				"userId": 1001,
	 *	            "firstName": "User First",
	 *	            "lastName": "User Last",
	 *	            "employeeId": 1012341010,
	 *				"active": "Y",
	 *	        }
	 *	    ]
	 *	}
	 * </pre>
	 * 
	 * @return a list of {@link User} with Response Status as 200 OK
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<UserResponse<List<User>>> getAllUsers() {
		// Retrieves All Users details
		List<User> allUsers = userService.getAllUsers();
		// Prepares User Response with HTTPStatus as OK {200}
		UserResponse<List<User>> userResponse = (UserResponse<List<User>>) UserResponse
				.getInstance(HttpStatus.OK.value(), "Users Retrieved!!", allUsers);
		// Returns the ResponseEntity with HTTPStatus as OK {200}
		return ResponseEntity.ok(userResponse);
	}

	/**
	 * <strong>Creates a User Entity [<tt>POST</tt>]</strong>
	 * <br>
	 * Adds a new <tt>User</tt> details with <tt>POST</tt> method.
	 * 
	 * <pre>
	 * {@code Request (application/json)}
	 * 	
	 *   {
	 *	     "firstName": "User First",
	 *	     "lastName": "User Last",
	 *	     "employeeId": 101234,
	 *   }
	 *   
	 * {@code Response 201 (application/json)}
	 * 
	 *   {
     *		"statusCode": 201,
     *		"message": "User Created!!",
     *		"response": {
	 *	     	"firstName": "User First",
	 *	     	"lastName": "User Last",
	 *	     	"employeeId": 101234,
	 *			"active": "Y",
	 *  	}
	 *   }
	 * </pre>
	 * 
	 * @param user refers to a new instance of {@link User}
	 * @return a newly added {@link User} with Response Status as 201 Created
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<UserResponse<User>> addUser(@RequestBody User user) {
		// Adds and Returns newly added User details
		User savedUser = userService.addUser(user);
		// URI Builder to build newly created resource location
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{userId}")
				.buildAndExpand(savedUser.getUserId()).toUri();
		// Prepares User Response with HTTPStatus as Created {201}
		UserResponse<User> userResponse = (UserResponse<User>) UserResponse
				.getInstance(HttpStatus.CREATED.value(), "User Created!!", savedUser);
		// Returns the ResponseEntity with HTTPStatus as Created {201}
		return ResponseEntity.created(location).body(userResponse);
	}
	
	/**
	 * <strong>Views a User Entity [<tt>GET</tt>]</strong>
	 * <br>
	 * Returns a <tt>User</tt> available in the system identified by its <tt>{id}</tt> with
	 * <tt>GET</tt> method.
	 * 
	 * <pre>
	 * {@code Request}
	 * 
	 * 	Headers
	 * 		Location: /users/1001
	 * 
	 * {@code Response 200 (application/json)}
	 * 	
	 *  {
	 *		"statusCode": 200,
	 *		"message": "User Retrieved!!",
	 *		"response": {
	 *   	 	"userId": 1001,
	 *	    	"firstName": "User First",
	 *	    	"lastName": "User Last",
	 *	    	"employeeId": 15,
	 *			"active": "Y",
	 *  	}
	 *  }
	 * </pre>
	 * 
	 * @param userId refers to attribute {@code userId}
	 * @return a single {@link User} identified by its id with Response Status as 200 OK
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value="/{userId}", method=RequestMethod.GET)
	public ResponseEntity<UserResponse<User>> getUser(@PathVariable Long userId) {
		// Retrieves requested User details
		User user = userService.getUser(userId);
		// Prepares User Response with HTTPStatus as OK {200}		
		UserResponse<User> userResponse = (UserResponse<User>) UserResponse
				.getInstance(HttpStatus.OK.value(), "User Retrieved!!", user);
		// Returns the ResponseEntity with HTTPStatus as OK {200}
		return ResponseEntity.ok(userResponse);
	}
	
	/**
	 * <strong>Views a User Entity [<tt>GET</tt>]</strong>
	 * <br>
	 * Returns a <tt>User</tt> available in the system identified by its <tt>{id}</tt> with
	 * <tt>GET</tt> method.
	 * 
	 * <pre>
	 * {@code Request}
	 * 
	 * 	Headers
	 * 		Location: /users?employeeId=101234
	 * 
	 * {@code Response 200 (application/json)}
	 * 	
	 *  {
	 *		"statusCode": 200,
	 *		"message": "User Retrieved!!",
	 *		"response": {
	 *   	 	"userId": 1001,
	 *	    	"firstName": "User First",
	 *	    	"lastName": "User Last",
	 *	    	"employeeId": 101234,
	 *			"active": "Y",
	 *  	}
	 *  }
	 * </pre>
	 * 
	 * @param employeeId refers to attribute {@code employeeId}
	 * @return a single {@link User} identified by its employeeId with Response Status as 200 OK
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value="/", params="employeeId", method=RequestMethod.GET)
	public ResponseEntity<UserResponse<User>> getUserByEmployeeId(@RequestParam("employeeId") Integer employeeId) {
		// Retrieves requested User details
		User user = userService.getUserByEmployeeId(employeeId);
		// Prepares User Response with HTTPStatus as OK {200}		
		UserResponse<User> userResponse = (UserResponse<User>) UserResponse
				.getInstance(HttpStatus.OK.value(), "User Retrieved!!", user);
		// Returns the ResponseEntity with HTTPStatus as OK {200}
		return ResponseEntity.ok(userResponse);
	}

	/**
	 * <strong>Updates a User Entity [<tt>PUT</tt>]</strong>
	 * <br>
	 * Updates an existing <tt>User</tt> details identified by its
	 * <tt>{id}</tt> with <tt>PUT</tt> method.
	 * 
	 * <pre>
	 * {@code Request (application/json)}
	 * 	
	 * 	Headers
	 * 		Location: /users/1001
	 * 	Body
	 *	    {
	 *	     	"firstName": "User First",
	 *	     	"lastName": "User Last",
	 *	     	"employeeId": 15,
	 *	    }
	 * {@code Response 201 (application/json)}
	 * 
	 *  {
	 *		"statusCode": 201,
	 *		"message": "User Updated!!",
	 *		"response": {
	 *   	 	"userId": 1001,
	 *	     	"firstName": "User First",
	 *	     	"lastName": "User Last",
	 *	     	"employeeId": 15,
	 *		 	"active": "Y",
	 *   	}
	 *  }
	 * </pre>
	 * 
	 * @param userId refers to attribute {@code userId}
	 * @param user refers to an edited instance of {@link User}
	 * @return an updated {@link User} identified by its id with Response Status as 201 Created
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value="/{userId}", method=RequestMethod.PUT)
	public ResponseEntity<UserResponse<User>> updateUser(@PathVariable Long userId,
			@RequestBody User user) {
		// Updates and Returns edited User details
		User updatedUser = userService.updateUser(userId, user);
		// URI Builder to build updated resource location
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.buildAndExpand(updatedUser.getUserId()).toUri();
		// Prepares User Response with HTTPStatus as Created {201}
		UserResponse<User> userResponse = (UserResponse<User>) UserResponse
				.getInstance(HttpStatus.CREATED.value(), "User Updated!!", updatedUser);
		// Returns the ResponseEntity with HTTPStatus as Created {201}
		return ResponseEntity.created(location).body(userResponse);
	}
	
	/**
	 * <strong>Deletes a User Entity [<tt>DELETE</tt>]</strong>
	 * <br>
	 * Deletes an existing <tt>User</tt> details identified by its
	 * <tt>{id}</tt> with <tt>DELETE</tt> method.
	 * 
	 * <pre>
	 * {@code Request}
	 * 
	 * 	Headers
	 * 		Location: /users/1001
	 * 
	 * {@code Response 204}
	 * </pre>
	 * 
	 * @param userId refers to attribute {@code userId}
	 */
	@RequestMapping(value="/{userId}", method=RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public HeadersBuilder<?> deleteUser(@PathVariable Long userId) {
		// Deletes the requested User Resource with Response HTTPStatus as No Content {204}
		userService.deleteUser(userId);
		return ResponseEntity.noContent();
	}
}