# 

Source: https://proofwiki.org/wiki/Integral_of_Reciprocal_is_Divergent/Unbounded_Above

Theorem
$\ds \int_1^n \frac {\d x} x \to +\infty$ as $n \to + \infty$

Thus the improper integral $\ds \int_1^{\to +\infty} \frac {\d x} x$ does not exist.

Proof 1
From Harmonic Series is Divergent, we have that $\ds \sum_{n \mathop = 1}^\infty \frac 1 n$ diverges to $+\infty$.
Thus from the Cauchy Integral Test:

$\ds \int_1^n \frac {\d x} x \to +\infty$
diverges.
$\blacksquare$


Proof 2
From the definition of natural logarithm:

$\ds \ln x = \int_1^x \dfrac 1 t \rd t$
The result follows from Logarithm Tends to Infinity.
$\blacksquare$





