# 

Source: https://proofwiki.org/wiki/Increasing_Sum_of_Binomial_Coefficients/Proof_2

Theorem
$\ds \sum_{j \mathop = 0}^n j \binom n j = n 2^{n - 1}$


Proof
From the Binomial Theorem:

$(1): \quad \paren {1 + x}^n = \ds \sum_{j \mathop = 0}^n \dbinom n j x^n$
Differentiating $(1)$ with respect to $x$:














\(\ds n \paren {1 + x}^{n - 1}\)

\(=\)







\(\ds \sum_{j \mathop = 1}^n j \dbinom n j x^{j - 1}\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds n \paren {1 + 1}^{n - 1}\)

\(=\)







\(\ds \sum_{j \mathop = 1}^n j \dbinom n j\)





setting $x = 1$



Hence the result.
$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text I$. Algebra: The Binomial Theorem




