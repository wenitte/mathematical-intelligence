# 

Source: https://proofwiki.org/wiki/Elementary_Row_Operation/Examples/lambda_r2

Example of Elementary Row Operation
Consider the elementary row operation $e$ defined as:

$e := r_2 \to \lambda r_2$
acting on a matrix space $\map \MM {3, n}$ for some $n \in \Z_{>0}$.
The elementary row matrix corresponding to $e$ is:

$\begin {pmatrix} 1 & 0 & 0 \\ 0 & \lambda & 0 \\ 0 & 0 & 1 \end {pmatrix}$


Proof
Let $\mathbf E$ denote the elementary row matrix corresponding to $e$.
From Elementary Matrix corresponding to Elementary Row Operation: Scale Row and Add:

$E_{a b} = \begin {cases} \delta_{a b} & : a \ne 2 \\ \lambda \cdot \delta_{a b} & : a = 2 \end{cases}$
where:

$E_{a b}$ denotes the element of $\mathbf E$ whose indices are $\tuple {a, b}$
$\delta_{a b}$ is the Kronecker delta:
$\delta_{a b} = \begin {cases} 1 & : \text {if $a = b$} \\ 0 & : \text {if $a \ne b$} \end {cases}$
That is:

When $a \ne 2$, the elements of $\mathbf E$ are $0$ except for those on the main diagonal, when they are $1$
When $a = 2$, the elements of $\mathbf E$ are $0$ except for those on the main diagonal, when they are $\lambda$.
Hence $\mathbf E$ can be constructed as described.
$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.5$ Row and column operations: $2$




