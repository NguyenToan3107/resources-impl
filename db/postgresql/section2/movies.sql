-- create the actor table

CREATE TABLE actors (
	actor_id SERIAL PRIMARY KEY,
	first_name VARCHAR(150),
	last_name VARCHAR(150) NOT NULL,
	gender CHAR(1),
	date_of_birth DATE,
	add_date DATE,
	update_date DATE
);

-- create the directors table
create table directors (
	director_id serial primary key,
	first_name VARCHAR(150),
 	last_name VARCHAR(150),
	date_of_birth DATE,
	nationality VARCHAR(20),
	add_date DATE,
	update_date DATE
);

select * from directors


-- create movies table

create table movies (
	movie_id serial primary key,
	movie_name varchar(100) not null,
	movie_length int,
	movie_lang varchar(20),
	age_certificate varchar(10),
	release_date date,
	director_id int references directors (director_id)
);

-- create movies_revenues
create table movies_revenues(
	revenue_id serial primary key,
	movie_id int references movies (movie_id),
	revenues_domestic numeric (10, 2),
	revenues_international numeric (10, 2)
);

select * from movies_revenues

-- create movies_actors junction table
create table movies_actors (
	movie_id int references movies (movie_id),
	actor_id int references actors (actor_id),
	primary key (movie_id, actor_id)
);

