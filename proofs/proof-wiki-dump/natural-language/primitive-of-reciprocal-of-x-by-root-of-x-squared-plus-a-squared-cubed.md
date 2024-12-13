# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_Root_of_x_squared_plus_a_squared_cubed



Theorem
$\ds \int \frac {\d x} {x \paren {\sqrt {x^2 + a^2} }^3} = \frac 1 {a^2 \sqrt {x^2 + a^2} } - \frac 1 {a^3} \map \ln {\frac {a + \sqrt {x^2 + a^2} } x} + C$


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





\(\ds \int \frac {\d x} {x \paren {\sqrt {x^2 + a^2} }^3}\)

\(=\)







\(\ds \int \frac {\d z} {2 \sqrt z \sqrt z \paren {\sqrt {z + a^2} }^3}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \frac {\d z} {z \paren {\sqrt {z + a^2} }^3}\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac 2 {a^2 \sqrt {z + a^2} } + \frac 1 {a^2} \int \frac {\d z} {z \sqrt {z + a^2} } } + C\)





Primitive of $\dfrac 1 {x \paren {\sqrt{a x + b} }^m }$














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2 \sqrt {z + a^2} } + \frac 1 {2 a^2} \int \frac {\d z} {z \sqrt {z + a^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2 \sqrt {x^2 + a^2} } + \frac 1 {2 a^2} \int \frac {2 x \rd x} {x^2 \sqrt {x^2 + a^2} } + C\)





substituting for $z$














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2 \sqrt {x^2 + a^2} } + \frac 1 {a^2} \int \frac {\d x} {x \sqrt {x^2 + a^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2 \sqrt {x^2 + a^2} } - \frac 1 {a^3} \map \ln {\frac {a + \sqrt {x^2 + a^2} } x} + C\)





Primitive of $\dfrac 1 {x \sqrt {x^2 + a^2} }$



$\blacksquare$


Also see
Primitive of $\dfrac 1 {x \paren {\sqrt {x^2 - a^2} }^3}$
Primitive of $\dfrac 1 {x \paren {\sqrt {a^2 - x^2} }^3}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 + a^2}$: $14.200$




