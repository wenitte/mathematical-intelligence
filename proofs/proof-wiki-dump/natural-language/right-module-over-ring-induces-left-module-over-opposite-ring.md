# 

Source: https://proofwiki.org/wiki/Right_Module_over_Ring_Induces_Left_Module_over_Opposite_Ring



Theorem
Let $\struct {R, +_R, \times_R}$ be a ring.
Let $\struct {R, +_R, *_R}$ be the opposite ring of $\struct {R, +_R, \times_R}$.
Let $\struct{G, +_G, \circ}$ be a right module over $\struct {R, +_R, \times_R}$.
Let $\circ' : R \times G \to G$ be the binary operation defined by:

$\forall \lambda \in R: \forall x \in G: \lambda \circ' x = x \circ \lambda$

Then $\struct {G, +_G, \circ'}$ is a left module over $\struct {R, +_R, *_R}$.


Proof
It is shown that $\struct {G, +_G, \circ'}$ satisfies the left module axioms.
By definition of the opposite ring:

$\forall x, y \in S: x *_R y = y \times_R x$.


Left Module Axiom $\text M 1$: (Left) Distributivity over Module Addition
Let $\lambda \in R$ and $x, y \in G$.














\(\ds \lambda \circ' \paren{x +_G y}\)

\(=\)







\(\ds \paren {x +_G y} \circ \lambda\)





Definition of $\circ’$














\(\ds \)

\(=\)







\(\ds x \circ \lambda +_G y \circ  \lambda\)





Right Module Axiom $\text {RM} 1$: (Right) Distributivity over Module Addition on $\struct{G, +_G, \circ}$














\(\ds \)

\(=\)







\(\ds \lambda \circ' x +_G \lambda \circ' y\)





Definition of $\circ’$



$\Box$


Left Module Axiom $\text M 2$: (Right) Distributivity over Scalar Addition
Let $\lambda, \mu \in R$ and $x \in G$.














\(\ds \paren {\lambda +_R \mu} \circ' x\)

\(=\)







\(\ds x \circ \paren {\lambda +_R \mu}\)





Definition of $\circ’$














\(\ds \)

\(=\)







\(\ds x \circ \lambda +_G x \circ  \mu\)





Right Module Axiom $\text {RM} 2$: (Left) Distributivity over Scalar Addition on $\struct{G, +_G, \circ}$














\(\ds \)

\(=\)







\(\ds \lambda \circ' x +_G \mu \circ' x\)





Definition of $\circ’$



$\Box$


Left Module Axiom $\text M 3$: Associativity
Let $\lambda, \mu \in R$ and $x \in G$.














\(\ds \paren {\lambda *_R \mu} \circ' x\)

\(=\)







\(\ds x \circ \paren {\lambda *_R \mu}\)





Definition of $\circ’$














\(\ds \)

\(=\)







\(\ds x \circ \paren {\mu \times_R \lambda}\)





Definition of $*_R$














\(\ds \)

\(=\)







\(\ds \paren {x \circ  \mu} \circ \lambda\)





Right Module Axiom $\text {RM} 3$: Associativity on $\struct {G, +_G, \circ}$














\(\ds \)

\(=\)







\(\ds \paren {\mu \circ' x} \circ \lambda\)





Definition of $\circ’$














\(\ds \)

\(=\)







\(\ds \lambda \circ' \paren {\mu \circ' x}\)





Definition of $\circ'$



$\blacksquare$


Also see
Left Module over Ring Induces Right Module over Opposite Ring


Sources
2003: P.M. Cohn: Basic Algebra: Groups, Rings and Fields ... (previous) ... (next): Chapter $4$: Rings and Modules: $\S 4.1$: The Definitions Recalled




