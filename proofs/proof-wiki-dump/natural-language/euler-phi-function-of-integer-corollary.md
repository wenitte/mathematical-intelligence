# 

Source: https://proofwiki.org/wiki/Euler_Phi_Function_of_Integer/Corollary

Corollary to Euler Phi Function of Integer
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $p$ be a prime number.
Let $\map \phi n$ denote the Euler $\phi$ function of $n$.
Let $p$ be a divisor of $n$.
Then $p - 1$ is a divisor of $\map \phi n$.


Proof
From Euler Phi Function of Integer:

$\ds \map \phi n = n \prod_{p \mathop \divides n} \paren {1 - \frac 1 p}$

Let $n$ be expressed as its prime decomposition:

$n = p_1^{k_1} p_2^{k_2} \ldots p_r^{k_r}, p_1 < p_2 < \ldots < p_r$
Then:














\(\ds \phi \left({n}\right)\)

\(=\)







\(\ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i} \paren {1 - \dfrac 1 {p_i} }\)




















\(\ds \)

\(=\)







\(\ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i} \paren {\dfrac {p_i - 1} {p_i} }\)




















\(\ds \)

\(=\)







\(\ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i - 1} \paren {p_i - 1}\)




















\(\ds \)

\(=\)







\(\ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i - 1} \paren {p_i - 1}\)










Hence the result.
$\blacksquare$





