# 

Source: https://proofwiki.org/wiki/Fourier_Series/Absolute_Value_of_x_over_Minus_Pi_to_Pi/Proof_2

Theorem
For $x \in \openint {-\pi} \pi$:

$\ds \size x = \frac \pi 2 - \frac 4 \pi \sum_{n \mathop = 1}^\infty \frac {\map \cos {2 n - 1} x} {\paren {2 n - 1}^2}$


Proof
By Fourier Series for Absolute Value Function over Symmetric Range, the function $f: \openint {-\lambda} \lambda \to \R$ defined as:

$\forall x \in \openint {-\lambda} \lambda: \map f x = \size x$
has a Fourier series:

$\map f x \sim \dfrac \lambda 2 - \ds \dfrac {4 \lambda} {\pi^2} \sum_{n \mathop = 0}^\infty \frac 1 {\paren {2 n + 1}^2} \cos \dfrac {\paren {2 n + 1} \pi x} \lambda$

Substituting for $\lambda = \pi$ gives:

$\size x = \dfrac \pi 2 - \ds \dfrac 4 \pi \sum_{n \mathop = 1}^\infty \frac {\map \cos {2 n - 1}  x} {\paren {2 n - 1}^2}$
as required. 
$\blacksquare$





