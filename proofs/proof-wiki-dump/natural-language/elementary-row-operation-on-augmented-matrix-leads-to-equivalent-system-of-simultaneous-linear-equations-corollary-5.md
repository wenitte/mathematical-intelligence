# 

Source: https://proofwiki.org/wiki/Elementary_Row_Operation_on_Augmented_Matrix_leads_to_Equivalent_System_of_Simultaneous_Linear_Equations/Corollary_5

Corollary to Elementary Row Operation on Augmented Matrix leads to Equivalent System of Simultaneous Linear Equations
Let $S$ be a system of $n$ homogeneous simultaneous linear equations in $n$ variables:

$\ds \forall i \in \set {1, 2, \ldots, n}: \sum_{j \mathop = 1}^n \alpha_{i j} x_j = 0$

$S$ has a non-trivial solution if and only if its reduced echelon matrix $R$ is not equal to the unit matrix $\mathbf I_n$.


Proof
Let $\begin {pmatrix} \mathbf R & \mathbf 0 \end {pmatrix}$ be a reduced echelon matrix derived from $\begin {pmatrix} \mathbf A & \mathbf 0 \end {pmatrix}$.
Let the number of non-zero rows of $\begin {pmatrix} \mathbf R & \mathbf 0 \end {pmatrix}$ be $l$.


$R = \mathbf I_n$.
Then $l = n$.
From Corollary 4, in this case the only solution to $S$ is the trivial solution.
$\Box$

Let $R \ne \mathbf I_n$.
As $R$ is a reduced echelon matrix, it must have at least one zero row.
Thus $l < n$.
From Corollary 3, in this case there is at least one non-trivial solution.
$\blacksquare$


Sources
1982: A.O. Morris: Linear Algebra: An Introduction (2nd ed.) ... (previous) ... (next): Chapter $1$: Linear Equations and Matrices: $1.3$ Applications to Linear Equations: Corollary $4$




