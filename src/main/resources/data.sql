-- User Details 1 for Project Manager
INSERT INTO APP_T_USER (USER_ID, FIRST_NAME, LAST_NAME, EMPLOYEE_ID, ACTIVE, CREATED_DATE) 
VALUES (APP_SQ_USER_ID.nextval, 'User First Name', 'User Last Name', 101001, 'Y', to_date('2019-03-01', 'yyyy-mm-dd'));

-- Project Details 1 for Project Manager
INSERT INTO APP_T_PROJECT (PROJECT_ID, PROJECT_NAME, PRIORITY, START_DATE, END_DATE, ACTIVE, CREATED_DATE, USER_ID) 
VALUES (APP_SQ_PROJECT_ID.nextval, 'Project 1', 10, to_date('2019-03-01', 'yyyy-mm-dd'), to_date('2019-03-31', 'yyyy-mm-dd'), 'Y', to_date('2019-03-01', 'yyyy-mm-dd'), APP_SQ_USER_ID.currval);


-- Parent Task 1 Details for Project Manager
INSERT INTO APP_T_PARENT_TASK (PARENT_TASK_ID, PARENT_TASK_NAME) 
VALUES (APP_SQ_PARENT_TASK_ID.nextval, 'Parent Task 1');

-- Task Details 1 for Project Manager
INSERT INTO APP_T_TASK (TASK_ID, TASK_NAME, PRIORITY, START_DATE, END_DATE, ACTIVE, CREATED_DATE, PARENT_TASK_ID, PROJECT_ID, USER_ID) 
VALUES (APP_SQ_TASK_ID.nextval, 'Task 1', 10, to_date('2019-03-01', 'yyyy-mm-dd'), to_date('2019-03-31', 'yyyy-mm-dd'), 'Y', to_date('2019-03-01', 'yyyy-mm-dd'), APP_SQ_PARENT_TASK_ID.currval, APP_SQ_PROJECT_ID.currval, APP_SQ_USER_ID.currval);

-- Task Details 2 for Project Manager
INSERT INTO APP_T_TASK (TASK_ID, TASK_NAME, PRIORITY, START_DATE, END_DATE, ACTIVE, CREATED_DATE, PARENT_TASK_ID, PROJECT_ID, USER_ID)
VALUES (APP_SQ_TASK_ID.nextval, 'Task 2', 20, to_date('2019-03-11', 'yyyy-mm-dd'), to_date('2019-03-31', 'yyyy-mm-dd'), 'Y', to_date('2019-03-01', 'yyyy-mm-dd'), APP_SQ_PARENT_TASK_ID.currval, APP_SQ_PROJECT_ID.currval, APP_SQ_USER_ID.currval);

-- Task Details 3 for Project Manager
INSERT INTO APP_T_TASK (TASK_ID, TASK_NAME, PRIORITY, START_DATE, END_DATE, ACTIVE, CREATED_DATE, PARENT_TASK_ID, PROJECT_ID, USER_ID)
VALUES (APP_SQ_TASK_ID.nextval, 'Task 3', 30, to_date('2019-03-21', 'yyyy-mm-dd'), to_date('2019-03-31', 'yyyy-mm-dd'), 'Y', to_date('2019-03-01', 'yyyy-mm-dd'), APP_SQ_PARENT_TASK_ID.currval, APP_SQ_PROJECT_ID.currval, APP_SQ_USER_ID.currval);


-- Parent Task 2 Details for Project Manager
INSERT INTO APP_T_PARENT_TASK (PARENT_TASK_ID, PARENT_TASK_NAME) 
VALUES (APP_SQ_PARENT_TASK_ID.nextval, 'Parent Task 2');

-- Task Details 1 for Project Manager
INSERT INTO APP_T_TASK (TASK_ID, TASK_NAME, PRIORITY, START_DATE, END_DATE, ACTIVE, CREATED_DATE, PARENT_TASK_ID, PROJECT_ID, USER_ID)
VALUES (APP_SQ_TASK_ID.nextval, 'Task 4', 10, to_date('2019-03-01', 'yyyy-mm-dd'), to_date('2019-03-31', 'yyyy-mm-dd'), 'Y', to_date('2019-03-01', 'yyyy-mm-dd'), APP_SQ_PARENT_TASK_ID.currval, APP_SQ_PROJECT_ID.currval, APP_SQ_USER_ID.currval);

-- Task Details 2 for Project Manager
INSERT INTO APP_T_TASK (TASK_ID, TASK_NAME, PRIORITY, START_DATE, END_DATE, ACTIVE, CREATED_DATE, PARENT_TASK_ID, PROJECT_ID, USER_ID)
VALUES (APP_SQ_TASK_ID.nextval, 'Task 5', 20, to_date('2019-03-11', 'yyyy-mm-dd'), to_date('2019-03-31', 'yyyy-mm-dd'), 'Y', to_date('2019-03-01', 'yyyy-mm-dd'), APP_SQ_PARENT_TASK_ID.currval, APP_SQ_PROJECT_ID.currval, APP_SQ_USER_ID.currval);

-- Task Details 3 for Project Manager
INSERT INTO APP_T_TASK (TASK_ID, TASK_NAME, PRIORITY, START_DATE, END_DATE, ACTIVE, CREATED_DATE, PARENT_TASK_ID, PROJECT_ID, USER_ID)
VALUES (APP_SQ_TASK_ID.nextval, 'Task 6', 30, to_date('2019-03-21', 'yyyy-mm-dd'), to_date('2019-03-31', 'yyyy-mm-dd'), 'Y', to_date('2019-03-01', 'yyyy-mm-dd'), APP_SQ_PARENT_TASK_ID.currval, APP_SQ_PROJECT_ID.currval, APP_SQ_USER_ID.currval);