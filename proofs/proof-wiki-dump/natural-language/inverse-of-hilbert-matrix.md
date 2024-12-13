# 

Source: https://proofwiki.org/wiki/Inverse_of_Hilbert_Matrix

Theorem
Let $H_n$ be the Hilbert matrix of order $n$:

$\begin{bmatrix} a_{i j} \end{bmatrix} = \begin{bmatrix} \dfrac 1 {i + j - 1} \end{bmatrix}$

Then its inverse $H_n^{-1} = \sqbrk b_n$ can be specified as:

$\begin{bmatrix} b_{i j} \end{bmatrix} = \begin{bmatrix} \dfrac {\paren {-1}^{i + j} \paren {i + n - 1}! \paren {j + n - 1}!} {\paren {\paren {i - 1}!}^2 \paren {\paren {j - 1}!}^2 \paren {n - j}! \paren {n - i}! \paren {i + j - 1} } \end{bmatrix}$


Proof
From Hilbert Matrix is Cauchy Matrix, $H_n$ is a special case of a Cauchy matrix:

$\begin{bmatrix} c_{i j} \end{bmatrix} = \begin{bmatrix} \dfrac 1 {x_i + y_j} \end{bmatrix}$
where:

$x_i = i$
$y_j = j - 1$

From Inverse of Cauchy Matrix, the inverse of the square Cauchy matrix of order $n$ is:

$\begin{bmatrix} b_{i j} \end{bmatrix} = \begin{bmatrix} \dfrac {\ds \prod_{k \mathop = 1}^n \paren {x_j + y_k} \paren {x_k + y_i} } {\ds \paren {x_j + y_i} \paren {\prod_{\substack {1 \mathop \le k \mathop \le n \\ k \mathop \ne j} } \paren {x_j - x_k} } \paren {\prod_{\substack {1 \mathop \le k \mathop \le n \\ k \mathop \ne i} } \paren {y_i - x_k} } } \end{bmatrix}$

Thus $H_n^{-1}$ can be specified as:

$\begin{bmatrix} b_{i j} \end{bmatrix} = \begin{bmatrix} \dfrac {\ds \prod_{k \mathop = 1}^n \paren {i + k - 1} \paren {j + k - 1} } {\ds \paren {i + j - 1} \paren {\prod_{\substack {1 \mathop \le k \mathop \le n \\ k \mathop \ne i} } \paren {i - k} } \paren {\prod_{\substack {1 \mathop \le k \mathop \le n \\ k \mathop \ne j} } \paren {j - k} } } \end{bmatrix}$

First, from Product of Products:

$\ds \prod_{k \mathop = 1}^n \paren {i + k - 1} \paren {j + k - 1} = \prod_{k \mathop = 1}^n \paren {i + k - 1} \prod_{k \mathop = 1}^n \paren {j + k - 1}$

We address in turn the various factors of this expression for $b_{i j}$.














\(\ds \prod_{k \mathop = 1}^n \paren {i + k - 1}\)

\(=\)







\(\ds \prod_{k \mathop = 0}^{n - 1} \paren {i + k}\)





Translation of Index Variable of Product














\(\ds \)

\(=\)







\(\ds i^{\overline n}\)





Definition of Rising Factorial














\(\ds \)

\(=\)







\(\ds \frac {\paren {i + n - 1}!} {\paren {i - 1}!}\)





Rising Factorial as Quotient of Factorials



and similarly:

$\ds \prod_{k \mathop = 1}^n \paren {j + k - 1} = \frac {\paren {j + n - 1}!} {\paren {j - 1}!}$

Then:














\(\ds \prod_{\substack {1 \mathop \le k \mathop \le n \\ k \mathop \ne i} } \paren {i - k}\)

\(=\)







\(\ds \paren {\prod_{1 \mathop \le k \mathop < i} \paren {i - k} } \paren {\prod_{i \mathop < k \mathop \le n} \paren {i - k} }\)




















\(\ds \)

\(=\)







\(\ds \paren {i - 1}! \paren {\prod_{i \mathop < k \mathop \le n} \paren {i - k} }\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \paren {i - 1}! \paren {\prod_{0 \mathop < k \mathop \le n - i} \paren {-k} }\)





Translation of Index Variable of Product














\(\ds \)

\(=\)







\(\ds \paren {i - 1}! \paren {-1}^{n - i} \paren {\prod_{0 \mathop < k \mathop \le n - i} k}\)




















\(\ds \)

\(=\)







\(\ds \paren {i - 1}! \paren {-1}^{n - i} \paren {n - i}!\)





Definition of Factorial



and similarly:

$\ds \prod_{\substack {1 \mathop \le k \mathop \le n \\ k \mathop \ne j} } \paren {j - k} = \paren {j - 1}! \paren {-1}^{n - j} \paren {n - j}!$

Thus we can write:














\(\ds \begin{bmatrix} b_{i j} \end{bmatrix}\)

\(=\)







\(\ds \frac {\paren {\dfrac {\paren {i + n - 1}!} {\paren {i - 1}!} } \paren {\dfrac {\paren {j + n - 1}!} {\paren {j - 1}!} } } {\paren {i + j - 1} \paren {i - 1}! \paren {-1}^{n - i} \paren {n - i}! \paren {j - 1}! \paren {-1}^{n - j} \paren {n - j}!}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^{i + j} \paren {i + n - 1}! \paren {j + n - 1}!} {\paren {\paren {i - 1}!}^2 \paren {\paren {j - 1}!}^2 \paren {n - i}! \paren {n - j}! \paren {i + j - 1} }\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $45$




