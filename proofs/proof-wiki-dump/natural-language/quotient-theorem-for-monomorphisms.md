# 

Source: https://proofwiki.org/wiki/Quotient_Theorem_for_Monomorphisms

Theorem
Let $K, L$ be fields of quotients of integral domains $\struct {R, +_R, \circ_R}, \struct {S, +_S, \circ_S}$ respectively.
Let $\phi: R \to S$ be a monomorphism.

Then there is one and only one monomorphism $\psi: K \to L$ extending $\phi$, and:

$\forall x \in R, y \in R^*: \map \psi {\dfrac x y} = \dfrac {\map \phi x} {\map \phi y}$

Also, if $\phi$ is a ring isomorphism, then so is $\psi$.


Proof
By definition, $\struct {K, \circ_R}$ and $\struct {L, \circ_S}$ are inverse completions of $\struct {R, \circ_R}$ and $\struct {S, \circ_S}$ respectively.


The validity of the material on this page is questionable.In particular: this is not the definitionYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
So by the Extension Theorem for Homomorphisms, there is one and only one monomorphism $\psi: \struct {K, \circ_R} \to \struct {L, \circ_S$ extending $\phi$.

Thus:

$\forall x \in R, y \in R^*: \map \psi {\dfrac x y} = \dfrac {\map \phi x} {\map \phi y}$

By the Extension Theorem for Isomorphisms, $\psi$ is an isomorphism if $\phi$ is.
Thus, $\forall x, y \in R, z, w \in R^*$:














\(\ds \map \psi {\frac x z +_R \frac y w}\)

\(=\)







\(\ds \map \psi {\frac {\paren {x \circ_R w} +_R \paren {y \circ_R z} } {z \circ_R w} }\)





Addition of Division Products














\(\ds \)

\(=\)







\(\ds \frac {\map \phi {\paren {x \circ_R w} +_R \paren {y \circ_R z} } } {\map \phi {z \circ_R w} }\)





Definition of $\psi$














\(\ds \)

\(=\)







\(\ds \frac {\paren {\map \phi x \circ_S \map \phi w} +_S \paren {\map \phi y \circ_S \map \phi z} } {\map \phi z \circ_S \map \phi w}\)





Morphism Property














\(\ds \)

\(=\)







\(\ds \frac {\map \phi x} {\map \phi z} +_S \frac {\map \phi y} {\map \phi w}\)





Addition of Division Products














\(\ds \)

\(=\)







\(\ds \map \psi {\frac x z} +_S \map \psi {\frac y w}\)





Definition of $\psi$



Thus $\psi: K \to L$ is a monomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $23$. The Field of Rational Numbers: Theorem $23.10$




