# 

Source: https://proofwiki.org/wiki/Fourier_Cosine_Coefficients_for_Odd_Function_over_Symmetric_Range



Theorem
Let $\map f x$ be an odd real function defined on the interval $\openint {-\lambda} \lambda$.
Let the Fourier series of $\map f x$ be expressed as:

$\ds \map f x \sim \dfrac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {a_n \cos \frac {n \pi x} \lambda + b_n \sin \frac {n \pi x} \lambda}$

Then for all $n \in \Z_{\ge 0}$:

$a_n = 0$


Proof
As suggested, let the Fourier series of $\map f x$ be expressed as:

$\ds \map f x \sim \dfrac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {a_n \cos \frac {n \pi x} \lambda + b_n \sin \frac {n \pi x} \lambda}$
By definition of Fourier series:














\(\ds a_n\)

\(=\)







\(\ds \frac 1 \lambda \int_{-\lambda}^{-\lambda + 2 \lambda} \map f x \cos \frac {n \pi x} \lambda \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \lambda \int_{-\lambda}^\lambda \map f x \cos \frac {n \pi x} \lambda \rd x\)










From Cosine Function is Even:

$\cos a = \map \cos {-a}$
for all $a$.
By Odd Function Times Even Function is Odd, $\map f x \cos \dfrac {n \pi x} \lambda$ is odd.
The result follows from the corollary to Definite Integral of Odd Function:

$\ds \dfrac 1 \lambda \int_{-\lambda}^\lambda \map f x \cos \frac {n \pi x} \lambda \rd x = 0$
$\blacksquare$


Also see
Fourier Sine Coefficients for Odd Function over Symmetric Range
Fourier Sine Coefficients for Even Function over Symmetric Range
Fourier Cosine Coefficients for Even Function over Symmetric Range


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter One: $\S 4$. Even and Odd Functions




