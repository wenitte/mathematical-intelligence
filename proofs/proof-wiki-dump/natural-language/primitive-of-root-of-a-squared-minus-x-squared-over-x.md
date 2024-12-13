# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_a_squared_minus_x_squared_over_x



Theorem
$\ds \int \frac {\sqrt {a^2 - x^2} } x \rd x = \sqrt {a^2 - x^2} - a \map \ln {\frac {a + \sqrt {a^2 - x^2} } x} + C$


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





\(\ds \int \frac {\sqrt {a^2 - x^2} } x \rd x\)

\(=\)







\(\ds \int \frac {\sqrt {a^2 - z} \rd z} {2 \sqrt z \sqrt z}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \frac {\sqrt {a^2 - z} \rd z} z\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {2 \sqrt {a^2 - z} + a^2 \int \frac {\d z} {z \sqrt {a^2 - z} } } + C\)





Primitive of $\dfrac {\sqrt {a x + b} } x$














\(\ds \)

\(=\)







\(\ds \sqrt {a^2 - x^2} + \frac {a^2} 2 \int \frac {2 x \rd x} {x^2 \sqrt {a^2 - x^2} } + C\)





substituting for $z$














\(\ds \)

\(=\)







\(\ds \sqrt {a^2 - x^2} + a^2 \int \frac {\d x} {x \sqrt {a^2 - x^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \sqrt {a^2 - x^2} - a^2 \paren {-\frac 1 a \map \ln {\frac {a + \sqrt {a^2 - x^2} } x} } + C\)





Primitive of $\dfrac 1 {x \sqrt {a^2 - x^2} }$














\(\ds \)

\(=\)







\(\ds \sqrt {a^2 - x^2} - a \map \ln {\frac {a + \sqrt {a^2 - x^2} } x} + C\)





simplification



$\blacksquare$


Also presented as
This result is also seen presented in the form:

$\ds \int \frac {\sqrt {a^2 - x^2} } x \rd x = \sqrt {a^2 - x^2} - a \ln \size {\frac {a + \sqrt {a^2 - x^2} } x} + C$


Also see
Primitive of $\dfrac {\sqrt {x^2 + a^2} } x$
Primitive of $\dfrac {\sqrt {x^2 - a^2} } x$
Cartesian Equation of Tractrix


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a^2 - x^2}$: $14.248$




