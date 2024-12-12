# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Power_of_x_over_Hyperbolic_Sine_of_a_x

Theorem
$\ds \int_0^\infty \frac {x^n} {\sinh a x} \rd x = \frac {2^{n + 1} - 1} {2^n a^{n + 1} } \map \Gamma {n + 1} \map \zeta {n + 1}$
where:

$a$ and $n$ are positive real numbers
$\Gamma$ denotes the gamma function
$\zeta$ denotes the Riemann zeta function.


Proof













\(\ds \int_0^\infty \frac {x^n} {\sinh a x} \rd x\)

\(=\)







\(\ds \frac 1 a \int_0^\infty \frac {\paren {\frac u a}^n} {\sinh u} \rd u\)





substituting $u = a x$














\(\ds \)

\(=\)







\(\ds \frac 2 {a^{n + 1} } \int_0^\infty \frac {u^n e^{-u} } {1 - e^{-2 u} } \rd u\)





Definition of Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \frac 2 {a^{n + 1} } \int_0^\infty u^n e^{-u} \paren {\sum_{N \mathop = 0}^\infty \paren {e^{-2 u} }^N} \rd u\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \frac 2 {a^{n + 1} } \sum_{N \mathop = 0}^\infty \int_0^\infty u^n e^{-\paren {2 N + 1} u} \rd u\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \frac 2 {a^{n + 1} } \map \Gamma {n + 1} \sum_{N \mathop = 0}^\infty \frac 1 {\paren {2 N + 1}^{n + 1} }\)





Laplace Transform of Real Power



We have: 














\(\ds \sum_{N \mathop = 1}^\infty \frac 1 {N^{n + 1} }\)

\(=\)







\(\ds \map \zeta {n + 1}\)





Definition of Riemann Zeta Function














\(\ds \)

\(=\)







\(\ds \sum_{N \mathop = 1}^\infty \frac 1 {\paren {2 N}^{n + 1} } + \sum_{N \mathop = 0}^\infty \frac 1 {\paren {2 N + 1}^{n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2^{n + 1} } \sum_{N \mathop = 1}^\infty \frac 1 {N^{n + 1} } + \sum_{N \mathop = 0}^\infty \frac 1 {\paren {2 N + 1}^{n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2^{n + 1} } \map \zeta {n + 1} + \sum_{N \mathop = 0}^\infty \frac 1 {\paren {2 N + 1}^{n + 1} }\)





Definition of Riemann Zeta Function



So: 














\(\ds \sum_{N \mathop = 0}^\infty \frac 1 {\paren {2 N + 1}^{n + 1} }\)

\(=\)







\(\ds \paren {1 - \frac 1 {2^{n + 1} } } \map \zeta {n + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {2^{n + 1} - 1} {2^{n + 1} } \map \zeta {n + 1}\)









giving: 

$\ds \int_0^\infty \frac {x^n} {\sinh a x} \rd x = \frac {2^{n + 1} - 1} {2^n a^{n + 1} } \map \Gamma {n + 1} \map \zeta {n + 1}$
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Hyperbolic Functions: $15.115$




