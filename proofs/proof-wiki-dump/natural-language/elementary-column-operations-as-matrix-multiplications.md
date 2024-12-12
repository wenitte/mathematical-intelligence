# 

Source: https://proofwiki.org/wiki/Elementary_Column_Operations_as_Matrix_Multiplications



Theorem
Let $e$ be an elementary column operation.
Let $\mathbf E$ be the elementary column matrix of order $n$ defined as:

$\mathbf E = e \paren {\mathbf I}$
where $\mathbf I$ is the unit matrix.

Then for every $m \times n$ matrix $\mathbf A$:

$e \paren {\mathbf A} = \mathbf A \mathbf E$
where $\mathbf A \mathbf E$ denotes the conventional matrix product.


Corollary
Let $\mathbf X$ and $\mathbf Y$ be two $m \times n$ matrices that differ by exactly one elementary column operation.
Then there exists an elementary column matrix $\mathbf E$ of order $n$ such that:

$\mathbf X \mathbf E = \mathbf Y$


Proof
Let $s, t \in \closedint 1 m$ such that $s \ne t$.


Case $1$
Let $e$ be the elementary column operation $\kappa_s \to \lambda \kappa_s$:

$E_{k i} = \begin{cases}
\delta_{k i} & : i \ne s \\
\lambda \delta_{k i} & : i = s
\end{cases}$
where $\delta$ denotes the Kronecker delta.
Then:














\(\ds \sqbrk {A E}_{i j}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^m A_{j k} E_{k i}\)




















\(\ds \)

\(=\)







\(\ds \begin {cases} A_{j i} & : i \ne r \\ \lambda A_{j i} & : i = r \end{cases}\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf {A E}\)

\(=\)







\(\ds e \paren {\mathbf A}\)









$\Box$


Case $2$
Let $e$ be the elementary column operation $\kappa_s \to \kappa_s + \lambda \kappa_t$:

$E_{k i} = \begin {cases}
\delta_{k i} & : i \ne s \\
\delta_{k s} + \lambda \delta_{k t} & : i = s
\end {cases}$
where $\delta$ denotes the Kronecker delta.
Then:














\(\ds \sqbrk {A E}_{j i}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^m  A_{j k} E_{k i}\)




















\(\ds \)

\(=\)







\(\ds \begin {cases} A_{j i} & : j \ne s \\ A_{i j} + \lambda A_{j t} & : i = s \end {cases}\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf {A E}\)

\(=\)







\(\ds e \paren {\mathbf A}\)









$\Box$


Case $3$
Let $e$ be the elementary column operation $\kappa_s \leftrightarrow \kappa_t$:
By Exchange of Columns as Sequence of Other Elementary Column Operations, this elementary column operation can be expressed as:

$\paren {e_1 e_2 e_3 e_4 \mathbf A} = e \paren {\mathbf A}$
where the $e_i$ are elementary column operations of the other two types.
For each $e_i$, let $\mathbf E_i = e_i \paren {\mathbf I}$.
Then:














\(\ds e \paren {\mathbf A}\)

\(=\)







\(\ds e_1 e_2 e_3 e_4 \paren {\mathbf A}\)





Definition of $e$














\(\ds \)

\(=\)







\(\ds \mathbf A \mathbf E_4 \mathbf E_3 \mathbf E_2 \mathbf E_1\)





Cases $1$ and $2$














\(\ds \)

\(=\)







\(\ds \mathbf A e_4 \paren {\mathbf I} \mathbf E_3 \mathbf E_2 \mathbf E_1\)




















\(\ds \)

\(=\)







\(\ds \mathbf A e_3 e_4 \paren {\mathbf I} \mathbf E_2 \mathbf E_1\)




















\(\ds \)

\(=\)







\(\ds \mathbf A e_2 e_3 e_4 \paren {\mathbf I} \mathbf E_1\)




















\(\ds \)

\(=\)







\(\ds \mathbf A e_1 e_2 e_3 e_4 \paren {\mathbf I}\)




















\(\ds \)

\(=\)







\(\ds \mathbf A e \paren {\mathbf I}\)




















\(\ds \)

\(=\)







\(\ds \mathbf A \mathbf E\)









$\blacksquare$

Also see
Elementary Row Operations as Matrix Multiplications


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): elementary matrix




