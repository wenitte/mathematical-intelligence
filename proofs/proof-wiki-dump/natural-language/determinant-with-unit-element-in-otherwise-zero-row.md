# 

Source: https://proofwiki.org/wiki/Determinant_with_Unit_Element_in_Otherwise_Zero_Row



Theorem
Let $D$ be the determinant:

$D = \begin {vmatrix}
      1 &       0 & \cdots &       0 \\
b_{2 1} & b_{2 2} & \cdots & b_{2 n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
b_{n 1} & b_{n 2} & \cdots & b_{n n}
\end {vmatrix}$

Then:

$D = \begin {vmatrix}
b_{2 2} & \cdots & b_{2 n} \\
 \vdots & \ddots &  \vdots \\
b_{n 2} & \cdots & b_{n n}
\end {vmatrix}$


Proof
We refer to the elements of:

$\begin {vmatrix}
      1 &       0 & \cdots &       0 \\
b_{2 1} & b_{2 2} & \cdots & b_{2 n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
b_{n 1} & b_{n 2} & \cdots & b_{n n}
\end {vmatrix}$
as $\begin {vmatrix} b_{i j} \end {vmatrix}$.

Thus $b_{1 1} = 1, b_{1 2} = 0, \ldots, b_{1 n} = 0$.

Then from the definition of determinant:














\(\ds D\)

\(=\)







\(\ds \sum_\lambda \paren {\map \sgn \lambda \prod_{k \mathop = 1}^n b_{k \map \lambda k} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{\lambda} \map \sgn \lambda b_{1 \map \lambda 1} b_{2 \map \lambda 2} \cdots b_{n \map \lambda n}\)










Now we note:














\(\ds \map \lambda 1 = 1\)

\(\implies\)







\(\ds b_{1 \map \lambda 1} b_{2 \map \lambda 2} \cdots b_{n \map \lambda n} = 1\)




















\(\ds \map \lambda 1 \ne 1\)

\(\implies\)







\(\ds b_{1 \map \lambda 1} b_{2 \map \lambda 2} \cdots b_{n \map \lambda n} = 0\)










So only those permutations on $\N^*_n$ such that $\map \lambda 1 = 1$ contribute towards the final summation.

Thus we have:

$\ds D = \sum_\mu \map \sgn \mu b_{2 \map \mu 2} \cdots b_{n \map \mu n}$
where $\mu$ is the collection of all permutations on $\N^*_n$ which fix $1$.
Hence the result.
$\blacksquare$


Also see
Determinant with Unit Element in Otherwise Zero Column


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercises -- Second Set




