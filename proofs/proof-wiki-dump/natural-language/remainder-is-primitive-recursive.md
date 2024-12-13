# 

Source: https://proofwiki.org/wiki/Remainder_is_Primitive_Recursive

Theorem
Let $m, n \in \N$ be natural numbers.
Let us define the function $\operatorname{rem}: \N^2 \to \N$:

$\map \rem {n, m} = \begin{cases}
\text{the remainder when } n \text{ is divided by } m & : m \ne 0 \\
0 & : m = 0
\end{cases}$
where the $\text{remainder}$ is as defined in the Division Theorem:

If $n = m q + r$, where $0 \le r < m$, then $r$ is the remainder.

Then $\rem$ is primitive recursive.


Proof
Let $\map \rem {n, m} = r$.
We see that as $n$ increases by $1$, then so does $r$, except when $n = m-1$ in which case increasing $n$ by $1$ makes $r$ go to $0$.
We also take into account the case where $m = 0$:
So we can define $\rem$ by cases:

$\map \rem {n, m} = \begin{cases}
0 & : \map \rem {n - 1, m} = m - 1 \text { or } m = 0 \text { or } n = 0\\
\map \rem {n - 1, m} + 1 & :  \text {otherwise} \\
\end{cases}$

We remind ourselves of the following primitive recursive functions:

Signum function $\sgn$
Characteristic function of equality relation $\map {\chi_{\operatorname{eq} } } {n, m}$
Cut-off subtraction $m \, \dot - \, n$.

We have:

$\map \sgn m = 1 \iff m \ne 0$
$\map {\overline \sgn} {\map {\chi_{\operatorname{eq} } } {\map \rem {n, m}, m \, \dot - \, 1} } = 1 \iff \map \rem {n, m} \ne m \, \dot - \, 1$.
So:

$\map \sgn m \, \map {\overline \sgn} {\map {\chi_{\operatorname{eq} } } {\map \rem {n, m}, m \, \dot - \, 1} }  = 1 \iff m > 0 \land \map \rem {n, m} \ne m \, \dot - \, 1$.

So we see that:

$\map \rem {n + 1, m} = \paren {\map \rem {n, m} + 1} \, \map \sgn m \, \map {\overline \sgn} {\map {\chi_{\operatorname{eq} } } {\map \rem {n, m}, m \, \dot - \, 1} }$

So $\rem$ is obtained by primitive recursion (over the first variable, which is allowed by Permutation of Variables of Primitive Recursive Function) from the primitive recursive functions:

Signum function $\sgn$
Characteristic function of equality relation $\map {\chi_{\operatorname{eq} } } {n, m}$
Cut-off subtraction $m \, \dot - \, n$
Addition
Multiplication.
Thus we can use Definition by Cases is Primitive Recursive and it follows that $\rem$ is primitive recursive.
$\blacksquare$





