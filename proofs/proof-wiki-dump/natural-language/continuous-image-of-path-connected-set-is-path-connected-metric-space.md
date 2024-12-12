# 

Source: https://proofwiki.org/wiki/Continuous_Image_of_Path-Connected_Set_is_Path-Connected/Metric_Space

Theorem
Let $M_1, M_2$ be metric spaces whose metrics are $d_1, d_2$ respectively.
Let $f: M_1 \to M_2$ be a continuous mapping.
Let $S \subseteq M_1$ be a path-connected subspace of $M_1$.

Then $f \sqbrk S$ is a path-connected subspace of $M_2$.


Proof
Let $\map f s, \map f {s'} \in f \sqbrk S$, for some $s, s' \in S$.
Let $\mathbb I$ denote the closed unit interval:

$\mathbb I = \closedint 0 1$
Let $p: \mathbb I \to S$ be a continuous mapping such that:

$\map p 0 = s, \map p 1 = s'$
Such a $p$ exists since $S$ is a path-connected subspace of $M_1$.

Now define $q: \mathbb I \to f \sqbrk S$ by:

$\map q t := f \circ \map p t$
Then $q$ is a continuous mapping, being the composition of such, and:

$\map q 0 = \map f {\map p 0} = \map f s$
$\map q 1 = \map f {\map p 1} = \map f {s'}$

Thus $\map f s$ and $\map f {s'}$ are connected by a path in $f \sqbrk S$.
Since these points were arbitrary in $f \sqbrk S$, the result follows.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{III}$: Metric Spaces: Path-Connectedness




