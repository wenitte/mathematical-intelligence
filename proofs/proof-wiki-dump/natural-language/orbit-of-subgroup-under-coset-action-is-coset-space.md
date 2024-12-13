# 

Source: https://proofwiki.org/wiki/Orbit_of_Subgroup_under_Coset_Action_is_Coset_Space



Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $\powerset G$ be the power set of $G$.
Let $H \in \powerset G$ be a subgroup of $G$.

Let $*$ be the group action on $H$ defined as:

$\forall g \in G: g * H = g \circ H$
where $g \circ H$ is the (left) coset of $g$ by $H$.

Then the orbit of $H$ in $\powerset G$ is the (left) coset space of $H$:

$\Orb H = G / H^l$


Proof
From the definition of orbit:

$\Orb H = \set {y \in G: \exists g \in G: y = g \circ H}$
The result follows from the definition of (left) coset space.
$\blacksquare$


Also see
Subset Product Action is Group Action
Stabilizer of Subset Product Action on Power Set
Stabilizer of Coset Action on Set of Subgroups


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $10$: The Orbit-Stabiliser Theorem: Example $10.15$




