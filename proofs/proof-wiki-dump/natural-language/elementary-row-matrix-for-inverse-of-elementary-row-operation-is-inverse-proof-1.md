# 

Source: https://proofwiki.org/wiki/Elementary_Row_Matrix_for_Inverse_of_Elementary_Row_Operation_is_Inverse/Proof_1



Theorem
Let $e$ be an elementary row operation.
Let $\mathbf E$ be the elementary row matrix corresponding to $e$.
Let $e'$ be the inverse of $e$.

Then the elementary row matrix corresponding to $e'$ is the inverse of $\mathbf E$.


Proof
We will demonstrate this for each of the $3$ types of elementary row operation.

Let $\sim$ denote row equivalence.
Let $\mathbf I$ denote the unit matrix.


$\text {ERO} 1$: Scalar Product of Row
Let $e_1$ be the elementary row operation:

$e_1 := r_i \to \lambda r_i$
for an arbitrary row $r_i$ of $\mathbf I$.

Let $\mathbf E_1$ be the elementary row matrix created by applying $e_1$ to $\mathbf I$.
From Existence of Inverse Elementary Row Operation: Scalar Product of Row, the inverse $e_1'$ of $e_1$ is given by:

$e_1' := r_i \to \dfrac 1 \lambda r_i$
Thus applying $e_1'$ to $\mathbf E_1$ transforms $\mathbf E_1$ back to $\mathbf I$.

From Elementary Row Operations as Matrix Multiplications, for every elementary row operation there exists a corresponding elementary row matrix. 
Let $\mathbf E_1'$ be the elementary row matrix created by applying $e_1'$ to $\mathbf I$.

Then:

$\mathbf E_1 \mathbf E_1' = \mathbf E_1' \mathbf E_1 = \mathbf I$


$\text {ERO} 2$: Add Scalar Product of Row to Another
Let $e_2$ be the elementary row operation:

$e_2 := r_i \to r_i + \lambda r_j$
for arbitrary row $r_i$ and $r_j$ of $\mathbf I$ such that $i \ne j$.

Let $\mathbf E_2$ be the elementary row matrix created by applying $e_2$ to $\mathbf I$.
From Existence of Inverse Elementary Row Operation: Add Scalar Product of Row to Another, the inverse $e_2'$ of $e_2$ is given by:

$e_2' := r_i \to r_i - \lambda r_j$
Thus applying $e_2'$ to $\mathbf E_2$ transforms $\mathbf E_2$ back to $\mathbf I$.

From Elementary Row Operations as Matrix Multiplications, for every elementary row operation there exists a corresponding elementary row matrix. 
Let $\mathbf E_2'$ be the elementary row matrix created by applying $e_2'$ to $\mathbf I$.

Then:

$\mathbf E_2 \mathbf E_2' = \mathbf E_2' \mathbf E_2 = \mathbf I$


$\text {ERO} 3$: Exchange Rows
Let $e_3$ be the elementary row operation:

$e_3 := r_i \leftrightarrow r_j$
for arbitrary row $r_i$ and $r_j$ of $\mathbf I$ such that $i \ne j$.

Let $\mathbf E_3$ be the elementary row matrix created by applying $e_3$ to $\mathbf I$.

From Existence of Inverse Elementary Row Operation: Exchange Rows, the inverse $e_3'$ of $e_3$ is $e_3$ itself:

$e_3' := r_i \leftrightarrow r_j = e_3$
Thus applying $e_3$ to $\mathbf E_3$ transforms $\mathbf E_3$ back to $\mathbf I$.

$\mathbf E_3 \mathbf E_3 = \mathbf I$
Hence the result, from Proof by Cases.
$\blacksquare$


Sources
1995: John B. Fraleigh and Raymond A. Beauregard: Linear Algebra (3rd ed.) $\S 1.5$




