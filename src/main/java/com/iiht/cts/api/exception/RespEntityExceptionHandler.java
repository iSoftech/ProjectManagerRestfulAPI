package com.iiht.cts.api.exception;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/**
 * Response Entity Exception Handler to handle Exceptions through @ControllerAdvice
 * 
 * @author Mohamed Yusuff
 */
@ControllerAdvice
@RestController
public class RespEntityExceptionHandler extends ResponseEntityExceptionHandler {

	/**
	 * Exception Handler for Technical Exceptions through {@link TechnicalException} class
	 * 
	 * @param btExc
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@ExceptionHandler(TechnicalException.class)
	public ResponseEntity<Object> handleTechnicalExceptions(TechnicalException btExc, WebRequest request)
			throws Exception {
		HttpStatus httpStatus = btExc.getHttpStatus() != null ? btExc.getHttpStatus() : HttpStatus.NOT_FOUND;
		ErrorResponse errorResponse = new ErrorResponse(httpStatus.value(), httpStatus.getReasonPhrase(),
				btExc.getMessage(), request.getDescription(false), new Date());
		return new ResponseEntity<>(errorResponse, httpStatus);
	}
}