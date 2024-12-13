# 

Source: https://proofwiki.org/wiki/Left_Module_induces_Right_Module_over_same_Ring_iff_Actions_are_Commutative



Theorem
Let $\struct {R, +_R, \times_R}$ be a ring.
Let $\struct {G, +_G, \circ}$ be a left module over $\struct {R, +_R, \times_R}$.
Let $\circ': G \times R \to G$ be the binary operation defined by:

$\forall \lambda \in R: \forall x \in G: x \circ' \lambda = \lambda \circ x$

Then $\struct {G, +_G, \circ'}$ is a right module over $\struct {R, +_R, \times_R}$ if and only if:

$\forall \lambda, \mu \in R: \forall x \in G: \paren {\lambda \times_R \mu} \circ x = \paren {\mu \times_R \lambda} \circ x$


Proof
Necessary Condition
Let $\struct {G, +_G, \circ'}$ be a right module over $\struct {R, +_R, \times_R}$.
Then:














\(\ds \paren {\lambda \times_R \mu} \circ x\)

\(=\)







\(\ds x \circ' \paren {\lambda \times_R \mu}\)





Definition of $\circ'$














\(\ds \)

\(=\)







\(\ds \paren {x \circ' \lambda} \circ' \mu\)





Right Module Axiom $\text {RM} 3$: Associativity














\(\ds \)

\(=\)







\(\ds \mu \circ \paren {\lambda \circ x}\)





Definition of $\circ'$














\(\ds \)

\(=\)







\(\ds \paren {\mu \times_R \lambda} \circ x\)





Left Module Axiom $\text M 3$: Associativity



$\Box$


Sufficient Condition
Let the scalar multiplication $\circ$ satisfy:

$\forall \lambda, \mu \in R: \forall x \in G: \paren {\lambda \times_R \mu} \circ x = \paren {\mu \times_R \lambda} \circ x$
It needs to be shown that $\struct {G, +_G, \circ'}$ satisfies the right module axioms.


Right Module Axiom $\text {RM} 1$: (Right) Distributivity over Module Addition
Let $\lambda, \mu \in R, x \in G$.
Then:














\(\ds \paren {x +_G y} \circ' \lambda\)

\(=\)







\(\ds \lambda \circ \paren {x +_G y}\)





Definition of $\circ'$














\(\ds \)

\(=\)







\(\ds \lambda \circ x +_G \lambda \circ y\)





Left Module Axiom $\text M 1$: (Left) Distributivity over Module Addition














\(\ds \)

\(=\)







\(\ds x \circ' \lambda +_G y \circ' \lambda\)





Definition of $\circ'$



$\Box$


Right Module Axiom $\text {RM} 2$: (Left) Distributivity over Scalar Addition
Let $\lambda \in R, x, y \in G$.
Then:














\(\ds x \circ' \paren{\lambda +_R \mu}\)

\(=\)







\(\ds \paren {\lambda +_R \mu} \circ x\)





Definition of $\circ'$














\(\ds \)

\(=\)







\(\ds \lambda \circ x +_G \mu \circ y\)





Left Module Axiom $\text M 2$: (Right) Distributivity over Scalar Addition














\(\ds \)

\(=\)







\(\ds x \circ' \lambda +_G x \circ' \mu\)





Definition of $\circ'$



$\Box$


Right Module Axiom $\text {RM} 3$: Associativity
Let $\lambda, \mu \in R, x \in G$.
Then:














\(\ds x \circ' \paren {\lambda \times_R \mu}\)

\(=\)







\(\ds \paren {\lambda \times_R \mu} \circ x\)





Definition of $\circ'$














\(\ds \)

\(=\)







\(\ds \paren {\mu \times_R \lambda} \circ x\)





Assumption














\(\ds \)

\(=\)







\(\ds \mu \circ \paren {\lambda \circ x}\)





Left Module Axiom $\text M 3$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {x \circ' \lambda} \circ' \mu\)





Definition of $\circ'$



$\blacksquare$


Also see
Right Module induces Left Module over same Ring iff Actions are Commutative




