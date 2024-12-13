# 

Source: https://proofwiki.org/wiki/Hilbert_Sequence_Space_is_Complete_Metric_Space

Theorem
Let $A$ be the set of all real sequences $\left\langle{x_i}\right\rangle$ such that the series $\ds \sum_{i \mathop = 0}^\infty x_i^2$ is convergent.
Let $\ell^2 = \struct {A, d_2}$ be the Hilbert sequence space on $\R$.

Then $\ell^2$ is a complete metric space.


Proof
We have that Hilbert Sequence Space is Metric Space.
It remains to be shown that it is complete.

Recall that from Real Number Line is Complete Metric Space, $\R$ is a complete metric space.
Let $x^1, x^2, x^3, \ldots$ be a Cauchy sequence $\ell^2$.
Then for each $i \in \N_{>0}$, we have that $\sequence { {x_i}^j}_{j \mathop \in \N_{>0} }$ is a Cauchy sequence in the complete metric space $\R$.
Thus $\sequence { {x_i}^j}_{j \mathop \in \N_{>0} }$ converges to a point in $\R$, say $x_i$.
Then if $x = \sequence {x_i}$, the points $x - x_j$ eventually belong to $H$.
So $x = \paren {x - x_j} + x^j$ must also belong to $H$.
Thus $\map {d_2} {x, x^j} = 0$.
Hence the result.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $36$. Hilbert Space: $1$




