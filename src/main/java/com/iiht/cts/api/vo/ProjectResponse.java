/**
 * 
 */
package com.iiht.cts.api.vo;

/**
 * Generic Project Response Value Object to communicate with client.
 * 
 * @author Mohamed Yusuff
 */
public class ProjectResponse<T> {

	private int statusCode;
    private String message;
    private Object response;
    
    private static ProjectResponse<?> projectResponse = null;

    /**
     * Instantiates through Singleton pattern
     * 
     * @param statusCode
     * @param message
     * @param response
     * @return
     */
    public static ProjectResponse<?> getInstance(int statusCode, String message, Object response) {
    	if (null == projectResponse) {
    		projectResponse = new ProjectResponse<>();
    	}
    	projectResponse.setStatusCode(statusCode);
    	projectResponse.setMessage(message);
    	projectResponse.setResponse(response);
    	return projectResponse;
    }
    
	/**
	 * @return the statusCode
	 */
	public int getStatusCode() {
		return statusCode;
	}

	/**
	 * @param statusCode the statusCode to set
	 */
	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}

	/**
	 * @return the message
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * @param message the message to set
	 */
	public void setMessage(String message) {
		this.message = message;
	}

	/**
	 * @return the response
	 */
	public Object getResponse() {
		return response;
	}

	/**
	 * @param response the response to set
	 */
	public void setResponse(Object response) {
		this.response = response;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((message == null) ? 0 : message.hashCode());
		result = prime * result + ((response == null) ? 0 : response.hashCode());
		result = prime * result + statusCode;
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
		ProjectResponse<?> other = (ProjectResponse<?>) obj;
		if (message == null) {
			if (other.message != null)
				return false;
		} else if (!message.equals(other.message))
			return false;
		if (response == null) {
			if (other.response != null)
				return false;
		} else if (!response.equals(other.response))
			return false;
		if (statusCode != other.statusCode)
			return false;
		return true;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "ProjectResponse [statusCode=" + statusCode + ", message=" + message + ", response=" + response + "]";
	}
}
