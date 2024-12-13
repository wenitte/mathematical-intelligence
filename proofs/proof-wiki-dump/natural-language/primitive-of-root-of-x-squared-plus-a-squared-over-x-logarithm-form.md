# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_x_squared_plus_a_squared_over_x/Logarithm_Form



Theorem
$\ds \int \frac {\sqrt {x^2 + a^2} } x \rd x = \sqrt {x^2 + a^2} - a \map \ln {\frac {a + \sqrt {x^2 + a^2} } a} + C$


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





\(\ds \int \frac {\sqrt {x^2 + a^2} } x \rd x\)

\(=\)







\(\ds \int \frac {\sqrt {z + a^2} \rd z} {2 \sqrt z \sqrt z}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \frac {\sqrt {z + a^2} \rd z} z\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {2 \sqrt {z + a^2} + a^2 \int \frac {\d z} {z \sqrt {z + a^2} } } + C\)





Primitive of $\dfrac {\sqrt {a x + b} } x$














\(\ds \)

\(=\)







\(\ds \sqrt {x^2 + a^2} + \frac {a^2} 2 \int \frac {2 x \rd x} {x^2 \sqrt {x^2 + a^2} } + C\)





substituting for $z$














\(\ds \)

\(=\)







\(\ds \sqrt {x^2 + a^2} + a^2 \int \frac {\d x} {x \sqrt {x^2 + a^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \sqrt {x^2 + a^2} + a^2 \paren {-\frac 1 a \map \ln {\frac {a + \sqrt {x^2 + a^2} } x} } + C\)





Primitive of $\dfrac 1 {x \sqrt {x^2 + a^2} }$














\(\ds \)

\(=\)







\(\ds \sqrt {x^2 + a^2} - a \map \ln {\frac {a + \sqrt {x^2 + a^2} } a} + C\)





simplification



$\blacksquare$


Also see
Primitive of $\dfrac {\sqrt {x^2 - a^2} } x$
Primitive of $\dfrac {\sqrt {a^2 - x^2} } x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 + a^2}$: $14.193$




