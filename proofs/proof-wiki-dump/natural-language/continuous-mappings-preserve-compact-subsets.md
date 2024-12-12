# 

Source: https://proofwiki.org/wiki/Continuous_Mappings_preserve_Compact_Subsets

Theorem
Let $X, Y$ be normed vector spaces.
Let $K \subseteq X$ be a compact subset.
Suppose $f : X \to Y$ is a continuous mapping at each $x \in K$.

Then $\map f K$ is a compact subset of $Y$.


Proof
Let $\sequence {y_n}_{n \mathop \in \N}$ be a sequence contained in $\map f K$.
Then:

$\forall n \in \N : \exists x_n \in K : y_n = \map f {x_n}$
$K$ is compact.
By definition, there is a convergent subsequence $\sequence {x_{n_k}}_{k \mathop \in \N}$ convergent with the limit $L \in K$.
$f$ is a continuous mapping.
By Continuous Mappings preserve Convergent Sequences, $\sequence {\map f {x_{n_k}}}_{k \mathop \in \N} = \sequence {y_{n_k}}_{k \mathop \in \N}$ is convergent with limit $\map f L \in \map f K$.
By definition, $\map f K$ is compact.
$\blacksquare$

Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.2$: Continuous and linear maps. Continuous maps




