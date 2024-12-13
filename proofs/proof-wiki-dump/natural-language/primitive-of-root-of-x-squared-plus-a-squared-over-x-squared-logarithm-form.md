# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_x_squared_plus_a_squared_over_x_squared/Logarithm_Form



Theorem
$\ds \int \frac {\sqrt {x^2 + a^2} } {x^2} \rd x = \frac {-\sqrt {x^2 + a^2} } x + \map \ln {x + \sqrt {x^2 + a^2} } + C$


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





\(\ds \int \frac {\sqrt {x^2 + a^2} } {x^2} \rd x\)

\(=\)







\(\ds \int \frac {\sqrt {z + a^2} \rd z} {2 z \sqrt z}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \frac {\sqrt {z + a^2} \rd z} {z^{3/2} }\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac {-\sqrt {z + a^2} } {\frac 1 2 \sqrt z} + \frac 1 2 \int \frac {\d z} {\sqrt z \sqrt {z + a^2} } } + C\)





Primitive of $\dfrac {\sqrt {a x + b} } {x^m}$














\(\ds \)

\(=\)







\(\ds \frac {-\sqrt {x^2 + a^2} } x + \frac 1 2 \int \frac {2 x \rd x} {x \sqrt {x^2 + a^2} } + C\)





substituting for $z$














\(\ds \)

\(=\)







\(\ds \frac {-\sqrt {x^2 + a^2} } x + \int \frac {\d x} {\sqrt {x^2 + a^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {-\sqrt {x^2 + a^2} } x + \map \ln {x + \sqrt {x^2 + a^2} } + C\)





Primitive of $\dfrac 1 {\sqrt {x^2 + a^2} }$



$\blacksquare$


Also see
Primitive of $\dfrac {\sqrt {x^2 - a^2} } {x^2}$
Primitive of $\dfrac {\sqrt {a^2 - x^2} } {x^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 + a^2}$: $14.194$




