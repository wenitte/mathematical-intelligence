# 

Source: https://proofwiki.org/wiki/Composition_of_Ring_Homomorphisms_is_Ring_Homomorphism/Proof_2

Theorem
Let:

$\struct {R_1, +_1, \odot_1}$
$\struct {R_2, +_2, \odot_2}$
$\struct {R_3, +_3, \odot_3}$
be rings.
Let:

$\phi: \struct {R_1, +_1, \odot_1} \to \struct {R_2, +_2, \odot_2}$
$\psi: \struct {R_2, +_2, \odot_2} \to \struct {R_3, +_3, \odot_3}$
be homomorphisms.

Then the composite of $\phi$ and $\psi$ is also a homomorphism.


Proof
Let $\psi \circ \phi$ denote the composite of $\phi$ and $\psi$.
Then what we are trying to prove is denoted:

$\paren {\psi \circ \phi}: \struct {R_1, +_1, \odot_1} \to \struct {R_3, +_3, \odot_3}$ is a homomorphism.

To prove the above is the case, we need to demonstrate that the morphism property is held by $+_1$ and $\odot_1$ under $\psi \circ \phi$.

We take two elements $x, y \in R_1$, and put them through the following wringer with respect to $+_1$:














\(\ds \map {\paren {\psi \circ \phi} } {x +_1 y}\)

\(=\)







\(\ds \map \psi {\map \phi {x +_1 y} }\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map \psi {\map \phi x +_2 \map \phi y}\)





Morphism Property applied to $+_1$ under $\phi$














\(\ds \)

\(=\)







\(\ds \map \psi {\map \phi x} +_3 \map \psi {\map \phi y}\)





Morphism Property applied to $+_2$ under $\psi$














\(\ds \)

\(=\)







\(\ds \map {\paren {\psi \circ \phi} } x +_3 \map {\paren {\psi \circ \phi} } y\)





Definition of Composition of Mappings




The same applies to $\odot_1$:














\(\ds \map {\paren {\psi \circ \phi} } {x \odot_1 y}\)

\(=\)







\(\ds \map \psi {\map \phi {x \odot_1 y} }\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map \psi {\map \phi x \odot_2 \map \phi y}\)





Morphism Property applied to $\odot_1$ under $\phi$














\(\ds \)

\(=\)







\(\ds \map \psi {\map \phi x} \odot_3 \map \psi {\map \phi y}\)





Morphism Property applied to $\odot_2$ under $\psi$














\(\ds \)

\(=\)







\(\ds \map {\paren {\psi \circ \phi} } x \odot_3 \map {\paren {\psi \circ \phi} } y\)





Definition of Composition of Mappings




Disentangling the confusing and tortuous expressions above, we (eventually) see that this shows that the morphism property is indeed held by both $+_1$ and $\circ_1$ under $\psi \circ \phi$.

Thus $\paren {\psi \circ \phi}: \struct {R_1, +_1, \odot_1} \to \struct {R_3, +_3, \odot_3}$ is a homomorphism.
$\blacksquare$





