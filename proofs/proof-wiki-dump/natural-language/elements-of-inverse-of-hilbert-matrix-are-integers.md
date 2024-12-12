# 

Source: https://proofwiki.org/wiki/Elements_of_Inverse_of_Hilbert_Matrix_are_Integers

Theorem
Let $H_n$ be the Hilbert matrix of order $n$:

$\begin{bmatrix} a_{i j} \end{bmatrix} = \begin{bmatrix} \dfrac 1 {i + j - 1} \end{bmatrix}$

Consider its inverse $H_n^{-1}$.

All the elements of $H_n^{-1}$ are integers.


Proof
From Inverse of Hilbert Matrix, $H_n^{-1} = \begin {bmatrix} b \end{bmatrix}_n$ can be specified as:

$\begin{bmatrix} b_{i j} \end{bmatrix} = \begin{bmatrix} \dfrac {\paren {-1}^{i + j} \paren {i + n - 1}! \paren {j + n - 1}!} {\paren {\paren {i - 1}!}^2 \paren {\paren {j - 1}!}^2 \paren {n - i}! \paren {n - j}! \paren {i + j - 1} } \end{bmatrix}$

Thus:














\(\ds b_{i j}\)

\(=\)







\(\ds \frac {\paren {-1}^{i + j} \paren {i + n - 1}! \paren {j + n - 1}!} {\paren {\paren {i - 1}!}^2 \paren {\paren {j - 1}!}^2 \paren {n - i}! \paren {n - j} ! \paren {i + j - 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {\paren {-1}^{i + j} } {i + j - 1} } \paren {\frac {\paren {i + n - 1}!} {\paren {i - 1}! \, n!} } \paren {\frac {\paren {j + n - 1}!} {\paren {j - 1}! \, n!} } \paren {\frac {n! \, i} {i! \, \paren {n - i}!} } \paren {\frac {n! \, j} {j! \, \paren {n - j}! } }\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^{i + j} i j} {i + j - 1} \binom {i + n - 1} n \binom {j + n - 1} n \binom n i \binom n j\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \paren {-1}^{i + j} j \binom {i + n - 1} {i - i} \binom {j + n - 1} {n - 1} \binom {i + j - 2} {n - i} \binom n j\)









All of the factors of the above expression are integers, from Binomial Coefficient is Integer.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $45$




