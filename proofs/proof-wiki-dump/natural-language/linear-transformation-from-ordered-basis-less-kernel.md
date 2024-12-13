# 

Source: https://proofwiki.org/wiki/Linear_Transformation_from_Ordered_Basis_less_Kernel

Theorem
Let $G$ and $H$ be unitary $R$-modules.
Let $\phi: G \to H$ be a non-zero linear transformation.
Let $G$ be $n$-dimensional.
Let $\sequence {a_n}$ be any ordered basis of $G$ such that $\set {a_k: r + 1 \le k \le n}$ is the basis of the kernel of $\phi$.

Then $\sequence {\map \phi {a_r} }$ is an ordered basis of the image of $\phi$.


Proof
Suppose:

$\ds \sum_{k \mathop = 1}^r \lambda_k \map \phi {a_k} = 0$
Then:

$\ds \map \phi {\sum_{k \mathop = 1}^r \lambda_k a_k} = 0$
So $\ds \sum_{k \mathop = 1}^r \lambda_k \map \phi {a_k}$ belongs to the kernel of $\phi$ and hence is also a linear combination of $\set {a_k: r + 1 \le k \le n}$.
Thus $\forall k \in \closedint 1 r: \lambda_k = 0$ since $\sequence {a_n}$ is linearly independent.
Thus the sequence $\sequence {\map \phi {a_r} }$ is linearly independent.

We have $\forall k \in \closedint {r + 1} n: \map \phi {a_k} = 0$.
So let $x \in G$.
Let $\ds x = \sum_{k \mathop = 1}^n \mu_k a_k$.
Then:

$\ds \map \phi x = \sum_{k \mathop = 1}^n \mu_k \map \phi {a_k} = \sum_{k \mathop = 1}^r \mu_k \map \phi {a_k}$
Therefore $\sequence {\map \phi {a_r} }$ is an ordered basis of the image of $\phi \sqbrk G$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Theorem $28.5$




