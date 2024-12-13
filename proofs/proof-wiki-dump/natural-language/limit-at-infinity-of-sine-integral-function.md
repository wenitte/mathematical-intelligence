# 

Source: https://proofwiki.org/wiki/Limit_at_Infinity_of_Sine_Integral_Function



Theorem
Let $\Si: \R \to \R$ denote the sine integral function.

Then $\Si$ has a (finite) limit at infinity:

$\ds \lim_{x \mathop \to +\infty} \map \Si x = \frac \pi 2$


Corollary
$\ds \lim_{x \mathop \to -\infty} \map \Si x = -\frac \pi 2$


Proof
The limit:

$\ds \lim_{x \mathop \to +\infty} \map \Si x = \lim_{x \mathop \to +\infty} \int_{t \mathop \to 0}^{t \mathop = x} \frac {\sin t} t \rd t$
is the Dirichlet Integral.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 35$: Sine Integral $\ds \map \Si x = \int_0^x \frac {\sin u} u \rd u$: $35.13$




