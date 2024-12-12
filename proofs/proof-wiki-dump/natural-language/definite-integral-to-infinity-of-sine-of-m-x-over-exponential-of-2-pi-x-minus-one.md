# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Sine_of_m_x_over_Exponential_of_2_Pi_x_minus_One

Theorem
$\ds \int_0^\infty \frac {\sin m x} {e^{2 \pi x} - 1} \rd x = \frac 1 4 \coth \frac m 2 - \frac 1 {2 m}$
where:

$m$ is a non-zero real number
$\coth$ is the hyperbolic cotangent function.


Proof
We have:















\(\ds \int_0^\infty \frac {\sin m x} {e^{2 \pi x} - 1} \rd x\)

\(=\)







\(\ds \int_0^\infty \frac {e^{-2 \pi x} \sin m x} {1 - e^{-2 \pi x} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty e^{-2 \pi x} \sin m x \paren {\sum_{k = 0}^\infty e^{-2 \pi k x} } \rd x\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \sum_{k = 0}^\infty \paren {\int_0^\infty e^{-x \paren {2 \pi \paren {1 + k} } } \sin m x \rd x}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k = 0}^\infty \frac m {\paren {2 \pi \paren {1 + k} }^2 + m^2}\)





Definite Integral to Infinity of $e^{-a x} \sin b x$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi} \sum_{k = 0}^\infty \frac {\frac m {2 \pi} } {\paren {k + 1}^2 + \paren {\frac m {2 \pi} }^2}\)





dividing by $\paren {2 \pi}^2$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi} \sum_{k = 1}^\infty \frac {\frac m {2 \pi} } {k^2 + \paren {\frac m {2 \pi} }^2}\)





shifting the index



By Mittag-Leffler Expansion for Hyperbolic Cotangent Function we have: 

$\ds \sum_{k \mathop = 1}^\infty \frac z {k^2 + z^2} = \frac \pi 2 \map \coth {\pi z} - \frac 1 {2 z}$
for all $z \in \C$ where $z$ is not an integer multiple of $i$. 
Since all variables concerned in this instance all real-valued, we can apply this identity. 
Setting $z = \dfrac m {2 \pi}$ in the above we obtain:














\(\ds \sum_{k = 1}^\infty \frac {\frac m {2 \pi} } {k^2 + \paren {\frac m {2 \pi} }^2}\)

\(=\)







\(\ds \frac \pi 2 \map \coth {\pi \times \frac m {2 \pi} } - \frac 1 {2 \times \frac m {2 \pi} }\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2 \coth \frac m 2 - \frac \pi m\)









So:

$\ds \int_0^\infty \frac {\sin m x} {e^{2 \pi x} - 1} \rd x = \frac 1 {2 \pi} \paren {\frac \pi 2 \coth \frac m 2 - \frac \pi m} = \frac 1 4 \coth \frac m 2 - \frac 1 {2 m}$
as required.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Exponential Functions: $15.83$






