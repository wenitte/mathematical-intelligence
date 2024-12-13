# 

Source: https://proofwiki.org/wiki/Minimum_Function_is_Primitive_Recursive

Theorem
The minimum function $\min: \N^2 \to \N$, defined as:

$\map \min {n, m} = \begin{cases}
n: & n \le m \\
m: & m \le n
\end{cases}$
is primitive recursive‎.


Proof
From Sum Less Maximum is Minimum we have that:

$\map \min {n, m} = n + m  - \map \max {n, m}$.
As $n + m \ge \map \max {n, m}$, we have that:

$\map \min {n, m} = n + m \ \dot - \ \map \max {n, m}$

Hence we see that $\min$ is obtained by substitution from:

the primitive recursive function $n \ \dot - \ m$
the primitive recursive function $\map \max {n, m}$.
Hence the result.
$\blacksquare$





