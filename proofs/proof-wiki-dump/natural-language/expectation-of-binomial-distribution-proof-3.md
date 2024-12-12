# 

Source: https://proofwiki.org/wiki/Expectation_of_Binomial_Distribution/Proof_3

Theorem
Let $X$ be a discrete random variable with the binomial distribution with parameters $n$ and $p$ for some $n \in \N$ and $0 \le p \le 1$.

Then the expectation of $X$ is given by:

$\expect X = n p$


Proof
From the Probability Generating Function of Binomial Distribution, we have:

$\map {\Pi_X} s = \paren {q + p s}^n$
where $q = 1 - p$.

From Expectation of Discrete Random Variable from PGF, we have:

$\expect X = \map {\Pi'_X} 1$

We have:














\(\ds \map {\Pi'_X} s\)

\(=\)







\(\ds \map {\frac \d {\d s} } {q + p s}^n\)




















\(\ds \)

\(=\)







\(\ds n p \paren {q + p s}^{n - 1}\)





Derivatives of PGF of Binomial Distribution




Plugging in $s = 1$:

$\map {\Pi'_X} 1 = n p \paren {q + p}$

Hence the result, as $q + p = 1$.
$\blacksquare$





