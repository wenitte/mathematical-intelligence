# 

Source: https://proofwiki.org/wiki/Dynkin_System_Closed_under_Disjoint_Union

Theorem
Let $X$ be a set, and let $\DD$ be a Dynkin system on $X$.
Let $D, E \in \DD$ be disjoint.

Then the union $D \cup E$ is also an element of $\DD$.


Proof
Define $D_1 = D, D_2 = E$, and for $n \ge 2$, $D_n = \O$.
Then by Dynkin System Contains Empty Set:

$\forall n \in \N: D_n \in \DD$
Also, by Intersection with Empty Set, it follows that $\sequence {D_n}_{n \mathop \in \N}$ is a pairwise disjoint sequence.

Hence, by property $(3)$ of a Dynkin system:

$\ds D \cup E = \bigcup_{n \mathop \in \N} D_n \in \DD$
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $5.2$, $\S 5$: Problem $1$




