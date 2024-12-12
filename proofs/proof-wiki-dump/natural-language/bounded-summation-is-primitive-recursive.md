# 

Source: https://proofwiki.org/wiki/Bounded_Summation_is_Primitive_Recursive

Theorem
Let the function $f: \N^{k + 1} \to \N$ be primitive recursive.
Then so is the function $g: \N^{k + 1} \to \N$ defined as:

$\ds \map g {n_1, n_2, \ldots, n_k, z} = \begin{cases}
0 & : z = 0 \\
\sum_{y \mathop = 1}^z \map f {n_1, n_2, \ldots, n_k, y} & : z > 0
\end{cases}$


Proof
The function $g$ satisfies:

$\map g {n_1, n_2, \ldots, n_k, 0} = 0$
$\map g {n_1, n_2, \ldots, n_k, z + 1} = \map g {n_1, n_2, \ldots, n_k, z} + \map f {n_1, n_2, \ldots, n_k, z + 1}$.
Hence $g$ is defined by primitive recursion from:

the primitive recursive function $\operatorname{add}$
$f$, which is primitive recursive
constants, which are primitive recursive.
Hence the result.
$\blacksquare$


Note
The sum $\ds \sum_{y \mathop = 1}^z$ is referred to as a bounded sum to distinguish it from $\ds \sum_{y \mathop = 1}^\infty$ which is not.





