# 

Source: https://proofwiki.org/wiki/Elementary_Matrix_corresponding_to_Elementary_Column_Operation/Scale_Column_and_Add

Theorem
Let $\mathbf I$ denote the unit matrix of order $n$ over a field $K$.

Let $e$ be the elementary column operation acting on $\mathbf I$ as:




\((\text {ECO} 2)\)  

$:$  







\(\ds \kappa_i \to \kappa_i + \lambda r_j \)   





For some $\lambda \in K$, add $\lambda$ times column $j$ to row $i$   

  

for $1 \le i \le m$, $1 \le j \le m$.

Let $\mathbf E$ be the elementary column matrix defined as:

$\mathbf E = e \paren {\mathbf I}$

$\mathbf E$ is the square matrix of order $n$ of the form:

$E_{a b} = \delta_{a b} + \lambda \cdot \delta_{b i} \cdot \delta_{j a}$
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
That is, all elements of column $i$ of $\mathbf I$ are to have the corresponding elements of column $j$ added to them after the latter have been multiplied by $\lambda$.

By definition of unit matrix:

all elements of column $i$ are $0$ except for element $I_{i i}$, which is $1$.
all elements of column $j$ are $0$ except for element $I_{j j}$, which is $1$.

Thus in $\mathbf E$:

where $b \ne i$, $E_{a b} = \delta_{a b}$
where $b = i$:
$E_{a b} = \delta_{a b}$ where $a \ne j$
$E_{a b} = \delta_{a b} + \lambda \cdot 1$ where $a = j$

That is:

$E_{a b} = \delta_{a b}$ for all elements of $\mathbf E$
except where $b = i$ and $a = j$, at which element:

$E_{a b} = \delta_{a b} + \lambda$

That is:

$E_{a b} = \delta_{a b} + \lambda \cdot \delta_{b i} \cdot \delta_{j a}$
Hence the result.
$\blacksquare$


Also presented as
This can also be seen presented as:

$E_{a b} = \begin{cases} \delta_{a b} & : b \ne i \\ \delta_{i a} + \lambda \delta_{j a} & : b = i \end{cases}$
when it is considered desirable to make the nature of the columns more easily understood.





