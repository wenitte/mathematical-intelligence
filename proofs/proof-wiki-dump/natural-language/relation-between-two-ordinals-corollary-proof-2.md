# 

Source: https://proofwiki.org/wiki/Relation_between_Two_Ordinals/Corollary/Proof_2

Corollary to Relation between Two Ordinals
Let $S$ and $T$ be ordinals.
If $S \ne T$, then either $S$ is an initial segment of $T$, or vice versa.


Proof
If either $S \subset T$ or $T \subset S$ then we invoke Ordinal Subset of Ordinal is Initial Segment, and the proof is complete.

Aiming for a contradiction, suppose $S \not \subset T$ and $T \not \subset S$.
Now from Intersection is Subset, we have $S \cap T \subset T$ and $S \cap T \subset S$.
By Intersection of Two Ordinals is Ordinal‎, $S \cap T$ is an ordinal.
So by Ordinal Subset of Ordinal is Initial Segment, we have:

$S \cap T = S_a$ for some $a \in S$
$S \cap T = S_b$ for some $b \in T$
Then:

$a = S_a = S \cap T = T_b = b$
But $a \in S, b \in T$.
Thus $a = b = S \cap T$.
But $S \cap T = S_a$, so:

$x \in S \cap T \implies x \subset a$
In particular, this means $a \subset a$, which is a contradiction.
So either $S \subset T$ or $T \subset S$, and again we invoke Ordinal Subset of Ordinal is Initial Segment, and the proof is complete.
$\blacksquare$


Sources
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.7$: Well-Orderings and Ordinals: Theorem $1.7.9$




