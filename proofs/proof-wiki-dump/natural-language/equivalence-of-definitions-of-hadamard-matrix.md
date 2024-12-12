# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Hadamard_Matrix



Theorem
The following definitions of the concept of Hadamard Matrix are equivalent:

Definition 1
A Hadamard matrix $H$ is a square matrix such that:

$(1): \quad$ all the entries of $H$ are either $+1$ or $-1$
$(2): \quad$ all the rows of $H$ are pairwise orthogonal.
Definition 2
A Hadamard matrix $H$ is a square matrix such that:

$(1): \quad$ all the entries of $H$ are either $+1$ or $-1$
$(2): \quad H H^\intercal = n \mathbf I_n$
where:

$H^\intercal$ denotes the transpose of $H$
$\mathbf I_n$ denotes the identity matrix of order $n$
given that the order of $H$ is $n$.


Proof
Let $H$ be a Hadamard matrix whose arbitrary element in the $j$th row and $k$th column is given by $\sqbrk a_{j k}$.
By either definition of Hadamard matrix:

$a_{j k} = \pm 1$
and so:

${a_{j k} }^2 = 1$
By definition of transpose, column $j$ of $H_\intercal$ is ${r_j}^\intercal$, where $r_j$ is row $j$ of $H$.


$(1)$ implies $(2)$
Let $H = \sqbrk a_n$ be a Hadamard matrix by definition $1$.
We have that the rows of $H$ are pairwise orthogonal.
That is:

$r_j \cdot {r_k}^\intercal = 0$
when $j \ne k$.

Let $r_j$ be an arbitrary row of $H$:

$r_j = \begin {bmatrix} a_{j 1} & a_{j 2} & \cdots & a_{j n} \end {bmatrix}$
Then by definition of matrix product:

$h_{j j} = \ds \sum_{k \mathop = 1}^n {a_{j k} }^2$
where by definition of Hadamard matrix (either one) each of $a_{j k}$ is either $1$ or $-1$.
Hence:

$\forall k \in \set {1, 2, \ldots, n}: {a_{j k} }^2 = 1$
Then:














\(\ds h_{j j}\)

\(=\)







\(\ds {r_j}^\intercal \cdot {r_j}^\intercal\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n {a_{j k} }^2\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n 1\)




















\(\ds \)

\(=\)







\(\ds n\)









Similarly:














\(\ds h_{j k}\)

\(=\)







\(\ds {r_j}^\intercal \cdot {r_k}^\intercal\)




















\(\ds \)

\(=\)







\(\ds 0\)





Definition of Pairwise Orthogonal Rows



Thus $H H^\intercal$ is of the form:

$h_{j k} = n \delta_{j k}$
where $\delta_{j k}$ is the Kronecker delta.
So by definition of identity matrix:

$H H^\intercal = n \mathbf I_n$

Thus $H$ is a Hadamard matrix by definition $2$.
$\Box$


$(2)$ implies $(1)$
Let $H = \sqbrk a_n$ be a Hadamard matrix by definition $2$.
We have that:

$H H^\intercal = n \mathbf I_n$













\(\ds h_{j k}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n a_{j i} a_{i k}\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds r_j \cdot {r_k}^\intercal\)




















\(\ds \)

\(=\)







\(\ds \begin {cases} n & : j = k \\ 0 & : j \ne k \end {cases}\)





Definition of Identity Matrix



From that last line:

$j \ne k \implies r_j \cdot {r_k}^\intercal = 0$
That is, the rows of $H$ are pairwise orthogonal.
Thus $H$ is a Hadamard matrix by definition $1$.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Hadamard matrix
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Hadamard matrix




