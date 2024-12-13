# 

Source: https://proofwiki.org/wiki/Right_Module_over_Commutative_Ring_induces_Left_Module



Theorem
Let $\struct {R, +_R, \times_R}$ be a commutative ring.
Let $\struct{G, +_G, \circ}$ be a right module over $\struct {R, +_R, \times_R}$.
Let $\circ' : R \times G \to G$ be the binary operation defined by:

$\forall \lambda \in R: \forall x \in G: \lambda \circ’ x = x \circ \lambda$

Then $\struct{G, +_G, \circ'}$ is a left module over $\struct {R, +_R, \times_R}$.


Proof
From Ring is Commutative iff Opposite Ring is Itself, $\struct {R, +_R, \times_R}$ is its own opposite ring.
From Right Module over Ring Induces Left Module over Opposite Ring, $\struct{G, +_G, \circ'}$ is a left module over $\struct {R, +_R, \times_R}$.
$\blacksquare$


Also see
Left Module over Commutative Ring induces Right Module


Sources
2003: P.M. Cohn: Basic Algebra: Groups, Rings and Fields ... (previous): Chapter $4$: Rings and Modules: $\S 4.1$: The Definitions Recalled




