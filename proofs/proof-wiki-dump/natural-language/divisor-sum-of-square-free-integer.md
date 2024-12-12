# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_Square-Free_Integer



Theorem
Let $n$ be an integer such that $n \ge 2$.
Let $n$ be square-free.
Let the prime decomposition of $n$ be:

$\ds n = \prod_{1 \mathop \le i \mathop \le r} p_i =  p_1 p_2 \cdots p_r$
Let $\map {\sigma_1} n$ be the divisor sum of $n$.
That is, let $\map {\sigma_1} n$ be the sum of all positive divisors of $n$.

Then:

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} p_i + 1$


Proof 1
We have that the Divisor Sum Function is Multiplicative.
From the definition of prime number, each of the prime factors of $n$ is coprime to all other divisors of $n$.
From Divisor Sum of Prime Number, we have:

$\map {\sigma_1} {p_i} = p_i + 1$
Hence the result.
$\blacksquare$


Proof 2
From Divisor Sum of Integer:

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where each of the $k_i$s are equal to $1$;
Hence:

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^2 - 1} {p_i - 1}$
But from Difference of Two Squares:

$\dfrac {p_i^2 - 1} {p_i - 1} = \dfrac {\paren {p_i + 1} \paren {p_i i 1} } {p_i - 1} = p_i + 1$
Hence the result.
$\blacksquare$


Examples
$\sigma_1$ of $66$
$\map {\sigma_1} {66} = 144$


$\sigma_1$ of $70$
$\map {\sigma_1} {70} = 144$


$\sigma_1$ of $110$
$\map {\sigma_1} {110} = 216$


$\sigma_1$ of $170$
$\map {\sigma_1} {170} = 324$




