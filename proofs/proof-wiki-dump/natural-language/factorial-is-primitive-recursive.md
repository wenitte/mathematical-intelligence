# 

Source: https://proofwiki.org/wiki/Factorial_is_Primitive_Recursive

Theorem
The factorial function $\operatorname{fac}: \N \to \N$ defined as:

$\map {\operatorname{fac} } n = n!$
is primitive recursive.


Proof
From the definition of the factorial, we have that:

$\map {\operatorname{fac} } n = \begin{cases}
1 & : n = 0 \\
\map {\operatorname{mult} } {n, \map {\operatorname{fac} } {n - 1} } & : n > 0
\end{cases}$
Thus $\operatorname{fac}$ is obtained by primitive recursion from the constant $1$ and the primitive recursive function $\operatorname{mult}$.
Hence $\operatorname{fac}$ is primitive recursive.
$\blacksquare$





