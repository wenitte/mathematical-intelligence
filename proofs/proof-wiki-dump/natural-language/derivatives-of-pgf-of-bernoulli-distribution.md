# 

Source: https://proofwiki.org/wiki/Derivatives_of_PGF_of_Bernoulli_Distribution

Theorem
Let $X$ be a discrete random variable with the Bernoulli distribution with parameter $p$.
Then the derivatives of the PGF of $X$ with respect to $s$ are:

$\dfrac {\d^k} {\d s^k} \map {\Pi_X} s = \begin{cases} p & : k = 1 \\  0 & : k > 1 \end{cases}$


Proof 1
The Probability Generating Function of Bernoulli Distribution is:

$\map {\Pi_X} s = q + p s$
where $q = 1 - p$.

We have that for a given Bernoulli distribution, $p$ and $q$ are constant.
So, from Derivative of Constant, Sum Rule for Derivatives, Derivative of Identity Function and Derivative of Constant Multiple:

$\dfrac {\d} {\d s} \map {\Pi_X} s = p$

Again, $p$ is constant, so from Derivative of Constant:

$\dfrac {\d} {\d s} p = 0$

Higher derivatives are also of course zero, also from Derivative of Constant.
$\blacksquare$


Proof 2
Follows directly from Derivatives of PGF of Binomial Distribution, setting $n = 1$.
$\blacksquare$





