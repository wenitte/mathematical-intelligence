# 

Source: https://proofwiki.org/wiki/Composite_of_Homomorphisms_is_Homomorphism/Algebraic_Structure

Theorem
Let:

$\struct {S_1, \otimes_1, \otimes_2, \ldots, \otimes_n}$
$\struct {S_2, *_1, *_2, \ldots, *_n}$
$\struct {S_3, \oplus_1, \oplus_2, \ldots, \oplus_n}$
be algebraic structures.
Let:

$\phi: \struct {S_1, \otimes_1, \otimes_2, \ldots, \otimes_n} \to \struct {S_2, *_1, *_2, \ldots, *_n}$
$\psi: \struct {S_2, *_1, *_2, \ldots, *_n} \to \struct {S_3, \oplus_1, \oplus_2, \ldots, \oplus_n}$
be homomorphisms.
Then the composite of $\phi$ and $\psi$ is also a homomorphism.


Proof
Let $\psi \circ \phi$ denote the composite of $\phi$ and $\psi$.
Then what we are trying to prove is denoted:

$\paren {\psi \circ \phi}: \struct {S_1, \otimes_1, \otimes_2, \ldots, \otimes_n} \to \struct {S_3, \oplus_1, \oplus_2, \ldots, \oplus_n}$ is a homomorphism.

To prove the above is the case, we need to demonstrate that the morphism property is held by each of the operations $\otimes_1, \otimes_2, \ldots, \otimes_n$ under $\psi \circ \phi$.
Let $\otimes_k$ be one of these operations.

We take two elements $x, y \in S_1$, and put them through the following wringer:














\(\ds \map {\paren {\psi \circ \phi} } {x \otimes_k y}\)

\(=\)







\(\ds \map \psi {\map \phi {x \otimes_k y} }\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map \psi {\map \phi x *_k \map \phi y}\)





Definition of Morphism Property














\(\ds \)

\(=\)







\(\ds \map \psi {\map \phi x} \oplus_k \map \psi {\map \phi y}\)





Definition of Morphism Property














\(\ds \)

\(=\)







\(\ds \map {\paren {\psi \circ \phi} } x \oplus_k \map {\paren {\psi \circ \phi} } y\)





Definition of Composition of Mappings




Disentangling the confusing and tortuous expressions above, we (eventually) see that this shows that the morphism property is indeed held by $\otimes_k$ under $\psi \circ \phi$.
As this holds for any arbitrary operation $\otimes_k$ in $\struct {S_1, \otimes_1, \otimes_2, \ldots, \otimes_n}$, it follows that it holds for all of them.
Thus $\paren {\psi \circ \phi}: \struct {S_1, \otimes_1, \otimes_2, \ldots, \otimes_n} \to \struct {S_3, \oplus_1, \oplus_2, \ldots, \oplus_n}$ is indeed a homomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Theorem $12.4$
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\S 1.2$




