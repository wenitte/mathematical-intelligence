# 

Source: https://proofwiki.org/wiki/Cycle_of_Subsets_implies_Set_Equality

Theorem
Let $A_1, A_2, \dotsc, A_n$ be sets.
Let:

$\forall k \in \set {2, 3, \dotsc, n}: A_{k - 1} \subseteq A_k$
and:

$A_n \subseteq A_1$

Then:

$\forall j, k \in \set {1, 2, \dotsc, n}: A_j = A_k$


Proof
Consider the set of sets $\mathbb A = \set {A_1, A_2, \dotsc, A_n}$
Consider the relational structure $S = \struct {\mathbb A, \subseteq}$.
We have from Subset Relation is Ordering that $S$ is an ordered structure.

The result follows from Ordering Cycle implies Equality.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 2$: Sets and Subsets: Exercise $3$




