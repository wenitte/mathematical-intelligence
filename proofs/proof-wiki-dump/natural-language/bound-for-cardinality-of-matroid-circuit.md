# 

Source: https://proofwiki.org/wiki/Bound_for_Cardinality_of_Matroid_Circuit

Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $C \subseteq S$ be a circuit of $M$.
Let $\rho: \powerset S \to \Z$ denote the rank function of $M$.

Then:

$\card C \le \map \rho S + 1$


Proof
By definition of a circuit:

$C$ is dependent
By matroid axiom $(\text I 1)$:

$C \ne \O$

Let $x \in C$.
From Set Difference is Subset and Set Difference with Disjoint Set:

$C \setminus \set x \subsetneq C$
From Proper Subset of Matroid Circuit is Independent and matroid axiom $(\text I 1)$:

$C \setminus \set x \in \mathscr I$

We have:














\(\ds \map \rho S\)

\(\ge\)







\(\ds \card {C \setminus \set x}\)





Definition of Rank Function














\(\ds \)

\(=\)







\(\ds \card C - \card {\set x}\)





Cardinality of Set Difference with Subset














\(\ds \)

\(=\)







\(\ds \card C - 1\)





Cardinality of Singleton








\(\ds \leadsto \ \ \)





\(\ds \map \rho S + 1\)

\(\ge\)







\(\ds \card C\)





adding $1$ to both sides of the equation



$\blacksquare$


Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 9.$ Circuits




