# 

Source: https://proofwiki.org/wiki/Determinant_of_Elementary_Column_Matrix/Scale_Column_and_Add

Theorem
Let $e_2$ be the elementary column operation $\text {ECO} 2$:




\((\text {ECO} 2)\)  

$:$  







\(\ds \kappa_i \to \kappa_i + \lambda \kappa_j \)   





For some $\lambda$, add $\lambda$ times column $j$ to column $i$   

  

which is to operate on some arbitrary matrix space.

Let $\mathbf E_2$ be the elementary column matrix corresponding to $e_2$.
The determinant of $\mathbf E_2$ is:

$\map \det {\mathbf E_2} = 1$


Proof
By Elementary Matrix corresponding to Elementary Column Operation: Scale Column and Add, $\mathbf E_2$ is of the form:

$E_{a b} = \delta_{a b} + \lambda \cdot \delta_{b i} \cdot \delta_{j a}$
where:

$E_{a b}$ denotes the element of $\mathbf E$ whose indices are $\tuple {a, b}$
$\delta_{a b}$ is the Kronecker delta:
$\delta_{a b} = \begin {cases} 1 & : \text {if $a = b$} \\ 0 & : \text {if $a \ne b$} \end {cases}$
Because $i \ne j$ it follows that:

if $a = i$ and $b = j$ then $a \ne b$
Hence when $a = b$ we have that:

$\delta_{b i} \cdot \delta_{j a} = 0$
Hence the diagonal elements of $\mathbf E_2$ are all equal to $1$.
We also have that $\delta_{b i} \cdot \delta_{j a} = 1$ if and only if $a = i$ and $b = j$.
Hence, all elements of $\mathbf E_2$ apart from the diagonal elements and $a_{i j}$ are equal to $0$.
Thus $\mathbf E_2$ is a triangular matrix (either upper or lower).
From Determinant of Triangular Matrix, $\map \det {\mathbf E_2}$ is equal to the product of all the diagonal elements of $\mathbf E_2$.
But as we have seen, these are all equal to $1$.
Hence the result.
$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.6$ Determinant and trace: Proposition $1.13$




