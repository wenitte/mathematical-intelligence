# 

Source: https://proofwiki.org/wiki/Continuity_of_Composite_with_Inclusion/Uniqueness_of_Induced_Topology

Theorem
Let $T = \struct {A, \tau}$ and $T' = \struct {A', \tau'}$ be topological spaces.
Let $H \subseteq A$.
Let $T_H = \struct {H, \tau_H}$ be a topological subspace of $T$.
Let $i: H \to A$ be the inclusion mapping.

Let $g: A' \to H$ be a mapping.
The induced topology $\tau_H$ is the only topology on $H$ satisfying Continuity of Composite with Inclusion: Inclusion on Mapping for all possible $g$.


Proof
Suppose $\tau$ is a topology on $H$ such that:

$(1) \quad$ For any topological space $T' = \struct {A', \tau'}$, and
$(2) \quad$ For any mapping $g: A' \to H$:
$g$ is $\tuple {\tau', \tau}$-continuous if and only if $i \circ g$ is $\tuple {\tau', \tau}$-continuous.
It needs to be shown that $\tau$ must be the same as $\tau_H$.

Let $A' = H$ and $\tau' = \tau$.
Let $g$ be the identity mapping on $H$.
From Identity Mapping is Continuous, $g$ is $\tuple {\tau, \tau}$-continuous
Thus from Composite of Continuous Mappings is Continuous, $i \circ g$ is $\tuple {\tau, \tau}$-continuous.
Hence for any $U \in \tau$:

$\map {\paren {i \circ g}^{-1} } U \in \tau$
But:

$\map {\paren {i \circ g}^{-1} } U = \map {i^{-1} } U = U \cap H$
Hence $\tau_H \subseteq \tau$.

Next, take take $A' = H$ and $\tau' = \tau_H$.
Let $g$ be the identity mapping on $H$.
We have that $i \circ g = i$ is $\tuple {\tau_H, \tau}$-continuous,
From Continuity of Composite with Inclusion: Inclusion on Mapping, it follows that $g$ is $\tuple {\tau_H, \tau}$-continuous.
But by definition of continuity, this is the same as saying $\tau \subseteq \tau_H$.
So $\tau = \tau_H$, as required.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.4$: Subspaces: Proposition $3.4.3$




