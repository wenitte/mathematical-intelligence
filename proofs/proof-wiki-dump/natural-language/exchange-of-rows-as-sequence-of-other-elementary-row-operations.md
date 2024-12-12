# 

Source: https://proofwiki.org/wiki/Exchange_of_Rows_as_Sequence_of_Other_Elementary_Row_Operations

Theorem
Let $\mathbf A$ be an $m \times n$ matrix.
Let $i, j \in \closedint 1 m: i \ne j$
Let $r_k$ denote the $k$th row of $\mathbf A$ for $1 \le k \le m$:

$r_k = \begin {pmatrix} a_{k 1} & a_{k 2} & \cdots & a_{k n} \end {pmatrix}$

Let $e$ be the elementary row operation acting on $\mathbf A$ as:




\((\text {ERO} 3)\)  

$:$  







\(\ds r_i \leftrightarrow r_j \)   





Interchange rows $i$ and $j$   

  


Then $e$ can be expressed as a finite sequence of exactly $4$ instances of the other two elementary row operations.




\((\text {ERO} 1)\)  

$:$  







\(\ds r_i \to \lambda r_i \)   





For some $\lambda \in K_{\ne 0}$, multiply row $i$ by $\lambda$   

  


\((\text {ERO} 2)\)  

$:$  







\(\ds r_i \to r_i + \lambda r_j \)   





For some $\lambda \in K$, add $\lambda$ times row $j$ to row $i$   

  



Proof
In the below:

$r_i$ denotes the initial state of row $i$
$r_j$ denotes the initial state of row $j$
$r_i'$ denotes the state of row $i$ after having had the latest elementary row operation applied
$r_j'$ denotes the state of row $j$ after having had the latest elementary row operation applied.

$(1)$: Apply $\text {ERO} 2$ to row $j$ for $\lambda = 1$:

$r_j \to r_j + r_i$
After this operation:














\(\ds r_i'\)

\(=\)







\(\ds r_i\)




















\(\ds r_j'\)

\(=\)







\(\ds r_i + r_j\)









$\Box$

$(2)$: Apply $\text {ERO} 2$ to row $i$ for $\lambda = -1$:

$r_i \to r_i + \paren {-r_j}$
After this operation:














\(\ds r_i'\)

\(=\)







\(\ds r_i - \paren {r_i + r_j}\)




















\(\ds \)

\(=\)







\(\ds -r_j\)




















\(\ds r_j'\)

\(=\)







\(\ds r_i + r_j\)









$\Box$

$(3)$: Apply $\text {ERO} 2$ to row $j$ for $\lambda = 1$:

$r_j \to r_j + r_i$
After this operation:














\(\ds r_i'\)

\(=\)







\(\ds -r_j\)




















\(\ds r_j'\)

\(=\)







\(\ds r_i + r_j - r_j\)




















\(\ds \)

\(=\)







\(\ds r_i\)









$\Box$

$(4)$: Apply $\text {ERO} 1$ to row $i$ for $\lambda = -1$:

$r_i \to -r_i$
After this operation:














\(\ds r_i'\)

\(=\)







\(\ds -\paren {-r_j}\)




















\(\ds \)

\(=\)







\(\ds r_j\)




















\(\ds r_j'\)

\(=\)







\(\ds r_i\)









$\Box$

Thus, after all the $4$ elementary row operations have been applied, we have:














\(\ds r_i'\)

\(=\)







\(\ds r_j\)




















\(\ds r_j'\)

\(=\)







\(\ds r_i\)









Hence the result.
$\blacksquare$


Also see
Exchange of Columns as Sequence of Other Elementary Column Operations




