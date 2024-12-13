# 

Source: https://proofwiki.org/wiki/Preimage_of_Subset_of_Cartesian_Product_under_Injection_from_Factor

Theorem
Let $S$ and $T$ be sets such that $T \ne \O$.
Let $S \times T$ denote their cartesian product.
Let $t \in T$ be given.

Let $j_t: S \to S \times T$ be the injection from $S$ to $S \times T$ defined as:

$\forall s \in S: \map {j_t} s = \tuple {s, t}$

Let $W \subseteq S \times T$.
Let $V = {j_t}^{-1} \sqbrk W$ denote the preimage of $W$ under $j_t$.

Then:

$V = \set {s \in S : \tuple {s, t} \in W}$


Proof
That $j_t$ is actually an injection is demonstrated in Mapping from Set to Ordinate of Cartesian Product is Injection.
Then:














\(\ds V\)

\(=\)







\(\ds {j_t}^{-1} \sqbrk W\)




















\(\ds \)

\(=\)







\(\ds \set {s \in S : \map {j_t} s \in W}\)




















\(\ds \)

\(=\)







\(\ds \set {s \in S : \tuple {s, t} \in W}\)









$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 6$: Functions: Exercise $6$




