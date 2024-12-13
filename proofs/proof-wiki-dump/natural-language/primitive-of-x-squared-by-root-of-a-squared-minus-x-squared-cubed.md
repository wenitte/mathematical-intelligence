# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_by_Root_of_a_squared_minus_x_squared_cubed



Theorem
$\ds \int x^2 \paren {\sqrt {a^2 - x^2} }^3 \rd x = \frac {-x \paren {\sqrt {a^2 - x^2} }^5} 6 + \frac {a^2 x \paren {\sqrt {a^2 - x^2} }^3} {24} + \frac {a^4 x \sqrt {a^2 - x^2} } {16} + \frac {a^6} {16} \arcsin \frac x a + C$


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





\(\ds \int x^2 \paren {\sqrt {a^2 - x^2} }^3 \rd x\)

\(=\)







\(\ds \int \frac {\sqrt z \paren {a^2 - z}^{3/2} } 2 \rd z\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac {\sqrt z \paren {a^2 - z}^{5/2} } {-6} + \frac {-a^2} {-12} \int \frac {\paren {a^2 - z}^{3/2} } {\sqrt z} \rd z + C\)





Primitive of $\paren {p x + q}^n \sqrt{a x + b}$














\(\ds \)

\(=\)







\(\ds \frac {-x \paren {a^2 - x^2}^{5/2} } 6 + \frac {a^2} 6 \int \paren {a^2 - x^2}^{3/2} \rd x + C\)





substituting for $z$ and simplifying














\(\ds \)

\(=\)







\(\ds \frac {-x \paren {a^2 - x^2}^{5/2} } 6\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {a^2} 6 \paren {\frac {x \paren {\sqrt {a^2 - x^2} }^3} 4 + \frac {3 a^2 x \sqrt {a^2 - x^2} } 8 + \frac {3 a^4} 8 \arcsin \frac x a} + C\)





Primitive of $\paren {\sqrt {a^2 - x^2} }^3$














\(\ds \)

\(=\)







\(\ds \frac {-x \paren {a^2 - x^2}^{5/2} } 6 + \frac {a^2 x \paren {\sqrt {a^2 - x^2} }^3} {24}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {a^4 x \sqrt {a^2 - x^2} } {16} + \frac {a^6} {16} \arcsin \frac x a + C\)





simplifying



$\blacksquare$


Also see
Primitive of $x^2 \paren {\sqrt {x^2 + a^2} }^3$
Primitive of $x^2 \paren {\sqrt {x^2 - a^2} }^3$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a^2 - x^2}$: $14.260$




