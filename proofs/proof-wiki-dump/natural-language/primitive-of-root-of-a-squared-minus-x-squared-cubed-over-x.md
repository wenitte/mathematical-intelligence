# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_a_squared_minus_x_squared_cubed_over_x



Theorem
$\ds \int \frac {\paren {\sqrt {a^2 - x^2} }^3} x \rd x = \frac {\paren {\sqrt {a^2 - x^2} }^3} 3 + a^2 \sqrt {a^2 - x^2} - a^3 \map \ln {\frac {a + \sqrt {a^2 - x^2} } {\size x} } + C$


Proof
Let:














\(\ds z\)

\(=\)







\(\ds x^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 2 x\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\paren {\sqrt {a^2 - x^2} }^3} x \rd x\)

\(=\)







\(\ds \int \frac {\paren {\sqrt {a^2 - z} }^3} {2 z} \rd z\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac {\paren {\sqrt {a^2 - z} }^3} 3 + \frac {a^2} 2 \int \frac {\sqrt {a^2 - z} } z \rd z\)





Primitive of $\dfrac {\paren {\sqrt {a x + b} }^m} x$














\(\ds \)

\(=\)







\(\ds \frac {\paren {\sqrt {a^2 - z} }^3} 3 + \frac {a^2} 2 \paren {2 \sqrt {a^2 - z} + a^2 \int \frac {\d z} {z \sqrt {a^2 - z} } }\)





Primitive of $\dfrac {\sqrt {a x + b} } x$














\(\ds \)

\(=\)







\(\ds \frac {\paren {\sqrt {a^2 - x^2} }^3} 3 + a^2 \sqrt {a^2 - x^2} + a^4 \int \frac {\d x} {x \sqrt {a^2 - x^2} }\)





substituting for $z$ and simplifying














\(\ds \)

\(=\)







\(\ds \frac {\paren {\sqrt {a^2 - x^2} }^3} 3 + a^2 \sqrt {a^2 - x^2} - a^3 \map \ln {\frac {a + \sqrt {a^2 - x^2} } {\size x} } + C\)





Primitive of $\dfrac 1 {x \sqrt {a^2 - x^2} }$



$\blacksquare$


Also see
Primitive of $\dfrac {\paren {\sqrt {x^2 + a^2} }^3} x$
Primitive of $\dfrac {\paren {\sqrt {x^2 - a^2} }^3} x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a^2 - x^2}$: $14.262$




