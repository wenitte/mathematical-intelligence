# 

Source: https://proofwiki.org/wiki/Continuous_Image_of_Path-Connected_Set_is_Path-Connected



Theorem
Let $\struct {T_1, \tau_1}, \struct {T_2, \tau_2}$ be topological spaces.
Let $f: T_1 \to T_2$ be a continuous mapping.
Let $S \subseteq T_1$ be a subset of $T_1$.
Let $S$ be path-connected in $\struct {T_1, \tau_1}$.

Then $f \sqbrk S$ is path-connected in $\struct {T_2, \tau_2}$.


Metric Space
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
Such a $p$ exists since $S$ is path-connected in $\struct {T_1, \tau_1}$.

Now define $q: \mathbb I \to f \sqbrk S$ by:

$\map q t := f \circ \map p t$
Composite of Continuous Mappings is Continuous shows that $q$ is a continuous mapping, and:

$\map q 0 = \map f {\map p 0} = \map f s$
$\map q 1 = \map f {\map p 1} = \map f {s'}$

Thus $\map f s$ and $\map f {s'}$ are connected by a path in $f \sqbrk S$.
Since these points were arbitrary in $f \sqbrk S$, the result follows.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $6.3$: Path-connectedness (in passing)




