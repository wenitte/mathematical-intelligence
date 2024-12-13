# 

Source: https://proofwiki.org/wiki/Hardy-Littlewood_Circle_Method


This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\AA$ be a subset of the non-negative integers.
Let:

$\ds \map T s = \sum_{a \mathop \in \AA} s^a$
be the generating function for $\AA$.

For $N \in \N$, let $\map {r_{\AA, \ell} } N$ be the number of solutions $\tuple {x_1, \ldots, x_\ell} \in \AA^\ell$ to the equation:

$x_1 + \cdots + x_\ell = N$

Then:

$\ds \forall \rho \in \openint 0 1: \map {r_{\AA, \ell} } N = \oint_{\size s \mathop = \rho} \frac {\map T s^\ell} {s^{N + 1} } \rd s$


Proof
We have:

$\ds \map T s^\ell = \sum_{N \mathop = 0}^\infty \map {r_{\AA, \ell} } N s^N$
and:

$\map {\dfrac {\d^N} {\d s^N} } {\map T s^\ell} = N! \cdot \map {r_{\AA, \ell} } N + \map \OO s$
so:

$\map {r_{\AA, \ell} } N = \dfrac 1 {N!} \dfrac {\d^N} {\d s^N} \bigintlimits {\map T s^\ell} {s \mathop = 0}{}$

Now recall Cauchy's Integral Formula for Derivatives for a complex function $f$ holomorphic on a domain $D$, and a path $\gamma \subseteq D$ winding once around $a$:

$\ds \valueat {\frac {\d^N} {\d s^N} \map f s} {s \mathop = a} = \frac {N!} {2 \pi i} \oint_\gamma \frac {\map f s} {\paren {s - a}^{N + 1} } \rd s$
Since $\map T s$ is defined by a generating function, $\map T s^\ell$ has a Taylor series about $s = 0$ which converges for all $\size s < 1$.

Applying Cauchy's formula:














\(\ds \map {r_{\AA, \ell} } N\)

\(=\)







\(\ds \frac 1 {N!} \frac {\d^N} {\d s^N} \bigintlimits {\map T s^\ell} {s \mathop = 0} {}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi i} \oint_\gamma \frac {\map T s^\ell} {s^{N + 1} } \rd s\)









where $\gamma$ a circle about zero of radius $\rho$ for any $\rho < 1$.
$\blacksquare$


Source of Name
This entry was named for Godfrey Harold Hardy and John Edensor Littlewood.



This article, or a section of it, needs explaining.In particular: Plenty of links to be included and explanations to be added.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.




