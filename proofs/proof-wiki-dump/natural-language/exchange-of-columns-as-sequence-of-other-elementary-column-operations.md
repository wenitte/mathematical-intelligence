# 

Source: https://proofwiki.org/wiki/Exchange_of_Columns_as_Sequence_of_Other_Elementary_Column_Operations

Theorem
Let $\mathbf A$ be an $m \times n$ matrix.
Let $i, j \in \closedint 1 m: i \ne j$
Let $\kappa_k$ denote the $k$th column of $\mathbf A$ for $1 \le k \le n$:

$\kappa_k = \begin {pmatrix} a_{1 k} \\ a_{2 k} \\ \vdots \\ a_{m k} \end {pmatrix}$

Let $e$ be the elementary column operation acting on $\mathbf A$ as:




\((\text {ERO} 3)\)  

$:$  







\(\ds \kappa_i \leftrightarrow \kappa_j \)   





Interchange columns $i$ and $j$   

  


Then $e$ can be expressed as a finite sequence of exactly $4$ instances of the other two elementary column operations.




\((\text {ERO} 1)\)  

$:$  







\(\ds \kappa_i \to \lambda \kappa_i \)   





For some $\lambda \in K_{\ne 0}$, multiply column $i$ by $\lambda$   

  


\((\text {ERO} 2)\)  

$:$  







\(\ds \kappa_i \to \kappa_i + \lambda \kappa_j \)   





For some $\lambda \in K$, add $\lambda$ times column $j$ to column $i$   

  



Proof
In the below:

$\kappa_i$ denotes the initial state of column $i$
$\kappa_j$ denotes the initial state of column $j$
$\kappa_i'$ denotes the state of column $i$ after having had the latest elementary column operation applied
$\kappa_j'$ denotes the state of column $j$ after having had the latest elementary column operation applied.

$(1)$: Apply $\text {ECO} 2$ to column $j$ for $\lambda = 1$:

$\kappa_j \to \kappa_j + \kappa_i$
After this operation:














\(\ds \kappa_i'\)

\(=\)







\(\ds \kappa_i\)




















\(\ds \kappa_j'\)

\(=\)







\(\ds \kappa_i + \kappa_j\)









$\Box$

$(2)$: Apply $\text {ECO} 2$ to column $i$ for $\lambda = -1$:

$\kappa_i \to \kappa_i + \paren {-\kappa_j}$
After this operation:














\(\ds \kappa_i'\)

\(=\)







\(\ds \kappa_i - \paren {\kappa_i + \kappa_j}\)




















\(\ds \)

\(=\)







\(\ds -\kappa_j\)




















\(\ds \kappa_j'\)

\(=\)







\(\ds \kappa_i + \kappa_j\)









$\Box$

$(3)$: Apply $\text {ECO} 2$ to column $j$ for $\lambda = 1$:

$\kappa_j \to \kappa_j + \kappa_i$
After this operation:














\(\ds \kappa_i'\)

\(=\)







\(\ds -\kappa_j\)




















\(\ds \kappa_j'\)

\(=\)







\(\ds \kappa_i + \kappa_j - \kappa_j\)




















\(\ds \)

\(=\)







\(\ds \kappa_i\)









$\Box$

$(4)$: Apply $\text {ECO} 1$ to column $i$ for $\lambda = -1$:

$\kappa_i \to -\kappa_i$
After this operation:














\(\ds \kappa_i'\)

\(=\)







\(\ds -\paren {-\kappa_j}\)




















\(\ds \)

\(=\)







\(\ds \kappa_j\)




















\(\ds \kappa_j'\)

\(=\)







\(\ds \kappa_i\)









$\Box$

Thus, after all the $4$ elementary column operations have been applied, we have:














\(\ds \kappa_i'\)

\(=\)







\(\ds \kappa_j\)




















\(\ds \kappa_j'\)

\(=\)







\(\ds \kappa_i\)









Hence the result.
$\blacksquare$


Also see
Exchange of Rows as Sequence of Other Elementary Row Operations




