-- Inserir Users
INSERT INTO Users (Nome, Role, Email, Password)
VALUES
('Alice Silva', 'Leitor', 'alice.silva@example.com', HASHBYTES('SHA2_256', 'senha123')),
('Bruno Oliveira', 'Leitor', 'bruno.oliveira@example.com', HASHBYTES('SHA2_256', 'senha123')),
('Carla Mendes', 'Leitor', 'carla.mendes@example.com', HASHBYTES('SHA2_256', 'senha123')),
('Diego Pereira', 'Leitor', 'diego.pereira@example.com', HASHBYTES('SHA2_256', 'senha123')),
('Eliana Souza', 'Leitor', 'eliana.souza@example.com', HASHBYTES('SHA2_256', 'senha123')),
('Fábio Santos', 'Leitor', 'fabio.santos@example.com', HASHBYTES('SHA2_256', 'senha123')),
('Gabriela Lima', 'Leitor', 'gabriela.lima@example.com', HASHBYTES('SHA2_256', 'senha123')),
('Hugo Ribeiro', 'Leitor', 'hugo.ribeiro@example.com', HASHBYTES('SHA2_256', 'senha123')),
('Isabela Martins', 'Leitor', 'isabela.martins@example.com', HASHBYTES('SHA2_256', 'senha123')),
('João Alves', 'Leitor', 'joao.alves@example.com', HASHBYTES('SHA2_256', 'senha123')),
('Carlos Almeida', 'Bibliotecário', 'carlos.almeida@example.com', HASHBYTES('SHA2_256', 'biblioteca123'));

-- Inserir núcleos
INSERT INTO Nucleos (Nome) VALUES
('Lisboa'),
('Porto'),
('Coimbra'),
('Braga'),
('Funchal');

-- Inserir temas
INSERT INTO Temas (NomeTema) VALUES
('Ficção Científica'),
('Romance Histórico'),
('Mistério'),
('Fantasia'),
('Drama'),
('Aventura'),
('Terror'),
('Biografia'),
('História'),
('Tecnologia');

--Inserir Obras

EXEC AddNewObra 
    @Titulo = 'A Guerra e a Paz',
    @Autor = 'Leo Tolstoy',
    @Sinopse = 'Um épico sobre a guerra napoleônica.',
    @ImageFilePath = 'C:\temp\Imagens\A Guerra e Paz.jpg';

EXEC AddNewObra 
    @Titulo = '1984',
    @Autor = 'George Orwell',
    @Sinopse = 'Distopia sobre um governo totalitário.',
    @ImageFilePath = 'C:\temp\Imagens\1984.jpg';

EXEC AddNewObra 
    @Titulo = 'O Senhor dos Anéis',
    @Autor = 'J.R.R. Tolkien',
    @Sinopse = 'A jornada de um hobbit para destruir um anel maligno.',
    @ImageFilePath = 'C:\temp\Imagens\O Senhor dos Anéis.jpg';

EXEC AddNewObra 
    @Titulo = 'Orgulho e Preconceito',
    @Autor = 'Jane Austen',
    @Sinopse = 'História de uma jovem que lida com orgulho e preconceito na sociedade.',
    @ImageFilePath = 'C:\temp\Imagens\Orgulho e Preconceito.jpg';

EXEC AddNewObra 
    @Titulo = 'Cem Anos de Solidão',
    @Autor = 'Gabriel García Márquez',
    @Sinopse = 'A história da família Buendía ao longo de várias gerações.',
    @ImageFilePath = 'C:\temp\Imagens\Cem Anos de Solidão.jpg';

EXEC AddNewObra 
    @Titulo = 'O Grande Gatsby',
    @Autor = 'F. Scott Fitzgerald',
    @Sinopse = 'Um drama de amores e tragédia na década de 1920.',
    @ImageFilePath = 'C:\temp\Imagens\O Grande Gatsby.jpg';

EXEC AddNewObra 
    @Titulo = 'A Morte do Comendador',
    @Autor = 'Haruki Murakami',
    @Sinopse = 'Reflexões sobre a vida, o amor e a perda.',
    @ImageFilePath = 'C:\temp\Imagens\A Morte do Comendador.jpg';

EXEC AddNewObra 
    @Titulo = 'Dom Quixote',
    @Autor = 'Miguel de Cervantes',
    @Sinopse = 'As aventuras de um cavaleiro medieval enlouquecido.',
    @ImageFilePath = 'C:\temp\Imagens\Dom Quixote.jpg';

EXEC AddNewObra 
    @Titulo = 'O Retrato de Dorian Gray',
    @Autor = 'Oscar Wilde',
    @Sinopse = 'Um homem imortalizado pela sua própria vaidade.',
    @ImageFilePath = 'C:\temp\Imagens\O Retrato de Dorian Gray.jpg';

EXEC AddNewObra 
    @Titulo = 'A Metamorfose',
    @Autor = 'Franz Kafka',
    @Sinopse = 'A história de um homem que se transforma em inseto.',
    @ImageFilePath = 'C:\temp\Imagens\A Metamorfose.jpg';

EXEC AddNewObra 
    @Titulo = 'O Processo',
    @Autor = 'Franz Kafka',
    @Sinopse = 'Um homem é processado por um crime que não entende.',
    @ImageFilePath = 'C:\temp\Imagens\O Processo.jpg';

EXEC AddNewObra 
    @Titulo = 'Fahrenheit 451',
    @Autor = 'Ray Bradbury',
    @Sinopse = 'Num futuro distópico, os livros são proibidos e queimados.',
    @ImageFilePath = 'C:\temp\Imagens\Fahrenheit 451.jpg';

EXEC AddNewObra 
    @Titulo = 'A Revolução dos Bichos',
    @Autor = 'George Orwell',
    @Sinopse = 'Uma sátira política sobre uma revolução animal.',
    @ImageFilePath = 'C:\temp\Imagens\A Revolução dos Bichos.jpg';

EXEC AddNewObra 
    @Titulo = 'O Hobbit',
    @Autor = 'J.R.R. Tolkien',
    @Sinopse = 'As aventuras de Bilbo Bolseiro em uma jornada épica.',
    @ImageFilePath = 'C:\temp\Imagens\O Hobbit.jpg';

EXEC AddNewObra 
    @Titulo = 'O Sol é para Todos',
    @Autor = 'Harper Lee',
    @Sinopse = 'Uma história sobre racismo e injustiça no sul dos EUA.',
    @ImageFilePath = 'C:\temp\Imagens\O Sol é para Todos.jpg';

EXEC AddNewObra 
    @Titulo = 'A Insustentável Leveza do Ser',
    @Autor = 'Milan Kundera',
    @Sinopse = 'Exploração filosófica sobre o amor, a liberdade e o destino.',
    @ImageFilePath = 'C:\temp\Imagens\A Insustentável Leveza do Ser.jpg';

EXEC AddNewObra 
    @Titulo = 'O Primo Basílio',
    @Autor = 'José de Alencar',
    @Sinopse = 'Romance brasileiro sobre a traição e a moralidade.',
    @ImageFilePath = 'C:\temp\Imagens\O Primo Basílio.jpg';

EXEC AddNewObra 
    @Titulo = 'O Conde de Monte Cristo',
    @Autor = 'Alexandre Dumas',
    @Sinopse = 'A história de vingança de Edmond Dantès.',
    @ImageFilePath = 'C:\temp\Imagens\O Conde de Monte Cristo.jpg';

EXEC AddNewObra 
    @Titulo = 'A Moreninha',
    @Autor = 'Joaquim Manuel de Macedo',
    @Sinopse = 'Primeiro romance romântico brasileiro, sobre amor e tradição.',
    @ImageFilePath = 'C:\temp\Imagens\A Moreninha.jpg';

EXEC AddNewObra 
    @Titulo = 'Memórias Póstumas de Brás Cubas',
    @Autor = 'Machado de Assis',
    @Sinopse = 'Uma obra inovadora e satírica do século XIX.',
    @ImageFilePath = 'C:\temp\Imagens\Memórias Póstumas de Brás Cubas.jpg';

-- Inserir TemaObra
INSERT INTO TemaObra (ID_Tema, ID_Obra)
SELECT 
    Temas.ID_Tema,
    Obras.ID_Obra
FROM 
    (VALUES
        -- Ficção Científica
        ('Ficção Científica', '1984'),
        ('Ficção Científica', 'Fahrenheit 451'),

        -- Romance Histórico
        ('Romance Histórico', 'A Guerra e a Paz'),
        ('Romance Histórico', 'Orgulho e Preconceito'),

        -- Mistério
        ('Mistério', 'O Senhor dos Anéis'),
        ('Mistério', 'O Retrato de Dorian Gray'),
        ('Mistério', 'O Processo'),

        -- Fantasia
        ('Fantasia', 'O Senhor dos Anéis'),
        ('Fantasia', 'O Hobbit'),

        -- Drama
        ('Drama', 'O Grande Gatsby'),
        ('Drama', 'O Sol é para Todos'),
        ('Drama', 'Matar a Saudade'),

        -- Aventura
        ('Aventura', 'O Senhor dos Anéis'),
        ('Aventura', 'O Hobbit'),
        ('Aventura', 'Dom Quixote'),

        -- Terror
        ('Terror', 'O Retrato de Dorian Gray'),
        ('Terror', 'A Metamorfose'),

        -- Biografia
        ('Biografia', 'A Moreninha'),
        ('Biografia', 'Memórias Póstumas de Brás Cubas'),

        -- História
        ('História', 'A Guerra e a Paz'),
        ('História', 'Cem Anos de Solidão'),

        -- Tecnologia
        ('Tecnologia', '1984'),
        ('Tecnologia', 'Fahrenheit 451')
    ) AS Dados(NomeTema, TituloObra)
JOIN 
    Temas ON Temas.NomeTema = Dados.NomeTema
JOIN 
    Obras ON Obras.Titulo = Dados.TituloObra;

-- Inserir exemplares de cada obra em cada núcleo
DECLARE @MaxExemplares INT = 10;

-- Loop para associar cada obra a todos os núcleos
INSERT INTO ObraNucleo (ID_Obra, ID_Nucleo, Exemplares)
SELECT 
    Obras.ID_Obra, 
    Nucleos.ID_Nucleo, 
    ABS(CHECKSUM(NEWID())) % @MaxExemplares + 1 AS Exemplares -- Quantidade aleatória entre 1 e 10
FROM 
    Obras
CROSS JOIN 
    Nucleos;

-- Requisições
-- Inserir requisição feita há mais de um ano
INSERT INTO Requisicao (ID_User, ID_Obra, ID_Nucleo, DataReq, DataDev, Status)
SELECT 
    Users.ID_User, 
    Obras.ID_Obra, 
    Nucleos.ID_Nucleo, 
    DATEADD(DAY, -1, DATEADD(YEAR, -1, GETDATE())), -- Data de requisição feita há 1 ano e 1 dia
    DATEADD(DAY, -10, DATEADD(YEAR, -1, GETDATE())), -- Data de devolução feita há 1 ano e 10 dias
    'Devolvido' -- Status devolvido
FROM 
    Users
JOIN 
    Obras ON Obras.Titulo = '1984' 
JOIN 
    Nucleos ON Nucleos.Nome = 'Lisboa' 
WHERE 
    Users.Nome = 'Alice Silva'; 

-- Inserir requisição feita há 5 dias
INSERT INTO Requisicao (ID_User, ID_Obra, ID_Nucleo, DataReq, DataDev, Status)
SELECT 
    Users.ID_User, 
    Obras.ID_Obra, 
    Nucleos.ID_Nucleo, 
    DATEADD(DAY, -5, GETDATE()), -- Data de requisição feita há 5 dias
    NULL, -- Data de devolução ainda não foi definida
    'Ativo' -- Status ativo
FROM 
    Users
JOIN 
    Obras ON Obras.Titulo = 'O Senhor dos Anéis' 
JOIN 
    Nucleos ON Nucleos.Nome = 'Porto' 
WHERE 
    Users.Nome = 'Bruno Oliveira'; 

-- Inserir requisição feita há 13 dias
INSERT INTO Requisicao (ID_User, ID_Obra, ID_Nucleo, DataReq, DataDev, Status)
SELECT 
    Users.ID_User, 
    Obras.ID_Obra, 
    Nucleos.ID_Nucleo, 
    DATEADD(DAY, -13, GETDATE()), -- Data de requisição feita há 13 dias
    NULL, -- Data de devolução ainda não foi definida
    'Ativo' -- Status ativo
FROM 
    Users
JOIN 
    Obras ON Obras.Titulo = 'O Senhor dos Anéis' 
JOIN 
    Nucleos ON Nucleos.Nome = 'Porto' 
WHERE 
    Users.Nome IN ('Bruno Oliveira', 'Carla Mendes', 'Diego Pereira'); 

-- Inserir mais requisição feita há 11 dias
INSERT INTO Requisicao (ID_User, ID_Obra, ID_Nucleo, DataReq, DataDev, Status)
SELECT 
    Users.ID_User, 
    Obras.ID_Obra, 
    Nucleos.ID_Nucleo, 
    DATEADD(DAY, -11, GETDATE()), -- Data de requisição feita há 11 dias
    NULL, -- Data de devolução ainda não foi definida
    'Ativo' -- Status ativo
FROM 
    Users
JOIN 
    Obras ON Obras.Titulo = 'O Grande Gatsby' 
JOIN 
    Nucleos ON Nucleos.Nome = 'Coimbra' 
WHERE 
    Users.Nome IN ('Eliana Souza', 'Fábio Santos'); 

-- Inserir requisição feita há mais de 15 dias
INSERT INTO Requisicao (ID_User, ID_Obra, ID_Nucleo, DataReq, DataDev, Status)
SELECT 
    Users.ID_User, 
    Obras.ID_Obra, 
    Nucleos.ID_Nucleo, 
    DATEADD(DAY, -20, GETDATE()), -- Data de requisição feita há 20 dias
    NULL, -- Data de devolução ainda não foi definida
    'Ativo' -- Status ativo
FROM 
    Users
JOIN 
    Obras ON Obras.Titulo = 'A Guerra e a Paz' 
JOIN 
    Nucleos ON Nucleos.Nome = 'Funchal' 
WHERE 
    Users.Nome = 'Gabriela Lima'; 

-- Inserir 4 requisições de um usuário com devoluções atrasadas (mais de 15 dias após a requisição)
INSERT INTO Requisicao (ID_User, ID_Obra, ID_Nucleo, DataReq, DataDev, Status)
SELECT 
    Users.ID_User, 
    Obras.ID_Obra, 
    Nucleos.ID_Nucleo, 
    -- Data de requisição: 30 dias atrás
    DATEADD(DAY, -30, GETDATE()), 
    -- Data de devolução: 16 dias depois da data de requisição (atrasada)
    DATEADD(DAY, -14, GETDATE()), 
    'Devolvido' -- Status 'Devolvido'
FROM 
    Users
JOIN 
    Obras ON Obras.Titulo = '1984' 
JOIN 
    Nucleos ON Nucleos.Nome = 'Lisboa' 
WHERE 
    Users.Nome = 'Hugo Ribeiro' 

UNION ALL

SELECT 
    Users.ID_User, 
    Obras.ID_Obra, 
    Nucleos.ID_Nucleo, 
    -- Data de requisição: 40 dias atrás
    DATEADD(DAY, -40, GETDATE()), 
    -- Data de devolução: 16 dias depois da data de requisição (atrasada)
    DATEADD(DAY, -24, GETDATE()), 
    'Devolvido' -- Status 'Devolvido'
FROM 
    Users
JOIN 
    Obras ON Obras.Titulo = 'O Senhor dos Anéis' 
JOIN 
    Nucleos ON Nucleos.Nome = 'Porto' 
WHERE 
    Users.Nome = 'Hugo Ribeiro' 

UNION ALL

SELECT 
    Users.ID_User, 
    Obras.ID_Obra, 
    Nucleos.ID_Nucleo, 
    -- Data de requisição: 50 dias atrás
    DATEADD(DAY, -50, GETDATE()), 
    -- Data de devolução: 16 dias depois da data de requisição (atrasada)
    DATEADD(DAY, -34, GETDATE()), 
    'Devolvido' -- Status 'Devolvido'
FROM 
    Users
JOIN 
    Obras ON Obras.Titulo = 'O Grande Gatsby' 
JOIN 
    Nucleos ON Nucleos.Nome = 'Coimbra' 
WHERE 
    Users.Nome = 'Hugo Ribeiro' 

UNION ALL

SELECT 
    Users.ID_User, 
    Obras.ID_Obra, 
    Nucleos.ID_Nucleo, 
    -- Data de requisição: 60 dias atrás
    DATEADD(DAY, -60, GETDATE()), 
    -- Data de devolução: 16 dias depois da data de requisição (atrasada)
    DATEADD(DAY, -44, GETDATE()), 
    'Devolvido' -- Status 'Devolvido'
FROM 
    Users
JOIN 
    Obras ON Obras.Titulo = 'Cem Anos de Solidão' 
JOIN 
    Nucleos ON Nucleos.Nome = 'Braga' 
WHERE 
    Users.Nome = 'Hugo Ribeiro'; 
