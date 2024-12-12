# 

Source: https://proofwiki.org/wiki/Bessel_Function_of_the_First_Kind_of_Negative_Integer_Order

Theorem
Let $\map {J_n} x$ denote the Bessel function of the first kind of order $n$, where $n$ is a positive integer.

Then:

$\map {J_{-n} } x = \paren {-1}^n \map {J_n} x$


Proof













\(\ds \map {J_{-n} } x\)

\(=\)







\(\ds \dfrac 1 \pi \int_0^\pi \map \cos {-n \theta - x \sin \theta} \rd \theta\)





Integral Representation of Bessel Function of the First Kind/Integer Order














\(\ds \)

\(=\)







\(\ds \dfrac 1 \pi \int_0^\pi \map \cos {-n \paren {\pi - \theta} - x \sin \paren {\pi - \theta} } \rd \paren {\pi - \theta}\)





substitution of $\pi - \theta$














\(\ds \)

\(=\)







\(\ds -\dfrac 1 \pi \int_\pi^0 \map \cos {n \theta - x \sin \theta - n \pi} \rd \theta\)





Sine of Supplementary Angle














\(\ds \)

\(=\)







\(\ds \dfrac 1 \pi \int_0^\pi \map \cos {n \theta - x \sin \theta - n \pi} \rd \theta\)





Reversal of Limits of Definite Integral














\(\ds \)

\(=\)







\(\ds \paren {-1}^{-n} \dfrac 1 \pi \int_0^\pi \map \cos {n \theta - x \sin \theta} \rd \theta\)





Cosine of Angle plus Integer Multiple of Pi














\(\ds \)

\(=\)







\(\ds \paren {-1}^n \map {J_n} x\)





Integral Representation of Bessel Function of the First Kind/Integer Order



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Special Functions: $\text {II}$. Bessel functions: $1$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 24$: Bessel Functions: Bessel Function of the First Kind of Order $n$: $24.4$




