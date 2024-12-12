# 

Source: https://proofwiki.org/wiki/Expectation_of_Binomial_Distribution/Proof_2

Theorem
Let $X$ be a discrete random variable with the binomial distribution with parameters $n$ and $p$ for some $n \in \N$ and $0 \le p \le 1$.

Then the expectation of $X$ is given by:

$\expect X = n p$


Proof
From Bernoulli Process as Binomial Distribution, we see that $X$ as defined here is a sum of discrete random variables $Y_i$ that model the Bernoulli distribution:

$\ds X = \sum_{i \mathop = 1}^n Y_i$
Each of the Bernoulli trials is independent of each other, by definition of a Bernoulli process.
It follows that:














\(\ds \expect X\)

\(=\)







\(\ds \expect {\sum_{i \mathop = 1}^n Y_i }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \expect {Y_i}\)





Sum of Expectations of Independent Trials‎














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n p\)





Expectation of Bernoulli Distribution














\(\ds \)

\(=\)







\(\ds n p\)





Sum of Identical Terms



$\blacksquare$





