# 

Source: https://proofwiki.org/wiki/Inclusion_Mapping_on_Subgroup_is_Homomorphism

Theorem
Let $\struct {G, \circ}$ be a group.
Let $\struct {H, \circ_{\restriction H} }$ be a subgroup of $G$.
Let $i: H \to G$ be the inclusion mapping from $H$ to $G$.

Then $i$ is a group homomorphism.


Proof
Let $x, y \in H$.
From Group Axiom $\text G 0$: Closure, $x \circ_{\restriction H} y \in H$.
Then:














\(\ds \map i {x \circ_{\restriction H} y}\)

\(=\)







\(\ds x \circ_{\restriction H} y\)





Definition of Inclusion Mapping














\(\ds \)

\(=\)







\(\ds x \circ y\)





Definition of Restriction














\(\ds \)

\(=\)







\(\ds \map i x \circ \map i y\)





Definition of Inclusion Mapping



Hence the result by definition of group homomorphism.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Morphisms




