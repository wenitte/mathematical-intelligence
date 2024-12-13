# 

Source: https://proofwiki.org/wiki/Product_of_Row_Sum_Unity_Matrices

Theorem
Let $\mathbf A = \sqbrk a_{m n}$ be an $m \times n$ matrix.
Let $\mathbf B = \sqbrk b_{n p}$ be an $n \times p$ matrix.

Let the row sum of $\mathbf A$ and $\mathbf B$ be equal to $1$.
Then the row sum of their (conventional) product is also $1$.


Proof
We have that:

$\ds \sum_{i \mathop = 1}^n a_{i j} = \sum_{i \mathop = 1}^n b_{i j} = 1$

Then:














\(\ds \sum_{i \mathop = 1}^n \paren {\mathbf A \mathbf B}_{i j}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \paren {\sum_{k \mathop = 1}^n a_{i k} b_{k j} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i, k \mathop = 1}^n a_{i k} b_{k j}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \paren {b_{k j} \sum_{i \mathop = 1}^n a_{i k} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \paren {b_{k j} \cdot 1}\)




















\(\ds \)

\(=\)







\(\ds 1\)









$\blacksquare$





