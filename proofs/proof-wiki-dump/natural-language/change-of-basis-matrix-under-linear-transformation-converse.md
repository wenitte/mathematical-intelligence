# 

Source: https://proofwiki.org/wiki/Change_of_Basis_Matrix_under_Linear_Transformation/Converse



Theorem
Let $R$ be a commutative ring with unity.
Let $G$ and $H$ be free unitary $R$-modules of finite dimensions $n, m > 0$ respectively.
Let $\sequence {a_n}$ be an ordered basis of $G$.
Let $\sequence {b_m}$ be an ordered basis of $H$.

Let $\mathbf A$ and $\mathbf B$ be $m \times n$ matrices over $R$.
Let there exist:

a nonsingular matrix $\mathbf P$ of order $n$
a nonsingular matrix $\mathbf Q$ of order $m$
such that:

$\mathbf B = \mathbf Q^{-1} \mathbf A \mathbf P$

Then there exist:

a linear transformation $u: G \to H$
ordered bases $\sequence { {a_n}'}$ and $\sequence { {b_m}'}$ of $G$ and $H$ respectively
such that:

$\mathbf A = \sqbrk {u; \sequence {b_m}, \sequence {a_n} }$
$\mathbf B = \sqbrk {u; \sequence { {b_m}'}, \sequence { {a_n}'} }$
where $\sqbrk {u; \sequence {b_m}; \sequence {a_n} }$ denotes the matrix of $u$ relative to $\sequence {a_n}$ and $\sequence {b_m}$.


Corollary
Let $G$ be a free unitary $R$-module of finite dimensions $n$.
Let $\sequence {a_n}$ be an ordered basis of $G$.

Let $\mathbf A$ and $\mathbf B$ be square matrices of order $n$ over $R$.
Let there exist an nonsingular matrix $\mathbf P$ of order $n$ such that:

$\mathbf B = \mathbf P^{-1} \mathbf A \mathbf P$

Then there exist:

a linear operator $u$ on $G$
an ordered basis $\sequence { {a_n}'}$ of $G$
such that:

$\mathbf A = \sqbrk {u; \sequence {a_n} }$
$\mathbf B = \sqbrk {u; \sequence { {a_n}'} }$
where $\sqbrk {u; \sequence {a_n} }$ denotes the matrix of $u$ relative to $\sequence {a_n}$.


Proof
Let:

$\mathbf P = \sqbrk \alpha_n$
$\mathbf Q = \sqbrk \beta_m$
Let:

$\forall j \in \closedint 1 n: {a_j}' = \ds \sum_{i \mathop = 1}^n \alpha_{i j} a_i$
$\forall j \in \closedint 1 m: {b_j}' = \ds \sum_{i \mathop = 1}^m \beta_{i j} b_i$
Then by Invertible Matrix Corresponds with Change of Basis:

$\sequence { {a_n}'}$ and $\sequence { {b_m}'}$ are ordered bases of $G$ and $H$ respectively.
Also we have:

$\mathbf P$ is the matrix corresponding to the change in basis from $\sequence {a_n}$ to $\sequence { {a_n}'}$
$\mathbf Q$ is the matrix corresponding to the change in basis from $\sequence {b_m}$ to $\sequence { {b_m}'}$
so $\mathbf Q^{-1}$ is the matrix corresponding to the change in basis from $\sequence { {b_m}'}$ to $\sequence {b_m}$
Let $\map {\LL_R} {G, H}$ be the set of all linear transformations from $G$ to $H$.
By Set of Linear Transformations is Isomorphic to Matrix Space, there exists $u \in \map {\LL_R} {G, H}$ such that:

$\mathbf A = \sqbrk {u; \sequence {b_m}, \sequence {a_n} }$

But then, by Change of Basis Matrix under Linear Transformation:

$\sqbrk {u; \sequence { {b_m}'}, \sequence { {a_n}'} } = \mathbf Q^{-1} \mathbf A \mathbf P = \mathbf B$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 29$. Matrices: Theorem $29.5$




