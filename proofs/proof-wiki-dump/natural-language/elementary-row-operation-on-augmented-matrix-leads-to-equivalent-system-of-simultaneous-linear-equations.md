# 

Source: https://proofwiki.org/wiki/Elementary_Row_Operation_on_Augmented_Matrix_leads_to_Equivalent_System_of_Simultaneous_Linear_Equations



Theorem
Let $S$ be a system of simultaneous linear equations:

$\ds \forall i \in \set {1, 2, \ldots, m}: \sum_{j \mathop = 1}^n \alpha_{i j} x_j = \beta_i$
Let $\begin {pmatrix} \mathbf A & \mathbf b \end {pmatrix}$ denote the augmented matrix of $S$.
Let $\begin {pmatrix} \mathbf A' & \mathbf b' \end {pmatrix}$ be obtained from $\begin {pmatrix} \mathbf A & \mathbf b \end {pmatrix}$ by means of an elementary row operation.
Let $S'$ be the system of simultaneous linear equations of which $\begin {pmatrix} \mathbf A' & \mathbf b' \end {pmatrix}$ is the augmented matrix.

Then $S$ and $S'$ are equivalent.


Corollary 1
Let $S$ be a system of simultaneous linear equations:

$\ds \forall i \in \set {1, 2, \ldots, m}: \sum_{j \mathop = 1}^n \alpha_{i j} x_j = \beta_i$
Let $\begin {pmatrix} \mathbf A & \mathbf b \end {pmatrix}$ denote the augmented matrix of $S$.
Let $\begin {pmatrix} \mathbf R & \mathbf s \end {pmatrix}$ be a reduced echelon matrix derived from $\begin {pmatrix} \mathbf A & \mathbf b \end {pmatrix}$.
Let $S'$ be the system of simultaneous linear equations:

$\ds \forall i \in \set {1, 2, \ldots, m}: \sum_{j \mathop = 1}^n \rho_{i j} x_j = \sigma_i$
whose augmented matrix is $\begin {pmatrix} \mathbf R & \mathbf s \end {pmatrix}$.

Then $S$ and $S'$ are equivalent.


Corollary 2
Let $S$ be a system of simultaneous linear equations:

$\ds \forall i \in \set {1, 2, \ldots, m}: \sum_{j \mathop = 1}^n \alpha_{i j} x_j = \beta_i$
Let $\begin {pmatrix} \mathbf A & \mathbf b \end {pmatrix}$ denote the augmented matrix of $S$.
Let $\begin {pmatrix} \mathbf R & \mathbf s \end {pmatrix}$ be a reduced echelon matrix derived from $\begin {pmatrix} \mathbf A & \mathbf b \end {pmatrix}$.

Then $S$ is consistent if and only if the rightmost column of $\begin {pmatrix} \mathbf R & \mathbf s \end {pmatrix}$ does not have a leading coefficient.


Corollary 3
Let $S$ be a system of homogeneous simultaneous linear equations:

$\ds \forall i \in \set {1, 2, \ldots, m}: \sum_{j \mathop = 1}^n \alpha_{i j} x_j = 0$
If $m < n$, then $S$ has at least one non-trivial solution.


Corollary 4
Let $S$ be a system of homogeneous simultaneous linear equations:

$\ds \forall i \in \set {1, 2, \ldots, m}: \sum_{j \mathop = 1}^n \alpha_{i j} x_j = 0$
Let $\begin {pmatrix} \mathbf R & \mathbf 0 \end {pmatrix}$ be a reduced echelon matrix derived from $\begin {pmatrix} \mathbf A & \mathbf 0 \end {pmatrix}$.
Let the number of non-zero rows of $\begin {pmatrix} \mathbf R & \mathbf 0 \end {pmatrix}$ be $l$.

If $l = n$, then the only solution to $S$ is the trivial solution.


Corollary 5
Let $S$ be a system of $n$ homogeneous simultaneous linear equations in $n$ variables:

$\ds \forall i \in \set {1, 2, \ldots, n}: \sum_{j \mathop = 1}^n \alpha_{i j} x_j = 0$

$S$ has a non-trivial solution if and only if its reduced echelon matrix $R$ is not equal to the unit matrix $\mathbf I_n$.


Proof
We have that an elementary row operation $e$ is used to transform $\begin {pmatrix} \mathbf A & \mathbf b \end {pmatrix}$ to $\begin {pmatrix} \mathbf A' & \mathbf b' \end {pmatrix}$.

Now, whatever $e$ is, $\begin {pmatrix} \mathbf A' & \mathbf b' \end {pmatrix}$ is the augmented matrix of a system of simultaneous linear equations $S'$.
We investigate each type of elementary row operation in turn.

In the below, let:

$r_k$ denote row $k$ of $\mathbf A$
$r'_k$ denote row $k$ of $\mathbf A'$
for arbitrary $k$ such that $1 \le k \le m$.

By definition of elementary row operation, only the row or rows directly operated on by $e$ is or are different between $\begin {pmatrix} \mathbf A & \mathbf b \end {pmatrix}$ and $\begin {pmatrix} \mathbf A' & \mathbf b' \end {pmatrix}$.
Hence it is understood that in the following, only those equations corresponding to those rows directly affected will be under consideration.


$\text {ERO} 1$: Scalar Product of Row
Let $e \begin {pmatrix} \mathbf A & \mathbf b \end {pmatrix}$ be the elementary row operation:

$e := r_k \to \lambda r_k$
where $\lambda \ne 0$.

Then the equation in $S$:

$(1 \text a): \ds \sum_{i \mathop = 1}^n \alpha_{k i} x_i = \beta_k$

is replaced in $S'$ by:














\(\ds \sum_{i \mathop = 1}^n \lambda \alpha_{k i} x_i\)

\(=\)







\(\ds \lambda \beta_k\)










\(\text {(2a)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \lambda \sum_{i \mathop = 1}^n \alpha_{k i} x_i\)

\(=\)







\(\ds \lambda \beta_k\)









It is seen that $\tuple {x_1, x_2, \ldots x_n}$ is a solution to $(1 \text a)$ if and only if $\tuple {x_1, x_2, \ldots x_n}$ is a solution to $(2 \text a)$.
$\Box$


$\text {ERO} 2$: Add Scalar Product of Row to Another
Let $e \begin {pmatrix} \mathbf A & \mathbf b \end {pmatrix}$ be the elementary row operation:

$e := r_k \to r_k + \lambda r_l$
Then the equation in $S$:

$(1 \text b): \ds \sum_{i \mathop = 1}^n \alpha_{k i} x_i = \beta_k$

is replaced in $S'$ by:














\(\ds \sum_{i \mathop = 1}^n \paren {\alpha_{k i} + \lambda \alpha_{l i} } x_i\)

\(=\)







\(\ds \beta_k + \lambda \beta_l\)










\(\text {(2b)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \sum_{i \mathop = 1}^n \alpha_{k i} x_i + \lambda \sum_{i \mathop = 1}^n \alpha_{l i} x_i\)

\(=\)







\(\ds \lambda \beta_k + \lambda \beta_l\)









It is seen that $\tuple {x_1, x_2, \ldots x_n}$ is a solution to $(1 \text b)$ if and only if $\tuple {x_1, x_2, \ldots x_n}$ is a solution to $(2 \text b)$.
$\Box$


$\text {ERO} 3$: Exchange Rows
Let $e \begin {pmatrix} \mathbf A & \mathbf b \end {pmatrix}$ be the elementary row operation:

$e := r_k \leftrightarrow r_l$
Then the equations in $S$:




\(\text {(1c)}: \quad\)









\(\ds \sum_{i \mathop = 1}^n \alpha_{k i} x_i\)

\(=\)







\(\ds \beta_k\)










\(\text {(2c)}: \quad\)









\(\ds \sum_{i \mathop = 1}^n \alpha_{l i} x_i\)

\(=\)







\(\ds \beta_l\)









exist unchanged in $S'$, but are in different positions.

It follows trivially that:

$\tuple {x_1, x_2, \ldots x_n}$ is a solution to $(1 \text c)$ in $S$
if and only if:

$\tuple {x_1, x_2, \ldots x_n}$ is a solution to $(1 \text c)$ in $S'$
and:

$\tuple {x_1, x_2, \ldots x_n}$ is a solution to $(2 \text c)$ in $S$
if and only if:

$\tuple {x_1, x_2, \ldots x_n}$ is a solution to $(2 \text c)$ in $S'$.
$\Box$

Thus in all cases, for each elementary row operation which transforms $\begin {pmatrix} \mathbf A & \mathbf b \end {pmatrix}$ to $\begin {pmatrix} \mathbf A' & \mathbf b' \end {pmatrix}$, $S$ is equivalent to $S'$.

Finally we note that from Existence of Inverse Elementary Row Operation, there exists an elementary row operation $e'$ which transforms $\begin {pmatrix} \mathbf A' & \mathbf b' \end {pmatrix}$ to $\begin {pmatrix} \mathbf A & \mathbf b \end {pmatrix}$.
Hence, mutatis mutandis, the above argument can be used to demonstrate that $S'$ is equivalent to $S$.
Hence the result.
$\blacksquare$


Sources
1982: A.O. Morris: Linear Algebra: An Introduction (2nd ed.) ... (previous) ... (next): Chapter $1$: Linear Equations and Matrices: $1.3$ Applications to Linear Equations: Theorem $1.7$




