# 

Source: https://proofwiki.org/wiki/Product_of_Finite_Sets_is_Finite/Proof_1

Theorem
Let $S$ and $T$ be finite sets.

Then $S \times T$ is a finite set.


Proof
By the definition of Cartesian product:

$S \times T = \set {\tuple {s, t}: s \in S, t \in T}$
Then by definition of set union:

$S \times T = \ds \bigcup_{s \mathop \in S} \set s \times T$
Also, the mapping $g_s: \set s \times T \to T$ defined by:

$\map {g_s} {s, t} = t$
is a bijection.
Therefore, since $T$ is finite, so is $\set s \times T$ for all $s \in S$.
Since $S$ is finite, the result follows from Finite Union of Finite Sets is Finite.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 6$: Finite Sets: Corollary $6.8$




