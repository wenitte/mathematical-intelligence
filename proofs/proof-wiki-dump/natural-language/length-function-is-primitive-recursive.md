# 

Source: https://proofwiki.org/wiki/Length_Function_is_Primitive_Recursive

Theorem
Let $n \in \N$.
Let $\map \len n$ denote the length of $n$.
Then the function $\len: \N \to \N$ is primitive recursive.


Proof
Clearly $\map \len 0 = 0$.
For $n > 0$, we have:

$\ds \map \len n = \sum_{y \mathop = 1}^n \map {\operatorname {div} } {n, \map p y}$
where:

$\map {\operatorname {div} } {n, m}$ is defined as:
$\map {\operatorname {div} } {n, y} = \begin{cases}
1 & : y \divides n \\
0 & : y \nmid n
\end{cases}$

$\map p y$ is the $y$th prime number.

Let $g: \N^2 \to \N$ be the function defined by:

$\ds \map g {n, z} = \begin{cases}
0 & : z = 0 \\
\ds \sum_{y \mathop = 1}^z \map {\operatorname {div} } {n, \map p y} & : z > 0
\end{cases}$
We have that:

$\operatorname{div}$ is primitive recursive
$p: \N \to \N$ is primitive recursive
Bounded Summation is Primitive Recursive.
So it follows that $g$ is also primitive recursive.

Finally, as $\map \len n = \map g {n, n}$ it follows that $\len$ is primitive recursive.
$\blacksquare$





