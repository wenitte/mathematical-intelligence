# 

Source: https://proofwiki.org/wiki/Set_between_Connected_Set_and_Closure_is_Connected/Proof_2

Theorem
Let $T$ be a topological space.
Let $H$ be a connected set of $T$.

Let $H \subseteq K \subseteq H^-$, where $H^-$ denotes the closure of $H$. 

Then $K$ is connected.


Proof
Let $T_K = \struct {K, \tau_K}$ be the topological subspace of $T$ whose underlying set is $K$.
Let $\map {\cl_K} H$ denote the closure of $H$ in $K$.
From Closure of Subset in Subspace:

$\map {\cl_K} H = K \cap H^-$
By hypothesis:

$K \subseteq H^-$
and so by Intersection with Subset is Subset‎:

$\map {\cl_K} H = K$

Let $D$ be the discrete space $\set {0, 1}$.
Let $f: K \to D$ be any continuous mapping.
From Continuity of Composite with Inclusion, the restriction $f \restriction_H$ is continuous.
SWe have that:

$H$ is connected
$f \restriction_H$ is continuous
Thus by definition of connected set:

$f \sqbrk H = \set 0$ or $f \sqbrk H = \set 1$

Without loss of generality, let $f \sqbrk H = \set 0$.
From Continuity Defined by Closure:

$f \sqbrk {\map {\cl_K} H} \subseteq \map {\cl_K} {f \sqbrk H} = \set 0^-$
where $\set 0^-$ denotes the closure of $\set 0$ in $D$.
As $D$ is the discrete space, it follows from Set in Discrete Topology is Clopen that $\set 0$ is closed in $D$.
Thus by Set is Closed iff Equals Topological Closure:

$\set 0^- = \set 0$
That is, $f \sqbrk K = \set 0$.
Thus $K$ is connected by definition.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $6.2$: Connectedness: Proposition $6.2.18$




