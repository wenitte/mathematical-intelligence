# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_x_squared_plus_a_squared_over_x_cubed



Theorem
$\ds \int \frac {\sqrt {x^2 + a^2} } {x^3} \rd x = \frac {-\sqrt {x^2 + a^2} } {2 x^2} - \frac 1 {2 a} \map \ln {\frac {a + \sqrt {x^2 + a^2} } x} + C$


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





\(\ds \int \frac {\sqrt {x^2 + a^2} } {x^3} \rd x\)

\(=\)







\(\ds \int \frac {\sqrt {z + a^2} \rd z} {2 z^{3/2} \sqrt z}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \frac {\sqrt {z + a^2} \rd z} {z^2}\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac {-\sqrt {z + a^2} } z + \frac 1 2 \int \frac {\d z} {z \sqrt {z + a^2} } } + C\)





Primitive of $\dfrac {\sqrt {a x + b} } {x^m}$














\(\ds \)

\(=\)







\(\ds \frac {-\sqrt {x^2 + a^2} } {2 x^2} + \frac 1 4 \int \frac {2 x \rd x} {x^2 \sqrt {x^2 + a^2} } + C\)





substituting for $z$














\(\ds \)

\(=\)







\(\ds \frac {-\sqrt {x^2 + a^2} } {2 x^2} + \frac 1 2 \int \frac {\d x} {x \sqrt {x^2 + a^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {-\sqrt {x^2 + a^2} } {2 x^2} + \frac 1 2 \paren {-\frac 1 a \map \ln {\frac {a + \sqrt {x^2 + a^2} } x} } + C\)





Primitive of $\dfrac 1 {x \sqrt {x^2 + a^2} }$














\(\ds \)

\(=\)







\(\ds \frac {-\sqrt {x^2 + a^2} } {2 x^2} - \frac 1 {2 a} \map \ln {\frac {a + \sqrt {x^2 + a^2} } x} + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac {\sqrt {x^2 - a^2} } {x^3}$
Primitive of $\dfrac {\sqrt {a^2 - x^2} } {x^3}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 + a^2}$: $14.195$




