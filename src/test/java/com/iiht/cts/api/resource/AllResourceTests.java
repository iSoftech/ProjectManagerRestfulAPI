/**
 * 
 */
package com.iiht.cts.api.resource;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import com.iiht.cts.api.config.ProjectManagerRestfulApiAppTests;

/**
 * Project Manager Restful API Integration Test Suits for All Resources Tests Class
 * 
 * @author Mohamed Yusuff
 */
@RunWith(Suite.class)
@Suite.SuiteClasses({
	ProjectManagerRestfulApiAppTests.class,
    TaskResourceTests.class,
    ProjectResourceTests.class,
    UserResourceTests.class
})
public class AllResourceTests {
}
