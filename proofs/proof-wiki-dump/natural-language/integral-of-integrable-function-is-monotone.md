# 

Source: https://proofwiki.org/wiki/Integral_of_Integrable_Function_is_Monotone

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f, g: X \to \overline \R$ be $\mu$-integrable functions.
Suppose that $f \le g$ pointwise.

Then:

$\ds \int f \rd \mu \le \int g \rd \mu$


Proof
Since: 

$f \le g$
we have that $g - f$ is well-defined with: 

$g - f \ge 0$
From Integral of Integrable Function is Additive: Corollary 2, we have: 

$g - f$ is $\mu$-integrable
with:

$\ds \int \paren {g - f} \rd \mu = \int g \rd \mu - \int f \rd \mu$
Since: 

$\ds \int \paren {g - f} \rd \mu \ge 0$
we have:

$\ds \int g \rd \mu - \int f \rd \mu \ge 0$
This gives:

$\ds \int g \rd \mu \ge \int f \rd \mu$
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $10.4 \ \text{(iv)}$




