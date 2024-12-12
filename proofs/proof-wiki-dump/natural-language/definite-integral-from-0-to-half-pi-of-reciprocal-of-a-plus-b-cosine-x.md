# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Half_Pi_of_Reciprocal_of_a_plus_b_Cosine_x

Theorem
$\ds \int_0^{\pi/2} \frac 1 {a + b \cos x} \rd x = \frac 1 {\sqrt {a^2 - b^2} } \map \arccos {\frac b a}$
where $a$ and $b$ are real numbers with $a > b > 0$. 


Proof
Since $a > b > 0$, we have $a^2 > b^2$.
So:














\(\ds \int_0^{\pi/2} \frac 1 {a + b \cos x} \rd x\)

\(=\)







\(\ds \intlimits {\frac 2 {\sqrt {a^2 - b^2} } \map \arctan {\sqrt {\frac {a - b} {a + b} } \tan \frac x 2} } 0 1\)





Primitive of $\dfrac 1 {p + q \cos x}$














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {a^2 - b^2} } \paren {2 \map \arctan {\sqrt {\frac {a - b} {a + b} } } }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {a^2 - b^2} } \paren {2 \map \arctan {\sqrt {\frac {1 - \frac b a} {1 + \frac b a} } } }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {a^2 - b^2} } \map \arccos {\frac b a}\)





Arccosine in terms of Arctangent



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.45$




