# 

Source: https://proofwiki.org/wiki/Set_between_Connected_Set_and_Closure_is_Connected/Proof_1

Theorem
Let $T$ be a topological space.
Let $H$ be a connected set of $T$.

Let $H \subseteq K \subseteq H^-$, where $H^-$ denotes the closure of $H$. 

Then $K$ is connected.


Proof
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


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $6.2$: Connectedness: Proposition $6.2.18$




