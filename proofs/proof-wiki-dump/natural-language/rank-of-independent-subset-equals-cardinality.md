# 

Source: https://proofwiki.org/wiki/Rank_of_Independent_Subset_Equals_Cardinality

Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $\rho : \powerset S \to \Z$ be the rank function of $M$.
Let $X \in \mathscr I$

Then:

$\map \rho X = \size X$


Proof













\(\ds \map \rho X\)

\(=\)







\(\ds \max \set {\size Y : Y \subseteq X \land X \in \mathscr I}\)





Definition of Rank Function (Matroid)














\(\ds \)

\(=\)







\(\ds \max \set {\size Y : Y \in \powerset X \land X \in \mathscr I}\)





Definition of Power Set of $X$














\(\ds \)

\(=\)







\(\ds \max \set {\size Y : Y \in \powerset X \cap \mathscr I}\)





Definition of Intersection














\(\ds \)

\(=\)







\(\ds \max \set {\size Y : Y \in \powerset X}\)





Matroid axiom $(\text I 2)$














\(\ds \)

\(=\)







\(\ds \size X\)





Cardinality of Proper Subset of Finite Set



$\blacksquare$





