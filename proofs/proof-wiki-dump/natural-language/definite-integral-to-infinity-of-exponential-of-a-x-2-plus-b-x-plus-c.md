# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Exponential_of_-(a_x%5E2_plus_b_x_plus_c)

Theorem
$\ds \int_0^\infty \map \exp {-\paren {a x^2 + b x + c} } \rd x = \frac 1 2 \sqrt {\frac \pi a} \map \exp {\frac {b^2 - 4 a c} {4 a} } \map \erfc {\frac b {2 \sqrt a} }$
where:

$\erfc$ denotes the complementary error function
$a$, $b$ and $c$ are real numbers with $a > 0$.


Proof













\(\ds \int_0^\infty \map \exp {-\paren {a x^2 + bx + c} } \rd x\)

\(=\)







\(\ds \int_0^\infty \map \exp {-a \paren {x + \frac b {2 a} }^2 + \frac {b^2} {4 a} - c} \rd x\)





Completing the Square














\(\ds \)

\(=\)







\(\ds \map \exp {\frac {b^2 - 4 a c} {4 a} } \int_0^\infty \map \exp {-a \paren {x + \frac b {2 a} }^2} \rd x\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \map \exp {\frac {b^2 - 4 a c} {4 a} } \int_0^\infty \map \exp {-\paren {\sqrt a x + \frac b {2 \sqrt a} }^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt a} \map \exp {\frac {b^2 - 4 a c} {4 a} } \int_{\frac b {2 \sqrt a} }^\infty \map \exp {-u^2} \rd u\)





substituting $u = \sqrt a x + \dfrac b {2 \sqrt a}$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \sqrt {\frac \pi a} \map \exp {\frac {b^2 - 4 a c} {4 a} } \paren {\frac 2 {\sqrt \pi} \int_{\frac b {2 \sqrt a} }^\infty \map \exp {-u^2} \rd u}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \sqrt {\frac \pi a} \map \exp {\frac {b^2 - 4 a c} {4 a} } \map \erfc {\frac b {2 \sqrt a} }\)





Definition of Complementary Error Function



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Exponential Functions: $15.74$




