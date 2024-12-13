# 

Source: https://proofwiki.org/wiki/Predecessor_Function_is_Primitive_Recursive

Theorem
The predecessor function $\operatorname{pred}: \N \to \N$ defined as:

$\map {\operatorname{pred} } n = \begin{cases}
0 & : n = 0 \\
n-1 & : n > 0
\end{cases}$
is primitive recursive.


Proof
We can use Primitive Recursion on One Variable to find $g: \N^2 \to \N$ and $h: \N \to \N$ such that:

$\map h n = \begin{cases}
\map {\operatorname{zero} } n & : n = 0 \\
\map g {n - 1, \map h {n - 1} } & : n > 0 
\end{cases}
$
By setting:

$\map g {n, m} = \map {\pr^2_1} {n, m}$
we see that setting $h = \operatorname{pred}$ fits the pattern.
We have that the $\pr^2_1$ and $\operatorname{zero}$ functions are basic primitive recursive functions.
Hence the result.
$\blacksquare$





