package com.iiht.cts.api.config;

import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * Swagger Configuration for Spring Boot Application
 * 
 * @author Mohamed Yusuff
 */
@Configuration
@EnableSwagger2
public class ProjectManagerSwaggerConfig {
	
    /**
     * Builds API Details from the Package
     * 
     * @return
     */
    @Bean
    public Docket api() { 
        return new Docket(DocumentationType.SWAGGER_2)  
          .select()                                  
          .apis(RequestHandlerSelectors.basePackage("com.iiht.cts.api.resource"))              
          .paths(PathSelectors.any())                          
          .build()
          .apiInfo(apiInfo());
    }
    
    /**
     * Returns API Details
     * 
     * @return
     */
    private ApiInfo apiInfo() {
        return new ApiInfo(
          "Project Manager RESTful API", 
          "API Documentation", 
          "1.0", 
          "", 
          new Contact("Mohamed Yusuff", "", "MohamedYusuff.M@cognizant.com"), 
          "", "", Collections.emptyList());
    }
}