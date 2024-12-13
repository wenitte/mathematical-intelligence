# 

Source: https://proofwiki.org/wiki/Primitive_of_x_cubed_by_Root_of_x_squared_plus_a_squared



Theorem
$\ds \int x^3 \sqrt {x^2 + a^2} \rd x = \frac {\paren {\sqrt {x^2 + a^2} }^5} 5 - \frac {a^2 \paren {\sqrt {x^2 + a^2} }^3} 3 + C$


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





\(\ds \int x^3 \sqrt {x^2 + a^2} \rd x\)

\(=\)







\(\ds \int \frac {z^{3/2} \sqrt {z + a^2} \rd z} {2 \sqrt z}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int z \sqrt {z + a^2} \rd z\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac {2 \paren {3 z - 2 a^2} } {15} \paren {\sqrt {z + a^2} }^3} + C\)





Primitive of $x \sqrt {\paren {a x + b} }$














\(\ds \)

\(=\)







\(\ds \frac {3 z - 2 a^2} {15} \paren {\sqrt {z + a^2} }^3 + C\)





simplification














\(\ds \)

\(=\)







\(\ds \frac {3 x^2 - 2 a^2} {15} \paren {\sqrt {x^2 + a^2} }^3 + C\)





substituting for $z$














\(\ds \)

\(=\)







\(\ds \frac {3 x^2 + 3 a^2 - 5 a^2} {15} \paren {\sqrt {x^2 + a^2} }^3 + C\)




















\(\ds \)

\(=\)







\(\ds \frac {3 \paren {x^2 + a^2} \paren {\sqrt {a^2 - x^2} }^3 - 5 a^2 \paren {\sqrt {a^2 - x^2} }^3} {15} + C\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {\sqrt {x^2 + a^2} }^5} 5 - \frac {a^2 \paren {\sqrt {x^2 + a^2} }^3} 3 + C\)





simplification



$\blacksquare$


Also see
Primitive of $x^3 \sqrt {x^2 - a^2}$
Primitive of $x^3 \sqrt {a^2 - x^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 + a^2}$: $14.192$




