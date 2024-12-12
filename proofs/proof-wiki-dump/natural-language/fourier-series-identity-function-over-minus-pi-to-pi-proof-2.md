# 

Source: https://proofwiki.org/wiki/Fourier_Series/Identity_Function_over_Minus_Pi_to_Pi/Proof_2

Theorem
For $x \in \openint {-\pi} \pi$:

$\ds x = 2 \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } n \sin n x$


Proof
By Fourier Series for Identity Function over Symmetric Range, the function $f: \openint {-\lambda} \lambda \to \R$ defined as:

$\forall x \in \openint {-\lambda} \lambda: \map f x = x$
has a Fourier series:

$\map f x \sim \dfrac {2 \lambda} \pi \ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } n \sin \frac {n \pi x} \lambda$

Substituting for $\lambda = \pi$ gives:

$\ds x = 2 \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } n \sin n x$
as required. 
$\blacksquare$





