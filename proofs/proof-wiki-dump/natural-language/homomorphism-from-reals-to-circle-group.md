# 

Source: https://proofwiki.org/wiki/Homomorphism_from_Reals_to_Circle_Group



Theorem
Let $\struct {\R, +}$ be the additive group of real numbers.
Let $\struct {K, \times}$ be the circle group.
Let $\phi: \struct {\R, +} \to \struct {K, \times}$ be the mapping defined as:

$\forall x \in \R: \map \phi x = e^{i x}$

Then $\phi$ is a (group) homomorphism.


Corollary
Let $\struct {\R, +}$ be the additive group of real numbers.
Let $\struct {C_{\ne 0}, \times}$ be the multiplicative group of complex numbers.
Let $\phi: \struct {\R, +} \to \struct {C_{\ne 0}, \times}$ be the mapping defined as:

$\forall x \in \R: \map \phi x = \cos x + i \sin x$

Then $\phi$ is a (group) homomorphism.


Proof
Let $x, y \in \R$.
Then:














\(\ds \map \phi x \times \map \phi y\)

\(=\)







\(\ds e^{i x} e^{i y}\)




















\(\ds \)

\(=\)







\(\ds e^{i \paren {x + y} }\)




















\(\ds \)

\(=\)







\(\ds \map \phi {x + y}\)









$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Morphisms




