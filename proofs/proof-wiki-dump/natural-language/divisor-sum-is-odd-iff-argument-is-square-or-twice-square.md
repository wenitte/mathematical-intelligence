# 

Source: https://proofwiki.org/wiki/Divisor_Sum_is_Odd_iff_Argument_is_Square_or_Twice_Square

Theorem
Let $\sigma_1: \Z \to \Z$ be the divisor sum function.
Then $\map {\sigma_1} n$ is odd if and only if $n$ is either square or twice a square.


Proof
Let $n$ be an integer such that $n \ge 2$.
Let the prime decomposition of $n$ be:

$n = p_1^{k_1} p_2^{k_2} \ldots p_r^{k_r}$

Then:














\(\ds \map {\sigma_1} n\)

\(=\)







\(\ds \prod_{i \mathop = 1}^r \frac {p_i^{k_i + 1} - 1} {p_i - 1}\)





Divisor Sum of Integer














\(\ds \)

\(=\)







\(\ds \prod_{i \mathop = 1}^r \paren {1 + p_i + p_i^2 + \ldots + p_i^{k_i} }\)





Sum of Geometric Sequence




Let $\map {\sigma_1} n$ be odd.
Then all factors of $\ds \prod_{i \mathop = 1}^r \paren {1 + p_i + p_i^2 + \ldots + p_i^{k_i} }$ are odd (and of course $\ge 3$).

For $1 + p_i + p_i^2 + \ldots + p_i^{k_i}$ to be odd, one of two conditions must hold:

$p_i$ is even (so that all terms of $1 + p_i + p_i^2 + \ldots + p_i^{k_i}$ are even except the $1$);
$k_i$ is even (so that $1 + p_i + p_i^2 + \ldots + p_i^{k_i}$ has an odd number of odd terms).
In the first case, that means $p_i^{k_i}$ is a power of $2$.
In the second case, that means $p_i^{k_i}$ is a square.
The result follows.

The argument reverses.
$\blacksquare$





