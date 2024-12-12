# 

Source: https://proofwiki.org/wiki/Cut-Off_Subtraction_is_Primitive_Recursive



Theorem
The cut-off subtraction function, defined as:

$\forall \tuple {n, m} \in \N^2: n \mathop {\dot -} m = \begin{cases}
0 & : n < m \\
n - m & : n \ge m
\end{cases}$
is primitive recursive‎.


Proof
We see that:
$n \mathop {\dot -} \paren {m + 1} = \begin{cases}
0 & : n \mathop {\dot -} m = 0 \\
\paren {n \mathop {\dot -} m} - 1 & : n \mathop {\dot -} m > 0
\end{cases}$
Hence we can define cut-off subtraction as:

$n \mathop {\dot -} m = \begin{cases}
n & : m = 0 \\
\operatorname{pred} \paren {n \mathop {\dot -} \paren {m - 1} } & : m > 0
\end{cases}$
This is a definition by primitive recursion from the primitive recursive function $\operatorname{pred}$.
Hence the result.
$\blacksquare$


Also see
Natural Number Subtraction is not Closed


Motivation
The usual subtraction operation is not defined on $\N^2$ for all pairs $\tuple {n, m}$.
If $m > n$, then $n - m$, although well-defined for the integers $\Z$, has no definition in the set of natural numbers $\N$ which go no lower than $0$.
Hence the need to define this hybrid operation.





