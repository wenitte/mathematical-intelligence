# 

Source: https://proofwiki.org/wiki/Divisor_Count_Function_is_Odd_Iff_Argument_is_Square



Theorem
Let $\sigma_0: \Z \to \Z$ denote the divisor count function.

Then $\map {\sigma_0} n$ is odd if and only if $n$ is square.


Proof
Let $n$ be an integer such that $n \ge 2$.
Let the prime decomposition of $n$ be:

$n = p_1^{k_1} p_2^{k_2} \dotsm p_r^{k_r}$
Then from Divisor Count Function from Prime Decomposition we have that:

$\ds \map {\sigma_0} n = \prod_{i \mathop = 1}^r \paren {k_i + 1}$


Sufficient Condition
Let $\map {\sigma_0} n$ be odd.
Then all factors of $\ds \prod_{i \mathop = 1}^r \paren {k_i + 1}$ are odd (and of course $\ge 3$).
Therefore all factors of $\ds \prod_{i \mathop = 1}^r \paren {k_i}$ are even.
Thus $n = p_1^{2 s_1} p_2^{2 s_2} \ldots p_r^{2 s_r}$ for $r_i = k_i / 2$ for all $i$.
Hence $n = \paren {p_1^{s_1} p_2^{s_2} \ldots p_r^{s_r} }^2$ and therefore is square.
$\Box$


Necessary Condition
Now suppose $n$ is square.
The above argument reverses, and we see that all factors of $\ds \prod_{i \mathop = 1}^r \paren {k_i + 1}$ are odd.
Hence $\map {\sigma_0} n$ is itself odd.
$\blacksquare$





