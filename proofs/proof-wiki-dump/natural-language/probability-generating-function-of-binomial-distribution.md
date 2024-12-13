# 

Source: https://proofwiki.org/wiki/Probability_Generating_Function_of_Binomial_Distribution

Theorem
Let $X$ be a discrete random variable with the binomial distribution with parameters $n$ and $p$.

Then the p.g.f. of $X$ is:

$\map {\Pi_X} s = \paren {q + p s}^n$
where $q = 1 - p$.


Proof
From the definition of p.g.f:

$\ds \map {\Pi_X} s = \sum_{k \mathop \ge 0} \map {p_X} k s^k$
From the definition of the binomial distribution:

$\map {p_X} k = \dbinom n k p^k \paren {1 - p}^{n - k}$
So:














\(\ds \map {\Pi_X} s\)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \binom n k p^k \paren {1 - p}^{n - k} s^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \binom n k \paren {p s}^k \paren {1 - p}^{n - k}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {p s} + \paren {1 - p} }^n\)





Binomial Theorem



Hence the result.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 4.2$: Integer-valued random variables: $(11)$




