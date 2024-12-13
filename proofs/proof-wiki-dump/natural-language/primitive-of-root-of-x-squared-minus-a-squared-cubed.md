# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_x_squared_minus_a_squared_cubed



Theorem
$\ds \int \paren {\sqrt {x^2 - a^2} }^3 \rd x = \frac {x \paren {\sqrt {x^2 - a^2} }^3} 4 - \frac {3 a^2 x \sqrt {x^2 - a^2} } 8 + \frac {3 a^4} 8 \ln \size {x + \sqrt {x^2 - a^2} } + C$
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





\(\ds \int \paren {\sqrt {x^2 - a^2} }^3 \rd x\)

\(=\)







\(\ds \int \frac {\paren {\sqrt {z - a^2} }^3} {2 \sqrt z} \rd x\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac {\sqrt z \paren {\sqrt {z - a^2} }^3} 4 - \frac {3 a^2} 8 \int \frac {\sqrt {z - a^2} } {\sqrt z} \rd x + C\)





Primitive of $\dfrac {\paren {p x + q}^n} {\sqrt{a x + b} }$














\(\ds \)

\(=\)







\(\ds \frac {\sqrt z \paren {\sqrt {z - a^2} }^3} 4 - \frac {3 a^2} 8 \paren {\sqrt z \sqrt {z - a^2} - \frac {a^2} 2 \int \frac {\d x} {\sqrt z \sqrt {z - a^2} } } + C\)





Primitive of $\dfrac {\sqrt {p x + q} } {\sqrt{a x + b} }$














\(\ds \)

\(=\)







\(\ds \frac {x \paren {\sqrt {x^2 - a^2} }^3} 4 - \frac {3 a^2} 8 x \sqrt {x^2 + a^2} + \frac {3 a^4} 8 \int \frac {\d x} {\sqrt {x^2 - a^2} } + C\)





substituting for $z$ and simplifying














\(\ds \)

\(=\)







\(\ds \frac {x \paren {\sqrt {x^2 - a^2} }^3} 4 - \frac {3 a^2 x \sqrt {x^2 - a^2} } 8 + \frac {3 a^4} 8 \ln \size {x + \sqrt {x^2 - a^2} } + C\)





Primitive of $\dfrac 1 {\sqrt {x^2 - a^2} }$



$\blacksquare$


Also see
Primitive of $\paren {\sqrt {x^2 + a^2} }^3$
Primitive of $\paren {\sqrt {a^2 - z^2} }^3$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 - a^2}$: $14.230$




