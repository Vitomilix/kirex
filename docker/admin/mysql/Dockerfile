FROM mysql:5.7

ENV MYSQL_DATABASE testdb_two
ENV MYSQL_ROOT_PASSWORD 12345678

COPY init_db.sql /docker-entrypoint-initdb.d/
