# 

Source: https://proofwiki.org/wiki/Probability_Generating_Function_of_Negative_Binomial_Distribution/Second_Form

Theorem
Let $X$ be a discrete random variable with the negative binomial distribution (second form) with parameters $n$ and $p$.

Then the p.g.f. of $X$ is:

$\ds \map {\Pi_X} s = \paren {\frac {p s} {1 - q s} }^n$
where $q = 1 - p$.


Proof
From the definition of p.g.f:

$\ds \map {\Pi_X} s = \sum_{k \mathop \ge 0} \map {p_X} k s^k$

From the definition of the negative binomial distribution (second form):

$\map {p_X} k = \dbinom {k - 1} {n - 1} p^n q^{k - n}$
where $q = 1 - p$.

So:














\(\ds \map {\Pi_X} s\)

\(=\)







\(\ds \sum_{k \mathop \ge n} \binom {k - 1} {n - 1} p^n q^{k - n} s^k\)




















\(\ds \)

\(=\)







\(\ds \frac {p^n} {q^n} \sum_{k \mathop \ge n} \binom {k - 1} {n - 1} \paren {q s}^k\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {p s} {1 - q s} }^n\)









Hence the result.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 4.2$: Integer-valued random variables: $(13)$




