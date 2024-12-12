# 

Source: https://proofwiki.org/wiki/Constant_Mapping_to_Identity_is_Homomorphism/Rings

Theorem
Let $\struct {R_1, +_1, \circ_1}$ and $\struct {R_2, +_2, \circ_2}$ be rings with zeroes $0_1$ and $0_2$ respectively.
Let $\zeta$ be the zero homomorphism from $R_1$ to $R_2$, that is:

$\forall x \in R_1: \map \zeta x = 0_2$

Then $\zeta$ is a ring homomorphism whose image is $\set {0_2}$ and whose kernel is $R_1$.


Proof
The additive groups of $\struct {R_1, +_1, \circ_1}$ and $\struct {R_2, +_2, \circ_2}$ are $\struct {R_1, +_1}$ and $\struct {R_2, +_2}$ respectively.
Their identities are $0_1$ and $0_2$ respectively.
Thus from the Constant Mapping to Group Identity is Homomorphism we have that $\zeta: \struct {R_1, +_1} \to \struct {R_2, +_2}$ is a group homomorphism:

$\map \zeta {x +_1 y} = \map \zeta x +_2 \map \zeta y$

Then we have:














\(\ds \map \zeta {x \circ_1 y}\)

\(=\)







\(\ds 0_2\)





as $x \circ_1 y \in R_1$














\(\ds \)

\(=\)







\(\ds \map \zeta x \circ_2 \map \zeta y\)





as $\map \zeta x = 0_2$ and $\map \zeta y = 0_2$




The results about image and kernel follow directly by definition.
$\blacksquare$


Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 3$. Homomorphisms: Example $1$
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Rings: $\S 24$. Homomorphisms: Example $42$




