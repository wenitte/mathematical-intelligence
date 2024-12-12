# 

Source: https://proofwiki.org/wiki/Elementary_Row_Operation_on_Augmented_Matrix_leads_to_Equivalent_System_of_Simultaneous_Linear_Equations/Corollary_2



Corollary to Elementary Row Operation on Augmented Matrix leads to Equivalent System of Simultaneous Linear Equations
Let $S$ be a system of simultaneous linear equations:

$\ds \forall i \in \set {1, 2, \ldots, m}: \sum_{j \mathop = 1}^n \alpha_{i j} x_j = \beta_i$
Let $\begin {pmatrix} \mathbf A & \mathbf b \end {pmatrix}$ denote the augmented matrix of $S$.
Let $\begin {pmatrix} \mathbf R & \mathbf s \end {pmatrix}$ be a reduced echelon matrix derived from $\begin {pmatrix} \mathbf A & \mathbf b \end {pmatrix}$.

Then $S$ is consistent if and only if the rightmost column of $\begin {pmatrix} \mathbf R & \mathbf s \end {pmatrix}$ does not have a leading coefficient.


Proof
Let $S'$ be the system of simultaneous linear equations:

$\ds \forall i \in \set {1, 2, \ldots, m}: \sum_{j \mathop = 1}^n \rho_{i j} x_j = \sigma_i$
whose augmented matrix is $\begin {pmatrix} \mathbf R & \mathbf s \end {pmatrix}$.
By Corollary 1, $S$ and $S'$ are equivalent.
Hence any every solution to $S'$ is also a solution to $S$.

Consider the structure of $\begin {pmatrix} \mathbf R & \mathbf s \end {pmatrix}$.
Suppose the leading coefficients appear in columns which we name $j_1, j_2, \ldots, j_l$.
Let the remaining columns be named $j_{l + 1}, j_{l + 2}, \ldots, j_n$.
Then we have that $S'$ can be expressed as:














\(\ds x_{j_1} + \sum_{k \mathop = l + 1}^n \rho_{i j_k} x_{j_k}\)

\(=\)







\(\ds \sigma_1\)




















\(\ds x_{j_2} + \sum_{k \mathop = l + 1}^n \rho_{2 j_k} x_{j_k}\)

\(=\)







\(\ds \sigma_2\)




















\(\ds \)

\(\cdots\)







\(\ds \)




















\(\ds x_{j_l} + \sum_{k \mathop = l + 1}^n \rho_{2 j_k} x_{j_k}\)

\(=\)







\(\ds \sigma_l\)




















\(\ds 0\)

\(=\)







\(\ds \sigma_{l + 1}\)









where $l + 1 \le m$.

We have that $\begin {pmatrix} \mathbf R & \mathbf s \end {pmatrix}$ is in reduced echelon form.
By definition of reduced echelon form, it follows that if $\sigma_{l + 1} \ne 0$ then $\sigma_{l + 1} = 1$.
Then when $\sigma_{l + 1} = 1$, $\sigma_{l + 1}$ is the leading coefficient of row $l + 1$ of $\begin {pmatrix} \mathbf R & \mathbf s \end {pmatrix}$.
This leading coefficient is seen to be in the rightmost column.


Sufficient Condition
Let the rightmost column of $\begin {pmatrix} \mathbf R & \mathbf s \end {pmatrix}$ have no leading coefficient.
That is:

$\sigma_{l + 1} = 0$
Let us set:

$(1): \quad \forall i \in \set {1, 2, \ldots, m}: x_{j_i} = \begin {cases} \sigma i & : i \le l \\0 & : i > l \end {cases}$
Then we have that $S'$ reduces to: 














\(\ds x_{j_1}\)

\(=\)







\(\ds \sigma_1\)




















\(\ds x_{j_2}\)

\(=\)







\(\ds \sigma_2\)




















\(\ds \)

\(\cdots\)







\(\ds \)




















\(\ds x_{j_l}\)

\(=\)







\(\ds \sigma_l\)









and it can be seen by inspection that $(1)$ is a solution to $S$.


Necessary Condition
Let $S$ be consistent. 
Aiming for a contradiction, suppose let the rightmost column of $\begin {pmatrix} \mathbf R & \mathbf s \end {pmatrix}$ have no leading coefficient.
That is:

$\sigma_{l + 1} = 1$
Thus row $l + 1$ looks like:

$\begin {pmatrix} 0 & 0 & \cdots & 0 & 1 \end {pmatrix}$
which corresponds to the equation:

$0 x_1 + 0 x_2 + \cdots + 0 x_n = 1$
That is:

$0 = 1$
Hence there is no such $\tuple {x_1, x_2, \ldots, x_n}$ that is a solution to $S'$.
As $S$ and $S'$ are equivalent, there can likewise be no solution to $S$.
That is, $S$ is not consistent.
But this contradicts our initial supposition that $S$ is consistent.
Hence, by Proof by Contradiction, it follows that there can exist no leading coefficient in the rightmost column of $\begin {pmatrix} \mathbf R & \mathbf s \end {pmatrix}$.
$\blacksquare$


Sources
1982: A.O. Morris: Linear Algebra: An Introduction (2nd ed.) ... (previous) ... (next): Chapter $1$: Linear Equations and Matrices: $1.3$ Applications to Linear Equations: Corollary $2$




