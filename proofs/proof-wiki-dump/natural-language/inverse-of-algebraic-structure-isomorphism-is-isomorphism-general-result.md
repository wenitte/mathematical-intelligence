# 

Source: https://proofwiki.org/wiki/Inverse_of_Algebraic_Structure_Isomorphism_is_Isomorphism/General_Result

Theorem
Let $\phi: \struct {S, \circ_1, \circ_2, \ldots, \circ_n}$ and $\struct {T, *_1, *_2, \ldots, *_n}$ be algebraic structures.
Let $\phi: \struct {S, \circ_1, \circ_2, \ldots, \circ_n} \to \struct {T, *_1, *_2, \ldots, *_n}$ be a mapping.

Then:

$\phi: \struct {S, \circ_1, \circ_2, \ldots, \circ_n} \to \struct {T, *_1, *_2, \ldots, *_n}$ is an isomorphism
if and only if:

$\phi^{-1}: \struct {T, *_1, *_2, \ldots, *_n} \to \struct {S, \circ_1, \circ_2, \ldots, \circ_n}$ is also an isomorphism.


Proof
As $\paren {\phi^{-1} }^{-1} = \phi$, it suffices to show the sufficient condition.
Suppose that $\phi$ is an isomorphism.
We shall show that $\phi^{-1}$ is also an isomorphism.
We have a fortiori that $\phi$ is a bijection.
Hence from Inverse of Bijection is Bijection we have that $\phi^{-1}$ is also a bijection.

Then for all $x, y \in T$ and $i \in \set {1, 2, \ldots, n}$:














\(\ds x \ast_i y\)

\(=\)







\(\ds \map \phi {\map {\phi^{-1} } x} \ast_i \map \phi {\map {\phi^{-1} } y}\)





Definition 2 of Inverse Mapping














\(\ds \)

\(=\)







\(\ds \map \phi {\map {\phi^{-1} } x \circ_i \map {\phi^{-1} } y}\)





as $\phi$ is a homomorphism








\(\ds \leadsto \ \ \)





\(\ds \map {\phi^{-1} } {x \ast_i y}\)

\(=\)







\(\ds \map {\phi^{-1} } {\map \phi {\map {\phi^{-1} } x \circ_i \map {\phi^{-1} } y} }\)





applying $\phi^{-1}$ to both sides














\(\ds \)

\(=\)







\(\ds \map {\phi^{-1} } x \circ_i \map {\phi^{-1} } y\)





Definition 2 of Inverse Mapping



Therefore $\phi^{-1}$ is a homomorphism.
$\blacksquare$





