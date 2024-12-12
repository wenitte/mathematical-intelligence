# 

Source: https://proofwiki.org/wiki/Change_of_Basis_Matrix_under_Linear_Transformation



Theorem
Let $R$ be a commutative ring with unity.

Let $G$ and $H$ be free unitary $R$-modules of finite dimensions $n, m > 0$ respectively.
Let $\sequence {a_n}$ and $\sequence { {a_n}'}$ be ordered bases of $G$.
Let $\sequence {b_m}$ and $\sequence { {b_m}'}$ be ordered bases of $H$.
Let $u: G \to H$ be a linear transformation.

Let $\sqbrk {u; \sequence {b_m}, \sequence {a_n} }$ denote the matrix of $u$ relative to $\sequence {a_n}$ and $\sequence {b_m}$.
Let:

$\mathbf A = \sqbrk {u; \sequence {b_m}, \sequence {a_n} }$
$\mathbf B = \sqbrk {u; \sequence { {b_m}'}, \sequence { {a_n}'} }$

Then:

$\mathbf B = \mathbf Q^{-1} \mathbf A \mathbf P$
where:

$\mathbf P$ is the matrix corresponding to the change of basis from $\sequence {a_n}$ to $\sequence { {a_n}'}$
$\mathbf Q$ is the matrix corresponding to the change of basis from $\sequence {b_m}$ to $\sequence { {b_m}'}$.


Converse
The converse is also true:

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
Let $G$ be a free unitary $R$-module of finite dimension $n$.
Let $\sequence {a_n}$ and $\sequence { {a_n}'}$ be ordered bases of $G$.
Let $u: G \to G$ be a linear operator on $G$.

Let $\sqbrk {u; \sequence {a_n} }$ denote the matrix of $u$ relative to $\sequence {a_n}$.
Let:

$\mathbf A = \sqbrk {u; \sequence {a_n} }$
$\mathbf B = \sqbrk {u; \sequence { {a_n}'} }$

Then:

$\mathbf B = \mathbf P^{-1} \mathbf A \mathbf P$
where $\mathbf P$ is the matrix corresponding to the change of basis from $\sequence {a_n}$ to $\sequence { {a_n}'}$.


Proof
We have $u = I_H \circ u \circ I_G$
and $\mathbf Q^{-1} = \sqbrk {I_H; \sequence { {b_m}'}, \sequence {b_m} }$.
Thus by Set of Linear Transformations is Isomorphic to Matrix Space:














\(\ds \mathbf Q^{-1} \mathbf A \mathbf P\)

\(=\)







\(\ds \sqbrk {I_H; \sequence { {b_m}'}, \sequence {b_m} } \sqbrk {u; \sequence {b_m}, \sequence {a_n} } \sqbrk {I_G; \sequence {a_n}, \sequence { {a_n}'} }\)




















\(\ds \)

\(=\)







\(\ds \sqbrk {I_H \circ u \circ I_G; \sequence { {b_m}'}, \sequence { {a_n}'} }\)




















\(\ds \)

\(=\)







\(\ds \mathbf B\)









$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 29$. Matrices: Theorem $29.4$




