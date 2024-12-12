# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Limit_Point



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A \subseteq S$.

The following definitions of the concept of limit point are equivalent:

Definition 1
A point $x \in S$ is a limit point of $A$ if and only if every open neighborhood $U$ of $x$ satisfies:

$A \cap \paren {U \setminus \set x} \ne \O$
That is, if and only if every open set $U \in \tau$ such that $x \in U$ contains some point of $A$ distinct from $x$.

Definition 2
A point $x \in S$ is a limit point of $A$ if and only if

$x$ belongs to the closure of $A$ but is not an isolated point of $A$.
Definition 3
A point $x \in S$ is a limit point of $A$ if and only if $x$ is an adherent point of $A$ but is not an isolated point of $A$.

Definition 4
A point $x \in S$ is a limit point of $A$ if and only if $\left({S \setminus A}\right) \cup \left\{{x}\right\}$ is not a neighborhood of $x$.


Proof
$({1}) \iff ({2})$
The closure of $A$ is defined as the union of the set of all isolated points of $A$ and the set of all limit points of $A$.
The rest then follows directly from Equivalence of Definitions of Isolated Point.
$\Box$

$({2}) \iff ({3})$
Follows directly from Equivalence of Definitions of Adherent Point.
$\Box$

$({1}) \iff ({4})$
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


Also see
Definition:Limit Point of Set




