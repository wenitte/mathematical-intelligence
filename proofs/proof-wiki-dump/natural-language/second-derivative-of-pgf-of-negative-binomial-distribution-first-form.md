# 

Source: https://proofwiki.org/wiki/Second_Derivative_of_PGF_of_Negative_Binomial_Distribution/First_Form

Theorem
Let $X$ be a discrete random variable with the negative binomial distribution (first form) with parameters $n$ and $p$.
Then the second derivative of the PGF of $X$ with respect to $s$ is:

$\dfrac {\d^2} {\d s^2} \map {\Pi_X} s = \dfrac {n \paren {n + 1} p^2} {q^2} \paren {\dfrac q {1 - p s} }^{n + 2}$
where $q = 1 - p$.


Proof
The Probability Generating Function of Negative Binomial Distribution (First Form) is:

$\map {\Pi_X} s = \paren {\dfrac q {1 - p s} }^n$

From Derivatives of PGF of Negative Binomial Distribution:First Form:

$(1): \quad \dfrac {\d^k} {\d s^k} \map {\Pi_X} s = \dfrac {n^{\overline k} p^k} {q^k} \paren {\dfrac q {1 - p s} }^{n + k}$
where:

$n^{\overline k}$ is the rising factorial: $n^{\overline k} = n \paren {n + 1} \paren {n + 2} \cdots \paren {n + k - 1}$
$q = 1 - p$

Putting $k = 2$ in $(1)$ above yields the required solution.
$\blacksquare$





