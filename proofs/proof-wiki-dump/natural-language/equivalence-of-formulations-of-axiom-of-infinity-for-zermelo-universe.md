# 

Source: https://proofwiki.org/wiki/Equivalence_of_Formulations_of_Axiom_of_Infinity_for_Zermelo_Universe



Theorem
The following formulations of the Axiom of Infinity in the context of a Zermelo universe are equivalent:

Formulation 1
Let $\omega$ be the class of natural numbers as constructed by the Von Neumann construction:














\(\ds 0\)

\(:=\)







\(\ds \O\)




















\(\ds 1\)

\(:=\)







\(\ds 0 \cup \set 0\)




















\(\ds 2\)

\(:=\)







\(\ds 1 \cup \set 1\)




















\(\ds 3\)

\(:=\)







\(\ds 2 \cup \set 2\)




















\(\ds \)

\(\vdots\)







\(\ds \)




















\(\ds n + 1\)

\(:=\)







\(\ds n \cup \set n\)




















\(\ds \)

\(\vdots\)







\(\ds \)









Then $\omega$ is a set.

Formulation 2
There exists an inductive set.

Formulation 3
Not every set is a natural number.


Proof
Let the Axiom of Infinity, in each of its formulations, be applied to a basic universe $V$ separately, as follows.


Formulation $1$ implies Formulation $2$
Let formulation 1 be taken as an axiom.
Then the class $\omega$ as so defined is a set.
But, by definition, $\omega$ is itself an inductive set.
Hence an inductive set exists.
Thus formulation 2 holds.
$\Box$


Formulation $2$ implies Formulation $1$
Let formulation 2 be taken as an axiom.
That is, there exists an inductive set, which we shall call $b$.
By the inductive set definition of the natural numbers:

$\forall n \in \omega: n \in b$
where $\omega$ denotes the set of natural numbers.
That is:

$\omega \subseteq b$

We have that:

$b$ is a set
and

$\omega$ is a subclass of $b$.
By the Axiom of Swelledness, $\omega$ is a set.
Thus formulation 1 holds.
$\Box$


Formulation $1$ implies Formulation $3$
Let formulation 1 be taken as an axiom.
In the basic universe $V$, we are able to create the set:

$S = \set {\O, \set \O}$
which is the natural number $2$.
By the Axiom of Powers, its power set is also a set:

$\powerset S = \set {\O, \set \O, \set {\set \O}, \set {\set \O, \set \O} }$
But $\powerset S$ is not a natural number.
Thus formulation 3 holds.
$\Box$


Formulation $3$ implies Formulation $2$
Let formulation 3 be taken as an axiom.
Aiming for a contradiction, suppose formulation 2 did not hold.
Then there would be no inductive sets.
But then vacuously every set is an element of all inductive sets.
Thus, by the inductive set definition of the natural numbers:

Every set is a natural number.
$\Box$

Thus it is seen that each of these formulations of the Axiom of Infinity directly or indirectly implies each of the other two.
Hence the result.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 2$ Definition of the Natural Numbers




