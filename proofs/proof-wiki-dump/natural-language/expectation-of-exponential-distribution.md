# 

Source: https://proofwiki.org/wiki/Expectation_of_Exponential_Distribution



Theorem
Let $X$ be a continuous random variable of the exponential distribution with parameter $\beta$ for some $\beta \in \R_{> 0}$

Then the expectation of $X$ is given by:

$\expect X = \beta$


Proof 1
The expectation of a continuous random variable $X$ with sample space $\Omega_X$ is given by:

$\ds \expect X := \int_{x \mathop \in \Omega_X} x \map {f_X} x \rd x$
where $f_X$ is the probability density function of $X$.

For the exponential distribution:

$\Omega_X = \hointr 0 \infty$
From Probability Density Function of Exponential Distribution:

$\ds \map {f_X} x = \frac 1 \beta \map \exp {- \frac x \beta}$
So:

$\ds \expect X = \int_0^\infty x \frac 1 \beta \map \exp {- \frac x \beta} \rd x$
where $\exp$ is the exponential function. 
Substituting $u = \dfrac x \beta$, we have:

$\ds \expect X = \beta \int_0^\infty u \map \exp {-u} \rd u$
The integral evaluates to:

$\ds \expect X = \bigintlimits {-\beta \paren {u + 1} \map \exp {-u} } 0 \infty$
So:

$\ds \expect X = \beta - \beta \lim_{u \mathop \to \infty} \frac {u + 1} {\exp u}$

This article needs to be linked to other articles.In particular: The link below should be to the real counterpart of this result, but it's not up yetYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
By Limit at Infinity of Polynomial over Complex Exponential, it follows that this limit is zero, so that:

$\expect X = \beta$
$\blacksquare$


Proof 2
From Moment Generating Function of Exponential Distribution, the moment generating function $M_X$ of $X$, is given by:

$\map {M_X} t = \dfrac 1 {1 - \beta t}$
By Moment in terms of Moment Generating Function:

$\expect X = \map {M_X'} 0$
We have: 














\(\ds \map {M_X'} t\)

\(=\)







\(\ds \map {\frac \d {\d t} } {\frac 1 {1 - \beta t} }\)




















\(\ds \)

\(=\)







\(\ds \frac {-\beta} {-1} \frac 1 {\paren {1 - \beta t}^2}\)





Chain Rule for Derivatives, Derivative of Power














\(\ds \)

\(=\)







\(\ds \frac \beta {\paren {1 - \beta t}^2}\)









Setting $t = 0$ gives:














\(\ds \expect X\)

\(=\)







\(\ds \frac \beta {\paren {1 - 0 \beta}^2}\)




















\(\ds \)

\(=\)







\(\ds \beta\)









$\blacksquare$


Also see
Variance of Exponential Distribution


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): exponential distribution
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): exponential distribution
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $13$: Probability distributions
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $15$: Probability distributions




