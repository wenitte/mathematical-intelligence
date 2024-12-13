# 

Source: https://proofwiki.org/wiki/Matroid_Contains_No_Loops_iff_Empty_Set_is_Flat



Theorem
Let $M = \struct{S, \mathscr I}$ be a matroid.

Then:

$M$ contains no loops if and only if the empty set is flat.


Proof
Let $\rho: \powerset S \to \Z$ denote the rank function of $M$.


Necessary Condition
Let $M$ contain no loops.
By definition of a loop:

$\forall x \in S : \set x \in \mathscr I$

Let $x \in S \setminus \O$.
Then:














\(\ds \map \rho {\O \cup \set x}\)

\(=\)







\(\ds \map \rho {\set x}\)





Union with Empty Set














\(\ds \)

\(=\)







\(\ds \size {\set x}\)





Rank of Independent Subset Equals Cardinality














\(\ds \)

\(=\)







\(\ds 1\)





Cardinality of Singleton














\(\ds \)

\(=\)







\(\ds 0 + 1\)




















\(\ds \)

\(=\)







\(\ds \map \rho \O + 1\)





Rank of Empty Set is Zero



It follows that $\O$ is a flat subset by definition.
$\Box$


Sufficient Condition
Let $\O$ be a flat subset.
Let $x \in S$.
From Set Difference with Empty Set is Self

$x \in S \setminus \O$













\(\ds \map \rho {\set x}\)

\(=\)







\(\ds \map \rho {\O \cup \set x}\)





Union with Empty Set














\(\ds \)

\(=\)







\(\ds \map \rho \O + 1\)





Definition of Flat Subset














\(\ds \)

\(=\)







\(\ds 0 + 1\)





Rank of Empty Set is Zero














\(\ds \)

\(=\)







\(\ds 1\)









From Element is Loop iff Rank is Zero:

$x$ is not a loop

It follows that $M$ contains no loops.
$\blacksquare$


Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 4.$ Loops and parallel elements




