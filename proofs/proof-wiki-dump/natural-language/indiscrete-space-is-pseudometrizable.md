# 

Source: https://proofwiki.org/wiki/Indiscrete_Space_is_Pseudometrizable

Theorem
Let $T = \struct {S, \set {\O, S} }$ be an indiscrete topological space.
Then $T$ is pseudometrizable.


Proof
Let $d: S \times S \to \R$ be the mapping defined as:

$\forall x, y \in S: \map d {x, y} = 0$
Then clearly $d$ is a pseudometric.

Let $\struct {S, \tau_{\struct {S, d} } }$ be the topological space induced by $d$.
Since $\struct {S, \tau_{\struct {S, d} } }$ is a topological space, by Empty Set is Element of Topology we have that $\O$ is open.

For any $\epsilon \in \R_{>0}$ we have:

$\map {B_\epsilon} a := \set {x \in S: \map d {x, a} < \epsilon} = S$
where $\map {B_\epsilon} a$ is the open $\epsilon$-ball of $a$.

Let $U\subset S$ be a non-empty open set.
By Open Sets in Pseudometric Space we see that for every $x \in U$, there must exist an $\epsilon > 0$ such that $\map {B_\epsilon} x \subset U$.
However, $S \subset \map {B_\epsilon} x$.
Thus $U = S$.
Hence it is seen that $\O$ and $S$ are the only open sets of this resulting pseudometric space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $4$. Indiscrete Topology: $11$




