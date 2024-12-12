# 

Source: https://proofwiki.org/wiki/Elementary_Row_Operation_on_Augmented_Matrix_leads_to_Equivalent_System_of_Simultaneous_Linear_Equations/Corollary_4

Corollary to Elementary Row Operation on Augmented Matrix leads to Equivalent System of Simultaneous Linear Equations
Let $S$ be a system of homogeneous simultaneous linear equations:

$\ds \forall i \in \set {1, 2, \ldots, m}: \sum_{j \mathop = 1}^n \alpha_{i j} x_j = 0$
Let $\begin {pmatrix} \mathbf R & \mathbf 0 \end {pmatrix}$ be a reduced echelon matrix derived from $\begin {pmatrix} \mathbf A & \mathbf 0 \end {pmatrix}$.
Let the number of non-zero rows of $\begin {pmatrix} \mathbf R & \mathbf 0 \end {pmatrix}$ be $l$.

If $l = n$, then the only solution to $S$ is the trivial solution.


Proof
Consider the structure of $\begin {pmatrix} \mathbf R & \mathbf 0 \end {pmatrix}$.
Suppose the leading coefficients appear in columns which we name $j_1, j_2, \ldots, j_n$.
As there are $n$ columns as well as $n$ non-zero rows:

each row has exactly one $1$ in it
each column has exactly one $1$ in it.

Thus $S'$ can be expressed as:














\(\ds x_{j_1}\)

\(=\)







\(\ds 0\)




















\(\ds x_{j_2}\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(\cdots\)







\(\ds \)




















\(\ds x_{j_n}\)

\(=\)







\(\ds 0\)









and the result follows.
$\blacksquare$


Sources
1982: A.O. Morris: Linear Algebra: An Introduction (2nd ed.) ... (previous) ... (next): Chapter $1$: Linear Equations and Matrices: $1.3$ Applications to Linear Equations: Corollary $3$




