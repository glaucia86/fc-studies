# SOLID

## Introdução

* O que é SOLID?

SOLID é um acrônimo que consolida 5 itens que são considerados como boas práticas no mundo do desenvolvimento orientado a objetos. São eles:

* S - Single Responsibility Principle (SRP)
* O - Open Closed Principle (OCP)
* L - Liskov Substitution Principle (LSP)
* I - Interface Segregation Principle (ISP)

## Single Responsibility Principle (SRP)

* O que é?

O SRP é o primeiro princípio do SOLID e diz que uma classe deve ter apenas uma responsabilidade. Ou seja, uma classe deve ter apenas um motivo para mudar. 

* Como identificar?

Para identificar se uma classe está seguindo o SRP, basta verificar se ela possui apenas uma responsabilidade. Caso ela possua mais de uma responsabilidade, é necessário separar essas responsabilidades em classes diferentes.

## Open Closed Principle (OCP)

* O que é?

O OCP é o segundo princípio do SOLID e diz que uma classe deve estar aberta para extensão, mas fechada para modificação.  

* Como identificar?

Para identificar se uma classe está seguindo o OCP, basta verificar se ela pode ser facilmente estendida sem que seja necessário modificar o código fonte da classe. Caso seja necessário modificar o código fonte da classe para estendê-la, é necessário refatorar o código para que a classe esteja seguindo o OCP.

## Liskov Substitution Principle (LSP) 

* O que é?

O LSP é o terceiro princípio do SOLID e diz que uma classe derivada deve ser substituível por sua classe base. 

* Como identificar?

Para identificar se uma classe está seguindo o LSP, basta verificar se uma classe derivada pode substituir sua classe base sem quebrar o sistema. Caso a classe derivada não possa substituir sua classe base sem quebrar o sistema, é necessário refatorar o código para que a classe esteja seguindo o LSP.

## Interface Segregation Principle (ISP)

* O que é?

O ISP é o quarto princípio do SOLID e diz que uma classe não deve ser forçada a implementar interfaces e métodos que não serão utilizados. 

* Como identificar?

Para identificar se uma classe está seguindo o ISP, basta verificar se uma classe não está sendo forçada a implementar interfaces e métodos que não serão utilizados. Caso a classe esteja sendo forçada a implementar interfaces e métodos que não serão utilizados, é necessário refatorar o código para que a classe esteja seguindo o ISP.

## Dependency Inversion Principle (DIP)

* O que é?

O DIP é o quinto princípio do SOLID e diz que uma classe deve depender de abstrações e não de implementações. 

* Como identificar?

Para identificar se uma classe está seguindo o DIP, basta verificar se uma classe está dependendo de abstrações e não de implementações. Caso a classe esteja dependendo de implementações, é necessário refatorar o código para que a classe esteja seguindo o DIP.

> o examplo aqui foi baseado na aula do Rodrigo Branas de SOLID com TypeScript **[AQUI](https://youtube.com/watch?v=899Qa6sQcRc)**


