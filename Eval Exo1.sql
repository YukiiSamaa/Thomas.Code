-- Exo Hotel

DROP DATABASE IF EXISTS base_exo1;

CREATE DATABASE base_exo1;

USE base_exo1;

CREATE TABLE Client (
		cli_num INT,
		cli_nom VARCHAR(50),
		cli_adresse VARCHAR(50),
		cli_tel VARCHAR(50),
	PRIMARY KEY (cli_num)
);

CREATE TABLE commande (
		com_num INT,
		cli_num INT,
		com_date DATETIME,
		com_obs VARCHAR(50),
	FOREIGN KEY (cli_num) REFERENCES Client (cli_num),
	PRIMARY KEY (com_num)
);

CREATE TABLE produit (
		pro_num INT,
		pro_libelle VARCHAR(50),
		pro_description VARCHAR(50),
	PRIMARY KEY (pro_num)
);

CREATE TABLE est_compose (
		com_num INT,
		pro_num INT,
		est_qte INT,
	FOREIGN KEY (pro_num) REFERENCES produit (pro_num),
	FOREIGN KEY (com_num) REFERENCES commande (com_num),
	PRIMARY KEY (pro_num, com_num)
);

CREATE INDEX indexexo1 ON Client(cli_nom)

-- Exo northwind 

SELECT CustomerId AS '', CompanyName AS 'Société' ,ContactName AS 'Contact',ContactTitle AS 'Fonction' ,Phone AS 'Téléphone' FROM customers
WHERE Country = 'France';



SELECT ProductId AS '', ProductName AS 'Produit', UnitPrice AS 'Prix' FROM products
WHERE SupplierId  = '1';



SELECT companyname, COUNT(UnitsOnOrder) as 'Nombre produits'
FROM suppliers
Join products on products.supplierid = suppliers.supplierid
WHERE country ='france'
GROUP BY companyname
ORDER BY COUNT(UnitsOnOrder) DESC;



SELECT companyname, COUNT(OrderId)
FROM customers
JOIN orders on orders.customerid = customers.customerid
WHERE country = 'france'
GROUP BY companyName
HAVING COUNT(OrderId) > 10;



SELECT companyname AS 'Client', SUM(unitprice * quantity) as 'CA', country AS 'Pays'
FROM customers
JOIN orders on orders.customerid = customers.customerid
JOIN order_details ON order_details.orderid = orders.orderid 
GROUP BY companyname,country
HAVING SUM(unitprice * quantity) > 30000
ORDER BY 'CA' DESC ;



SELECT shipcountry AS 'Pays'
FROM orders
JOIN order_details on order_details.orderid = orders.orderid 
JOIN Products on products.productid = order_details.productid
JOIN suppliers on suppliers.supplierid = products.supplierid
WHERE suppliers.companyname = 'exotic liquids'
GROUP BY shipcountry;



SELECT SUM(unitprice*quantity) as 'Montant des ventes 97'
FROM order_details
JOIN orders on orders.orderid = order_details.orderid
WHERE YEAR(orderdate) = 1997;



SELECT MONTH(orderdate) AS 'Mois 97', SUM(unitprice*quantity) as 'Montant des ventes'
FROM order_details
JOIN orders on orders.orderid = order_details.orderid
WHERE YEAR(orderdate) = 1997
GROUP BY MONTH(orderdate)
ORDER BY MONTH(orderdate) ASC;



SELECT MAX(orderdate) AS 'Date de dernière commande'
FROM orders
JOIN customers ON customers.customerid = orders.customerid
WHERE companyname = 'Du monde entier';



SELECT AVG(DATEDIFF(shippeddate,orderdate)) AS 'Delai moyen de livraison en jours'
FROM orders;