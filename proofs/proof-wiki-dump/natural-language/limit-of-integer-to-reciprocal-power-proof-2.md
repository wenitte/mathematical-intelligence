# 

Source: https://proofwiki.org/wiki/Limit_of_Integer_to_Reciprocal_Power/Proof_2

Theorem
Let $\sequence {x_n}$ be the real sequence defined as $x_n = n^{1/n}$, using exponentiation.
Then $\sequence {x_n}$ converges with a limit of $1$.


Proof
We have the definition of the power to a real number:

$\ds n^{1/n} = \map \exp {\frac 1 n \ln n}$
From Powers Drown Logarithms, we have that:

$\ds \lim_{n \mathop \to \infty} \frac 1 n \ln n = 0$
Hence:

$\ds \lim_{n \mathop \to \infty} n^{1/n} = \exp 0 = 1$
and the result.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 14.7 \ (4)$




