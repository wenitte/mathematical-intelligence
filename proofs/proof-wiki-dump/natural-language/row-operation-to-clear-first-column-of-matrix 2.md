# 

Source: https://proofwiki.org/wiki/Row_Operation_to_Clear_First_Column_of_Matrix



Theorem
Let $\mathbf A = \sqbrk a_{m n}$ be an $m \times n$ matrix over a field $K$.
Then there exists a row operation to convert $\mathbf A$ into another $m \times n$ matrix $\mathbf B = \sqbrk b_{m n}$ with the following properties:

$(1): \quad$ Except possibly for element $b_{1 1}$, all the elements of column $1$ are $0$
$(2): \quad$ If $b_{1 1} \ne 0$, then $b_{1 1} = 1$.

This process is referred to as clearing the first column.


Proof
The following algorithm generates a sequence of elementary row operations which convert $\mathbf A$ to $\mathbf B$.
Let $\mathbf A' = \sqbrk {a'}_{m n}$ denote the state of $\mathbf A$ after having processed the latest step.
After each step, an implicit step can be included that requires that the form of $\mathbf A'$ is inspected to see if it is in the form $\mathbf B$, and if so, terminating the algorithm, but this is not essential.


$(1): \quad$ Are all elements in the first column of $\mathbf A$ equal to $0$?
If so, there is nothing to do, and the required row operation is the unit matrix $\mathbf I_m$.
Otherwise, move on to step $(2)$.
$(2): \quad$ Is element $a_{1 1}$ equal to $0$?
If so:
$\text (a): \quad$ find the smallest $k$ such that row $k$ of $\mathbf A$ such that $a_{k 1} \ne 0$
$\text (b): \quad$ use the elementary row operation $r_1 \leftrightarrow r_k$ which will result $a'_{1 1} = a_{k 1}$ and $a'_{k 1} = 0$.
Move on to step $(3)$.
$(3): \quad$ Is element $a'_{1 1}$ equal to $1$?
If so, use the elementary row operation $r_1 \to \lambda r_1$ where $\lambda = \dfrac 1 {a'_{1 1} }$, which will result $a'_{1 1} = 1$.
Move on to step $4$
$(4): \quad$ For each row $j$ from $2$ to $m$, do the following:
Is $a_{j 1} \ne 0$?
If so, use the elementary row operation $r_j \leftrightarrow r_j + \mu r_1$, where $\mu = -\dfrac {a'_{j 1} } {a'{1 1} }$, which will result in $a'_{j 1} = 0$.

This will result in an $m \times n$ matrix in the required form.
Exercising the above algorithm will have generated a sequence of elementary row operations $e_1, e_2, \ldots, e_t$.

For each $e_k$ we create the elementary row matrix $\mathbf E_k$.
We then assemble the matrix product:

$\mathbf R := \mathbf E_t \mathbf E_{t - 1} \mathbf E_{t - 2} \dotsm \mathbf E_2 \mathbf E_1$
From Row Operation is Equivalent to Pre-Multiplication by Product of Elementary Matrices, $\mathbf R$ is the resulting $m \times m$ matrix corresponding to the row operation which is used to convert $\mathbf A$ to $\mathbf B$.
$\blacksquare$


Examples
Arbitrary Matrix $1$
Let $\mathbf A$ be the matrix:

$\mathbf A = \begin {pmatrix} 0 & 1 & 1 \\ 1 & 1 & 0 \\ 1 & 0 & 1 \end {pmatrix}$
The matrix $\mathbf R$ corresponding to the row operation to clear the first column is:

$\mathbf R = \begin {pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & -1 & 1 \end {pmatrix}$
and the matrix $\mathbf B$ which results from the row operation $\mathbf R$ is:

$\mathbf B = \begin {pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 0 & -1 & 1 \end {pmatrix}$


Arbitrary Matrix $2$
Let $\mathbf A$ be the matrix:

$\mathbf A = \begin {pmatrix} 1 & 0 & 1 & 1 \\ -1 & 0 & 2 & 1 \\ -1 & 1 & 5 & 9 \end {pmatrix}$
The matrix $\mathbf R$ corresponding to the row operation to clear the first column is:

$\mathbf R = \begin {pmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 1 & 0 & 1 \end {pmatrix}$
and the matrix $\mathbf B$ which results from the row operation $\mathbf R$ is:

$\mathbf B = \begin {pmatrix} 1 & 0 & 1 & 1 \\ 0 & 0 & 3 & 2 \\ 0 & 1 & 6 & 10 \end {pmatrix}$


Arbitrary Matrix $3$
Let $\mathbf A$ be the matrix:

$\mathbf A = \begin {pmatrix} 0 & 4 & 7 & 10 \\ 2 & 5 & 8 & 11 \\ 3 & 6 & 9 & 12 \end {pmatrix}$
The matrix $\mathbf R$ corresponding to the row operation to clear the first column is:

$\mathbf R = \begin {pmatrix} 0 & \dfrac 1 2 & 0 \\ 1 & 0 & 0 \\ 0 & -\dfrac 3 2 & 1 \end {pmatrix}$
and the matrix $\mathbf B$ which results from the row operation $\mathbf R$ is:

$\mathbf B = \begin {pmatrix} 1 & \dfrac 5 2 & 4 & \dfrac {11} 2 \\ 0 & 4 & 7 & 10 \\ 0 & -\dfrac 3 2 & -3 & -\dfrac 9 2 \end {pmatrix}$


Also presented as
Some sources are not concerned about making $b_{1 1}$ equal to $1$.
Hence they do not use step $3$ of the algorithm.


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.5$ Row and column operations




