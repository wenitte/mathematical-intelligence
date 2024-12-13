# 

Source: https://proofwiki.org/wiki/Right_Module_induces_Left_Module_over_same_Ring_iff_Actions_are_Commutative



Theorem
Let $\struct {R, +_R, \times_R}$ be a ring.
Let $\struct {G, +_G, \circ}$ be a right module over $\struct {R, +_R, \times_R}$.
Let $\circ' : R \times G \to G$ be the binary operation defined by:

$\forall \lambda \in R: \forall x \in G: \lambda \circ' x = x \circ \lambda $

Then $\struct {G, +_G, \circ'}$ is a left module over $\struct {R, +_R, \times_R}$ if and only if:

$\forall \lambda, \mu \in R: \forall x \in G: x \circ \paren{ \lambda \times_R \mu} = x \circ \paren {\mu \times_R \lambda}$


Proof
Necessary Condition
Let $\struct {G, +_G, \circ'}$ be a left module over $\struct {R, +_R, \times_R}$.
Then:














\(\ds x \circ \paren {\lambda \times_R \mu}\)

\(=\)







\(\ds \paren {\lambda \times_R \mu} \circ' x\)





Definition of $\circ'$














\(\ds \)

\(=\)







\(\ds \lambda \circ' \paren {\mu \circ' x}\)





Left Module Axiom $\text M 3$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {x \circ \mu} \circ \lambda\)





Definition of $\circ'$














\(\ds \)

\(=\)







\(\ds x \circ \paren {\mu \times_R \lambda}\)





Right Module Axiom $\text {RM} 3$: Associativity



$\Box$


Sufficient Condition
Let the scalar multiplication $\circ$ satisfy:

$\forall \lambda, \mu \in R: \forall x \in G: x \circ \paren {\lambda \times_R \mu} = x \circ \paren {\mu \times_R \lambda}$
It needs to be shown that $\struct {G, +_G, \circ'}$ satisfies the left module axioms.


Left Module Axiom $\text M 1$: (Left) Distributivity over Module Addition
Let $\lambda, \mu \in R, x \in G$.
Then:














\(\ds \lambda \circ' \paren {x +_G y}\)

\(=\)







\(\ds \paren {x +_G y}  \circ \lambda\)





Definition of $\circ'$














\(\ds \)

\(=\)







\(\ds x \circ \lambda +_G y \circ \lambda\)





Right Module Axiom $\text {RM} 1$: (Right) Distributivity over Module Addition on $\circ$














\(\ds \)

\(=\)







\(\ds \lambda \circ' x +_G \lambda \circ' y\)





Definition of $\circ'$



$\Box$


Left Module Axiom $\text M 2$: (Right) Distributivity over Scalar Addition
Let $\lambda \in R, x, y \in G$.
Then:














\(\ds \paren{\lambda +_R \mu} \circ' x\)

\(=\)







\(\ds x \circ \paren{\lambda +_R \mu}\)





Definition of $\circ'$














\(\ds \)

\(=\)







\(\ds x \circ \lambda +_G x \circ \mu\)





Right Module Axiom $\text {RM} 2$: (Left) Distributivity over Scalar Addition on $\circ$














\(\ds \)

\(=\)







\(\ds \lambda \circ' x +_G \mu \circ' x\)





Definition of $\circ'$



$\Box$


Left Module Axiom $\text M 3$: Associativity
Let $\lambda, \mu \in R, x \in G$.
Then:














\(\ds \paren {\lambda \times_R \mu} \circ' x\)

\(=\)







\(\ds x \circ \paren {\lambda \times_R \mu}\)





Definition of $\circ'$














\(\ds \)

\(=\)







\(\ds x \circ \paren {\mu \times_R \lambda}\)





Assumption














\(\ds \)

\(=\)







\(\ds \paren {x \circ \mu} \circ \lambda\)





Right Module Axiom $\text {RM} 3$: Associativity on $\circ$














\(\ds \)

\(=\)







\(\ds \lambda \circ' \paren {\mu \circ' x}\)





Definition of $\circ'$



$\blacksquare$


Also see
Left Module induces Right Module over same Ring iff Actions are Commutative




