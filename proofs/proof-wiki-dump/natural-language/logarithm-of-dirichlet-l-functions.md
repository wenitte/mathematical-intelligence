# 

Source: https://proofwiki.org/wiki/Logarithm_of_Dirichlet_L-Functions

Theorem
Let $\chi$ be a Dirichlet character modulo $q$.
The Dirichlet series:

$\map f s = \ds \sum_{n \mathop \ge 1} \sum_p \frac {\map \chi p^n} {n p^{n s} }$
converges absolutely to an analytic function, where $p$ ranges over the primes.
Moreover, $\map f s$ defines a branch of $\ln \map L {s, \chi}$.


Proof
By Convergence of Dirichlet Series with Bounded Coefficients, $\map f s$ converges absolutely on $\map \Re s > 1$ to an analytic function.
For fixed $s \in \set {\map \Re s > 1}$:














\(\ds \sum_{n \mathop \ge 1} \sum_p \frac {\map \chi p^n} {n p^{n s} }\)

\(=\)







\(\ds \sum_p \paren {\frac {\map \chi p} {p^s} + \frac {\map \chi p^2} {2 p^{2 s} } + \cdots}\)





Manipulation of Absolutely Convergent Series














\(\ds \)

\(=\)







\(\ds \sum_p \map \ln {\frac 1 {1 - \map \chi p p^{-s} } }\)





Taylor Series of Logarithm; this is the branch of $\ln$ with $\map \ln {1 + x} = x - \dfrac {x^2} 2 + \cdots$ for small $x$














\(\ds \)

\(=\)







\(\ds \ln \prod_p \paren {\frac 1 {1 - \map \chi p p^{-s} } }\)





Logarithm is Continuous; this is not necessarily the same branch of $\ln$














\(\ds \)

\(=\)







\(\ds \ln \map L {s, \chi}\)





Definition of Euler Product



Hence $\map f s$ is an analytic branch of $\ln$ on $\map \Re s > 1$.


This article needs to be linked to other articles.In particular: "analytic branch" -- we have "analytic function" and "branch", but not a definition for what an "analytic branch" isYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
$\blacksquare$





