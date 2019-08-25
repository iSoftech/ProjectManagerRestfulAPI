package com.iiht.cts.api.vo;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Project Table Value Object
 * 
 * @author Mohamed Yusuff
 */
public class Project implements Serializable {

	/**
	 * Auto Generated Serial Version UID
	 */
	private static final long serialVersionUID = -2992885689839463229L;
	
	private Long projectId;
	
	private String projectName;
	
	private Integer priority;
	
	private Date startDate;
	
	private Date endDate;
	
	private String active;
	
	private User user;
	
	private Integer noOfTasks;
	
	private Integer completed;

	@JsonIgnore
	private Date createdDate;
	
	@JsonIgnore
	private Date modifiedDate; 
	
	@JsonIgnore
	private List<Task> tasks;
	
	
	/**
	 * No Argument Default Constructor
	 */
	public Project() {
	}

	/**
	 * @param projectId
	 */
	public Project(Long projectId) {
		this.projectId = projectId;
	}

	/**
	 * Argument Constructor to initialize Entity with Values
	 * 
	 * @param projectName
	 * @param priority
	 * @param startDate
	 * @param endDate
	 * @param active
	 * @param user
	 */
	public Project(String projectName, Integer priority, Date startDate, Date endDate, String active, User user) {
		this.projectName = projectName;
		this.priority = priority;
		this.startDate = startDate != null ? (Date) startDate.clone() : null;
		this.endDate = endDate != null ? (Date) endDate.clone() : null;
		this.active = active;
		this.user = user;
	}

	/**
	 * @return the projectId
	 */
	public Long getProjectId() {
		return projectId;
	}

	/**
	 * @param projectId the projectId to set
	 */
	public void setProjectId(Long projectId) {
		this.projectId = projectId;
	}

	/**
	 * @return the projectName
	 */
	public String getProjectName() {
		return projectName;
	}

	/**
	 * @param projectName the projectName to set
	 */
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	/**
	 * @return the priority
	 */
	public Integer getPriority() {
		return priority;
	}

	/**
	 * @param priority the priority to set
	 */
	public void setPriority(Integer priority) {
		this.priority = priority;
	}

	/**
	 * @return the startDate
	 */
	public Date getStartDate() {
		return startDate != null ? (Date) startDate.clone() : null;
	}

	/**
	 * @param startDate the startDate to set
	 */
	public void setStartDate(Date startDate) {
		this.startDate = startDate != null ? (Date) startDate.clone() : null;
	}

	/**
	 * @return the endDate
	 */
	public Date getEndDate() {
		return endDate != null ? (Date) endDate.clone() : null;
	}

	/**
	 * @param endDate the endDate to set
	 */
	public void setEndDate(Date endDate) {
		this.endDate = endDate != null ? (Date) endDate.clone() : null;
	}

	/**
	 * @return the active
	 */
	public String getActive() {
		return active;
	}
	
/*	*//**
	 * @return the active
	 *//*
	public boolean isActive() {
		return this.active.equalsIgnoreCase("Y") ? true : false;
	}*/

	/**
	 * @param active the active to set
	 */
	public void setActive(String active) {
		this.active = active;
	}
	
	/**
	 * @return the noOfTasks
	 */
	public Integer getNoOfTasks() {
		return noOfTasks;
	}

	/**
	 * @param noOfTasks the noOfTasks to set
	 */
	public void setNoOfTasks(Integer noOfTasks) {
		this.noOfTasks = noOfTasks;
	}

	/**
	 * @return the completed
	 */
	public Integer getCompleted() {
		return completed;
	}

	/**
	 * @param completed the completed to set
	 */
	public void setCompleted(Integer completed) {
		this.completed = completed;
	}

	/**
	 * @return the createdDate
	 */
	public Date getCreatedDate() {
		return createdDate != null ? (Date) createdDate.clone() : null;
	}

	/**
	 * @param createdDate the createdDate to set
	 */
	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate != null ? (Date) createdDate.clone() : null;
	}

	/**
	 * @return the modifiedDate
	 */
	public Date getModifiedDate() {
		return modifiedDate != null ? (Date) modifiedDate.clone() : null;
	}

	/**
	 * @param modifiedDate the modifiedDate to set
	 */
	public void setModifiedDate(Date modifiedDate) {
		this.modifiedDate = modifiedDate != null ? (Date) modifiedDate.clone() : null;
	}

	/**
	 * @return the user
	 */
	public User getUser() {
		return user;
	}

	/**
	 * @param user the user to set
	 */
	public void setUser(User user) {
		this.user = user;
	}

	/**
	 * @return the tasks
	 */
	public List<Task> getTasks() {
		return tasks;
	}

	/**
	 * @param tasks the tasks to set
	 */
	public void setTasks(List<Task> tasks) {
		this.tasks = tasks;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((active == null) ? 0 : active.hashCode());
		result = prime * result + ((createdDate == null) ? 0 : createdDate.hashCode());
		result = prime * result + ((endDate == null) ? 0 : endDate.hashCode());
		result = prime * result + ((modifiedDate == null) ? 0 : modifiedDate.hashCode());
		result = prime * result + ((priority == null) ? 0 : priority.hashCode());
		result = prime * result + ((projectName == null) ? 0 : projectName.hashCode());
		result = prime * result + ((startDate == null) ? 0 : startDate.hashCode());
		result = prime * result + ((tasks == null) ? 0 : tasks.hashCode());
		result = prime * result + ((user == null) ? 0 : user.hashCode());
		result = prime * result + ((noOfTasks == null) ? 0 : noOfTasks.hashCode());
		result = prime * result + ((completed == null) ? 0 : completed.hashCode());
		return result;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Project other = (Project) obj;
		if (active == null) {
			if (other.active != null)
				return false;
		} else if (!active.equals(other.active))
			return false;
		if (createdDate == null) {
			if (other.createdDate != null)
				return false;
		} else if (!createdDate.equals(other.createdDate))
			return false;
		if (endDate == null) {
			if (other.endDate != null)
				return false;
		} else if (!endDate.equals(other.endDate))
			return false;
		if (modifiedDate == null) {
			if (other.modifiedDate != null)
				return false;
		} else if (!modifiedDate.equals(other.modifiedDate))
			return false;
		if (priority == null) {
			if (other.priority != null)
				return false;
		} else if (!priority.equals(other.priority))
			return false;
		if (projectName == null) {
			if (other.projectName != null)
				return false;
		} else if (!projectName.equals(other.projectName))
			return false;
		if (startDate == null) {
			if (other.startDate != null)
				return false;
		} else if (!startDate.equals(other.startDate))
			return false;
		if (tasks == null) {
			if (other.tasks != null)
				return false;
		} else if (!tasks.equals(other.tasks))
			return false;
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		if (noOfTasks == null) {
			if (other.noOfTasks != null)
				return false;
		} else if (!noOfTasks.equals(other.noOfTasks))
			return false;
		if (completed == null) {
			if (other.completed != null)
				return false;
		} else if (!completed.equals(other.completed))
			return false;
		return true;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Project [projectId=" + projectId + ", projectName=" + projectName + ", priority=" + priority
				+ ", startDate=" + startDate + ", endDate=" + endDate + ", active=" + active + ", createdDate="
				+ createdDate + ", modifiedDate=" + modifiedDate + ", user=" + user + ", noOfTasks=" + noOfTasks 
				+ ", completed=" + completed + ", tasks=" + tasks + "]";
	}
}