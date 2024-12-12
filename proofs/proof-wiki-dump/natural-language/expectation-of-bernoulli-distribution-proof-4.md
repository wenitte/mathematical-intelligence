# 

Source: https://proofwiki.org/wiki/Expectation_of_Bernoulli_Distribution/Proof_4

Theorem
Let $X$ be a discrete random variable with a Bernoulli distribution with parameter $p$.

Then the expectation of $X$ is given by:

$\expect X = p$


Proof
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





