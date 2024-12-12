# 

Source: https://proofwiki.org/wiki/Basis_for_Set_of_Linear_Transformations

Theorem
Let $R$ be a commutative ring with unity whose zero is $0_R$ and whose unity is $1_R$.
Let $\struct {G, +_G, \circ}_R$ be a unitary $R$-module such that $\map \dim G = n$.
Let $\struct {H, +_H, \circ}_R$ be a unitary $R$-module such that $\map \dim H = m$.
Let $\map {\LL_R} {G, H}$ be the set of all linear transformations from $G$ to $H$.

Let $\sequence {a_n}$ be an ordered basis for $G$.
Let $\sequence {b_m}$ be an ordered basis for $H$.
Let $\phi_{i j}: G \to H$ be the unique linear transformation defined for each $i \in \closedint 1 n, j \in \closedint 1 m$ which satisfies:

$\forall k \in \closedint 1 n: \map {\phi_{i j} } {a_k} = \delta_{i k} b_j$
where $\delta$ is the Kronecker delta.

Then:

$\set {\phi_{i j}: i \in \closedint 1 n, j \in \closedint 1 m}$
is a basis for $\map {\LL_R} {G, H}$.


Proof
Let $B = \set {\phi_{i j}: i \in \closedint 1 n, j \in \closedint 1 m}$.
Let $\ds \sum_{j \mathop = 1}^m \sum_{i \mathop = 1}^n \lambda_{i j} \phi_{i j} = 0$.
Then:

$\ds \forall k \in \closedint 1 n: 0 = \sum_{j \mathop = 1}^m \sum_{i \mathop = 1}^n \lambda_{i j} \map {\phi_{i j} } {a_k} = \sum_{j \mathop = 1}^m \lambda_{k j} b_j$
So:

$\forall j \in \closedint 1 n: \lambda_{k j} = 0$
Hence $B$ is linearly independent.

Now let $\phi \in \map {\LL_R} {G, H}$.
Let $\tuple {\alpha_{i 1}, \alpha_{i 2}, \ldots, \alpha_{i m} }$ be the sequence of scalars that satisfies:

$\ds \forall i \in \closedint 1 n: \map \phi {a_i} = \sum_{j \mathop = 1}^m \alpha_{i j} b_j$
Then:

$\ds \forall k \in \closedint 1 n: \map \phi {a_k} = \map {\paren {\sum_{j \mathop = 1}^m \sum_{i \mathop = 1}^n \alpha_{i j} u_{i j} } } {a_k}$
by a calculation similar to the preceding.
So, by Linear Transformation of Generated Module:

$\ds u = \sum_{j \mathop = 1}^m \sum_{i \mathop = 1}^n \alpha_{i j} u_{i j}$
Thus $B$ is a generator for $\phi \in \map {\LL_R} {G, H}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Theorem $28.8$




