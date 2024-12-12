# 

Source: https://proofwiki.org/wiki/Elementary_Column_Matrix_for_Inverse_of_Elementary_Column_Operation_is_Inverse/Proof_1



Theorem
Let $e$ be an elementary column operation.
Let $\mathbf E$ be the elementary column matrix corresponding to $e$.
Let $e'$ be the inverse of $e$.

Then the elementary column matrix corresponding to $e'$ is the inverse of $\mathbf E$.


Proof
We will demonstrate this for each of the $3$ types of elementary column operation.

Let $\sim$ denote column equivalence.
Let $\mathbf I$ denote the unit matrix.


$\text {ECO} 1$: Scalar Product of Column
Let $e_1$ be the elementary column operation:

$e_1 := \kappa_i \to \lambda \kappa_i$
for an arbitrary column $\kappa_i$ of $\mathbf I$.

Let $\mathbf E_1$ be the elementary column matrix created by applying $e_1$ to $\mathbf I$.
From Existence of Inverse Elementary Column Operation: Scalar Product of Column, the inverse $e_1'$ of $e_1$ is given by:

$e_1' := \kappa_i \to \dfrac 1 \lambda \kappa_i$
Thus applying $e_1'$ to $\mathbf E_1$ transforms $\mathbf E_1$ back to $\mathbf I$.

From Elementary Column Operations as Matrix Multiplications, for every elementary column operation there exists a corresponding elementary column matrix. 
Let $\mathbf E_1'$ be the elementary column matrix created by applying $e_1'$ to $\mathbf I$.

Then:

$\mathbf E_1 \mathbf E_1' = \mathbf E_1' \mathbf E_1 = \mathbf I$


$\text {ECO} 2$: Add Scalar Product of Column to Another
Let $e_2$ be the elementary column operation:

$e_2 := \kappa_i \to \kappa_i + \lambda \kappa_j$
for arbitrary column $\kappa_i$ and $\kappa_j$ of $\mathbf I$ such that $i \ne j$.

Let $\mathbf E_2$ be the elementary column matrix created by applying $e_2$ to $\mathbf I$.
From Existence of Inverse Elementary Column Operation: Add Scalar Product of Column to Another, the inverse $e_2'$ of $e_2$ is given by:

$e_2' := \kappa_i \to \kappa_i - \lambda r_j$
Thus applying $e_2'$ to $\mathbf E_2$ transforms $\mathbf E_2$ back to $\mathbf I$.

From Elementary Column Operations as Matrix Multiplications, for every elementary column operation there exists a corresponding elementary column matrix. 
Let $\mathbf E_2'$ be the elementary column matrix created by applying $e_2'$ to $\mathbf I$.

Then:

$\mathbf E_2 \mathbf E_2' = \mathbf E_2' \mathbf E_2 = \mathbf I$


$\text {ECO} 3$: Exchange Columns
Let $e_3$ be the elementary column operation:

$e_3 := \kappa_i \leftrightarrow \kappa_j$
for arbitrary column $\kappa_i$ and $\kappa_j$ of $\mathbf I$ such that $i \ne j$.

Let $\mathbf E_3$ be the elementary column matrix created by applying $e_3$ to $\mathbf I$.

From Existence of Inverse Elementary Column Operation: Exchange Columns, the inverse $e_3'$ of $e_3$ is $e_3$ itself:

$e_3' := \kappa_i \leftrightarrow \kappa_j = e_3$
Thus applying $e_3$ to $\mathbf E_3$ transforms $\mathbf E_3$ back to $\mathbf I$.

$\mathbf E_3 \mathbf E_3 = \mathbf I$
Hence the result, from Proof by Cases.
$\blacksquare$





