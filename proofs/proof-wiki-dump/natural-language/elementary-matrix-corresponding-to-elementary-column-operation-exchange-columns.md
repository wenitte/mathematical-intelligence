# 

Source: https://proofwiki.org/wiki/Elementary_Matrix_corresponding_to_Elementary_Column_Operation/Exchange_Columns

Theorem
Let $\mathbf I$ denote the unit matrix of order $n$ over a field $K$.

Let $e$ be the elementary column operation acting on $\mathbf I$ as:




\((\text {ECO} 3)\)  

$:$  







\(\ds \kappa_i \leftrightarrow \kappa_j \)   





Interchange columns $i$ and $j$   

  

for $1 \le i \le n$, $1 \le j \le n$.

Let $\mathbf E$ be the elementary column matrix defined as:

$\mathbf E = e \paren {\mathbf I}$

$\mathbf E$ is the square matrix of order $n$ of the form:

$E_{a b} = \begin {cases} \delta_{a b} & : \text {if $b \ne i$ and $b \ne j$} \\ \delta_{a j} & : \text {if $b = i$} \\ \delta_{a i} & : \text {if $b = j$} \end {cases}$
where:

$E_{a b}$ denotes the element of $\mathbf E$ whose indices are $\tuple {a, b}$
$\delta_{a b}$ is the Kronecker delta:
$\delta_{a b} = \begin {cases} 1 & : \text {if $a = b$} \\ 0 & : \text {if $a \ne b$} \end {cases}$


Proof
By definition of the unit matrix:

$I_{a b} = \delta_{a b}$
where:

$I_{a b}$ denotes the element of $\mathbf I$ whose indices are $\tuple {a, b}$.

By definition, $\mathbf E$ is the square matrix of order $n$ formed by applying $e$ to the unit matrix $\mathbf I$.
That is, all elements of column $i$ of $\mathbf I$ are to be exchanged with the corresponding elements of column $j$.

By definition of unit matrix:

all elements of column $i$ are $0$ except for element $I_{i i}$, which is $1$.
all elements of column $j$ are $0$ except for element $I_{j j}$, which is $1$.

Thus in $\mathbf E$:

where $a \ne i$ and $a \ne j$, $E_{a b} = \delta_{a b}$ (all columns except $i$ and $j$ are unchanged)
where $a = i$, $E_{a b} = \delta_{a j}$ (the contents of column $j$)
where $a = j$, $E_{a b} = \delta_{a i}$ (the contents of column $i$)

That is:

$E_{a b} = \begin {cases} \delta_{a b} & : \text {if $b \ne i$ and $b \ne j$} \\ \delta_{a j} & : \text {if $b = i$} \\ \delta_{a i} & : \text {if $b = j$} \end {cases}$
Hence the result.
$\blacksquare$





