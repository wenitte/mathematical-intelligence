# 

Source: https://proofwiki.org/wiki/Poles_of_Riemann_Zeta_Function

Theorem
Let $\zeta$ be the Riemann zeta function.
Then $\zeta$ has a simple pole at $s = 1$ with residue $1$, and no other poles.


Proof
By Analytic Continuation of Riemann Zeta Function using Mellin Transform of Fractional Part:

$\ds \map \zeta s = \frac s {s - 1} - s \int_1^\infty \fractpart x x^{-s - 1} \rd x$
is meromorphic for $\map \Re s > 0$, and the integral converges to a finite value for fixed $s$ in this region.
Therefore in this region the only pole of $\zeta$ is at $s = 1$, with residue:














\(\ds \Res \zeta 1\)

\(=\)







\(\ds \lim_{s \mathop \to 1} \paren {s - 1} \paren {\frac s {s - 1} - s \int_1^\infty \fractpart x x^{-s - 1} \rd x}\)





Residue at Simple Pole














\(\ds \)

\(=\)







\(\ds 1\)









By Unsymmetric Functional Equation for Riemann Zeta Function:

$\map \zeta {1 - s} = 2^{1 - s} \pi^{-s} \map \cos {\dfrac 1 2 s \pi} \map \Gamma s \map \zeta s$
Therefore, for $\map \Re s \le 0$:














\(\ds \map \zeta s\)

\(=\)







\(\ds \map \zeta {1 - t}\)





for some $t$ with $\map \Re t \ge 1$














\(\ds \)

\(=\)







\(\ds 2^{1 - t} \pi^{-t} \map \cos {\frac 1 2 t \pi} \map \Gamma t \map \zeta t\)









By Complex Exponential Function is Entire, the factor $\ds 2^{1 - t} \pi^{-t}$ has no poles when $\map \Re t \ge 1$.
By Poles of Gamma Function, $\map \Gamma t$ has no poles when $\map \Re t \ge 1$.
By Complex Cosine Function is Entire, $\map \cos {\dfrac 1 2 t \pi}$ also has no poles in this region.
Therefore, the only possible pole is a simple pole at $t = 1$ from the factor $\map \zeta t$.
But at this point:

$\map \cos {\dfrac 1 2 t \pi} = \map \cos {\dfrac \pi 2} = 0$
which cancels the pole of $\zeta$.
$\blacksquare$





