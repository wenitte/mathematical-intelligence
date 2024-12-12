# 

Source: https://proofwiki.org/wiki/Determinant_of_Lower_Triangular_Matrix

Theorem
Let $\mathbf T_n$ be a lower triangular matrix of order $n$.
Let $\map \det {\mathbf T_n}$ be the determinant of $\mathbf T_n$.

Then $\map \det {\mathbf T_n}$ is equal to the product of all the diagonal elements of $\mathbf T_n$.

That is:

$\ds \map \det {\mathbf T_n} = \prod_{k \mathop = 1}^n a_{k k}$


Proof
From Transpose of Upper Triangular Matrix is Lower Triangular, the transpose $\mathbf T_n^\intercal$ of $\mathbf T_n$ is an upper triangular matrix.
From Determinant of Upper Triangular Matrix, the determinant of $\mathbf T_n^\intercal$ is equal to the product of all the diagonal elements of $\mathbf T_n^\intercal$.
From Determinant of Transpose, the determinant of $\mathbf T_n^\intercal$ equals the determinant of $\mathbf T_n$.
$\blacksquare$


Also see
Determinant of Upper Triangular Matrix




