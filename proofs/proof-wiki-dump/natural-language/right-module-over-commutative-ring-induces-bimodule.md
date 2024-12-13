# 

Source: https://proofwiki.org/wiki/Right_Module_over_Commutative_Ring_induces_Bimodule



Theorem
Let $\struct {R, +_R, \times_R}$ be a commutative ring.
Let $\struct {G, +_G, \circ}$ be a right module over $\struct {R, +_R, \times_R}$.
Let $\circ' : R \times G \to G$ be the binary operation defined by:

$\forall \lambda \in R: \forall x \in G: \lambda \circ' x = x \circ \lambda $

Then $\struct {G, +_G, \circ', \circ}$ is a bimodule over $\struct {R, +_R, \times_R}$.


Proof
From Right Module over Commutative Ring induces Left Module, $\struct {G, +_G, \circ'}$ is a left module.
Let $\lambda, \mu \in R$ and $x \in G$.
Then:














\(\ds \lambda \circ' \paren {x \circ \mu}\)

\(=\)







\(\ds \paren {x \circ \mu} \circ \lambda\)





Definition of $\circ’$














\(\ds \)

\(=\)







\(\ds x \circ \paren {\mu \circ \lambda}\)





Right module axiom $(\text {RM} 3)$ : Associativity of Scalar Multiplication














\(\ds \)

\(=\)







\(\ds x \circ \paren {\lambda \circ \mu}\)





Ring product $\circ$ is commutative














\(\ds \)

\(=\)







\(\ds \paren {x \circ \lambda} \circ \mu\)





Right module axiom $(\text {RM} 3)$ : Associativity of Scalar Multiplication














\(\ds \)

\(=\)







\(\ds \paren {\lambda \circ' x} \circ \mu\)





Definition of $\circ'$



Hence $\struct{G, +_G, \circ', \circ}$ is a bimodule over $\struct {R, +_R, \times_R}$ by definition.
$\blacksquare$


Also see
Left Module over Commutative Ring induces Bimodule


Sources
2003: P.M. Cohn: Basic Algebra: Groups, Rings and Fields ... (previous) ... (next): Chapter $4$: Rings and Modules: $\S 4.1$: The Definitions Recalled




