# 

Source: https://proofwiki.org/wiki/Expectation_of_Binomial_Distribution/Proof_1

Theorem
Let $X$ be a discrete random variable with the binomial distribution with parameters $n$ and $p$ for some $n \in \N$ and $0 \le p \le 1$.

Then the expectation of $X$ is given by:

$\expect X = n p$


Proof
From the definition of expectation:

$\ds \expect X = \sum_{x \mathop \in \Omega_X} x \map \Pr {X = x}$
Thus:














\(\ds \expect X\)

\(=\)







\(\ds \sum_{k \mathop = 0}^n k \binom n k p^k q^{n - k}\)





Definition of Binomial Distribution, with $p + q = 1$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n k \binom n k p^k q^{n - k}\)





since for $k = 0$, $k \dbinom n k p^k q^{n - k} = 0$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n n \binom {n - 1} {k - 1} p^k q^{n - k}\)





Factors of Binomial Coefficient: $k \dbinom n k = n \dbinom {n - 1} {k - 1}$














\(\ds \)

\(=\)







\(\ds n p \sum_{k \mathop = 1}^n \binom {n - 1} {k - 1} p^{k - 1} q^{\paren {n - 1} - \paren {k - 1} }\)





taking out $n p$ and using $\paren {n - 1} - \paren {k - 1} = n - k$














\(\ds \)

\(=\)







\(\ds n p \sum_{j \mathop = 0}^m \binom m j p^j q^{m - j}\)





putting $m = n - 1, j = k - 1$














\(\ds \)

\(=\)







\(\ds n p\)





Binomial Theorem and $p + q = 1$



$\blacksquare$





