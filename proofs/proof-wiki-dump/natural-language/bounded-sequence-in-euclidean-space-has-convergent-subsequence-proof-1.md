# 

Source: https://proofwiki.org/wiki/Bounded_Sequence_in_Euclidean_Space_has_Convergent_Subsequence/Proof_1

Theorem
Let $\sequence {x_i}_{i \mathop \in \N}$ be a bounded sequence in the Euclidean space $\R^n$.
Then some subsequence of $\sequence {x_i}_{i \mathop \in \N}$ converges to a limit.


Proof
Denote with $d$ the Euclidean metric on $\R^n$.
Because $\sequence {x_i}_{i \mathop \in \N}$ is bounded, we find $v \in \R^n$ and $\epsilon \in \R_{>0}$ such that:

$\forall i \in \N: \map d {v, x_i} < \epsilon$
Therefore, all $x_i$ are members of the closed $\epsilon$-ball $S = \map {B_\epsilon^-} v$.
By Closed Ball in Euclidean Space is Compact, $S$ is compact.
Thus $\sequence {x_i}_{i \mathop \in \N}$ can be considered as a sequence in the compact metric space $\struct {S, d \restriction_{S \times S} }$.

By Compact Subspace of Metric Space is Sequentially Compact in Itself, $\sequence {x_i}_{i \mathop \in \N}$ has a convergent subsequence in $S$.
In particular, since $S$ is a metric subspace of $\R^n$, it follows that $\sequence {x_i}_{i \mathop \in \N}$ has a convergent subsequence in $\R^n$ as well.
$\blacksquare$


Sources
1953: Walter Rudin: Principles of Mathematical Analysis: $3.6b$




