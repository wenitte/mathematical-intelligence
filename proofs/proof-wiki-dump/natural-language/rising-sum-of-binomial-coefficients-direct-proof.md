# 

Source: https://proofwiki.org/wiki/Rising_Sum_of_Binomial_Coefficients/Direct_Proof

Theorem
$\ds \sum_{j \mathop = 0}^m \binom {n + j} n = \binom {n + m + 1} {n + 1} = \binom {n + m + 1} m$


Direct Proof
This proof adds up all the terms of the summation to obtain the desired result.
Since the first term equals $1$, it may be replaced with $\dbinom {n + 1} {n + 1}$.
So:

$\ds \sum_{j \mathop = 0}^m \binom {n + j} n = \binom {n + 1} {n + 1} + \sum_{j \mathop = 1}^m \binom {n + j} n$

The sum will be computed in $m$ steps, combining the first two terms with Pascal's Rule in each step.  
Step 1:

$\ds \binom {n + 1} {n + 1} + \binom {n + 1} n + \sum_{j \mathop = 2}^m \binom {n + j} n = \binom {n + 2} {n + 1} + \sum_{j \mathop = 2}^m \binom {n + j} n$

Step 2:

$\ds \binom {n + 2} {n + 1} + \binom {n + 2} n + \sum_{j \mathop = 3}^m \binom {n + j} n = \binom {n + 3} {n + 1} + \sum_{j \mathop = 3}^m \binom {n + j} n$

After $m - 1$ steps, we obtain:

$\dbinom {n + m} {n + 1} + \dbinom {n + m} n$

Step $m$:

$\dbinom {n + m} {n + 1} + \dbinom {n + m} n = \dbinom {n + m + 1} {n + 1}$
Hence the result.
$\blacksquare$





