
-- STRUCTURE --

create table if not exists users (
    id serial primary key,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    email varchar(50) not null,
    password varchar(50) not null
);

create table if not exists brewery (
    id serial primary key,
    name varchar(50) not null,
    country varchar(50) not null,
    description text not null
);

create table if not exists ingredient (
    id serial primary key,
    name varchar(50) not null,
    type varchar(50) not null
);

create table if not exists category (
    id serial primary key,
    name varchar(50) not null
);

create table if not exists beer (
    id serial primary key,
    name varchar(50) not null,
    description text not null,
    abv float not null,
    organic bool not null,
    id_category int,
    id_brewery int,
    constraint fk_category foreign key(id_category) references category(id),
    constraint fk_brewery foreign key(id_brewery) references brewery(id)
    on delete cascade
);

create table if not exists favorite (
    id serial primary key,
    id_beer int,
    id_users int,
    constraint fk_beer foreign key(id_beer) references beer(id),
    constraint fk_users foreign key(id_users) references users(id)
    on delete cascade
);

create table if not exists review (
    id serial primary key,
    rating int  not null,
    content text not null,
    id_beer int,
    id_users int,
    constraint fk_beer foreign key(id_beer) references beer(id),
    constraint fk_users foreign key(id_users) references users(id)
    on delete cascade
);

create table if not exists picture (
    id serial primary key,
    path varchar(255) not null,
    id_beer int,
    constraint fk_beer foreign key(id_beer) references beer(id)
    on delete cascade
);

create table if not exists beer_ingredient (
    id serial primary key,
    id_beer int,
    id_ingredient int,
    constraint fk_beer foreign key(id_beer) references beer(id),
    constraint fk_ingredient foreign key(id_ingredient) references ingredient(id)
    on delete cascade
);


-- DONNÉES --

INSERT INTO users (first_name, last_name, email, password) VALUES
('Alice', 'Smith', 'alice.smith@example.com', 'password123'),
('Bob', 'Brown', 'bob.brown@example.com', 'securepass'),
('Charlie', 'Davis', 'charlie.davis@example.com', 'letmein');

INSERT INTO brewery (name, country, description) VALUES
('Golden Hop', 'Belgium', 'A small brewery specializing in strong ales.'),
('Silver Barrel', 'Germany', 'Famous for its light lagers and wheat beers.'),
('Hop Heaven', 'USA', 'Craft brewery with a focus on hoppy IPAs.'),
('Iron Malt', 'England', 'A brewery known for its traditional ales and porters.'),
('Sunshine Brews', 'Australia', 'Famous for its fruity and tropical beers.');

INSERT INTO ingredient (name, type) VALUES
('Water', 'Liquid'),
('Barley', 'Grain'),
('Hops', 'Flower'),
('Yeast', 'Microorganism'),
('Sugar', 'Additive');

INSERT INTO category (name) VALUES
('IPA'),
('Lager'),
('Stout'),
('Pilsner'),
('Ale');

INSERT INTO beer (name, description, abv, organic, id_category, id_brewery) VALUES
('Hoppy Bliss', 'A bold and citrusy IPA.', 6.5, true, 1, 3),
('Golden Lager', 'A crisp and refreshing lager.', 4.8, false, 2, 2),
('Dark Dream', 'A rich and creamy stout.', 5.6, true, 3, 1),
('Pilsner Delight', 'A smooth and light pilsner.', 4.2, false, 4, 2),
('Tropical Paradise', 'A fruity IPA with hints of mango and passionfruit.', 6.0, true, 1, 4),
('Old Porter', 'A robust and smoky porter.', 5.8, false, 3, 5),
('Crisp Wheat', 'A light and refreshing wheat beer.', 4.5, true, 2, 4),
('Sunset Ale', 'A malty ale with caramel undertones.', 5.2, false, 5, 4),
('Dark Horizon', 'A bold stout with coffee and chocolate notes.', 7.0, true, 3, 5),
('Golden Wave', 'A smooth and creamy lager.', 5.0, false, 2, 1),
('Mango Dream', 'An exotic fruit beer with a tangy finish.', 4.7, true, 5, 4),
('Summer Pils', 'A crisp pilsner with herbal notes.', 4.3, false, 4, 3);

INSERT INTO favorite (id_beer, id_users) VALUES
(1, 1),
(2, 2),
(3, 1),
(4, 3),
(5, 2),
(6, 3),
(7, 1),
(1, 3);

INSERT INTO review (rating, content, id_beer, id_users) VALUES
(5, 'Absolutely loved this beer!', 1, 1),
(4, 'Very refreshing and crisp.', 2, 2),
(3, 'Good, but not my favorite.', 3, 3),
(5, 'Perfect for any occasion.', 4, 1),
(5, 'Amazing fruity notes!', 5, 2),
(4, 'Loved the smoky flavor.', 6, 1),
(3, 'Too light for my taste.', 7, 3),
(5, 'Perfect for a summer day.', 8, 2),
(4, 'Rich and satisfying stout.', 9, 3);

INSERT INTO picture (path, id_beer) VALUES
('/images/beer1.png', 1),
('/images/beer2.png', 2),
('/images/beer3.png', 3),
('/images/beer4.png', 4),
('/images/beer1-1.png', 1),
('/images/beer2-1.png', 2),
('/images/beer3-1.png', 3),
('/images/beer4-1.png', 4),
('/images/beer1-2.png', 1),
('/images/beer2-2.png', 2),
('/images/beer3-2.png', 3),
('/images/beer4-2.png', 4),
('/images/beer5.png', 5),
('/images/beer5-1.png', 5),
('/images/beer5-2.png', 5),
('/images/beer6.png', 6),
('/images/beer6-1.png', 6),
('/images/beer6-2.png', 6),
('/images/beer7.png', 7),
('/images/beer7-1.png', 7),
('/images/beer7-2.png', 7),
('/images/beer8.png', 8),
('/images/beer8-1.png', 8),
('/images/beer8-2.png', 8),
('/images/beer9.png', 9),
('/images/beer9-1.png', 9),
('/images/beer9-2.png', 9),
('/images/beer10.png', 10),
('/images/beer10-1.png', 10),
('/images/beer10-2.png', 10),
('/images/beer11.png', 11),
('/images/beer11-1.png', 11),
('/images/beer11-2.png', 11),
('/images/beer12.png', 12),
('/images/beer12-1.png', 12),
('/images/beer12-2.png', 12);

INSERT INTO beer_ingredient (id_beer, id_ingredient) VALUES
(1, 2),
(1, 3),
(1, 4),
(2, 2),
(2, 3),
(3, 2),
(3, 3),
(4, 2),
(4, 3),
(4, 5),
(5, 2),
(5, 3),
(5, 4),
(6, 2),
(6, 3),
(7, 2),
(7, 4),
(8, 2),
(8, 3),
(8, 5),
(9, 2),
(9, 3),
(10, 2),
(10, 4),
(11, 2),
(11, 5),
(12, 2),
(12, 3),
(12, 4);