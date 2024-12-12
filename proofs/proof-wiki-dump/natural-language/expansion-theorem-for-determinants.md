# 

Source: https://proofwiki.org/wiki/Expansion_Theorem_for_Determinants


This page has been identified as a candidate for refactoring of medium complexity.In particular: Convert this into an induction proofUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Theorem statement is convolutedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Theorem
Let $\mathbf A = \sqbrk a_n$ be a square matrix of order $n$.
Let $D = \map \det {\mathbf A}$ be the determinant of $\mathbf A$:


$\ds \map \det {\mathbf A} := \sum_{\lambda} \paren {\map \sgn \lambda \prod_{k \mathop = 1}^n a_{k \map \lambda k} } = \sum_\lambda \map \sgn \lambda a_{1 \map \lambda 1} a_{2 \map \lambda 2} \cdots a_{n \map \lambda n}$
where:

the summation $\ds \sum_\lambda$ goes over all the $n!$ permutations of $\set {1, 2, \ldots, n}$
$\map \sgn \lambda$ is the sign of the permutation $\lambda$.

Let $a_{p q}$ be an element of $\mathbf A$.
Let $A_{p q}$ be the cofactor of $a_{p q}$ in $D$.

Then:

$(1): \quad \ds \forall r \in \closedint 1 n: D = \sum_{k \mathop = 1}^n a_{r k} A_{r k}$
$(2): \quad \ds \forall c \in \closedint 1 n: D = \sum_{k \mathop = 1}^n a_{k c} A_{k c}$

Thus the value of a determinant can be found either by:

multiplying all the elements in a row by their cofactors and adding up the products
or:

multiplying all the elements in a column by their cofactors and adding up the products.

The identity:

$\ds D = \sum_{k \mathop = 1}^n a_{r k} A_{r k}$
is known as the expansion of $D$ in terms of row $r$, while:

$\ds D = \sum_{k \mathop = 1}^n a_{k c} A_{k c}$
is known as the expansion of $D$ in terms of column $c$.


Corollary
Let $\delta_{rs}$ be the Kronecker delta.
Then:

$(1): \quad \ds \forall r \in \closedint 1 n: \sum_{k \mathop = 1}^n a_{r k} A_{s k} = \delta_{r s} D$
$(2): \quad \ds \forall r \in \closedint 1 n: \sum_{k \mathop = 1}^n a_{k r} A_{k s} = \delta_{r s} D$

That is, if you multiply each element of a row or column by the cofactor of another row or column, the sum of those products is zero.


Proof
Because of Determinant of Transpose, it is necessary to prove only one of these identities.

Let:

$D = \begin {vmatrix}
a_{1 1} & \cdots & a_{1 k} & \cdots & a_{1 n} \\
 \vdots & \ddots &  \vdots & \ddots &  \vdots \\
a_{r 1} & \cdots & a_{r k} & \cdots & a_{r n} \\
 \vdots & \ddots &  \vdots & \ddots &  \vdots \\
a_{n 1} & \cdots & a_{n k} & \cdots & a_{n n}
\end {vmatrix}$

First, note that from Determinant with Row Multiplied by Constant, we have:

$\begin{vmatrix}
a_{1 1} & a_{1 2} & \cdots & a_{1 n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
a_{r 1} &       0 & \cdots &       0 \\
 \vdots &  \vdots & \ddots &  \vdots \\
a_{n 1} & a_{n 2} & \cdots & a_{n n}
\end {vmatrix} = a_{r 1} \begin {vmatrix}
a_{1 1} & a_{1 2} & \cdots & a_{1 n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
      1 &       0 & \cdots &       0 \\
 \vdots &  \vdots & \ddots &  \vdots \\
a_{n 1} & a_{n 2} & \cdots & a_{n n}
\end {vmatrix}$

and similarly:

$\begin {vmatrix}
a_{1 1} & a_{1 2} & \cdots & a_{1 n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
      0 & a_{r 2} & \cdots &       0 \\
 \vdots &  \vdots & \ddots &  \vdots \\
a_{n 1} & a_{n 2} & \cdots & a_{n n}
\end {vmatrix} = a_{r 2} \begin {vmatrix}
a_{1 1} & a_{1 2} & \cdots & a_{1 n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
      0 &       1 & \cdots &       0 \\
 \vdots &  \vdots & \ddots &  \vdots \\
a_{n 1} & a_{n 2} & \cdots & a_{n n}
\end{vmatrix}$
and so on for the whole of row $r$.

From Determinant as Sum of Determinants:

$\begin {vmatrix}
a_{1 1} & \cdots & a_{1 k} & \cdots & a_{1 n} \\
 \vdots & \ddots &  \vdots & \ddots &  \vdots \\
a_{r 1} & \cdots & a_{r k} & \cdots & a_{r n} \\
 \vdots & \ddots &  \vdots & \ddots &  \vdots \\
a_{n 1} & \cdots & a_{n k} & \cdots & a_{n n}
\end {vmatrix} = \ds \sum_{k \mathop = 1}^n \paren {a_{r k} \begin {vmatrix}
a_{1 1} & \cdots & a_{1 k} & \cdots & a_{1 n} \\
 \vdots & \ddots &  \vdots & \ddots &  \vdots \\
      0 & \cdots &       1 & \cdots &       0 \\
 \vdots & \ddots &  \vdots & \ddots &  \vdots \\
a_{n 1} & \cdots & a_{n k} & \cdots & a_{n n}
\end {vmatrix} }$

Consider the determinant:

$\begin{vmatrix}
             a_{1 1} & \cdots &              a_{1 \paren {k - 1} } &              a_{1 k} &              a_{1 \paren {k + 1} } & \cdots &              a_{1 n} \\
              \vdots & \ddots &                             \vdots &               \ddots &                            \vdots  & \ddots &               \vdots \\
a_{\paren {r - 1} 1} & \cdots & a_{\paren {r - 1} \paren {k - 1} } & a_{\paren {r - 1} k} & a_{\paren {r - 1} \paren {k + 1} } & \cdots & a_{\paren {r - 1} n} \\
                   0 & \cdots &                                  0 &                    1 &                                  0 & \cdots &                    0 \\
a_{\paren {r + 1} 1} & \cdots & a_{\paren {r + 1} \paren {k - 1} } & a_{\paren {r + 1} k} & a_{\paren {r + 1} \paren {k + 1} } & \cdots & a_{\paren {r + 1} n} \\
              \vdots & \ddots &                             \vdots &               \ddots &                            \vdots  & \ddots &               \vdots \\
             a_{n 1} & \cdots &              a_{n \paren {k - 1} } &              a_{n k} &              a_{n \paren {k + 1} } & \cdots &              a_{n n}
\end {vmatrix}$

Exchange rows $r$ and $r - 1$, then (the new) row $r - 1$ with row $r - 2$, until finally row $r$ is at the top.
Row $1$ will be in row $2$, row $2$ in row $3$, and so on.
This is permuting the rows by a $k$-cycle of length $r$.
Call that $k$-cycle $\rho$.
Then from Parity of K-Cycle:

$\map \sgn \rho = \paren {-1}^{r - 1}$

Thus:

$\begin {vmatrix}
                   0 & \cdots &                    1 & \cdots &                    0 \\
             a_{1 1} & \cdots &              a_{1 k} & \cdots &              a_{1 n} \\
              \vdots & \ddots &               \vdots & \ddots &               \vdots \\
a_{\paren {r - 1} 1} & \cdots & a_{\paren {r - 1} k} & \cdots & a_{\paren {r - 1} n} \\
a_{\paren {r + 1} 1} & \cdots & a_{\paren {r + 1} k} & \cdots & a_{\paren {r + 1} n} \\
              \vdots & \ddots &               \vdots & \ddots &               \vdots \\
             a_{n 1} & \cdots &              a_{n k} & \cdots & a_{n n}
\end {vmatrix} = \paren {-1}^{r - 1} \begin {vmatrix}
             a_{1 1} & \cdots &              a_{1 k} & \cdots &              a_{1 n} \\
              \vdots & \ddots &               \vdots & \ddots &               \vdots \\
a_{\paren {r - 1} 1} & \cdots & a_{\paren {r - 1} k} & \cdots & a_{\paren {r - 1} n} \\
                   0 & \cdots &                    1 & \cdots &                    0 \\
a_{\paren {r + 1} 1} & \cdots & a_{\paren {r + 1} k} & \cdots & a_{\paren {r + 1} n} \\
              \vdots & \ddots &               \vdots & \ddots &               \vdots \\
             a_{n 1} & \cdots &              a_{n k} & \cdots & a_{n n}
\end {vmatrix}$

The same argument can be applied to columns.
Thus:

$\begin {vmatrix}
                   1 &                    0 & \cdots &                                  0 &                                  0 & \cdots &                    0 \\
             a_{1 k} &              a_{1 1} & \cdots &              a_{1 \paren {k - 1} } &              a_{1 \paren {k + 1} } & \cdots &              a_{1 n} \\
              \vdots &               \vdots & \ddots &                             \vdots &                             \vdots & \ddots &               \vdots \\
a_{\paren {r - 1} k} & a_{\paren {r - 1} 1} & \cdots & a_{\paren {r - 1} \paren {k - 1} } & a_{\paren {r - 1} \paren {k + 1} } & \cdots & a_{\paren {r - 1} n} \\
a_{\paren {r + 1} k} & a_{\paren {r + 1} 1} & \cdots & a_{\paren {r + 1} \paren {k - 1} } & a_{\paren {r + 1} \paren {k + 1} } & \cdots & a_{\paren {r + 1} n} \\
              \vdots &               \vdots & \ddots &                             \vdots &                             \vdots & \ddots &               \vdots \\
             a_{n k} &              a_{n 1} & \cdots &              a_{n \paren {k - 1} } &              a_{n \paren {k + 1} } &              \cdots & a_{n n}
\end {vmatrix} = \paren {-1}^{k-1}\begin {vmatrix}
                   0 & \cdots &                    1 & \cdots &                    0 \\
             a_{1 1} & \cdots &              a_{1 k} & \cdots &              a_{1 n} \\
              \vdots & \ddots &               \vdots & \ddots &               \vdots \\
a_{\paren {r - 1} 1} & \cdots & a_{\paren {r - 1} k} & \cdots & a_{\paren {r - 1} n} \\
a_{\paren {r + 1} 1} & \cdots & a_{\paren {r + 1} k} & \cdots & a_{\paren {r + 1} n} \\
              \vdots & \ddots &               \vdots & \ddots &               \vdots \\
             a_{n 1} & \cdots &              a_{n k} & \cdots &              a_{n n}
\end {vmatrix}$

and so:

$\begin{vmatrix}
                   1 &                    0 & \cdots &                                  0 &                                  0 & \cdots &                    0 \\
             a_{1 k} &              a_{1 1} & \cdots &               a_{1 \paren {k - 1}} &              a_{1 \paren {k + 1} } & \cdots &              a_{1 n} \\
              \vdots &               \vdots & \ddots &                             \vdots &                             \vdots & \ddots &               \vdots \\
a_{\paren {r - 1} k} & a_{\paren {r - 1} 1} & \cdots & a_{\paren {r - 1} \paren {k - 1} } & a_{\paren {r - 1} \paren {k + 1} } & \cdots & a_{\paren {r - 1} n} \\
a_{\paren {r + 1} k} & a_{\paren {r + 1} 1} & \cdots & a_{\paren {r + 1} \paren {k - 1} } & a_{\paren {r + 1} \paren {k + 1} } & \cdots & a_{\paren {r + 1} n} \\
              \vdots &               \vdots & \ddots &                             \vdots &                             \vdots & \ddots &               \vdots \\
             a_{n k} &              a_{n 1} & \cdots &              a_{n \paren {k - 1} } &              a_{n \paren {k + 1} } & \cdots &              a_{n n}
\end {vmatrix} = \paren {-1}^{r + k} \begin {vmatrix}
             a_{1 1} & \cdots &              a_{1 k} & \cdots &              a_{1 n} \\
              \vdots & \ddots &               \vdots & \ddots &               \vdots \\
a_{\paren {r - 1} 1} & \cdots & a_{\paren {r - 1} k} & \cdots & a_{\paren {r - 1} n} \\
                   0 & \cdots &                    1 & \cdots &                    0 \\
a_{\paren {r + 1} 1} & \cdots & a_{\paren {r + 1} k} & \cdots & a_{\paren {r + 1} n} \\
              \vdots & \ddots &               \vdots & \ddots &               \vdots \\
             a_{n 1} & \cdots &              a_{n k} & \cdots &              a_{n n}
\end {vmatrix}$

Then:

$\paren {-1}^{r + k} \begin {vmatrix}
             a_{1 1} & \cdots &              a_{1 \paren {k - 1} } &              a_{1 \paren {k + 1} } & \cdots &              a_{1 n} \\
              \vdots & \ddots &                             \vdots &                             \vdots & \ddots &               \vdots \\
a_{\paren {r - 1} 1} & \cdots & a_{\paren {r - 1} \paren {k - 1} } & a_{\paren {r - 1} \paren {k + 1} } & \cdots & a_{\paren {r - 1} n} \\
a_{\paren {r + 1} 1} & \cdots & a_{\paren {r + 1} \paren {k - 1} } & a_{\paren {r + 1} \paren {k + 1} } & \cdots & a_{\paren {r + 1} n} \\
              \vdots & \ddots &                             \vdots &                             \vdots & \ddots &               \vdots \\
             a_{n 1} & \cdots &              a_{n \paren {k - 1} } &              a_{n \paren {k + 1} } & \cdots &              a_{n n}
\end{vmatrix}$
is $A_{r k}$, the cofactor of $a_{r k}$ in $D$.

But from Determinant with Unit Element in Otherwise Zero Row, we have:

$\begin {vmatrix}
      1 &       0 & \cdots &       0 \\
b_{2 1} & b_{2 2} & \cdots & b_{2 n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
b_{n 1} & b_{n 2} & \cdots & b_{n n}
\end {vmatrix} = \begin {vmatrix}
b_{2 2} & \cdots & b_{2 n} \\
 \vdots & \ddots &  \vdots \\
b_{n 2} & \cdots & b_{n n}
\end {vmatrix}$

Assembling all the pieces derived above, the result follows.
$\blacksquare$


Examples
Arbitrary Order $3$ Example
Consider the order $3$ determinant:

$\begin {vmatrix} 1 & 2 & 3 \\ 4 & 1 & 2 \\ 6 & 5 & 4 \end {vmatrix}$
We have:














\(\ds \begin {vmatrix} 1 & 2 & 3 \\ 4 & 1 & 2 \\ 6 & 5 & 4 \end {vmatrix}\)

\(=\)







\(\ds 1 \times \begin {vmatrix} 1 & 2 \\ 5 & 4 \end {vmatrix} - 2 \times \begin {vmatrix} 4 & 2 \\ 6 & 4 \end {vmatrix} + 3 \times \begin {vmatrix} 4 & 1 \\ 6 & 5 \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds 1 \times \paren {1 \times 4 - 2 \times 5} - 2 \times \paren {4 \times 4 - 2 \times 6} + 3 \times \paren {4 \times 1 - 6 \times 5}\)




















\(\ds \)

\(=\)







\(\ds -6 - 8 + 42\)




















\(\ds \)

\(=\)







\(\ds 28\)











Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercises -- Second Set
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.6$ Determinant and trace: Proposition $1.12$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): determinant
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): determinant
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): cofactor




