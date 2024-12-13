# 

Source: https://proofwiki.org/wiki/Orbit_of_Subgroup_Action_is_Coset

Theorem
Let $\struct {G, \circ}$ be a group.
Let $\struct {H, \circ}$ be a subgroup of $G$.
Let $*: H \times G \to G$ be the subgroup action defined for all $h \in H, g \in G$ as:

$\forall h \in H, g \in G: h * g := h \circ g$

The orbit of $x \in G$ is the right coset by $x$ of $H$:

$\Orb x = H x$


Proof
From Subgroup Action is Group Action we have that $*$ is a group action.
Let $x \in G$.
Then:














\(\ds \Orb x\)

\(=\)







\(\ds \set {g \in G: \exists h \in H: g = h * x}\)





Definition of Orbit














\(\ds \)

\(=\)







\(\ds \set {g \in G: \exists h \in H: g = h \circ x}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds H x\)









Hence the result, by definition of right coset.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $6$: Cosets: Exercise $8$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Sylow Theorems: $\S 54 \alpha$




