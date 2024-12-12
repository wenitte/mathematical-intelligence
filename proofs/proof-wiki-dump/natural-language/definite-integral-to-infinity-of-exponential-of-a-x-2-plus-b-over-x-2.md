# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Exponential_of_-(a_x%5E2_plus_b_over_x%5E2)

Theorem
$\ds \int_0^\infty \map \exp {-\paren {a x^2 + \frac b {x^2} } } \rd x = \frac 1 2 \sqrt {\frac \pi a} \map \exp {-2 \sqrt {a b} }$
where $a$ and $b$ are strictly positive real numbers. 


Proof













\(\ds \int_0^\infty \map \exp {-\paren {a x^2 + \frac b {x^2} } } \rd x\)

\(=\)







\(\ds \int_0^\infty \map \exp {-a \paren {x^2 + \frac b {a x^2} } } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \map \exp {-a \paren {\paren {x - \frac 1 x \sqrt {\frac b a} }^2 + 2 \sqrt {\frac b a} } } \rd x\)





Completing the Square














\(\ds \)

\(=\)







\(\ds \map \exp {-2 \sqrt {a b} } \int_0^\infty \map \exp {-a \paren {x - \frac 1 x \sqrt {\frac b a} }^2} \rd x\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \exp {-2 \sqrt {a b} } \int_{-\infty}^\infty \map \exp {-a \paren {x - \frac 1 x \sqrt {\frac b a} }^2} \rd x\)





Definite Integral of Even Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \exp {-2 \sqrt {a b} } \int_{-\infty}^\infty \map \exp {-a u^2} \rd u\)





Glasser's Master Theorem














\(\ds \)

\(=\)







\(\ds \map \exp {-2 \sqrt {a b} } \int_0^\infty \map \exp {-a u^2} \rd u\)





Definite Integral of Even Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \sqrt {\frac \pi a} \map \exp {-2 \sqrt {a b} }\)





Definite Integral to Infinity of $\map \exp {-a x^2}$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Exponential Functions: $15.78$




