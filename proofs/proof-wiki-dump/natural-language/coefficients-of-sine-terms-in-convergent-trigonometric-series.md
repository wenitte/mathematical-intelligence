# 

Source: https://proofwiki.org/wiki/Coefficients_of_Sine_Terms_in_Convergent_Trigonometric_Series



Theorem
Let $\map S x$ be a trigonometric series which converges to $\map f x$ on the interval $\openint \alpha {\alpha + 2 \pi}$:

$\map f x = \dfrac {a_0} 2 + \ds \sum_{m \mathop = 1}^\infty \left({a_m \cos m x + b_m \sin m x}\right)$

Then:

$\forall n \in \Z_{\ge 0}: b_n = \dfrac 1 \pi \ds \int_\alpha^{\alpha + 2 \pi} \map f x \sin n x \rd x$


Proof













\(\ds \map f x\)

\(=\)







\(\ds \dfrac {a_0} 2 + \sum_{m \mathop = 1}^\infty \paren {a_m \cos m x + b_m \sin m x}\)














\(\ds \leadsto \ \ \)





\(\ds \int_\alpha^{\alpha + 2 \pi} \map f x \sin n x \rd x\)

\(=\)







\(\ds \int_\alpha^{\alpha + 2 \pi} \paren {\dfrac {a_0} 2 + \sum_{m \mathop = 1}^\infty \paren {a_m \cos m x + b_m \sin m x} } \sin n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_\alpha^{\alpha + 2 \pi} \dfrac {a_0} 2 \sin n x \rd x + \sum_{m \mathop = 1}^\infty \paren {\int_\alpha^{\alpha + 2 \pi} \paren {a_m \cos m x + b_m \sin m x} \sin n x \rd x}\)




















\(\ds \)

\(=\)







\(\ds 0 + \sum_{m \mathop = 1}^\infty \paren {\int_\alpha^{\alpha + 2 \pi} \paren {a_m \cos m x + b_m \sin m x} \sin n x \rd x}\)





$\ds \int_\alpha^{\alpha + 2 \pi} \sin n x \rd x = 0$














\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 1}^\infty \paren {\int_\alpha^{\alpha + 2 \pi} a_m \cos m x \sin n x \rd x} + \sum_{m \mathop = 1}^\infty \paren {\int_\alpha^{\alpha + 2 \pi} b_m \sin m x \sin n x \rd x}\)




















\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 1}^\infty \paren {\int_\alpha^{\alpha + 2 \pi} b_m \sin m x \sin n x \rd x}\)





$\ds \int_\alpha^{\alpha + 2 \pi} \sin m x \cos n x \rd x = 0$














\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 1}^\infty b_m \pi \delta_{m n}\)





$\ds \int_\alpha^{\alpha + 2 \pi} \sin m x \sin n x \rd x = \begin{cases} 0 & : m \ne n \\ \pi & : m = n \end{cases}$














\(\ds \)

\(=\)







\(\ds b_n \pi\)





Definition of Kronecker Delta



$\blacksquare$


Also see
Coefficients of Cosine Terms in Convergent Trigonometric Series


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter One: $\S 2$. Fourier Series: $(5 c)$




