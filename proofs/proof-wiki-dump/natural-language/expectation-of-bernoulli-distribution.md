# 

Source: https://proofwiki.org/wiki/Expectation_of_Bernoulli_Distribution



Theorem
Let $X$ be a discrete random variable with a Bernoulli distribution with parameter $p$.

Then the expectation of $X$ is given by:

$\expect X = p$


Proof 1
From the definition of expectation:

$\ds \expect X = \sum_{x \mathop \in \Img X} x \map \Pr {X = x}$
By definition of Bernoulli distribution:

$\expect X = 1 \times p + 0 \times \paren {1 - p}$
Hence the result.
$\blacksquare$


Proof 2
Follows directly from Expectation of Binomial Distribution, putting $n = 1$.
$\blacksquare$


Proof 3
From the Probability Generating Function of Bernoulli Distribution, we have:

$\map {\Pi_X} s = q + p s$
where $q = 1 - p$.

From Expectation of Discrete Random Variable from PGF, we have:

$\expect X = \map { {\Pi_X}'} 1$

From Derivatives of PGF of Bernoulli Distribution:

$\map { {\Pi_X}'} s = p$
Hence the result.
$\blacksquare$


Proof 4
From Moment Generating Function of Bernoulli Distribution, the moment generating function of $X$, $M_X$, is given by: 

$\map {M_X} t = q + p e^t$
where $q = 1 - p$. 
By Moment in terms of Moment Generating Function:

$\expect X = \map {M_X'} 0$
We have: 














\(\ds \map {M_X'} t\)

\(=\)







\(\ds \frac \d {\d t} \paren {q + p e^t}\)




















\(\ds \)

\(=\)







\(\ds p e^t\)





Derivative of Constant, Derivative of Exponential Function



Setting $t = 0$ gives: 














\(\ds \expect X\)

\(=\)







\(\ds p e^0\)




















\(\ds \)

\(=\)







\(\ds p\)





Exponential of Zero



$\blacksquare$





