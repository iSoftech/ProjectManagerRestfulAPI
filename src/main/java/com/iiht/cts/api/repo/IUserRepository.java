package com.iiht.cts.api.repo;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.iiht.cts.api.model.AppTUser;

/**
 * User Manager Restful API Repository Interface for <tt>/users</tt> Resource with CRUD operations implemented
 * with built in {@link JpaRepositry} using MySQL Database
 * 
 * @author Mohamed Yusuff
 */
@RepositoryRestResource
public interface IUserRepository extends JpaRepository<AppTUser, Long> {

	/**
	 * Finds a User by its FirstName with a custom JPQL Query
	 * 
	 * @param firstName refers to an attribute of {@link AppTUser}
	 * @return a <tt>Optional<{@link AppTUser}></tt>
	 */
	@Query("select t from users t "
			+ "where t.firstName = :firstName")
	public Optional<AppTUser> findByName(@Param("firstName") String firstName);
	
	/**
	 * Finds a User by its EmployeeId with a custom JPQL Query
	 * 
	 * @param employeeId refers to an attribute of {@link AppTUser}
	 * @return a <tt>Optional<{@link AppTUser}></tt>
	 */
	@Query("select t from users t "
			+ "where t.employeeId = :employeeId")
	public Optional<AppTUser> findByEmployeeId(@Param("employeeId") Integer employeeId);

}