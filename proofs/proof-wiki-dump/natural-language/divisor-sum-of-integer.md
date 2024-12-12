# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_Integer



Theorem
Let $n$ be an integer such that $n \ge 2$.
Let $\map {\sigma_1} n$ be the divisor sum of $n$.
That is, let $\map {\sigma_1} n$ be the sum of all positive divisors of $n$.
Let the prime decomposition of $n$ be:

$\ds n = \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i} =  p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}$

Then:

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$


Corollary
$\ds \map {\sigma_1} n = \prod_{\substack {1 \mathop \le i \mathop \le r \\ k_i \mathop > 1} } \frac {p_i^{k_i + 1} - 1} {p_i - 1} \prod_{\substack {1 \mathop \le i \mathop \le r \\ k_i \mathop = 1} } \paren {p_i + 1}$


Proof
We have that the Divisor Sum Function is Multiplicative.
From Value of Multiplicative Function is Product of Values of Prime Power Factors, we have:

$\map f n = \map f {p_1^{k_1} } \map f {p_2^{k_2} } \ldots \map f {p_r^{k_r} }$
From Divisor Sum of Power of Prime, we have:

$\ds \map {\sigma_1} {p_i^{k_i} } = \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
Hence the result.
$\blacksquare$


Examples
$\sigma_1$ of $1$
$\map {\sigma_1} 1 = 1$


$\sigma_1$ of $3$
$\map {\sigma_1} 3 = 4$


$\sigma_1$ of $12$
$\map {\sigma_1} {12} = 28$


$\sigma_1$ of $20$
$\map {\sigma_1} {20} = 42$


$\sigma_1$ of $24$
$\map {\sigma_1} {24} = 60$


$\sigma_1$ of $40$
$\map {\sigma_1} {40} = 90$


$\sigma_1$ of $44$
$\map {\sigma_1} {44} = 84$


$\sigma_1$ of $48$
$\map {\sigma_1} {48} = 124$


$\sigma_1$ of $207$
$\map {\sigma_1} {207} = 312$


$\sigma_1$ of $12 \, 496$
$\map {\sigma_1} {12 \, 496} = 26 \, 784$


$\sigma_1$ of $14 \, 288$
$\map {\sigma_1} {14 \, 288} = 29 \, 760$


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): sigma function (sum function)




