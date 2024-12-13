# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_a_squared_minus_x_squared_cubed_over_x_cubed



Theorem
$\ds \int \frac {\paren {\sqrt {a^2 - x^2} }^3} {x^3} \rd x = \frac {-\paren {\sqrt {a^2 - x^2} }^3} {2 x^2} - \frac {3 \sqrt {a^2 - x^2} } 2 + \frac {3 a} 2 \map \ln {\frac {a + \sqrt {a^2 - x^2} } {\size x} } + C$


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





\(\ds \int \frac {\paren {\sqrt {a^2 - x^2} }^3} {x^3} \rd x\)

\(=\)







\(\ds \int \frac {\paren {\sqrt {a^2 - x^2} }^3} {2 z^2} \rd z\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac {-\paren {\sqrt {a^2 - z} }^3} z - \frac 3 2 \int \frac {\sqrt {a^2 - z} } z \rd z}\)





Primitive of $\dfrac {\paren {a x + b}^m} {\paren {p x + q}^n}$: Formulation 3














\(\ds \)

\(=\)







\(\ds \frac {-\paren {\sqrt {a^2 - x^2} }^3} {2 x^2} - \frac 3 2 \int \frac {\sqrt {a^2 - x^2} } x \rd x\)





substituting for $z$ and simplifying














\(\ds \)

\(=\)







\(\ds \frac {-\paren {\sqrt {a^2 - x^2} }^3} {2 x^2} - \frac 3 2 \paren {\sqrt {a^2 - x^2} - a \map \ln {\frac {a + \sqrt {a^2 - x^2} } {\size x} } } + C\)





Primitive of $\dfrac {\sqrt {a^2 - x^2} } x$














\(\ds \)

\(=\)







\(\ds \frac {-\paren {\sqrt {a^2 - x^2} }^3} {2 x^2} - \frac {3 \sqrt {a^2 - x^2} } 2 + \frac {3 a} 2 \map \ln {\frac {a + \sqrt {a^2 - x^2} } {\size x} } + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac {\paren {\sqrt {x^2 + a^2} }^3} {x^3}$
Primitive of $\dfrac {\paren {\sqrt {x^2 - a^2} }^3} {x^3}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a^2 - x^2}$: $14.264$




