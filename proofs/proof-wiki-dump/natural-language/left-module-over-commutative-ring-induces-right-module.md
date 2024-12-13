# 

Source: https://proofwiki.org/wiki/Left_Module_over_Commutative_Ring_induces_Right_Module



Theorem
Let $\struct {R, +_R, \times_R}$ be a commutative ring.
Let $\struct {G, +_G, \circ}$ be a left module over $\struct {R, +_R, \times_R}$.
Let $\circ' : G \times R \to G$ be the binary operation defined by:

$\forall \lambda \in R: \forall x \in G: x \circ' \lambda = \lambda \circ x$

Then $\struct {G, +_G, \circ'}$ is a right module over $\struct {R, +_R, \times_R}$.


Proof
From Ring is Commutative iff Opposite Ring is Itself, $\struct {R, +_R, \times_R}$ is its own opposite ring.
From Left Module over Ring Induces Right Module over Opposite Ring, $\struct {G, +_G, \circ'}$ is a right module over $\struct {R, +_R, \times_R}$.
$\blacksquare$


Also see
Right Module over Commutative Ring induces Left Module


Sources
2003: P.M. Cohn: Basic Algebra: Groups, Rings and Fields ... (previous) ... (next): Chapter $4$: Rings and Modules: $\S 4.1$: The Definitions Recalled




