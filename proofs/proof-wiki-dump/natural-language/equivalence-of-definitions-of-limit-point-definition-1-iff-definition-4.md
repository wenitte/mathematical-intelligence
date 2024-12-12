# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Limit_Point/Definition_(1)_iff_Definition_(4)



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A \subseteq S$.

The following definitions of the concept of limit point are equivalent:

Definition 1
A point $x \in S$ is a limit point of $A$ if and only if every open neighborhood $U$ of $x$ satisfies:

$A \cap \paren {U \setminus \set x} \ne \O$
That is, if and only if every open set $U \in \tau$ such that $x \in U$ contains some point of $A$ distinct from $x$.

Definition 4
A point $x \in S$ is a limit point of $A$ if and only if $\left({S \setminus A}\right) \cup \left\{{x}\right\}$ is not a neighborhood of $x$.


Proof 1
The following equivalence holds:














\(\ds \)

\(\)







\(\ds \)





There exists an open neighborhood $U$ of $x$ such that $A \cap \paren {U \setminus \set x} = \O$














\(\ds \)

\(\leadstoandfrom\)







\(\ds \)





There exists an open neighborhood $U$ of $x$ such that $U \subseteq \paren{S \setminus A} \cup \set x$

\(\quad\) Modus Ponendo Tollens












\(\ds \)

\(\leadstoandfrom\)







\(\ds \)





$\paren{S \setminus A} \cup \set x$ is a neighborhood of $x$

\(\quad\) Definition of Neighborhood of Point

The result follows from the Rule of Transposition.
$\blacksquare$


Proof 2
The following equivalence holds:
There exists an open neighborhood $U$ of $x$ such that $A \cap \paren {U \setminus \set x} = \O$














\(\ds \O\)

\(=\)







\(\ds A \cap \paren {U \setminus \set x}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \O\)

\(=\)







\(\ds \paren {U \cap A} \setminus \set x\)







\(\quad\) Intersection with Set Difference is Set Difference with Intersection






\(\ds \leadstoandfrom \ \ \)





\(\ds \O\)

\(=\)







\(\ds \paren {A \cap U} \setminus \set x\)







\(\quad\) Intersection is Commutative






\(\ds \leadstoandfrom \ \ \)





\(\ds \O\)

\(=\)







\(\ds U \cap \paren {A \setminus \set x}\)







\(\quad\) Intersection with Set Difference is Set Difference with Intersection






\(\ds \leadstoandfrom \ \ \)





\(\ds \O\)

\(=\)







\(\ds U \cap \map \complement { \map \complement {A \setminus \set x} }\)







\(\quad\) Complement of Complement






\(\ds \leadstoandfrom \ \ \)





\(\ds U\)

\(\subseteq\)







\(\ds \map \complement {A \setminus \set x}\)







\(\quad\) Intersection with Complement is Empty iff Subset






\(\ds \leadstoandfrom \ \ \)





\(\ds U\)

\(\subseteq\)







\(\ds \map \complement {A \cap \map \complement {\set x} }\)







\(\quad\) Set Difference as Intersection with Complement






\(\ds \leadstoandfrom \ \ \)





\(\ds U\)

\(\subseteq\)







\(\ds \map \complement A \cup \map \complement {\map \complement {\set x} }\)







\(\quad\) De Morgan's Laws (Set Theory)/Set Complement






\(\ds \leadstoandfrom \ \ \)





\(\ds U\)

\(\subseteq\)







\(\ds \map \complement A \cup \set x\)







\(\quad\) Complement of Complement

By Definition of Neighborhood of Point, $\map \complement A \cup \set x$ is a neighborhood of $x$
The result follows from the Rule of Transposition.
$\blacksquare$





