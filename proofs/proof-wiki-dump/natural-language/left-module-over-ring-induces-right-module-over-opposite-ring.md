# 

Source: https://proofwiki.org/wiki/Left_Module_over_Ring_Induces_Right_Module_over_Opposite_Ring



Theorem
Let $\struct {R, +_R, \times_R}$ be a ring.
Let $\struct {R, +_R, *_R}$ be the opposite ring of $\struct {R, +_R, \times_R}$.
Let $\struct{G, +_G, \circ}$ be a left module over $\struct {R, +_R, \times_R}$.
Let $\circ' : G \times R \to G$ be the binary operation defined by:

$\forall \lambda \in R: \forall x \in G: x \circ’ \lambda = \lambda \circ x$

Then $\struct{G, +_G, \circ'}$ is a right module over $\struct {R, +_R, *_R}$.


Proof
It is shown that $\struct{G, +_G, \circ'}$ satisfies the right module axioms.
By definition of the opposite ring:

$\forall x, y \in R: x *_R y = y \times_R x$


Right Module Axiom $\text {RM} 1$: (Right) Distributivity over Module Addition
Let $\lambda \in R$ and $x, y \in G$.














\(\ds \paren {x +_G y} \circ' \lambda\)

\(=\)







\(\ds \lambda \circ \paren{x +_G y}\)





Definition of $\circ’$














\(\ds \)

\(=\)







\(\ds \lambda \circ x +_G \lambda \circ  y\)





Left Module Axiom $\text M 1$: (Left) Distributivity over Module Addition on $\struct {G, +_G, \circ}$














\(\ds \)

\(=\)







\(\ds x \circ' \lambda +_G y \circ' \lambda\)





Definition of $\circ'$



$\Box$


Right Module Axiom $\text {RM} 2$: (Left) Distributivity over Scalar Addition
Let $\lambda, \mu \in R$ and $x \in G$.














\(\ds x \circ' \paren {\lambda +_S \mu}\)

\(=\)







\(\ds \paren {\lambda +_R \mu} \circ x\)





Definition of $\circ'$














\(\ds \)

\(=\)







\(\ds \lambda \circ x +_G \mu \circ  x\)





Left Module Axiom $\text M 2$: (Right) Distributivity over Scalar Addition on $\struct {G, +_G, \circ}$














\(\ds \)

\(=\)







\(\ds x \circ' \lambda +_G x \circ' \mu\)





Definition of $\circ'$



$\Box$


Right Module Axiom $\text {RM} 3$: Associativity
Let $\lambda, \mu \in S$ and $x \in G$.














\(\ds x \circ' \paren {\lambda *_R \mu}\)

\(=\)







\(\ds \paren {\lambda *_R \mu} \circ x\)





Definition of $\circ’$














\(\ds \)

\(=\)







\(\ds \paren {\mu \times_R \lambda} \circ x\)





Definition of $*_R$














\(\ds \)

\(=\)







\(\ds \mu \circ \paren {\lambda \circ  x}\)





Left Module Axiom $\text M 3$: Associativity on $\struct {G, +_G, \circ}$














\(\ds \)

\(=\)







\(\ds \mu \circ \paren {x \circ' \lambda}\)





Definition of $\circ’$














\(\ds \)

\(=\)







\(\ds \paren {x \circ' \lambda} \circ' \mu\)





Definition of $\circ'$



$\blacksquare$


Also see
Right Module over Ring Induces Left Module over Opposite Ring


Sources
2003: P.M. Cohn: Basic Algebra: Groups, Rings and Fields ... (previous) ... (next): Chapter $4$: Rings and Modules: $\S 4.1$: The Definitions Recalled




