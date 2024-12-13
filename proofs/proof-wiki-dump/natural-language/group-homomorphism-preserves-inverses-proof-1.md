# 

Source: https://proofwiki.org/wiki/Group_Homomorphism_Preserves_Inverses/Proof_1

Theorem
Let $\struct {G, \circ}$ and $\struct {H, *}$ be groups.
Let $\phi: \struct {G, \circ} \to\struct {H, *}$ be a group homomorphism.
Let:

$e_G$ be the identity of $G$
$e_H$ be the identity of $H$

Then:

$\forall x \in G: \map \phi {x^{-1} } = \paren {\map \phi x}^{-1}$


Proof
Let $x \in G$.

Then:














\(\ds \map \phi x * \map \phi {x^{-1} }\)

\(=\)







\(\ds \map \phi {x \circ x^{-1} }\)





Definition of Group Homomorphism














\(\ds \)

\(=\)







\(\ds \map \phi {e_G}\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds e_H\)





Group Homomorphism Preserves Identity



So, by definition, $\map \phi {x^{-1} }$ is the right inverse of $\map \phi x$.
$\Box$

Similarly:














\(\ds \map \phi {x^{-1} } * \map \phi x\)

\(=\)







\(\ds \map \phi {x^{-1} \circ x}\)





Definition of Group Homomorphism














\(\ds \)

\(=\)







\(\ds \map \phi {e_G}\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds e_H\)





Group Homomorphism Preserves Identity



So, again by definition, $\map \phi {x^{-1} }$ is the left inverse of $\map \phi x$.
$\Box$

Finally, as $\map \phi {x^{-1} }$ is both:

a left inverse of $\map \phi x$
and:

a right inverse of $\map \phi x$
it is by definition an inverse.
From Inverse in Group is Unique, $\map \phi {x^{-1} }$ is the only such element.
Hence the result.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Morphisms
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 47.2$ Homomorphisms and their elementary properties
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms




