# 

Source: https://proofwiki.org/wiki/Maximum_Function_is_Primitive_Recursive

Theorem
The maximum function $\max: \N^2 \to \N$, defined as:

$\max \left({n, m}\right) = \begin{cases}
m: & n \le m \\
n: & m \le n
\end{cases}$
is primitive recursive‎.


Proof
We see that:

$\max \left({n, m}\right) = \left({n \ \dot - \ m}\right) + m$
because:

$(1):\quad n > m \implies \left({n \ \dot - \ m}\right) + m = n - m + m = n$
$(2):\quad n < m \implies \left({n \ \dot - \ m}\right) + m = 0 + m = m$
$(3):\quad n = m \implies \left({n \ \dot - \ m}\right) + m = 0 + m = m = n$
Hence we see that $\max$ is obtained by substitution from the primitive recursive function $n \ \dot - \ m$.
Hence the result.
$\blacksquare$





