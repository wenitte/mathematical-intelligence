# 

Source: https://proofwiki.org/wiki/Expectation_of_Exponential_Distribution/Proof_1

Theorem
Let $X$ be a continuous random variable of the exponential distribution with parameter $\beta$ for some $\beta \in \R_{> 0}$

Then the expectation of $X$ is given by:

$\expect X = \beta$


Proof
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





