# 

Source: https://proofwiki.org/wiki/Determinant_of_Elementary_Row_Matrix/Scale_Row

Theorem
Let $e_1$ be the elementary row operation $\text {ERO} 1$:




\((\text {ERO} 1)\)  

$:$  







\(\ds r_k \to \lambda r_k \)   





For some $\lambda \ne 0$, multiply row $k$ by $\lambda$   

  

which is to operate on some arbitrary matrix space.

Let $\mathbf E_1$ be the elementary row matrix corresponding to $e_1$.
The determinant of $\mathbf E_1$ is:

$\map \det {\mathbf E_1} = \lambda$


Proof
By Elementary Matrix corresponding to Elementary Row Operation: Scale Row, the elementary row matrix corresponding to $e_1$ is of the form:

$E_{a b} = \begin {cases} \delta_{a b} & : a \ne k \\ \lambda \cdot \delta_{a b} & : a = k \end{cases}$
where:

$E_{a b}$ denotes the element of $\mathbf E_1$ whose indices are $\tuple {a, b}$
$\delta_{a b}$ is the Kronecker delta:
$\delta_{a b} = \begin {cases} 1 & : \text {if $a = b$} \\ 0 & : \text {if $a \ne b$} \end {cases}$
Thus when $a \ne b$, $E_{a b} = 0$.
This means that $\mathbf E_1$ is a diagonal matrix.















\(\ds \map \det {\mathbf E_1}\)

\(=\)







\(\ds \prod_i E_{i i}\)





Determinant of Diagonal Matrix

\(\quad\) where the index variable $i$ ranges over the order of $\mathbf E_1$












\(\ds \)

\(=\)







\(\ds \prod_i \paren {\begin {cases} 1 & : i \ne k \\ \lambda & : a = k \end{cases} }\)




















\(\ds \)

\(=\)







\(\ds \prod_{i \mathop \ne k} 1 \times \prod_{i \mathop = k} \lambda\)




















\(\ds \)

\(=\)







\(\ds 1 \times \lambda\)




















\(\ds \)

\(=\)







\(\ds \lambda\)









$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.6$ Determinant and trace: Fact $1.8 \ \text {(b)}$




