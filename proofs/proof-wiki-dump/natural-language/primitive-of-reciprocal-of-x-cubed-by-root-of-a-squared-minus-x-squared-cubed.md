# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_cubed_by_Root_of_a_squared_minus_x_squared_cubed



Theorem
$\ds \int \frac {\d x} {x^3 \paren {\sqrt {a^2 - x^2} }^3} = \frac {-1} {2 a^2 x^2 \sqrt {a^2 - x^2} } + \frac 3 {2 a^4 \sqrt {a^2 - x^2} } - \frac 3 {2 a^5} \map \ln {\frac {a + \sqrt {a^2 - x^2} } {\size x} } + C$


Proof













\(\ds \int \frac {\d x} {x^3 \paren {\sqrt {a^2 - x^2} }^3}\)

\(=\)







\(\ds \int \frac {a^2 \rd x} {a^2 x^3 \paren {\sqrt {a^2 - x^2} }^3}\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\paren {a^2 - x^2 + x^2} \rd x} {a^2 x^3 \paren {\sqrt {a^2 - x^2} }^3}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \frac {\paren {a^2 - x^2} \rd x} {x^3 \paren {\sqrt {a^2 - x^2} }^3} + \frac 1 {a^2} \int \frac {x^2 \rd x} {x^3 \paren {\sqrt {a^2 - x^2} }^3}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \frac {\d x} {x^3 \sqrt {a^2 - x^2} } + \frac 1 {a^2} \int \frac {\d x} {x \paren {\sqrt {a^2 - x^2} }^3}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \paren {\frac {-\sqrt {a^2 - x^2} } {2 a^2 x^2} - \frac 1 {2 a^3} \map \ln {\frac {a + \sqrt {a^2 - x^2} } {\size x} } } + \frac 1 {a^2} \int \frac {\d x} {x \paren {\sqrt {x^2 - a^2} }^3} + C\)





Primitive of $\dfrac 1 {x^3 \sqrt {a^2 - x^2} }$














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \paren {\frac {-\sqrt {a^2 - x^2} } {2 a^2 x^2} - \frac 1 {2 a^3} \map \ln {\frac {a + \sqrt {a^2 - x^2} } {\size x} } }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac 1 {a^2} \paren {\frac 1 {a^2 \sqrt {a^2 - x^2} } - \frac 1 {a^3} \map \ln {\frac {a + \sqrt {a^2 - x^2} } {\size x} } } + C\)





Primitive of $\dfrac 1 {x \paren {\sqrt {a^2 - x^2} }^3}$














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a^2 x^2 \sqrt {a^2 - x^2} } + \frac 3 {2 a^4 \sqrt {a^2 - x^2} } - \frac 3 {2 a^5} \map \ln {\frac {a + \sqrt {a^2 - x^2} } {\size x} } + C\)





simplification



$\blacksquare$


Also see
Primitive of $\dfrac 1 {x^3 \paren {\sqrt {x^2 + a^2} }^3}$
Primitive of $\dfrac 1 {x^3 \paren {\sqrt {x^2 - a^2} }^3}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a^2 - x^2}$: $14.257$




