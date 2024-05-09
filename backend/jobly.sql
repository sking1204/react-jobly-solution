\echo 'Delete and recreate react_jobly_solution db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE react_jobly_solution;
CREATE DATABASE react_jobly_solution;
\connect react_jobly_solution

\i backend/jobly-schema.sql
\i backend/jobly-seed.sql

\echo 'Delete and recreate react_jobly_solution_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE react_jobly_solution_test;
CREATE DATABASE react_jobly_solution_test;
\connect react_jobly_solution_test

\i backend/jobly-schema.sql
