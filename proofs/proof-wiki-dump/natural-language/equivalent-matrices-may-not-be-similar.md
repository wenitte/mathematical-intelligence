# 

Source: https://proofwiki.org/wiki/Equivalent_Matrices_may_not_be_Similar

Theorem
If two square matrices of order $n > 1$ over a ring with unity $R$ are equivalent, they are not necessarily similar.


Proof
Proof by Counterexample:
Let $\mathbf A = \mathbf I_n$ be the unit matrix of order $n > 1$.
Let $\mathbf B$ be an arbitrary nonsingular matrix over $R$ of order $n$ that is different from the unit matrix.
Then:

$\mathbf I_n^{-1} \mathbf A \mathbf B = \mathbf I_n^{-1} \mathbf I_n \mathbf B = \mathbf B$
showing that $\mathbf A$ and $\mathbf B$ are equivalent.

Let $\mathbf P$ be an nonsingular square matrix of order $n$.
Then:

$\mathbf P^{-1} \mathbf A \mathbf P = \mathbf P^{-1} \mathbf P = \mathbf I_n \ne \mathbf B$
Hence, $\mathbf A$ is not similar to $\mathbf B$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 29$. Matrices




