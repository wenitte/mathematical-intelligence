# 

Source: https://proofwiki.org/wiki/Elementary_Row_Operation_on_Augmented_Matrix_leads_to_Equivalent_System_of_Simultaneous_Linear_Equations/Corollary_1

Corollary to Elementary Row Operation on Augmented Matrix leads to Equivalent System of Simultaneous Linear Equations
Let $S$ be a system of simultaneous linear equations:

$\ds \forall i \in \set {1, 2, \ldots, m}: \sum_{j \mathop = 1}^n \alpha_{i j} x_j = \beta_i$
Let $\begin {pmatrix} \mathbf A & \mathbf b \end {pmatrix}$ denote the augmented matrix of $S$.
Let $\begin {pmatrix} \mathbf R & \mathbf s \end {pmatrix}$ be a reduced echelon matrix derived from $\begin {pmatrix} \mathbf A & \mathbf b \end {pmatrix}$.
Let $S'$ be the system of simultaneous linear equations:

$\ds \forall i \in \set {1, 2, \ldots, m}: \sum_{j \mathop = 1}^n \rho_{i j} x_j = \sigma_i$
whose augmented matrix is $\begin {pmatrix} \mathbf R & \mathbf s \end {pmatrix}$.

Then $S$ and $S'$ are equivalent.


Proof
By Matrix is Row Equivalent to Reduced Echelon Matrix, $\begin {pmatrix} \mathbf R & \mathbf s \end {pmatrix}$ can be obtained from $\begin {pmatrix} \mathbf A & \mathbf b \end {pmatrix}$ by means of a finite sequence of elementary row operations.
By Elementary Row Operation on Augmented Matrix leads to Equivalent System of Simultaneous Linear Equations, the system of simultaneous linear equations whose augmented matrix is obtained from $\begin {pmatrix} \mathbf A & \mathbf b \end {pmatrix}$ in this way is equivalent to $S$ after each elementary row operation.
Hence the entire sequence of such systems of simultaneous linear equations are equivalent to $S$.
In particular, this applies to $S'$.
$\blacksquare$


Sources
1982: A.O. Morris: Linear Algebra: An Introduction (2nd ed.) ... (previous) ... (next): Chapter $1$: Linear Equations and Matrices: $1.3$ Applications to Linear Equations: Corollary $1$




