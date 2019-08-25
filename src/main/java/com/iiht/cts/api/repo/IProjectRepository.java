package com.iiht.cts.api.repo;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.iiht.cts.api.model.AppTProject;

/**
 * Project Manager Restful API Repository Interface for <tt>/projects</tt> Resource with CRUD operations implemented
 * with built in {@link JpaRepositry} using MySQL Database
 * 
 * @author Mohamed Yusuff
 */
@RepositoryRestResource
public interface IProjectRepository extends JpaRepository<AppTProject, Long> {

	/**
	 * Finds a Project by its ProjectName with a custom JPQL Query
	 * 
	 * @param projectName refers to an attribute of {@link AppTProject}
	 * @return a <tt>Optional<{@link AppTProject}></tt>
	 */
	@Query("select t from projects t "
			+ "where t.projectName = :projectName")
	public Optional<AppTProject> findByName(@Param("projectName") String projectName);

}