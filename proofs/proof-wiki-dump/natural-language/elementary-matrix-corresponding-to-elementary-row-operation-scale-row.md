# 

Source: https://proofwiki.org/wiki/Elementary_Matrix_corresponding_to_Elementary_Row_Operation/Scale_Row

Theorem
Let $\mathbf I$ denote the unit matrix of order $m$ over a field $K$.

Let $e$ be the elementary row operation acting on $\mathbf I$ as:




\((\text {ERO} 1)\)  

$:$  







\(\ds r_k \to \lambda r_k \)   





For some $\lambda \in K_{\ne 0}$, multiply row $k$ of $\mathbf I$ by $\lambda$   

  

for $1 \le k \le m$.

Let $\mathbf E$ be the elementary row matrix defined as:

$\mathbf E = e \paren {\mathbf I}$

$\mathbf E$ is the square matrix of order $m$ of the form:

$E_{a b} = \begin {cases} \delta_{a b} & : a \ne k \\ \lambda \cdot \delta_{a b} & : a = k \end{cases}$
where:

$E_{a b}$ denotes the element of $\mathbf E$ whose indices are $\tuple {a, b}$
$\delta_{a b}$ is the Kronecker delta:
$\delta_{a b} = \begin {cases} 1 & : \text {if $a = b$} \\ 0 & : \text {if $a \ne b$} \end {cases}$


Proof
By definition of the unit matrix:

$I_{a b} = \delta_{a b}$
where:

$I_{a b}$ denotes the element of $\mathbf I$ whose indices are $\tuple {a, b}$.

By definition, $\mathbf E$ is the square matrix of order $m$ formed by applying $e$ to the unit matrix $\mathbf I$.
That is, all elements of row $k$ of $\mathbf I$ are to be multiplied by $\lambda$.

By definition of unit matrix, all elements of row $k$ are $0$ except for element $I_{k k}$, which is $1$.
Thus in $\mathbf E$:

$E_{k k} = \lambda \cdot 1 = \lambda$
The elements in all the other rows of $\mathbf E$ are the same as the corresponding elements of $\mathbf I$.
Hence the result.
$\blacksquare$





