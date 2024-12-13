# 

Source: https://proofwiki.org/wiki/Linear_Transformation_of_Vector_Space_Monomorphism

Theorem
Let $G$ and $H$ be a $K$-vector space.
Let $\phi: G \to H$ be a linear transformation.

Then $\phi$ is a monomorphism if and only if for every linearly independent sequence $\sequence {a_n}$ of vectors of $G$, $\sequence {\map \phi {a_n} }$ is a linearly independent sequence of vectors of $H$.


Proof
Suppose $\phi$ is a monomorphism.
Let $\sequence {a_n}$ be a linearly independent sequence.
Let:

$\ds \sum_{k \mathop = 1}^n \lambda_k \map \phi {a_k} = 0$
Then:

$\ds \map \phi {\sum_{k \mathop = 1}^n \lambda_k a_k} = 0$
So by hypothesis:

$\ds \sum_{k \mathop = 1}^n \lambda_k a_k = 0$
Hence:

$\forall k \in \closedint 1 n: \lambda_k = 0$

Suppose that for every linearly independent sequence $\sequence {a_n}$ of vectors of $G$, $\sequence {\map \phi {a_n} }$ is a linearly independent sequence of vectors of $H$.
Let $\map \phi {a_1} = 0$.
Then $a_1 = 0$, otherwise the sequence $\sequence {a_1}$ of one term would be linearly independent but $\sequence {\map \phi {a_1} }$ would not.
Thus $\map \ker \phi = \set 0$ and by the Quotient Theorem for Group Epimorphisms $\phi$ is an isomorphism and therefore a monomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Theorem $28.6$




