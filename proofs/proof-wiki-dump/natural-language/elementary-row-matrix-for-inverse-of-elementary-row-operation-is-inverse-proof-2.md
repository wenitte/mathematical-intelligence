# 

Source: https://proofwiki.org/wiki/Elementary_Row_Matrix_for_Inverse_of_Elementary_Row_Operation_is_Inverse/Proof_2



Theorem
Let $e$ be an elementary row operation.
Let $\mathbf E$ be the elementary row matrix corresponding to $e$.
Let $e'$ be the inverse of $e$.

Then the elementary row matrix corresponding to $e'$ is the inverse of $\mathbf E$.


Proof
We will demonstrate this for each of the $3$ types of elementary row operation.

In the below:

$e$ denotes a given elementary row operation
$\mathbf E$ denotes the elementary row matrix corresponding to $e$
$e'$ denotes the inverse of $e$
$\mathbf E'$ denotes the elementary row matrix corresponding to $e'$.
Let $n$ denote the order of $\mathbf E$ and $\mathbf E'$.

The strategy is to demonstrate that:

$\mathbf E \mathbf E' = \mathbf I$
where $\mathbf I$ denotes the unit matrix of order $n$.

Let $x_{i, j}$ and $y_{i, j}$ denote the elements of $\mathbf E$ and $\mathbf E'$ respectively at indices $\tuple {i, j}$.
Let $z_{i j}$ denote the element of $\mathbf E \mathbf E'$ at indices $\tuple {i, j}$.


$\text {ERO} 1$: Scalar Product of Row
Let $e$ be the elementary row operation:

$e := r_k \to \lambda r_k$
where $\lambda \ne 0$.
From Elementary Matrix corresponding to Elementary Row Operation, $\mathbf E$ is of the form:

$x_{a b} = \begin {cases} \delta_{a b} & : a \ne k \\ \lambda \cdot \delta_{a b} & : a = k \end {cases}$
where:

$\delta_{a b}$ is the Kronecker delta:
$\delta_{a b} = \begin {cases} 1 & : \text {if $a = b$} \\ 0 & : \text {if $a \ne b$} \end {cases}$

From Existence of Inverse Elementary Row Operation: Scalar Product of Row, $e'$ is the elementary row operation:

$e' := r_k \to \dfrac 1 \lambda r_k$
From Elementary Matrix corresponding to Elementary Row Operation, $\mathbf E'$ is of the form:

$y_{a b} = \begin {cases} \delta_{a b} & : a \ne k \\ \dfrac 1 \lambda \cdot \delta_{a b} & : a = k \end {cases}$

By definition of matrix product:

$\ds \forall a, b \in \set {1, 2, \ldots, n}: z_{a b} = \sum_{p \mathop = 1}^n x_{a p} y_{p b}$
Thus $z_{a b} \ne 0$ if and only if $a = p$ and $b = p$.
When $a \ne k$:

$x_{a a} = y_{a a} = 1$
and so:

$z_{a a} = 1 \times 1 = 1$
When $a = k$:

$x_{a a} = \lambda$, $y_{l b} = \dfrac 1 \lambda$
and so:

$z_{a a} = \lambda \times \dfrac 1 \lambda = 1$
and for all $z_{a b}$ where $a \ne b$:

$z_{a b} = 0$
That is:

$z_{a b} = \delta_{a b}$
and by definition:

$\mathbf E \mathbf E' = \mathbf I$
$\Box$


$\text {ERO} 2$: Add Scalar Product of Row to Another
Let $e$ be the elementary row operation:

$e := r_i \to r_i + \lambda r_j$

From Elementary Matrix corresponding to Elementary Row Operation, $\mathbf E$ is of the form:

$x_{a b} = \delta_{a b} + \lambda \cdot \delta_{a i} \cdot \delta_{j b}$

From Existence of Inverse Elementary Row Operation: Add Scalar Product of Row to Another, $e'$ is the elementary row operation:

$e' := r_i \to r_i - \lambda r_j$
From Elementary Matrix corresponding to Elementary Row Operation, $\mathbf E'$ is of the form:

$y_{a b} = \delta_{a b} - \lambda \cdot \delta_{a i} \cdot \delta_{j b}$











\(\ds \forall a, b \in \set {1, 2, \ldots, n}: \, \)



\(\ds z_{a b}\)

\(=\)







\(\ds \sum_{p \mathop = 1}^n x_{a p} y_{p b}\)




















\(\ds \)

\(=\)







\(\ds \sum_{p \mathop = 1}^n \paren {\delta_{a p} + \lambda \cdot \delta_{a i} \cdot \delta_{j p} } \cdot \paren {\delta_{p b} - \lambda \cdot \delta_{p i} \cdot \delta_{j b} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{p \mathop = 1}^n \paren {\delta_{a p} \cdot \delta_{p b} + \lambda \cdot \delta_{a i} \cdot \delta_{j p} \cdot \delta_{p b} - \lambda \cdot \delta_{p i} \cdot \delta_{j b} \cdot \delta_{a p} - \lambda \cdot \delta_{a i} \cdot \delta_{j p} \cdot \lambda \cdot \delta_{p i} \cdot \delta_{j b} }\)










We have that:














\(\ds \sum_{p \mathop = 1}^n \delta_{a p} \cdot \delta_{p b}\)

\(=\)







\(\ds \delta_{a b}\)




















\(\ds \sum_{p \mathop = 1}^n \lambda \cdot \delta_{p i} \cdot \delta_{j b} \cdot \delta_{a p}\)

\(=\)







\(\ds \lambda \cdot \delta_{a i} \cdot \delta_{j b}\)




















\(\ds -\sum_{p \mathop = 1}^n \lambda \cdot \delta_{a i} \cdot \delta_{j p} \cdot \delta_{p b}\)

\(=\)







\(\ds -\lambda \cdot \delta_{j b} \cdot \delta_{a i}\)




















\(\ds \sum_{p \mathop = 1}^n \lambda \cdot \delta_{a i} \cdot \delta_{j p} \cdot \lambda \cdot \delta_{p i} \cdot \delta_{j b}\)

\(=\)







\(\ds \lambda^2 \sum_{p \mathop = 1}^n \delta_{a i} \cdot \delta_{j p} \cdot \delta_{p i} \cdot \delta_{j b}\)




















\(\ds \)

\(=\)







\(\ds \lambda^2 \delta_{a i} \cdot \delta_{j i} \cdot \delta_{j b}\)




















\(\ds \)

\(=\)







\(\ds 0\)





as $i \ne j$



But:

$\lambda \cdot \delta_{j b} \cdot \delta_{a i} - \lambda \cdot \delta_{j b} \cdot \delta_{a i} = 0$
So everything vanishes except $\delta_{a b}$, and so:

$z_{a b} = \delta_{a b}$
and by definition, again:

$\mathbf E \mathbf E' = \mathbf I$
$\Box$


$\text {ERO} 3$: Exchange Rows
Let $e$ be the elementary row operation:

$e := r_i \leftrightarrow r_j$

From Elementary Matrix corresponding to Elementary Row Operation, $\mathbf E$ is of the form:

$x_{a b} = \begin {cases} \delta_{a b} & : \text {if $a \ne i$ and $a \ne j$} \\ \delta_{j b} & : \text {if $a = i$} \\ \delta_{i b} & : \text {if $a = j$} \end {cases}$

From Existence of Inverse Elementary Row Operation: Exchange Rows, $e'$ is the elementary row operation:

$e' := r_i \leftrightarrow r_j$
From Elementary Matrix corresponding to Elementary Row Operation, $\mathbf E'$ is of the form:

$y_{a b} = \begin {cases} \delta_{a b} & : \text {if $a \ne i$ and $a \ne j$} \\ \delta_{j b} & : \text {if $a = i$} \\ \delta_{i b} & : \text {if $a = j$} \end {cases}$

By definition of matrix product:

$\ds \forall a, b \in \set {1, 2, \ldots, n}: z_{a b} = \sum_{p \mathop = 1}^n x_{a p} y_{p b}$

When $a \ne i$ and $b \ne j$ we have:














\(\ds z_{a b}\)

\(=\)







\(\ds \sum_{p \mathop = 1}^n \delta_{a p} \delta_{p b}\)




















\(\ds \)

\(=\)







\(\ds \delta_{a b}\)










When $a = i$ and $b \ne i$ we have:














\(\ds z_{a b}\)

\(=\)







\(\ds \sum_{p \mathop = 1}^n \delta_{j p} \delta_{p b}\)




















\(\ds \)

\(=\)







\(\ds 0\)










When $a = j$ and $b \ne j$ we have:














\(\ds z_{a b}\)

\(=\)







\(\ds \sum_{p \mathop = 1}^n \delta_{i p} \delta_{p b}\)




















\(\ds \)

\(=\)







\(\ds 0\)










When $a = b = i$ we have:














\(\ds z_{i i}\)

\(=\)







\(\ds \sum_{p \mathop = 1}^n \delta_{j p} \delta_{p j}\)




















\(\ds \)

\(=\)







\(\ds \delta_{j j}\)




















\(\ds \)

\(=\)







\(\ds 1\)










When $a = b = j$ we have:














\(\ds z_{j j}\)

\(=\)







\(\ds \sum_{p \mathop = 1}^n \delta_{i p} \delta_{p i}\)




















\(\ds \)

\(=\)







\(\ds \delta_{i i}\)




















\(\ds \)

\(=\)







\(\ds 1\)










Hence by definition, again:

$\mathbf E \mathbf E' = \mathbf I$
$\Box$

Thus in all cases:

$\mathbf E \mathbf E' = \mathbf I$

Hence the result.
$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: Exercises: $1.15 \ \text {(a)}$




