# 

Source: https://proofwiki.org/wiki/Nth_Derivative_of_Nth_Power

Corollary to Nth Derivative of Mth Power
Let $n \in \Z$ be an integer such that $n \ge 0$.
The $n$th derivative of $x^n$ with respect to $x$ is:

$\dfrac {\d^n} {\d x^n} x^n = n!$
where $n!$ denotes $n$ factorial.


Proof
From Nth Derivative of Mth Power, we have:

$\dfrac {\d^n} {\d x^n} x^m = \begin {cases}
m^\underline n \, x^{m - n} & : n \le m \\
0 & : n > m
\end {cases}$
where $m^\underline n$ denotes the falling factorial.

Putting $m = n$:

$\dfrac {\d^n} {\d x^n} x^n = n^\underline n$
where from the definition of the falling factorial:

$n^\underline n = n!$
Hence the result.
$\blacksquare$





