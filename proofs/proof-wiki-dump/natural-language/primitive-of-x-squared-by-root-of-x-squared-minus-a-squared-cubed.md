# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_by_Root_of_x_squared_minus_a_squared_cubed



Theorem
$\ds \int x^2 \paren {\sqrt {x^2 - a^2} }^3 \rd x = \frac {x \paren {\sqrt {x^2 - a^2} }^5} 6 + \frac {a^2 x \paren {\sqrt {x^2 - a^2} }^3} {24} - \frac {a^4 x \sqrt {x^2 - a^2} } {16} + \frac {a^6} {16} \ln \size {x + \sqrt {x^2 - a^2} } + C$
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





\(\ds \int x^2 \paren {\sqrt {x^2 - a^2} }^3 \rd x\)

\(=\)







\(\ds \int \frac {\sqrt z \paren {z - a^2}^{3/2} } 2 \rd z\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac {\sqrt z \paren {z - a^2}^{5/2} } 6 + \frac {a^2} {12} \int \frac {\paren {z - a^2}^{3/2} } {\sqrt z} \rd z + C\)





Primitive of $\paren {p x + q}^n \sqrt{a x + b}$














\(\ds \)

\(=\)







\(\ds \frac {x \paren {x^2 - a^2}^{5/2} } 6 + \frac {a^2} 6 \int \paren {x^2 - a^2}^{3/2} \rd x + C\)





substituting for $z$ and simplifying














\(\ds \)

\(=\)







\(\ds \frac {x \paren {x^2 - a^2}^{5/2} } 6\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {a^2} 6 \paren {\frac {x \paren {\sqrt {x^2 - a^2} }^3} 4 - \frac {3 a^2 x \sqrt {x^2 - a^2} } 8 + \frac {3 a^4} 8 \ln \size {x + \sqrt {x^2 - a^2} } } + C\)





Primitive of $\paren {\sqrt {x^2 - a^2} }^3$














\(\ds \)

\(=\)







\(\ds \frac {x \paren {x^2 - a^2}^{5/2} } 6 + \frac {a^2 x \paren {\sqrt {x^2 - a^2} }^3} {24}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {a^4 x \sqrt {x^2 - a^2} } {16} + \frac {a^6} {16} \ln \size {x + \sqrt {x^2 - a^2} } + C\)





simplifying



$\blacksquare$


Also see
Primitive of $x^2 \paren {\sqrt {x^2 + a^2} }^3$
Primitive of $x^2 \paren {\sqrt {a^2 - z^2} }^3$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 - a^2}$: $14.232$




