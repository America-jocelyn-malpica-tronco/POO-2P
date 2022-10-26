// Importacion/herencia de clases.

import { Autor1 } from "./Autor";
import { copia } from './copia';
import { Libro } from "./Libro";
import { Lector } from "./Lector";

//Autor

const Ame =new Autor1 ("America", "Mexicana", " 4/01/2006", "Nashe", "XD", "Ame", "2006")
console.log(Ame);

//Libros 

const Prog=new Libro ("Las maravillas de la POO","Educativo","no c","2081")
console.log(Prog);

const america =new Libro("Lo increible de las clases","Eduactivo","Santillana","2010")
console.log(america);

//Lectores

const Alex= new Lector ("123","Alexander santiago", "477 694 4058", "Foraneo xd","423")
console.log(Alex);

const chity = new Lector ("111","Citlaly","2741678910","No se","890")
console.log(chity)

//agregacion de copias 

const Cop=new copia ("20/10/2022");
Cop.agregarcopia("2",Prog,Alex);


Cop.agregarcopia("3",america,chity)
console.log (Cop.Listacopias());