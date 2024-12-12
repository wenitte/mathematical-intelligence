# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Cube_of_Sine_x_over_x_Cubed

Theorem
$\ds \int_0^\infty \frac {\sin^3 x} {x^3} \rd x = \frac {3 \pi} 8$


Proof
Let: 

$\ds \map I \alpha = \int_0^\infty \frac {\map {\sin^3} {\alpha x} } {x^3} \rd x$
for positive real parameter $\alpha$.
We have: 














\(\ds \map I 0\)

\(=\)







\(\ds \int_0^\infty \frac {\map {\sin^3} {0 x} } {x^3} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac 0 {x^3} \rd x\)





Sine of Zero is Zero














\(\ds \)

\(=\)







\(\ds 0\)









We aim to evaluate explicitly: 

$\ds \int_0^\infty \frac {\sin^3 x} {x^3} \rd x = \map I 1$
Differentiating with respect to $\alpha$ we have: 














\(\ds \map {I'} \alpha\)

\(=\)







\(\ds \frac \d {\d \alpha} \int_0^\infty \frac {\map {\sin^3} {\alpha x} } {x^3} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac \partial {\partial \alpha} \paren {\frac {\map {\sin^3} {\alpha x} } {x^3} } \rd x\)





Definite Integral of Partial Derivative














\(\ds \)

\(=\)







\(\ds \frac 1 4 \int_0^\infty \frac \partial {\partial \alpha} \paren {\frac {3 \map \sin {\alpha x} - \map \sin {3 \alpha x} } {x^3} } \rd x\)





Cube of Sine














\(\ds \)

\(=\)







\(\ds \frac 3 4 \int_0^\infty \frac {\map \cos {\alpha x} - \map \cos {3 \alpha x} } {x^2} \rd x\)





Derivative of Cosine Function, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac 3 4 \times \frac \pi 2 \paren {3 \alpha - \alpha}\)





Definite Integral to Infinity of $\dfrac {\cos p x - \cos q x} {x^2}$














\(\ds \)

\(=\)







\(\ds \frac {3 \alpha \pi} 4\)









We therefore have: 














\(\ds \int_0^1 \map {I'} \alpha \rd \alpha\)

\(=\)







\(\ds \intlimits {\frac {3 \alpha^2 \pi} 8} 0 1\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {3 \pi} 8\)









By Fundamental Theorem of Calculus: Second Part, we also have: 

$\ds \int_0^1 \map {I'} \alpha \rd \alpha = \map I 1 - \map I 0 = \map I 1$
giving: 

$\ds \int_0^\infty \frac {\sin^3 x} {x^3} \rd x = \frac {3 \pi} 8$
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.58$




