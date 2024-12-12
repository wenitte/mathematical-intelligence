# 

Source: https://proofwiki.org/wiki/Asymptotic_Growth_of_Euler_Phi_Function

Theorem
Let $\phi$ be the Euler $\phi$ function.

For any $\epsilon > 0$ and sufficiently large $n$:

$n^{1 - \epsilon} < \map \phi n < n$


Proof
It is clear that $\map \phi n < n$ for all $n$, so it is sufficient to prove that:

$\ds \lim_{n \mathop \to \infty} \frac {n^{1 - \epsilon} } {\map \phi n} = 0$
By Multiplicative Function that Converges to Zero on Prime Powers it is sufficient to prove that:

$\ds \lim_{p^k \mathop \to \infty} \frac {p^{k \paren {1 - \epsilon} } } {\map \phi {p^k} } = 0$
as $p^k$ ranges through all prime powers.

By Euler Phi Function of Prime Power we have:

$\map \phi {p^k} = p^k - p^{k - 1}$
for a prime power $p^k$.
Therefore:














\(\ds \frac {p^{k \paren {1 - \epsilon} } } {\map \phi {p^k} }\)

\(=\)







\(\ds \frac {p^{k \paren {1 - \epsilon} } } {p^k - p^{k - 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac p {p - 1} \frac {p^{k \paren {1 - \epsilon} } } {p^k}\)




















\(\ds \)

\(=\)







\(\ds \frac p {p - 1} \frac 1 {p^{k \epsilon} }\)




















\(\ds \)

\(\le\)







\(\ds \frac 2 {p^{k \epsilon} }\)





since $p / \paren {p - 1} \le 2$ for all primes $p$



Therefore:

$\ds \lim_{p^k \mathop \to \infty} \frac {p^{k \paren {1 - \epsilon} } } {\map \phi {p^k} } \le \lim_{p^k \mathop \to \infty} \frac 2 {p^{k \epsilon} } = 0$
$\blacksquare$





