# 

Source: https://proofwiki.org/wiki/Product_of_Diagonal_Matrices_is_Diagonal

Theorem
Let $A$ and $B$ be $n \times n$ diagonal matrices. 
Then the matrix product $A B$ is an $n \times n$ diagonal matrix.
Further: 

$\paren {A B}_{i j} = \begin {cases} \paren A_{i i} \paren B_{i i} & i = j \\ 0 & i \ne j \end {cases}$


Proof
We have: 

$\ds \paren {A B}_{ij} = \sum_{k \mathop = 1}^n \paren A_{i k} \paren B_{k j}$
Since $A$ and $B$ are diagonal:

$\paren A_{i k} = 0$ for $i \ne k$,
and:

$\paren B_{k j} = 0$ for $k \ne j$.
If $i \ne j$, for each $k$ we either have $i \ne k$ or $k \ne j$, so:

$\paren A_{i k} \paren B_{k j} = 0$ for each $1 \le k \le n$.

Hence if $i \ne j$:

$\ds \paren {A B}_{i j} = \sum_{k \mathop = 1}^n \paren A_{i k} \paren B_{k j} = 0$
so $A B$ is diagonal.

Let $i = j$.
Then, if $k \ne i$ we have: 

$\paren A_{i k} \paren B_{k j} = \paren A_{i k} \paren B_{k i} = 0$
so:

$\ds \sum_{k \mathop = 1}^n \paren A_{i k} \paren B_{k j} = \paren A_{i i} \paren B_{i i}$
We can conclude:

$\paren {A B}_{i j} = \begin {cases} \paren A_{i i} \paren B_{i i} & i = j \\ 0 & i \ne j \end {cases}$
$\blacksquare$





