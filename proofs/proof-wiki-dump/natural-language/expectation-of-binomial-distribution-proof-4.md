# 

Source: https://proofwiki.org/wiki/Expectation_of_Binomial_Distribution/Proof_4

Theorem
Let $X$ be a discrete random variable with the binomial distribution with parameters $n$ and $p$ for some $n \in \N$ and $0 \le p \le 1$.

Then the expectation of $X$ is given by:

$\expect X = n p$


Proof
From Moment Generating Function of Binomial Distribution, the moment generating function of $X$, $M_X$, is given by:

$\ds \map {M_X} t = \paren {1 - p + p e^t}^n$
By Moment in terms of Moment Generating Function:

$\ds \expect X = \map {M_X'} 0$
We have: 














\(\ds \map {M_X'} t\)

\(=\)







\(\ds \frac \d {\d t} \paren {1 - p + p e^t}^n\)




















\(\ds \)

\(=\)







\(\ds \map {\frac \d {\d t} } {1 - p + p e^t} \map {\frac \d {\map \d {1 - p + p e^t} } } {1 - p + p e^t}^n\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds n p e^t \paren {1 - p + p e^t}^{n - 1}\)





Derivative of Exponential Function, Derivative of Power



Setting $t = 0$ gives:














\(\ds \expect X\)

\(=\)







\(\ds n p e^0 \paren {1 - p + p e^0}^{n - 1}\)




















\(\ds \)

\(=\)







\(\ds n p \paren {1 - p + p}^{n - 1}\)





Exponential of Zero














\(\ds \)

\(=\)







\(\ds n p\)









$\blacksquare$





