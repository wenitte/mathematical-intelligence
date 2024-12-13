# 

Source: https://proofwiki.org/wiki/Primitive_of_x_cubed_by_Root_of_x_squared_minus_a_squared_cubed



Theorem
$\ds \int x^3 \paren {\sqrt {x^2 - a^2} }^3 \rd x = \frac {\paren {\sqrt {x^2 - a^2} }^7} 7 + \frac {a^2 \paren {\sqrt {x^2 - a^2} }^5} 5 + C$
for $\size x \ge a$.


Proof













\(\ds \int x^3 \paren {\sqrt {x^2 - a^2} }^3 \rd x\)

\(=\)







\(\ds \int x \paren {x^2} \paren {\sqrt {x^2 - a^2} }^3 \rd x\)




















\(\ds \)

\(=\)







\(\ds \int x \paren {x^2 - a^2 + a^2} \paren {\sqrt {x^2 - a^2} }^3 \rd x\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \int x \paren {x^2 - a^2} \paren {\sqrt {x^2 - a^2} }^3 \rd x + a^2 \int x \paren {\sqrt {x^2 - a^2} }^3 \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \int x \paren {\sqrt {x^2 - a^2} }^5 \rd x + a^2 \int x \paren {\sqrt {x^2 - a^2} }^3 \rd x\)





simplifying




Let:














\(\ds z\)

\(=\)







\(\ds x^2 - a^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 2 x\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \int x \paren {\sqrt {x^2 - a^2} }^5 \rd x + a^2 \int x \paren {\sqrt {x^2 - a^2} }^3 \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\sqrt z z^{5/2} } {2 \sqrt z} \rd z + a^2 \int \frac {\sqrt z z^{3/2} } {2 \sqrt z} \rd z\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int z^{5/2} \rd z + \frac {a^2} 2 \int z^{3/2} \rd z\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 2 \frac {z^{7/2} } {7/2} + \frac {a^2} 2 \frac {z^{5/2} } {5/2} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {z^{7/2} } 7 + a^2 \frac {z^{5/2} } 5 + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {\paren {\sqrt {x^2 - a^2} }^7} 7 + \frac {a^2 \paren {\sqrt {x^2 - a^2} }^5} 5 + C\)





substituting for $z$



$\blacksquare$


Also see
Primitive of $x^3 \paren {\sqrt {x^2 + a^2} }^3$
Primitive of $x^3 \paren {\sqrt {a^2 - z^2} }^3$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 - a^2}$: $14.233$




