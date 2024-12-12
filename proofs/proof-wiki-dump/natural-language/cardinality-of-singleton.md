# 

Source: https://proofwiki.org/wiki/Cardinality_of_Singleton



Theorem
Let $A$ be a set.
Then $\card A = 1$ if and only if $\exists a: A = \set a$
where $\card A$ denotes the cardinality of $A$.


Proof
Sufficient Condition
Assume that

$\card A = 1$
By definition of cardinality of finite set:

$A \sim \N_{< 1} = \set 0$
where $\sim$ denotes set equivalence.
By Set Equivalence behaves like Equivalence Relation:

$\set 0 \sim A$
By definition of set equivalence there exists a bijection:

$f: \set 0 \to A$
By definition of bijection:

$f$ is s surjection.
Thus














\(\ds A\)

\(=\)







\(\ds \map {f^\to} {\set 0}\)





Definition of Surjection














\(\ds \)

\(=\)







\(\ds \set {\map f 0}\)





Image of Singleton under Mapping



$\Box$


Necessary Condition
Assume that:

$\exists a: A = \set a$
Define a mapping $f: A \to \set 0$:

$\map f a = 0$
It is easy to see by definition that

$f$ is an injection and a surjection.
By definition

$f$ is bijection.
By definition of set equivalence:

$A \sim \set 0 = \N_{< 1}$
Thus by definition of cardinality of finite set:

$\card A = 1$
$\blacksquare$


Sources
Mizar article CARD_2:42




