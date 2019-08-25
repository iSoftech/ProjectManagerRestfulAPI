FROM openjdk:8
LABEL maintainer=MohamedYusuff.M@cognizant.com
VOLUME /tmp
EXPOSE 8080
ADD target/ProjectManagerRestfulAPI-1.0.0.jar ProjectManager.jar
ENTRYPOINT ["java","-jar","ProjectManager.jar"]