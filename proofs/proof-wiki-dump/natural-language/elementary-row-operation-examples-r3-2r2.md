# 

Source: https://proofwiki.org/wiki/Elementary_Row_Operation/Examples/r3_%2B_2r2

Examples of Elementary Row Operations
Consider the elementary row operation $e$ defined as:

$e := r_3 \to r_3 + 2 r_2$
acting on a matrix space $\map \MM {3, n}$ for some $n \in \Z_{>0}$.
The elementary row matrix corresponding to $e$ is:

$\begin {pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 2 & 1 \end {pmatrix}$


Proof
Let $\mathbf E$ denote the elementary row matrix corresponding to $e$.
From Elementary Matrix corresponding to Elementary Row Operation: Scale Row and Add:

$E_{a b} = \delta_{a b} + 2 \delta_{a 3} \cdot \delta_{2 b}$
where:

$E_{a b}$ denotes the element of $\mathbf E$ whose indices are $\tuple {a, b}$
$\delta_{a b}$ is the Kronecker delta:
$\delta_{a b} = \begin {cases} 1 & : \text {if $a = b$} \\ 0 & : \text {if $a \ne b$} \end {cases}$
That is:

When $a \ne 3$ and $b \ne 2$, elements of $\mathbf E$ are $0$ except for those on the main diagonal
When $a = 3$ and $b = 2$, $E_{a b}$ equals $2 + \delta_{a b}$.
But as $a \ne b$ it follows that $\delta_{a b} = 0$.
Hence $\mathbf E$ can be constructed as described.
$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.5$ Row and column operations: $1$




