# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_Square-Free_Integer_is_Power_of_2

Theorem
Let $n$ be a square-free integer.
Let $\sigma_0: \Z \to \Z$ be the divisor count Function.
Then $\map {\sigma_0} n = 2^r$ for some $r \ge 1$.

The converse is not true in general.
That is, if $\map {\sigma_0} n = 2^r$ for some $r \ge 1$, it is not necessarily the case that $n$ is square-free.


Proof
Let $n$ be an integer such that $n \ge 2$.
Let the prime decomposition of $n$ be:

$n = p_1^{k_1} p_2^{k_2} \dotsm p_r^{k_r}$
Then from Divisor Count Function from Prime Decomposition we have that:

$\ds \map {\sigma_0} n = \prod_{i \mathop = 1}^r \paren {k_i + 1}$

Let $n$ be square-free.
Then by definition:

$\forall i: 1 \le i \le r: k_i = 1$
So:

$\ds \map {\sigma_0} n = \prod_{i \mathop = 1}^r \paren {1 + 1} = 2^r$

The statement about the converse is proved by counterexample:
Let $n = p^3$ where $p$ is prime.
Then $n$ is not square-free as $p^2 \divides n$.
However:

$\map {\sigma_0} n = 3 + 1 = 2^2$
$\blacksquare$





