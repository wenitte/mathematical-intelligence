# 

Source: https://proofwiki.org/wiki/Completed_Riemann_Zeta_Function_has_Order_One

Theorem
The completed Riemann zeta function $\xi$ has order at most $1$.


Proof
We are required to prove that:

$\map \xi s = \dfrac 1 2 s \paren {s - 1} \pi^{-s/2} \map \Gamma {\dfrac s 2} \map \zeta s \ll \map \exp {\size s^\beta}$
for all $\beta > 1$, where $\ll$ is the order notation.
Note that by the Functional Equation for Riemann Zeta Function, it is sufficient to check this for $\map \Re s \ge \dfrac 1 2$.
We simply check this fact for each factor.
Evidently:














\(\ds \frac 1 2 s \paren {s - 1} \pi^{-s/2}\)

\(\ll\)







\(\ds \map \exp {2 \log s - \frac s 2 \log \pi}\)




















\(\ds \)

\(\ll\)







\(\ds \map \exp {c_1 \size s}\)









for some $c_1 > 0$.

For the gamma factor, we have Stirling's Formula for Gamma Function:

$\ds \log \map \Gamma s = \paren {s - \frac 1 2} \log s - s + \frac {\log 2 \pi} 2 + \sum_{n \mathop = 1}^{d-1} \frac {B_{2 n} } {2 n \paren {2 n - 1}s^{2 n - 1} } + \map \OO {s^{1 - 2 d} }$
This is valid only away from the poles of $\Gamma$ at $s = 0, -1, -2, \ldots$
However, it is assumed that $\map \Re s \ge \dfrac 1 2$, so this is not a problem.
The error term $\map \OO {s^{1 - 2 d} }$ is small for large $s$.
More generally, the largest contribution is the term $\paren {s - \dfrac 1 2} \log s$, so we have:

$\log \map \Gamma {\dfrac s 2} \ll \size s \log \size s$
That is:

$\map \Gamma {\dfrac s 2} \ll \map \exp {\size s \log \size s}$

Finally, from Integral Representation of Riemann Zeta Function in terms of Fractional Part, for $\map \Re s > \dfrac 1 2$:

$\ds \map \zeta s = \frac s {s - 1} - s \int_1^\infty \fractpart x x^{-s - 1} \rd x$

It is seen that for $\map \Re s > \dfrac 1 2$, the integral is bounded, and therefore:

$\paren {1 - s} \map \zeta s \ll \map \OO {\size s^2} \ll \map \exp {\size s}$
Combining these facts, and using that $\log s \ll s^\epsilon$ for all $\epsilon > 0$ (shown by Upper Bound of Natural Logarithm), we have:

$\size {\map \xi s} \ll \map \exp {\size s^{1 + \epsilon} }$
for all $\epsilon > 0$, and the proof is complete.
$\blacksquare$





