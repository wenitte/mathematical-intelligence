# 

Source: https://proofwiki.org/wiki/Primitive_of_x_cubed_over_Root_of_a_squared_minus_x_squared_cubed



Theorem
$\ds \int \frac {x^3 \rd x} {\paren {\sqrt {a^2 - x^2} }^3} = \sqrt {a^2 - x^2} + \frac {a^2} {\sqrt {a^2 - x^2} } + C$


Proof













\(\ds \int \frac {x^3 \rd x} {\paren {\sqrt {a^2 - x^2} }^3}\)

\(=\)







\(\ds \int \frac {x \paren {x^2} \rd x} {\paren {\sqrt {a^2 - x^2} }^3}\)




















\(\ds \)

\(=\)







\(\ds \int \frac {x \paren {x^2 - a^2 + a^2} \rd x} {\paren {\sqrt {a^2 - x^2} }^3}\)




















\(\ds \)

\(=\)







\(\ds -\int \frac {x \paren {a^2 - x^2} \rd x} {\paren {\sqrt {a^2 - x^2} }^3} + a^2 \int \frac {x \rd x} {\paren {\sqrt {a^2 - x^2} }^3}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds -\int \frac {x \rd x} {\sqrt {a^2 - x^2} } + a^2 \int \frac {x \rd x} {\paren {\sqrt {a^2 - x^2} }^3}\)





simplifying














\(\ds \)

\(=\)







\(\ds \sqrt {a^2 - x^2} + a^2 \int \frac {x \rd x} {\paren {\sqrt {a^2 - x^2} }^3} + C\)





Primitive of $\dfrac x {\sqrt {a^2 - x^2} }$














\(\ds \)

\(=\)







\(\ds \sqrt {a^2 - x^2} + a^2 \frac 1 {\sqrt {a^2 - x^2} } + C\)





Primitive of $\dfrac x {\paren {\sqrt {a^2 - x^2} }^3}$














\(\ds \)

\(=\)







\(\ds \sqrt {a^2 - x^2} + \frac {a^2} {\sqrt {a^2 - x^2} } + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac {x^3} {\paren {\sqrt {x^2 + a^2} }^3}$
Primitive of $\dfrac {x^3} {\paren {\sqrt {x^2 - a^2} }^3}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a^2 - x^2}$: $14.254$




