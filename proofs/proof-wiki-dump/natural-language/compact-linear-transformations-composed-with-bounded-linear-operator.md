# 

Source: https://proofwiki.org/wiki/Compact_Linear_Transformations_Composed_with_Bounded_Linear_Operator

Theorem
Let $H, K$ be Hilbert spaces.
Let $T \in \map {B_0} {H, K}$ be a compact linear transformation.

Let $A \in \map B H, B \in \map B K$ be bounded linear operators.

Then the compositions $T A$ and $B T$ are also compact linear transformations.


Proof
Let $\sequence {h_n}_{n \in \N}$ is a bounded sequence in $H$.
That is, there exists a $M > 0$ such that:

$\forall n \in \N : \norm {h_n}_H \le M$
Then $\sequence {A h_n}_{n \in \N}$ is also bounded, since:

$\norm {A h_n}_H \le \norm {A}_{\map B H} \norm {h_n}_H \le \norm {A}_{\map B H} M$
As $T$ is compact,
the sequence $\sequence {T A h_n}_{n \in \N}$ has a subsequence convergent in $K$.
Hence $T A$ is compact.
$\Box$

Let $\sequence {k_n}_{n \in \N}$ is a bounded sequence in $K$.
As $T$ is compact,
the sequence $\sequence {T k_n}_{n \in \N}$ has a subsequence convergent in $H$.
Say $\sequence {T k_{n_r} }_{r \in \N}$ is convergent.
Recall that $B$ is continuous due to Continuity of Linear Transformation between Normed Vector Spaces.
Thus $\sequence {B T k_{n_r} }_{r \in \N}$ is convergent.
Hence $B T$ is compact.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {II}.4.2 \text {(c)}$




