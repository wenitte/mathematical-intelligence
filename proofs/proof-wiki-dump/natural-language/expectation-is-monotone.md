# 

Source: https://proofwiki.org/wiki/Expectation_is_Monotone

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ and $Y$ be integrable random variables such that:

$\forall \omega \in \Omega: \map X \omega \le \map Y \omega$

This article, or a section of it, needs explaining.In particular: Should we craft a link to one of the instances of pointwise inequality? We this for general functions, do we need one for random variables?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then:

$\expect X \le \expect Y$


Proof
From the definition of expectation we have:

$\ds \expect X = \int X \rd \Pr$
and:

$\ds \expect Y = \int Y \rd \Pr$
The result follows directly from Integral of Integrable Function is Monotone.
$\blacksquare$





