# 

Source: https://proofwiki.org/wiki/Left_Module_over_Commutative_Ring_induces_Bimodule



Theorem
Let $\struct {R, +_R, \times_R}$ be a commutative ring.
Let $\struct{G, +_G, \circ}$ be a left module over $\struct {R, +_R, \times_R}$.
Let $\circ' : G \times R \to G$ be the binary operation defined by:

$\forall \lambda \in R: \forall x \in G: x \circ' \lambda = \lambda \circ x$

Then $\struct{G, +_G, \circ, \circ'}$ is a bimodule over $\struct {R, +_R, \times_R}$.


Proof
From Left Module over Commutative Ring induces Right Module, $\struct{G, +_G, \circ'}$ is a right module.
Let $\lambda, \mu \in R$ and $x \in G$.
Then:














\(\ds \lambda \circ \paren{x \circ' \mu}\)

\(=\)







\(\ds \lambda \circ \paren{\mu \circ x}\)





Definition of $\circ’$














\(\ds \)

\(=\)







\(\ds \paren {\lambda \circ \mu} \circ x\)





Module Axiom $\text M 3$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {\mu \circ \lambda} \circ x\)





Ring product $\circ$ is commutative














\(\ds \)

\(=\)







\(\ds \mu \circ \paren{\lambda \circ x}\)





Module Axiom $\text M 3$: Associativity














\(\ds \)

\(=\)







\(\ds \paren{\lambda \circ x} \circ' \mu\)





Definition of $\circ'$



Hence $\struct {G, +_G, \circ, \circ'}$ is a bimodule over $\struct {R, +_R, \times_R}$ by definition.
$\blacksquare$


Also see
Right Module over Commutative Ring induces Bimodule


Sources
2003: P.M. Cohn: Basic Algebra: Groups, Rings and Fields ... (previous): Chapter $4$: Rings and Modules: $\S 4.1$: The Definitions Recalled




