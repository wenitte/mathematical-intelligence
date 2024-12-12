# 

Source: https://proofwiki.org/wiki/Elementary_Row_Operation_on_Augmented_Matrix_leads_to_Equivalent_System_of_Simultaneous_Linear_Equations/Corollary_3

Corollary to Elementary Row Operation on Augmented Matrix leads to Equivalent System of Simultaneous Linear Equations
Let $S$ be a system of homogeneous simultaneous linear equations:

$\ds \forall i \in \set {1, 2, \ldots, m}: \sum_{j \mathop = 1}^n \alpha_{i j} x_j = 0$
If $m < n$, then $S$ has at least one non-trivial solution.


Proof
Let $\begin {pmatrix} \mathbf A & \mathbf b \end {pmatrix}$ denote the augmented matrix of $S$.
Because $S$ is homogeneous, we have that $\mathbf b = \mathbf 0$, and so its augmented matrix is $\begin {pmatrix} \mathbf A & \mathbf 0 \end {pmatrix}$.

Let $\begin {pmatrix} \mathbf R & \mathbf 0 \end {pmatrix}$ be a reduced echelon matrix derived from $\begin {pmatrix} \mathbf A & \mathbf 0 \end {pmatrix}$.
Let $S'$ be the system of simultaneous linear equations:

$\ds \forall i \in \set {1, 2, \ldots, m}: \sum_{j \mathop = 1}^n \rho_{i j} x_j = 0$
whose augmented matrix is $\begin {pmatrix} \mathbf R & \mathbf 0 \end {pmatrix}$.
By Corollary 1, $S$ and $S'$ are equivalent.
Hence any every solution to $S'$ is also a solution to $S$.

Consider the structure of $\begin {pmatrix} \mathbf R & \mathbf 0 \end {pmatrix}$.
Suppose the leading coefficients appear in columns which we name $j_1, j_2, \ldots, j_l$.
Let the remaining columns be named $j_{l + 1}, j_{l + 2}, \ldots, j_n$.
Then we have that $S'$ can be expressed as:














\(\ds x_{j_1} + \sum_{k \mathop = l + 1}^n \rho_{i j_k} x_{j_k}\)

\(=\)







\(\ds 0\)




















\(\ds x_{j_2} + \sum_{k \mathop = l + 1}^n \rho_{2 j_k} x_{j_k}\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(\cdots\)







\(\ds \)




















\(\ds x_{j_l} + \sum_{k \mathop = l + 1}^n \rho_{2 j_k} x_{j_k}\)

\(=\)







\(\ds 0\)









where $l + 1 \le m$.

Setting arbitrary values to $x_{j_k}$ for $l < k \le n$ gives us a non-trivial solution for $S$.
$\blacksquare$


Sources
1982: A.O. Morris: Linear Algebra: An Introduction (2nd ed.) ... (previous) ... (next): Chapter $1$: Linear Equations and Matrices: $1.3$ Applications to Linear Equations: Corollary $3$




