# 

Source: https://proofwiki.org/wiki/Integral_of_Integrable_Function_over_Measurable_Set_is_Well-Defined

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space. 
Let $E \in \Sigma$. 
Let $f: X \to \overline \R$ be a $\mu$-integrable function.

Then the $\mu$-integral of $f$ over $E$:

$\ds \int_E f \rd \mu = \int f \cdot \chi_E \rd \mu$
is well-defined.


Proof
We need to show that $f \cdot \chi_E$ is $\mu$-integrable, so that its $\mu$-integral is well-understood.
Since $f$ is $\mu$-integrable, it is certainly $\Sigma$-measurable.
From Characteristic Function Measurable iff Set Measurable, we have that: 

$\chi_E$ is $\Sigma$-measurable.
Then by Pointwise Product of Measurable Functions is Measurable, we have: 

$f \cdot \chi_E$ is $\Sigma$-measurable.
We now want to verify that: 

$\ds \int \paren {f \cdot \chi_E}^+ \rd \mu < \infty$
and:

$\ds \int \paren {f \cdot \chi_E}^- \rd \mu < \infty$

Note that from the definition of a characteristic function:

$\map {\chi_E} x \in \set {0, 1}$
so, for $x \in X$:

$\map {f \cdot \chi_E} x \ge 0$ if and only if $\map {\chi_E} x = 0$ or $\map {\chi_E} x = 1$ and $\map f x \ge 0$
and:

$\map {f \cdot \chi_E} x \le 0$ if and only if $\map {\chi_E} x = 0$ or $\map {\chi_E} x = 1$ and $\map f x \le 0$
So, we have: 

$\paren {f \cdot \chi_E}^+ = f^+ \cdot \chi_E$
and:

$\paren {f \cdot \chi_E}^- = f^- \cdot \chi_E$
We can see that: 

$f^+ \cdot \chi_E \le f^+$
and:

$f^- \cdot \chi_E \le f^-$
Since $f$ is $\mu$-integrable, we have: 

$\ds \int f^+ \rd \mu < \infty$
and:

$\ds \int f^- \rd \mu < \infty$
Then, from Integral of Positive Measurable Function is Monotone, we have: 

$\ds \int f^+ \cdot \chi_E \rd \mu \le \int f^+ \rd \mu < \infty$
and:

$\ds \int f^- \cdot \chi_E \rd \mu \le \int f^- \rd \mu < \infty$
This gives:

$\ds \int \paren {f \cdot \chi_E}^+ \rd \mu < \infty$
and:

$\ds \int \paren {f \cdot \chi_E}^- \rd \mu < \infty$
as required.
$\blacksquare$





