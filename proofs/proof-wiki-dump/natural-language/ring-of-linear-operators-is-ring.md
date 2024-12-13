# 

Source: https://proofwiki.org/wiki/Ring_of_Linear_Operators_is_Ring

Theorem
Let $R$ be a ring.
Let $\struct {G, +}$ be an abelian group..
Let $\struct {G, +, \circ}_R$ be an $R$-module.

Let $\struct {\map {\LL_R} G, +, \circ}$ be the ring of linear operators on $G$, where:

$+$ denotes pointwise addition
$\circ$ denotes composition of linear operators.

Then $\struct {\map {\LL_R} G, +, \circ}$ is a ring.


Proof
Let $\phi$ and $\psi$ be elements of $\map {\LL_R} G$.
From Composite of R-Algebraic Structure Homomorphisms is Homomorphism, $\phi \circ \psi$ is also an element of $\map {\LL_R} G$.
That is, $\struct {\map {\LL_R} G, \circ}$ is closed.
From Set of Linear Transformations under Pointwise Addition forms Abelian Group, $\struct {\map {\LL_R} G, +}$ is an abelian group.
Hence by the One-Step Subgroup Test:

$\forall \phi, \psi \in \map {\LL_R} G: \phi + \paren {-\psi} \in \map {\LL_R} G$
Then by the Subring Test:

$\struct {\map {\LL_R} G, +, \circ}$ is a subring of the ring of endomorphisms of $\struct {G, +}$
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 29$. Matrices




