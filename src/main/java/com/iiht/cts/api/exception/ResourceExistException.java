/**
 * 
 */
package com.iiht.cts.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Resource Exist Runtime Exception Class
 * 
 * @author Mohamed Yusuff
 */
@ResponseStatus(HttpStatus.CONFLICT)
public class ResourceExistException extends RuntimeException {
	
	/**
	 * Auto Generated Serial Version UID
	 */
	private static final long serialVersionUID = -7206259820819733712L;

	/**
	 * Parameterized Constructor to store Exception Message
	 * 
	 * @param exceptionMessage
	 */
	public ResourceExistException(String exceptionMessage) {
		super(exceptionMessage);
	}
}
