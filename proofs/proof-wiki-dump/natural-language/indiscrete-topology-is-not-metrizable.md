# 

Source: https://proofwiki.org/wiki/Indiscrete_Topology_is_not_Metrizable

Theorem
Let $S$ be a set with more than one element.
The indiscrete topology on $S$ is not metrizable.


Proof
In order to be metrizable, there needs to be a metric $d$ on $S$, so that $\struct {S, d}$ is a metric space.
As $S$ has more than one element, $\exists x, y \in S: x \ne y$.
Then:

$\epsilon = \map d {x, y} > 0$
So the open $\epsilon$-ball $\map {B_{\epsilon / 2} } x$ is $d$-open.
Hence $\map {B_{\epsilon / 2} } x$ is in the topology which $d$ induces.
But $x \in \map {B_{\epsilon / 2} } x$ while $y \notin \map {B_{\epsilon / 2} } x$.
Thus $\map {B_{\epsilon / 2} } x \ne \O$ and $\map {B_{\epsilon / 2} } x \ne S$.
So the topology induced by $d$ is not the indiscrete topology.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 12$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.1$: Topological Spaces: Example $3.1.6$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $4$. Indiscrete Topology: $11$




