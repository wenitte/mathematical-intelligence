# 

Source: https://proofwiki.org/wiki/Expectation_of_Binomial_Distribution



Theorem
Let $X$ be a discrete random variable with the binomial distribution with parameters $n$ and $p$ for some $n \in \N$ and $0 \le p \le 1$.

Then the expectation of $X$ is given by:

$\expect X = n p$


Proof 1
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


Proof 2
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


Proof 3
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


Proof 4
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


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 2.4$: Expectation: Exercise $9$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): binomial distribution
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): binomial distribution
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): binomial distribution
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $13$: Probability distributions
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $15$: Probability distributions




