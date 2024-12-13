# 

Source: https://proofwiki.org/wiki/Scalar_Product_with_Identity

Theorem
Let $\struct {G, +_G}$ be an abelian group whose identity is $e$.
Let $\struct {R, +_R, \times_R}$ be a ring whose zero is $0_R$.
Let $\struct {G, +_G, \circ}_R$ be an $R$-module.

Let $x \in G, \lambda \in R$.

Then:

$\lambda \circ e = 0_R \circ x = e$


Proof
From Module Axiom $\text M 1$: Distributivity over Module Addition, $y \to \lambda \circ y$ is an endomorphism of $\struct {G, +_G}$.
From Module Axiom $\text M 2$: Distributivity over Scalar Addition, $\mu \to \mu \circ x$ is a homomorphism from $\struct {R, +_R}$ to $\struct {G, +_G}$.
The result follows from Homomorphism with Cancellable Codomain Preserves Identity.
$\blacksquare$


Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 4$. Vector Spaces
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 26$. Vector Spaces and Modules: Theorem $26.2 \ (1)$




