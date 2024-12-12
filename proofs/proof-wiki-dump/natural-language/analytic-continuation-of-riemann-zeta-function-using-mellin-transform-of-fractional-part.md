# 

Source: https://proofwiki.org/wiki/Analytic_Continuation_of_Riemann_Zeta_Function_using_Mellin_Transform_of_Fractional_Part

Theorem
Let $\zeta$ denote the Riemann zeta function.

The analytic continuation of $\zeta$ to the half-plane $\map \Re s > 0$ is given by:

$\ds \frac s {s - 1} - s \int_1^\infty \fractpart x x^{-s - 1} \rd x$
where:

$x^{-s - 1}$ takes the principal value $e^{-\map \ln x \paren {s + 1} }$
$\fractpart x$ is the fractional part of $x$.


Proof
Let $s = \sigma + i t$.
By Integral Representation of Riemann Zeta Function in terms of Fractional Part, the above integral coincides with $\map \zeta s$ for $\sigma > 1$.
We show that it is analytic for $0 < \sigma < 1$.

For $n \ge 1$, let:














\(\ds \cmod {a_n}\)

\(=\)







\(\ds \cmod {\int_n^{n + 1} s \fractpart x x^{-s - 1} \rd x}\)




















\(\ds \)

\(\le\)







\(\ds \cmod s \int_n^{n + 1} \cmod {\fractpart x x^{-s - 1} } \rd x\)





Modulus of Complex Integral














\(\ds \)

\(=\)







\(\ds \cmod s \int_n^{n + 1} \fractpart x x^{-\sigma - 1} \rd x\)




















\(\ds \)

\(\le\)







\(\ds \cmod s \int_n^{n + 1} x^{-\sigma-1} \rd x\)





as $\fractpart x < 1$














\(\ds \)

\(=\)







\(\ds -\intlimits {\dfrac {\cmod s} \sigma x^{-\sigma} } n {n + 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\cmod s} \sigma \paren {\frac 1 {n^\sigma} - \frac 1 {\paren {n + 1}^\sigma} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\cmod s} \sigma \paren {\frac {\paren {n + 1}^\sigma - n^\sigma} {n^\sigma \paren {n + 1}^\sigma} }\)










By the Mean Value Theorem, for some $n \le \theta \le n + 1$:

$\paren {n + 1}^\sigma - n^\sigma = \sigma \theta^{\sigma - 1}$
and for $\sigma \le 1$ we have:

$\sigma \theta^{\sigma - 1} \le \sigma n^{\sigma - 1}$

Thus we have:














\(\ds \cmod {a_n}\)

\(\le\)







\(\ds \dfrac {\cmod s} \sigma \paren {\frac {\paren {n + 1}^\sigma - n^\sigma} {n^\sigma \paren {n + 1}^\sigma} }\)




















\(\ds \)

\(\le\)







\(\ds \dfrac {\cmod s} \sigma \paren {\frac {\sigma n^{\sigma - 1} } {n^\sigma \paren {n + 1}^\sigma} }\)




















\(\ds \)

\(=\)







\(\ds \cmod s \frac 1 {\paren {n + 1}^\sigma n }\)




















\(\ds \)

\(\le\)







\(\ds \frac {\cmod s} {n^{\sigma + 1} }\)










Thus on any compact subset of the half-plane $\sigma > 0$ which is bounded away from $0$, we have that the series:

$\ds \frac s {s - 1} - \sum_{n \mathop = 1}^\infty a_n = \frac s {s - 1} - s \int_1^\infty \fractpart x x^{-s - 1} \rd x$
converges uniformly as:














\(\ds \cmod {\sum_{n \mathop = M}^\infty a_n}\)

\(\le\)







\(\ds \sum_{n \mathop = M}^\infty \cmod {a_n}\)





Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = M}^\infty \frac {\cmod s} {n^{\sigma + 1} }\)





substitution from above



Since it is a compact region, $\cmod s$ is bounded by some constant $C$.
So:

$\ds \cmod {\sum_{n \mathop = M}^\infty a_n} \le C \sum_{n \mathop = M}^\infty \frac 1 {n^{\sigma + 1} }$
As Dirichlet series are uniformly convergent on compact regions bounded away from their abscissa of convergence, we may find an $M$ large enough so that the above is smaller than $\epsilon$ for all $\sigma$.
Therefore the series is uniformly convergent.
Thus by Uniform Limit of Analytic Functions is Analytic the series defines an analytic function on the strip $0 < \sigma < 1$.
This is also equal to $\zeta$ on the half-plane $\sigma>1$.
Thus the series defines the unique analytic continuation of $\zeta$ onto the half-plane $\sigma > 0$.
$\blacksquare$


Also see
Analytic Continuations of Riemann Zeta Function to Right Half-Plane




