# 

Source: https://proofwiki.org/wiki/Heine-Borel_Theorem/Normed_Vector_Space/Necessary_Condition

Theorem
Let $\struct {X, \norm {\, \cdot \,} }$ be a finite-dimensional normed vector space.
Let $K \subseteq X$ be closed and bounded.

Then $K$ is a compact subset.


Proof
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence in $K$.
$\sequence {x_n}_{n \mathop \in \N}$ is bounded.
We have that bounded sequence in finite-dimensional space has a convergent subsequence.
Hence, $\sequence {x_n}_{n \mathop \in \N}$ has a convergent subsequence $\sequence {x_{n_k} }_{k \mathop \in \N}$.
Denote the limit $\ds \lim_{k \mathop \to \infty} \sequence {x_{n_k} } = L$.
By assumption, $K$ is closed.
By equivalence of definitions, $L \in K$.
By definition, $K$ is compact.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 1.5$: Normed and Banach spaces. Compact sets




