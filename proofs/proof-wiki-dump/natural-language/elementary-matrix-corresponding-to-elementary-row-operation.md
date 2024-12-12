# 

Source: https://proofwiki.org/wiki/Elementary_Matrix_corresponding_to_Elementary_Row_Operation



Theorem
Let $\mathbf I$ denote the unit matrix of order $m$ over a field $K$.
Let $e$ be an elementary row operation on $\mathbf I$.

Let $\mathbf E$ be the elementary row matrix of order $m$ uniquely defined as:

$\mathbf E = e \paren {\mathbf I}$
where $\mathbf I$ is the unit matrix.
Let $r_k$ denote the $k$th row of $\mathbf I$ for $1 \le k \le m$. 


Case $(1)$: Scalar Product of Row
Let $e$ be the elementary row operation acting on $\mathbf I$ as:




\((\text {ERO} 1)\)  

$:$  







\(\ds r_k \to \lambda r_k \)   





For some $\lambda \in K_{\ne 0}$, multiply row $k$ of $\mathbf I$ by $\lambda$   

  

$\mathbf E$ is the square matrix of order $m$ of the form:

$E_{a b} = \begin {cases} \delta_{a b} & : a \ne k \\ \lambda \cdot \delta_{a b} & : a = k \end{cases}$


Case $(2)$: Add Scalar Product of Row to Another
Let $e$ be the elementary row operation acting on $\mathbf I$ as:




\((\text {ERO} 2)\)  

$:$  







\(\ds r_i \to r_i + \lambda r_j \)   





For some $\lambda \in K$, add $\lambda$ times row $j$ to row $i$   

  

$\mathbf E$ is the square matrix of order $m$ of the form:

$E_{a b} = \delta_{a b} + \lambda \cdot \delta_{a i} \cdot \delta_{j b}$


Case $(3)$: Exchange Rows
Let $e$ be the elementary row operation acting on $\mathbf I$ as:




\((\text {ERO} 3)\)  

$:$  







\(\ds r_i \leftrightarrow r_j \)   





Interchange rows $i$ and $j$   

  

$\mathbf E$ is the square matrix of order $m$ of the form:

$E_{a b} = \begin {cases} \delta_{a b} & : \text {if $a \ne i$ and $a \ne j$} \\ \delta_{j b} & : \text {if $a = i$} \\ \delta_{i b} & : \text {if $a = j$} \end {cases}$

Throughout the above:

$E_{a b}$ denotes the element of $\mathbf E$ whose indices are $\tuple {a, b}$
$\delta_{a b}$ is the Kronecker delta:
$\delta_{a b} = \begin {cases} 1 & : \text {if $a = b$} \\ 0 & : \text {if $a \ne b$} \end {cases}$
$\blacksquare$


Also see
Elementary Matrix corresponding to Elementary Column Operation




