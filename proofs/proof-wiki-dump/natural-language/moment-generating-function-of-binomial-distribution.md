# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Binomial_Distribution



Theorem
Let $X$ be a discrete random variable with a binomial distribution with parameters $n$ and $p$ for some $n \in \N$ and $0 \le p \le 1$:

$X \sim \Binomial n p$

Then the moment generating function $M_X$ of $X$ is given by: 

$\map {M_X} t = \paren {1 - p + p e^t}^n$


Proof
From the definition of the Binomial distribution, $X$ has probability mass function:

$\map \Pr {X = k} = \dbinom n k p^k \paren {1 - p}^{n - k}$
From the definition of a moment generating function:

$\ds \map {M_X} t = \expect {e^{t X} } = \sum_{k \mathop = 0}^n \map \Pr {X = k} e^{t k}$
So: 














\(\ds \map {M_X} t\)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \binom n k p^k \paren {1 - p}^{n - k} e^{t k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \binom n k \paren {p e^t}^k \paren {1 - p}^{n - k}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - p + p e^t}^n\)





Binomial Theorem



$\blacksquare$


Also presented as
The moment generating function $M_X$ of a binomial distribution $X$ can also be presented as: 

$\map {M_X} t = \paren {1 + p \paren {e^t - 1} }^n$


Sources
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $13$: Probability distributions
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $15$: Probability distributions




