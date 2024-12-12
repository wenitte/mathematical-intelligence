# 

Source: https://proofwiki.org/wiki/Fourier_Series/Absolute_Value_of_x_over_Minus_Pi_to_Pi/Proof_1

Theorem
For $x \in \openint {-\pi} \pi$:

$\ds \size x = \frac \pi 2 - \frac 4 \pi \sum_{n \mathop = 1}^\infty \frac {\map \cos {2 n - 1} x} {\paren {2 n - 1}^2}$


Proof
By definition, the absolute value function is an even function:

$\size {-x} = x = \size x$
Thus by Fourier Series for Even Function over Symmetric Range, $\size x$ can be expressed as:

$\ds \size x \sim \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty a_n \cos n x$

where for all $n \in \Z_{\ge 0}$:

$a_n = \ds \frac 2 \pi \int_0^\pi \size x \cos n x \rd x$
On the real interval $\openint 0 \pi$:

$\size x = x$
and so for all $n \in \Z_{\ge 0}$:

$a_n = \ds \frac 2 \pi \int_0^\pi x \cos n x \rd x$

Thus Half-Range Fourier Cosine Series for Identity Function over $\openint 0 \pi$ can be applied directly.
So for $x \in \openint {-\pi} \pi$:

$\ds \size x = \frac \pi 2 - \frac 4 \pi \sum_{n \mathop = 1}^\infty \frac {\map \cos {2 n - 1}  x} {\paren {2 n - 1}^2}$
$\blacksquare$





