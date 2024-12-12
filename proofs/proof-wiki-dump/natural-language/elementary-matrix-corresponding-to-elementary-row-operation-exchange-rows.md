# 

Source: https://proofwiki.org/wiki/Elementary_Matrix_corresponding_to_Elementary_Row_Operation/Exchange_Rows

Theorem
Let $\mathbf I$ denote the unit matrix of order $m$ over a field $K$.

Let $e$ be the elementary row operation acting on $\mathbf I$ as:




\((\text {ERO} 3)\)  

$:$  







\(\ds r_i \leftrightarrow r_j \)   





Interchange rows $i$ and $j$   

  

for $1 \le i \le m$, $1 \le j \le m$.

Let $\mathbf E$ be the elementary row matrix defined as:

$\mathbf E = e \paren {\mathbf I}$

$\mathbf E$ is the square matrix of order $m$ of the form:

$E_{a b} = \begin {cases} \delta_{a b} & : \text {if $a \ne i$ and $a \ne j$} \\ \delta_{j b} & : \text {if $a = i$} \\ \delta_{i b} & : \text {if $a = j$} \end {cases}$
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
That is, all elements of row $i$ of $\mathbf I$ are to be exchanged with the corresponding elements of row $j$.

By definition of unit matrix:

all elements of row $i$ are $0$ except for element $I_{i i}$, which is $1$.
all elements of row $j$ are $0$ except for element $I_{j j}$, which is $1$.

Thus in $\mathbf E$:

where $a \ne i$ and $a \ne j$, $E_{a b} = \delta_{a b}$ (all rows except $i$ and $j$ are unchanged)
where $a = i$, $E_{a b} = \delta_{j b}$ (the contents of row $j$)
where $a = j$, $E_{a b} = \delta_{i b}$ (the contents of row $i$)

That is:

$E_{a b} = \begin {cases} \delta_{a b} & : \text {if $a \ne i$ and $a \ne j$} \\ \delta_{j b} & : \text {if $a = i$} \\ \delta_{i b} & : \text {if $a = j$} \end {cases}$
Hence the result.
$\blacksquare$





