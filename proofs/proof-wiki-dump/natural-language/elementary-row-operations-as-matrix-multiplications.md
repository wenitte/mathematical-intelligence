# 

Source: https://proofwiki.org/wiki/Elementary_Row_Operations_as_Matrix_Multiplications



Theorem
Let $e$ be an elementary row operation.
Let $\mathbf E$ be the elementary row matrix of order $m$ defined as:

$\mathbf E = \map e {\mathbf I}$
where $\mathbf I$ is the unit matrix.

Then for every $m \times n$ matrix $\mathbf A$:

$\map e {\mathbf A} = \mathbf {E A}$
where $\mathbf {E A}$ denotes the conventional matrix product.


Corollary
Let $\mathbf X$ and $\mathbf Y$ be two $m \times n$ matrices that differ by exactly one elementary row operation.
Then there exists an elementary row matrix of order $m$ such that:

$\mathbf {E X} = \mathbf Y$


Proof
Let $s, t \in \closedint 1 m$ such that $s \ne t$.


Case $1$
Let $e$ be the elementary row operation $r_s \to \lambda r_s$:

$E_{ik} = \begin{cases}
\delta_{ik} & : i \ne s \\
\lambda \delta_{ik} & : i = s
\end{cases}$
where $\delta$ denotes the Kronecker delta.
Then:














\(\ds \sqbrk {E A}_{i j}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^m E_{i k} A_{k j}\)




















\(\ds \)

\(=\)







\(\ds \begin {cases} A_{i j} & : i \ne r \\ \lambda A_{i j} & : i = r \end {cases}\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf {E A}\)

\(=\)







\(\ds \map e {\mathbf A}\)









$\Box$


Case $2$
Let $e$ be the elementary row operation $r_s \to r_s + \lambda r_t$:

$E_{i k} = \begin {cases}
\delta_{i k} & : i \ne s \\
\delta_{s k} + \lambda \delta_{t k} & : i = s
\end {cases}$
where $\delta$ denotes the Kronecker delta.
Then:














\(\ds \sqbrk {E A}_{i j}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^m E_{i k} A_{k j}\)




















\(\ds \)

\(=\)







\(\ds \begin {cases} A_{i j} & : i \ne s \\ A_{i j} + \lambda A_{t j} & : i = s \end {cases}\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf {E A}\)

\(=\)







\(\ds \map e {\mathbf A}\)









$\Box$


Case $3$
Let $e$ be the elementary row operation $r_s \leftrightarrow r_t$:
By Exchange of Rows as Sequence of Other Elementary Row Operations, this elementary row operation can be expressed as:

$\map {e_1 e_2 e_3 e_4} {\mathbf A} = \map e {\mathbf A}$
where the $e_i$ are elementary row operations of the other two types.
For each $e_i$, let $\mathbf E_i = \map {e_i} {\mathbf I}$.
Then:














\(\ds \map e {\mathbf A}\)

\(=\)







\(\ds \map {e_1 e_2 e_3 e_4} {\mathbf A}\)





Definition of $e$














\(\ds \)

\(=\)







\(\ds \mathbf E_1 \mathbf E_2 \mathbf E_3 \mathbf E_4 \mathbf A\)





Cases $1$ and $2$














\(\ds \)

\(=\)







\(\ds \mathbf E_1 \mathbf E_2 \mathbf E_3 \map {e_4} {\mathbf I} \mathbf A\)




















\(\ds \)

\(=\)







\(\ds \mathbf E_1 \mathbf E_2 \map {e_3 e_4} {\mathbf I} \mathbf A\)




















\(\ds \)

\(=\)







\(\ds \mathbf E_1 \map {e_2 e_3 e_4} {\mathbf I} \mathbf A\)




















\(\ds \)

\(=\)







\(\ds \map {e_1 e_2 e_3 e_4} {\mathbf I} \mathbf A\)




















\(\ds \)

\(=\)







\(\ds \map e {\mathbf I} \mathbf A\)




















\(\ds \)

\(=\)







\(\ds \mathbf {E A}\)









$\blacksquare$


Also see
Elementary Column Operations as Matrix Multiplications


Sources
1971: Kenneth Hoffman and Ray Kunze: Linear Algebra (2nd ed.)
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.5$ Row and column operations
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): elementary matrix




