# 

Source: https://proofwiki.org/wiki/Set_between_Connected_Set_and_Closure_is_Connected



Theorem
Let $T$ be a topological space.
Let $H$ be a connected set of $T$.

Let $H \subseteq K \subseteq H^-$, where $H^-$ denotes the closure of $H$. 

Then $K$ is connected.


Corollary 1
Let $T$ be a topological space.
Let $H$ be a connected set of $T$.
Let $H^-$ denote the closure of $H$ in $T$. 

Then $H^-$ is connected in $T$.


Corollary 2
Let $T = \struct {S, \tau}$ be a topological space.

Then every connected component of $T$ is closed.


Proof 1
Let $D$ be the discrete space $\set {0, 1}$.
Let $f: K \to D$ be an arbitrary continuous mapping.
From Continuity of Composite with Inclusion, the restriction $f \restriction_H$ is continuous.
We have that:

$H$ is connected
$f \restriction_H$ is continuous
Thus by definition of connected set:

$f \sqbrk H = \set 0$ or $f \sqbrk H = \set 1$

Without loss of generality, let $\map f H = \set 0$.
Aiming for a contradiction, suppose $\exists k \in K: \map f k = 1$.
By definition of discrete space, $\set 1$ is open in $D$.
Hence by definition of continuous mapping:

$f^{-1} \sqbrk {\set 1}$ is open in $K$.
Let $K$ be given the subspace topology.
Then for some $U$ open in $T$:

$f^{-1} \sqbrk {\set 1} = K \cap U$
We have that:

$k \in f^{-1} \sqbrk {\set 1} \subseteq U$
and:

$k \in H^-$
By definition of topology:

$\exists x \in H \cap U$
As $x \in H$, we have that:

$\map f x = 0$
But because $x \in H \cap U \subseteq K \cap U = f^{-1} \sqbrk {\set 1}$:

$\map f x = 1$
This contradicts the definition of mapping.
Thus by Proof by Contradiction, $f: K \to D$ can not be a surjection.
Thus $K$ is connected.
$\blacksquare$


Proof 2
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
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness




