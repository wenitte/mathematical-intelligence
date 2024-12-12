# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Limit_Point/Definition_(1)_iff_Definition_(4)/Proof_1



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


Proof
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





