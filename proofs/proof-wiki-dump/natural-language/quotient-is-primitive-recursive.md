# 

Source: https://proofwiki.org/wiki/Quotient_is_Primitive_Recursive

Theorem
Let $m, n \in \N$ be natural numbers.

Let us define the function $\operatorname {quot}: \N^2 \to \N$:

$\map {\operatorname {quot} } {n, m} = \begin{cases}
\text{the quotient when } n \text{ is divided by } m & : m \ne 0 \\
0 & : m = 0
\end{cases}$
where the $\text {quotient}$ and $\text {remainder}$ are as defined in the Division Theorem:

If $n = m q + r$, where $0 \le r < m$, then $q$ is the quotient.

Then $\operatorname {quot}$ is primitive recursive.


Proof
We note that if $m \ne 0$ and $n = m q + r$, we have:

$\dfrac n m = q + \frac r m$
Also note that $\dfrac n m$ and $\dfrac r m$ are rational numbers and not necessarily natural numbers.
Indeed, we have:

$0 \le \dfrac r m < 1$
So if $m > 0$ then $\map {\operatorname {quot} } {n, m}$ is the floor $\floor {\dfrac n m}$ of $\dfrac n m$.
So we have:

$\map {\operatorname {quot} } {n, m} = \begin{cases}
0 & : m = 0 \\
\floor {\dfrac n m} & : m \ne 0
\end{cases}$
Then we see that for $m \ne 0$:

$\floor {\dfrac {n + 1} m} = \begin {cases}
\floor {\dfrac n m} + 1 & : m \divides \paren {n + 1} \\
\floor {\dfrac n m} & : \text {otherwise}
\end {cases}$
So for $m \ne 0$:

$\map {\operatorname {quot} } {n + 1, m} = \begin{cases}
\map {\operatorname {quot} } {n, m} + 1 & : \map \rem {n + 1, m} = 0 \\
\map {\operatorname {quot} } {n, m} & : \map \rem {n + 1, m} \ne 0
\end{cases}$
Now note that:

$\map {\overline {\sgn} } {\map \rem {n + 1, m} } = \begin{cases}
1 & : \map \rem {n + 1, m} = 0 \\
0 & : \map \rem {n + 1, m} \ne 0
\end{cases}$
So the $\operatorname {quot}$ is defined as:

$\map {\operatorname {quot} } {0, m} = 0$
$\map {\operatorname {quot} } {n + 1, m} = \map \sgn m \map {\operatorname {quot} } {n, m} + \map {\overline {\sgn} } {\map \rem {n + 1, m} }$
(note that the factor $\map \sgn m$ is needed to cover the case where $m = 0$).

Thus $\operatorname {quot}$ is obtained  by primitive recursion (over the first variable, which is allowed by Permutation of Variables of Primitive Recursive Function) from the primitive recursive functions:

Signum function $\sgn$
Remainder $\rem$
Addition
Multiplication.
So it follows that $\operatorname {quot}$ is primitive recursive.
$\blacksquare$





