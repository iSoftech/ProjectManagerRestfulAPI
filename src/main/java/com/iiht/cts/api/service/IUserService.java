package com.iiht.cts.api.service;

import java.util.List;

import com.iiht.cts.api.vo.User;

/**
 * User Manager Restful API Service Interface for <tt>/users</tt> Resource with CRUD operations.
 * 
 * @author Mohamed Yusuff
 */
public interface IUserService {

	/**
	 * Returns all Users
	 * 
	 * @return a list of {@link User}
	 */
	public List<User> getAllUsers();
	
	/**
	 * Returns requested User
	 * 
	 * @param userId refers to attribute {@code userId}
	 * @return a {@link User} identified by its id
	 */
	public User getUser(Long userId);
	
	/**
	 * Returns requested User by its employeeId
	 * 
	 * @param employeeId refers to attribute {@code employeeId}
	 * @return a {@link User} identified by its employeeId
	 */
	public User getUserByEmployeeId(Integer employeeId);
	
	/**
	 * Adds a new User
	 * 
	 * @param user refers to a new instance of {@link User}
	 * @return a newly added {@link User}
	 */
	public User addUser(User user);
	
	/**
	 * Updates an existing User
	 * 
	 * @param userId refers to attribute {@code userId}
	 * @param user refers to an edited instance of {@link User}
	 * @return an updated {@link User} identified by its id
	 */
	public User updateUser(Long userId, User user);
	
	/**
	 * Deletes an Existing User
	 * 
	 * @param userId refers to attribute {@code userId}
	 */
	public void deleteUser(Long userId);

/*	*//**
	 * Ends an Existing User
	 * 
	 * @param userId refers to attribute {@code userId}
	 *//*
	public void endUser(Long userId);*/
}
