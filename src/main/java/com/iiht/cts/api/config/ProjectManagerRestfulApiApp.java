package com.iiht.cts.api.config;

import org.apache.catalina.security.SecurityConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

/**
 * Project Manager Restful API Spring Boot Application
 * 
 * @author Mohamed Yusuff
 */
@SpringBootApplication(scanBasePackages="com.iiht.cts.api")
@Import({SecurityConfig.class})
public class ProjectManagerRestfulApiApp {

	public static void main(String[] args) {
		SpringApplication.run(ProjectManagerRestfulApiApp.class, args);
	}

}
