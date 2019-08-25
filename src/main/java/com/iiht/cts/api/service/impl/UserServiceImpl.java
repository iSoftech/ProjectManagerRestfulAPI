/**
 * 
 */
package com.iiht.cts.api.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.iiht.cts.api.exception.ResourceExistException;
import com.iiht.cts.api.exception.ResourceNotExistException;
import com.iiht.cts.api.exception.TechnicalException;
import com.iiht.cts.api.model.AppTUser;
import com.iiht.cts.api.repo.IUserRepository;
import com.iiht.cts.api.service.IUserService;
import com.iiht.cts.api.vo.User;

/**
 * User Manager Restful API Service Implementation for <tt>/users</tt> Resource with CRUD operations.
 * 
 * @author Mohamed Yusuff
 */
@Service
public class UserServiceImpl implements IUserService {

	// To Log the Error Messages in case of Exceptions
	private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

	@Autowired
	private IUserRepository userRepository;
	
	
	/**
	 * Returns all Users
	 * 
	 * @return a list of {@link User}
	 */
	@Override
	public List<User> getAllUsers() {
		List<AppTUser> users = null;
		List<User> userList = null;
		try {
			// Finds all Users Entities
			users = userRepository.findAll();
			if (!CollectionUtils.isEmpty(users)) {
				userList = new ArrayList<>(0);
				// Builds User Details List
				buildUserDetailsList(users, userList);
			}
		} catch (Exception exc) {
			LOGGER.error("Error occurred when trying to fetch all Users", exc);
			throw new TechnicalException(exc.getMessage(), null);
		}
		return userList;
	}

	/**
	 * Returns requested User
	 * 
	 * @param userId refers to attribute {@code userId}
	 * @param employeeId refers to attribute {@code employeeId}
	 * @return a {@link User} identified by its id
	 */
	@Override
	public User getUser(Long userId) {
		User user = null;		
		try {
			String operation = HttpMethod.GET.name();
			// Validates and Throw Exception for the Existing Resource - User
			validateExistingResourceAndThrowException(userId, operation);
			// Retrieves requested User if present
			AppTUser appTUser = userRepository.getOne(userId);
			if (null != appTUser) {
				// Populates User Details
				user = populateUserDetails(appTUser);
			}
		} catch (Exception exc) {
			LOGGER.error("Error occurred when trying to fetch User with UserId - " + userId, exc);
			HttpStatus httpStatus = AnnotationUtils.findAnnotation(exc.getClass(), ResponseStatus.class).code();
			throw new TechnicalException(exc.getMessage(), httpStatus);
		}
		return user;
	}
	
	/**
	 * Returns requested User by its employeeId
	 * 
	 * @param employeeId refers to attribute {@code employeeId}
	 * @return a {@link User} identified by its employeeId
	 */
	@Override
	public User getUserByEmployeeId(Integer employeeId) {
		User user = null;		
		try {
			String operation = HttpMethod.GET.name();
			// Validates and Throw Exception for the Existing Resource - User
			validateExistingResourceAndThrowException(employeeId, operation);
			// Retrieves requested User if present
			Optional<AppTUser> appTUser = userRepository.findByEmployeeId(employeeId);
			if (null != appTUser && appTUser.isPresent()) {
				// Populates User Details
				user = populateUserDetails(appTUser.get());
			}
		} catch (Exception exc) {
			LOGGER.error("Error occurred when trying to fetch User with EmployeeId - " + employeeId, exc);
			HttpStatus httpStatus = AnnotationUtils.findAnnotation(exc.getClass(), ResponseStatus.class).code();
			throw new TechnicalException(exc.getMessage(), httpStatus);
		}
		return user;
	}

	/**
	 * Adds a new User
	 * 
	 * @param user refers to a new instance of {@link AppTUser}
	 * @return a newly added {@link AppTUser}
	 */
	@Override
	public User addUser(User user) {
		User newlySavedUser = null;
		try {
			String operation = HttpMethod.POST.name();
			// Validates and Throws Exception for the New Resource - User
			validateNewResourceAndThrowException(user, operation);
			// Saves and Returns the Newly Added User
			AppTUser newUser = populateAndSaveUserDetails(user, true);
			// Populates the Saved User Details 
			newlySavedUser = populateUserDetails(newUser);
		} catch (Exception exc) {
			LOGGER.error("Error occurred when trying to add a new User", exc);
			HttpStatus httpStatus = AnnotationUtils.findAnnotation(exc.getClass(), ResponseStatus.class).code();
			throw new TechnicalException(exc.getMessage(), httpStatus);
		}
		return newlySavedUser;
	}

	/**
	 * Populates and Saves User Details
	 * 
	 * @param user
	 * @param isNewUser
	 * @return
	 */
	private AppTUser populateAndSaveUserDetails(User user, boolean isNewUser) {
		// User Details
		AppTUser appTUser = null;
		if (isNewUser) {
			// Creates a new User Entity
			appTUser = new AppTUser();
			appTUser.setCreatedDate(new Date(System.currentTimeMillis()));
		} else {
			// Retrieves the existing User Entity 
			appTUser = userRepository.getOne(user.getUserId());
			appTUser.setModifiedDate(new Date(System.currentTimeMillis()));
		}
		appTUser.setFirstName(user.getFirstName());
		appTUser.setLastName(user.getLastName());
		appTUser.setEmployeeId(user.getEmployeeId());
		appTUser.setActive(user.getActive());
		return userRepository.save(appTUser);
	}

	/**
	 * Updates an existing User
	 * 
	 * @param userId refers to attribute {@code userId}
	 * @param user refers to an edited instance of {@link AppTUser}
	 * @return an updated {@link AppTUser} identified by its id
	 */
	@Override
	public User updateUser(Long userId, User user) {
		User modifiedUser = null;
		try {
			String operation = HttpMethod.PUT.name();
			// Validates and Throw Exception for the Existing Resource - User
			validateExistingResourceAndThrowException(userId, operation);
			// Sets the requested UserId
			user.setUserId(userId);
			// Saves and Returns the Updated User
			AppTUser updatedUser = populateAndSaveUserDetails(user, false);
			// Populates the Updated User Details 
			modifiedUser = populateUserDetails(updatedUser);
		} catch (Exception exc) {
			LOGGER.error("Error occurred when trying to update an existing User with UserId - " + userId, exc);
			HttpStatus httpStatus = AnnotationUtils.findAnnotation(exc.getClass(), ResponseStatus.class).code();
			throw new TechnicalException(exc.getMessage(), httpStatus);
		}
		return modifiedUser;
	}
	
	/**
	 * Deletes an Existing User
	 * 
	 * @param userId refers to attribute {@code userId}
	 */
	@Override
	public void deleteUser(Long userId) {
		try {
			String operation = HttpMethod.DELETE.name();
			// Validates and Throw Exception for the Existing Resource - User
			validateExistingResourceAndThrowException(userId, operation);
			// Deletes the requested User by its id if present
			userRepository.deleteById(userId);
		} catch (Exception exc) {
			LOGGER.error("Error occurred when trying to delete an existing User", exc);
			HttpStatus httpStatus = AnnotationUtils.findAnnotation(exc.getClass(), ResponseStatus.class).code();
			throw new TechnicalException(exc.getMessage(), httpStatus);
		}
	}
	
	/**
	 * Validates and Throw Exception for the Existing Resource - User
	 * @param <T>
	 * 
	 * @param userId refers to attribute {@code userId}
	 * @param operation refers to attribute of {@link HttpMethod}
	 */
	private void validateExistingResourceAndThrowException(Long userId, String operation) {
		// Finds a User by its id to determine if it is present
		Optional<AppTUser> userEntity = userRepository.findById(userId);
		// Throws Resource Not Exist Exception if not present
		if (!userEntity.isPresent()) {
			throw new ResourceNotExistException("The requested User with Id - " + userId
					+ " doesn't exist. The requested operation [" + operation + "] cannot be performed.");
		}
	}
	
	/**
	 * Validates and Throw Exception for the Existing Resource - User
	 * @param <T>
	 * 
	 * @param employeeId refers to attribute {@code employeeId}
	 * @param operation refers to attribute of {@link HttpMethod}
	 */
	private void validateExistingResourceAndThrowException(Integer employeeId, String operation) {
		// Finds a User by its employeeId to determine if it is present
		Optional<AppTUser> userEntity = userRepository.findByEmployeeId(employeeId);
		// Throws Resource Not Exist Exception if not present
		if (!userEntity.isPresent()) {
			throw new ResourceNotExistException("The requested User with EmployeeId - " + employeeId
					+ " doesn't exist. The requested operation [" + operation + "] cannot be performed.");
		}
	}
	
	/**
	 * Validates and Throws Exception for the New Resource - User
	 * 
	 * @param userId refers to attribute {@code userId}
	 * @param operation refers to attribute of {@link HttpMethod}
	 */
	private void validateNewResourceAndThrowException(User user, String operation) {
		// Finds a User by Name to determine if it is already exist
		Optional<AppTUser> userEntity = userRepository.findByEmployeeId(user.getEmployeeId());
		// Throws Resource Exist Exception if the User already present with this EmployeeId
		if (userEntity.isPresent()) {
			// Throws Resource Exist Exception if referring to same Resource details
			throw new ResourceExistException("A User with the EmployeeId - '" + user.getEmployeeId()
					+ "' is already exist. " + "The requested operation [" + operation + "] cannot be performed.");
		}
	}

	/**
	 * Builds User Details List
	 * 
	 * @param users
	 * @param userList
	 */
	private void buildUserDetailsList(List<AppTUser> users, List<User> userList) {
		for (AppTUser appTUser : users) {
			userList.add(populateUserDetails(appTUser));
		}
	}

	/**
	 * Populates User Details
	 * 
	 * @param appTUser
	 */
	private User populateUserDetails(AppTUser appTUser) {
		User user = new User();
		BeanUtils.copyProperties(appTUser, user);
		return user;
	}	
}