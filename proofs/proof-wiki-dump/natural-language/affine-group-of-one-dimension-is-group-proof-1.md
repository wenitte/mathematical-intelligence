# 

Source: https://proofwiki.org/wiki/Affine_Group_of_One_Dimension_is_Group/Proof_1



Theorem
Let $\map {\operatorname {Af}_1} \R$ be the $1$-dimensional affine group on $\R$.
Then $\map {\operatorname {Af}_1} \R$ is a group.


Proof
Taking the group axioms in turn:


Group Axiom $\text G 0$: Closure
Let :

$a, c \in \R_{\ne 0} \land b, d \in \R$
Let:

$f_{ab}, f_{cd} \in \map {\operatorname {Af}_1} \R$
Then:














\(\ds \map{\paren{f_{ab} \circ f_{cd} } } x\)

\(=\)







\(\ds \map{f_{ab} } {\map{f_{cd} } x}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map{f_{ab} } {c x + d}\)





Definition of Affine Group of One Dimension














\(\ds \)

\(=\)







\(\ds a \paren {c x + d} + b\)





Definition of Affine Group of One Dimension














\(\ds \)

\(=\)







\(\ds \paren{a c x + a d } + b\)





Real Number Axiom $\R \text A1$: Associativity of Addition














\(\ds \)

\(=\)







\(\ds \paren{a c x} + \paren{a d + b }\)





Real Number Axiom $\R \text A1$: Associativity of Addition














\(\ds \)

\(=\)







\(\ds \paren{a c } x + \paren{a d + b }\)





Real Number Axiom $\R \text M1$: Associativity of Multiplication



By the field axioms:

$a c \in \R_{\ne 0} \land a d + b \in \R$
Thus $f_{ab} \circ f_{cd} \in \map {\operatorname {Af}_1} \R$ and so $\map {\operatorname {Af}_1} \R$ is closed.
$\Box$


Group Axiom $\text G 1$: Associativity
From Composition of Mappings is Associative, it follows directly that $\circ$ is associative on $\map {\operatorname {Af}_1} \R$.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
By Identity of Affine Group of One Dimension, $\map {\operatorname {Af}_1} \R$ has $f_{1, 0}$ as an identity element.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
By Inverse in Affine Group of One Dimension, every element $f_{a b}$ of $\map {\operatorname {Af}_1} \R$ has an inverse $f_{c d}$ where $c = \dfrac 1 a$ and $d = \dfrac {-b} a$.
$\Box$

All the group axioms are thus seen to be fulfilled, and so $\map {\operatorname {Af}_1} \R$ is a group.
$\blacksquare$





