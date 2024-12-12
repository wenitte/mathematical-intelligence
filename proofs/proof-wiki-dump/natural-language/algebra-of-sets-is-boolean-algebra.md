# 

Source: https://proofwiki.org/wiki/Algebra_of_Sets_is_Boolean_Algebra

Theorem
An algebra of sets is a Boolean algebra.


Proof
Let $\RR \subseteq \powerset S$ be a set $S$ upon which an algebra of sets has been constructed.
We identify:










Set union:   



\(\ds \cup \)   







  with join $\vee$








Set intersection:   



\(\ds \cap \)   







  with meet $\vee$








Relative complement:   



\(\ds \relcomp S a \)   







  with complementation $\neg a$


We demonstrate that the Boolean algebra axioms (formulation $2$) are fulfilled.


Boolean Algebra Axiom $(\text {BA}_2 0)$: Closure

From Algebra of Sets Axiom $(\text {AS} 2)$: Closure under Union:

$\forall a, b \in \RR: a \cup b \in \RR$
From Algebra of Sets Axiom $(\text {AS} 3)$: Closure under Complement:

$\forall a, b \in \RR: \relcomp S a \in \RR$

Then:














\(\ds \relcomp S {a \cap b}\)

\(=\)







\(\ds \relcomp S a \cup \relcomp S b\)





De Morgan's Laws: Complement of Intersection








\(\ds \leadsto \ \ \)





\(\ds \relcomp S {\relcomp S {a \cap b} }\)

\(=\)







\(\ds \relcomp S {\relcomp S a \cup \relcomp S b}\)





taking relative complement of both sides








\(\ds \leadsto \ \ \)





\(\ds a \cap b\)

\(=\)







\(\ds \relcomp S {\relcomp S a \cup \relcomp S b}\)





Relative Complement of Relative Complement








\(\ds \leadsto \ \ \)





\(\ds a \cap b\)

\(\in\)







\(\ds \RR\)





Algebra of Sets Axiom $(\text {AS} 2)$: Closure under Union and Algebra of Sets Axiom $(\text {AS} 3)$: Closure under Complement



Hence:

$\forall a, b \in \RR: a \cap b \in \RR$
and $\RR$ fulfils Boolean Algebra Axiom $(\text {BA}_2 0)$: Closure.
$\Box$


Boolean Algebra Axiom $(\text {BA}_2 1)$: Commutativity

We have:










\(\ds \forall a, b \in \RR: \, \)



\(\ds a \cup b\)

\(=\)







\(\ds b \cup a\)





Union is Commutative














\(\ds a \cap b\)

\(=\)







\(\ds b \cap a\)





Intersection is Commutative




and $\RR$ fulfils Boolean Algebra Axiom $(\text {BA}_2 1)$: Commutativity.
$\Box$


Boolean Algebra Axiom $(\text {BA}_2 2)$: Associativity

We have:










\(\ds \forall a, b, c \in \RR: \, \)



\(\ds a \cup \paren {b \cup c}\)

\(=\)







\(\ds \paren {a \cup b} \cup c\)





Union is Associative














\(\ds a \cap \paren {b \cap c}\)

\(=\)







\(\ds \paren {a \cap b} \cap c\)





Intersection is Associative




and $\RR$ fulfils Boolean Algebra Axiom $(\text {BA}_2 2)$: Associativity.
$\Box$


Boolean Algebra Axiom $(\text {BA}_2 3)$: Absorption Laws

We have:










\(\ds \forall a, b \in \RR: \, \)



\(\ds b \cup \paren {b \cap a}\)

\(=\)







\(\ds b\)





Union Absorbs Intersection








\(\ds \leadsto \ \ \)





\(\ds \paren {a \cap b} \cup b\)

\(=\)







\(\ds b\)





Intersection is Commutative, Union is Commutative












\(\ds \forall a, b \in \RR: \, \)



\(\ds b \cap \paren {b \cup a}\)

\(=\)







\(\ds b\)





Intersection Absorbs Union








\(\ds \leadsto \ \ \)





\(\ds \paren {a \cup b} \cap b\)

\(=\)







\(\ds b\)





Intersection is Commutative, Union is Commutative




and $\RR$ fulfils Boolean Algebra Axiom $(\text {BA}_2 3)$: Absorption Laws.
$\Box$


Boolean Algebra Axiom $(\text {BA}_2 4)$: Distributivity

We have:










\(\ds \forall a, b, c \in \RR: \, \)



\(\ds a \cap \paren {b \cup c}\)

\(=\)







\(\ds \paren {a \cap b} \cup \paren {a \cap c}\)





Intersection Distributes over Union














\(\ds a \cup \paren {b \cap c}\)

\(=\)







\(\ds \paren {a \cup b} \cap \paren {a \cup c}\)





Union Distributes over Intersection




and $\RR$ fulfils Boolean Algebra Axiom $(\text {BA}_2 4)$: Distributivity.
$\Box$


Boolean Algebra Axiom $(\text {BA}_2 5)$: Identity Elements










\(\ds \forall a, b \in \RR: \, \)



\(\ds \paren {a \cap \relcomp S a} \cup b\)

\(=\)







\(\ds \O \cup b\)





Intersection with Relative Complement is Empty














\(\ds \)

\(=\)







\(\ds b\)





Union with Empty Set












\(\ds \forall a, b \in \RR: \, \)



\(\ds \paren {a \cup \relcomp S a} \cap b\)

\(=\)







\(\ds S \cap b\)





Union with Relative Complement and note














\(\ds \)

\(=\)







\(\ds b\)





Intersection with Subset is Subset




and $\RR$ fulfils Boolean Algebra Axiom $(\text {BA}_2 5)$: Identity Elements.
$\Box$

All of the Boolean algebra axioms (formulation $2$) are fulfilled.
Hence the result.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Boolean algebra
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Boolean algebra




