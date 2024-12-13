# 

Source: https://proofwiki.org/wiki/Row_Operation_has_Inverse



Theorem
Let $\map \MM {m, n}$ be a metric space of order $m \times n$ over a field $K$.
Let $\mathbf A \in \map \MM {m, n}$ be a matrix. 
Let $\Gamma$ be a row operation which transforms $\mathbf A$ to a new matrix $\mathbf B \in \map \MM {m, n}$.

Then there exists another row operation $\Gamma'$ which transforms $\mathbf B$ back to $\mathbf A$.


Proof
Let $\sequence {e_i}_{1 \mathop \le i \mathop \le k}$ be the finite sequence of elementary row operations that compose $\Gamma$.
Let $\sequence {\mathbf E_i}_{1 \mathop \le i \mathop \le k}$ be the corresponding finite sequence of the elementary row matrices.
From Row Operation is Equivalent to Pre-Multiplication by Product of Elementary Matrices, we have:

$\mathbf R \mathbf A = \mathbf B$
where $\mathbf R$ is the product of $\sequence {\mathbf E_i}_{1 \mathop \le i \mathop \le k}$:

$\mathbf R = \mathbf E_k \mathbf E_{k - 1} \dotsb \mathbf E_2 \mathbf E_1$
By Elementary Row Matrix is Nonsingular, each of $\mathbf E_i$ is nonsingular.
By Product of Matrices is Nonsingular iff Matrices are Nonsingular, it follows that $\mathbf R$ is likewise nonsingular.
Thus $\mathbf R$ has an inverse $\mathbf R^{-1}$.

Hence:














\(\ds \mathbf R \mathbf A\)

\(=\)







\(\ds \mathbf B\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf R^{-1} \mathbf R \mathbf A\)

\(=\)







\(\ds \mathbf R^{-1} \mathbf B\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf A\)

\(=\)







\(\ds \mathbf R^{-1} \mathbf B\)










We have:














\(\ds \mathbf R^{-1}\)

\(=\)







\(\ds \paren {\mathbf E_k \mathbf E_{k - 1} \dotsb \mathbf E_2 \mathbf E_1}^{-1}\)




















\(\ds \)

\(=\)







\(\ds {\mathbf E_1}^{-1} {\mathbf E_2}^{-1} \dotsb {\mathbf E_{k - 1} }^{-1} {\mathbf E_k}^{-1}\)





Inverse of Matrix Product




From Elementary Row Matrix for Inverse of Elementary Row Operation is Inverse, each of ${\mathbf E_i}^{-1}$ is the elementary row matrix corresponding to the inverse $e'_i$ of the corresponding elementary row operation $e_i$.
Let $\Gamma'$ be the row operation composed of the finite sequence of elementary row operations $\tuple {e'_k, e'_{k - 1}, \ldots, e'_2, e'_1}$.

Thus $\Gamma'$ is a row operation which transforms $\mathbf B$ into $\mathbf A$.

Hence the result.
$\blacksquare$


Also see
Column Operation has Inverse


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: Exercises: $1.15 \ \text {(a)}$




