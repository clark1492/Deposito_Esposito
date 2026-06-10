create table
    libri (
        id int primary key auto_increment,
        codice_isbn char(13),
        titolo varchar(100),
        id_genere int not null,
        id_autore int not null,
        id_editore int not null,
        anno_edizione int,
        index (codice_isbn),
        index (titolo)

    );


    CREATE TABLE magazzino (
        id int primary key auto_increment,  
        id_libro int not null,  
        codice_libro char(10) not null,
        codice_scaffale char(6) not null,
        data_carico date,
        prestato boolean,
        prezzo_carico decimal(5,2) check (prezzo_carico >= 0),
        prezzo_scarico decimal(5,2) check (prezzo_scarico >= 0),
        index (id_libro),
        unique index (codice_libro),
        unique index (codice_scaffale)
     
    );