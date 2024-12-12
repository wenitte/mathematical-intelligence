# 

Source: https://proofwiki.org/wiki/Compact_Subset_of_Hilbert_Sequence_Space_is_Nowhere_Dense

Theorem
Let $A$ be the set of all real sequences $\sequence {x_i}$ such that the series $\ds \sum_{i \mathop \ge 0} x_i^2$ is convergent.
Let $\ell^2 = \struct {A, d_2}$ be the Hilbert sequence space on $\R$.
Let $H$ be a compact subset of $\ell^2$.

Then $H$ is nowhere dense in $\ell^2$.


Proof
By Compact Subset of Hilbert Sequence Space is Closed, $H$ is a closed set of $\ell^2$.
From Set is Closed iff Equals Topological Closure:

$H^- = H$
where $H^-$ denotes the closure of $H$.
From Subset of Hilbert Sequence Space with Non-Empty Interior is not Compact:

$H^\circ = \O$
where $H^\circ$ denotes the interior of $H$.
Thus:

$\paren {H^-}^\circ = \O$
and the result follows by definition of nowhere dense.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $36$. Hilbert Space: $4$




