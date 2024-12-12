# 

Source: https://proofwiki.org/wiki/Dimension_of_Set_of_Linear_Transformations

Theorem
Let $R$ be a commutative ring with unity whose zero is $0_R$ and whose unity is $1_R$.
Let $\struct {G, +_G, \circ}_R$ be a unitary $R$-module such that $\map \dim G = n$.
Let $\struct {H, +_H, \circ}_R$ be a unitary $R$-module such that $\map \dim H = m$.
Let $\map {\LL_R} {G, H}$ be the set of all linear transformations from $G$ to $H$.

Then:

$\map \dim {\map {\LL_R} {G, H} } = n m$
where $\map \dim {\map {\LL_R} {G, H} }$ denotes the dimension of $\map {\LL_R} {G, H}$.


Proof
Consider the set:

$B = \set {\phi_{i j}: i \in \closedint 1 n, j \in \closedint 1 m}$
From Basis for Set of Linear Transformations, $B$ is a basis for $\map {\LL_R} {G, H}$.
It is seen that by construction, $B$ has $n m$ elements.
The result follows by definition of dimension.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Theorem $28.8$




