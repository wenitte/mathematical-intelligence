# 

Source: https://proofwiki.org/wiki/Column_Operation_has_Inverse

Theorem
Let $\map \MM {m, n}$ be a metric space of order $m \times n$ over a field $K$.
Let $\mathbf A \in \map \MM {m, n}$ be a matrix. 
Let $\Gamma$ be a column operation which transforms $\mathbf A$ to a new matrix $\mathbf B \in \map \MM {m, n}$.

Then there exists another column operation $\Gamma'$ which transforms $\mathbf B$ back to $\mathbf A$.


Proof
Let $\sequence {e_i}_{1 \mathop \le i \mathop \le k}$ be the finite sequence of elementary column operations that compose $\Gamma$.
Let $\sequence {\mathbf E_i}_{1 \mathop \le i \mathop \le k}$ be the corresponding finite sequence of the elementary column matrices.
From Column Operation is Equivalent to Post-Multiplication by Product of Elementary Matrices, we have:

$\mathbf A \mathbf K = \mathbf B$
where $\mathbf K$ is the product of $\sequence {\mathbf E_i}_{1 \mathop \le i \mathop \le k}$:

$\mathbf K = \mathbf E_1 \mathbf E_2 \dotsb \mathbf E_{k - 1} \mathbf E_k$
By Elementary Column Matrix is Nonsingular, each of $\mathbf E_i$ is nonsingular.
By Product of Matrices is Nonsingular iff Matrices are Nonsingular, it follows that $\mathbf K$ is likewise nonsingular.
Thus $\mathbf K$ has an inverse $\mathbf K^{-1}$.

Hence:














\(\ds \mathbf A \mathbf K\)

\(=\)







\(\ds \mathbf B\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf A \mathbf K \mathbf K^{-1}\)

\(=\)







\(\ds \mathbf B \mathbf K^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf A\)

\(=\)







\(\ds \mathbf B \mathbf K^{-1}\)










We have:














\(\ds \mathbf K^{-1}\)

\(=\)







\(\ds \paren {\mathbf E_1 \mathbf E_2 \dotsb \mathbf E_{k - 1} \mathbf E_k}^{-1}\)




















\(\ds \)

\(=\)







\(\ds {\mathbf E_k}^{-1} {\mathbf E_{k - 1} }^{-1} \dotsb {\mathbf E_2}^{-1} {\mathbf E_1}^{-1}\)





Inverse of Matrix Product




From Elementary Column Matrix for Inverse of Elementary Column Operation is Inverse, each of ${\mathbf E_i}^{-1}$ is the elementary column matrix corresponding to the inverse $e'_i$ of the corresponding elementary column operation $e_i$.
Let $\Gamma'$ be the column operation composed of the finite sequence of elementary column operations $\tuple {e'_k, e'_{k - 1}, \ldots, e'_2, e'_1}$.

Thus $\Gamma'$ is a column operation which transforms $\mathbf B$ into $\mathbf A$.

Hence the result.
$\blacksquare$


Also see
Row Operation has Inverse




