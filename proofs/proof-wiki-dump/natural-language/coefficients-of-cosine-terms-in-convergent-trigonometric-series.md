# 

Source: https://proofwiki.org/wiki/Coefficients_of_Cosine_Terms_in_Convergent_Trigonometric_Series



Theorem
Let $\map S x$ be a trigonometric series which converges to $\map f x$ on the interval $\openint \alpha {\alpha + 2 \pi}$:

$\map f x = \dfrac {a_0} 2 + \ds \sum_{m \mathop = 1}^\infty \paren {a_m \cos m x + b_m \sin m x}$

Then:

$\forall n \in \Z_{\ge 0}: a_n = \dfrac 1 \pi \ds \int_\alpha^{\alpha + 2 \pi} \map f x \cos n x \rd x$


Proof













\(\ds \map f x\)

\(=\)







\(\ds \dfrac {a_0} 2 + \sum_{m \mathop = 1}^\infty \paren {a_m \cos m x + b_m \sin m x}\)














\(\ds \leadsto \ \ \)





\(\ds \int_\alpha^{\alpha + 2 \pi} \map f x \cos n x \rd x\)

\(=\)







\(\ds \int_\alpha^{\alpha + 2 \pi} \paren {\dfrac {a_0} 2 + \sum_{m \mathop = 1}^\infty \paren {a_m \cos m x + b_m \sin m x} } \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_\alpha^{\alpha + 2 \pi} \dfrac {a_0} 2 \cos n x \rd x\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \sum_{m \mathop = 1}^\infty \paren {\int_\alpha^{\alpha + 2 \pi} \paren {a_m \cos m x + b_m \sin m x} \cos n x \rd x}\)




















\(\ds \)

\(=\)







\(\ds \frac {a_0} 2 2 \pi \delta_{n 0} + \sum_{m \mathop = 1}^\infty \paren {\int_\alpha^{\alpha + 2 \pi} \paren {a_m \cos m x + b_m \sin m x} \cos n x \rd x}\)





$\ds \int_\alpha^{\alpha + 2 \pi} \cos n x \rd x = \begin {cases} 0 & : n \ne 0 \\ 2 \pi & : n = 0 \end {cases}$














\(\ds \)

\(=\)







\(\ds a_0 \pi \delta_{n 0} + \sum_{m \mathop = 1}^\infty \paren {\int_\alpha^{\alpha + 2 \pi} a_m \cos m x \cos n x \rd x}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \sum_{m \mathop = 1}^\infty \paren {\int_\alpha^{\alpha + 2 \pi} b_m \sin m x \cos n x \rd x}\)




















\(\ds \)

\(=\)







\(\ds a_0 \pi \delta_{n 0} + \sum_{m \mathop = 1}^\infty \paren {\int_\alpha^{\alpha + 2 \pi} a_m \cos m x \cos n x \rd x}\)





$\ds \int_\alpha^{\alpha + 2 \pi} \sin m x \cos n x \rd x = 0$














\(\ds \)

\(=\)







\(\ds a_0 \pi \delta_{n 0} + \sum_{m \mathop = 1}^\infty a_m \pi \delta_{m n}\)





$\ds \int_\alpha^{\alpha + 2 \pi} \cos m x \cos n x \rd x = \begin {cases} 0 & : m \ne n \\ \pi & : m = n \end {cases}$




Thus when $n = 0$ we have:

$\ds \int_\alpha^{\alpha + 2 \pi} \map f x \rd x = \int_\alpha^{\alpha + 2 \pi} \map f x \cos 0 x \rd x = a_0 \pi$
and when $n \ne 0$ we have:

$\ds \int_\alpha^{\alpha + 2 \pi} \map f x \cos n x \rd x = a_n \pi$
Hence the result.
$\blacksquare$


Also see
Coefficients of Sine Terms in Convergent Trigonometric Series


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter One: $\S 2$. Fourier Series: $(5 a)$, $(5 b)$




