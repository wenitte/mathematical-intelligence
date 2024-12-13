# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Root_of_x_squared_minus_a_squared



Theorem
$\ds \int x \sqrt {x^2 - a^2} \rd x = \frac {\paren {\sqrt {x^2 - a^2} }^3} 3 + C$
for $\size x \ge a$.


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





\(\ds \int x \sqrt {x^2 - a^2} \rd x\)

\(=\)







\(\ds \int \frac {\sqrt z \sqrt {z - a^2} \rd z} {2 \sqrt z}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \sqrt {z - a^2} \rd z\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \frac {2 \paren {\sqrt {z - a^2} }^3} 3 + C\)





Primitive of $\sqrt {a x + b}$














\(\ds \)

\(=\)







\(\ds \frac {\paren {\sqrt {x^2 - a^2} }^3} 3 + C\)





substituting for $z$ and simplifying



$\blacksquare$


Also see
Primitive of $x \sqrt {x^2 + a^2}$
Primitive of $x \sqrt {a^2 - x^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 - a^2}$: $14.217$




