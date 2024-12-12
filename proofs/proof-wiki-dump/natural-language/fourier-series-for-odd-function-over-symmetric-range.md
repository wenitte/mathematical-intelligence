# 

Source: https://proofwiki.org/wiki/Fourier_Series_for_Odd_Function_over_Symmetric_Range



Theorem
Let $\map f x$ be an odd real function defined on the interval $\openint {-\lambda} \lambda$.

Then the Fourier series of $\map f x$ can be expressed as:

$\map f x \sim \ds \sum_{n \mathop = 1}^\infty b_n \sin \frac {n \pi x} \lambda$

where for all $n \in \Z_{> 0}$:

$b_n = \ds \frac 2 \lambda \int_0^\lambda \map f x \sin \frac {n \pi x} \lambda \rd x$


Proof
By definition of the Fourier series for $f$:

$\map f x \sim \dfrac {a_0} 2 + \ds \sum_{n \mathop = 1}^\infty \paren {a_n \cos \frac {n \pi x} \lambda + b_n \sin \frac {n \pi x} \lambda}$

From Fourier Cosine Coefficients for Odd Function over Symmetric Range:

$a_n = 0$
for all $n \in \Z_{\ge 0}$.

From Fourier Sine Coefficients for Odd Function over Symmetric Range

$b_n = \ds \frac 2 \lambda \int_0^\lambda \map f x \sin \frac {n \pi x} \lambda \rd x$
for all $n \in \Z_{> 0}$:
$\blacksquare$


Also see
Fourier Series for Even Function over Symmetric Range


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter One: $\S 4$. Even and Odd Functions: $(8)$




