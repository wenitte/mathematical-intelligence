# 

Source: https://proofwiki.org/wiki/Divisor_Count_Function_is_Primitive_Recursive

Theorem
The divisor count function is primitive recursive.


Proof
The divisor count function $\sigma_0: \N \to \N$ is defined as:

$\ds \map {\sigma_0} n = \sum_{d \mathop \divides n} 1$
where $\ds \sum_{d \mathop \divides n}$ is the sum over all divisors of $n$.
Thus we can define $\map {\sigma_0} n$ as:

$\ds \map {\sigma_0} n = \sum_{y \mathop = 1}^n \map {\operatorname {div} } {n, y}$
where

$\map {\operatorname {div} } {n, y} = \begin{cases}
1 & : y \divides n \\
0 & : y \nmid n
\end{cases}$
Hence $\sigma_0$ is defined by substitution from:

the primitive recursive function $\operatorname {div}$
the primitive recursive bounded summation $\ds \sum_{y \mathop = 1}^n$.
Hence the result.
$\blacksquare$





