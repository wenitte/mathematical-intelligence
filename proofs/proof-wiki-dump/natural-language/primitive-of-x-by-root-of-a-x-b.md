# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Root_of_a_x_%2B_b

Theorem
$\ds \int x \sqrt {a x + b} \rd x = \frac {2 \paren {3 a x - 2 b} } {15 a^2} \sqrt {\paren {a x + b}^3}$


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \sqrt {a x + b}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \frac {u^2 - b} a\)










Then:














\(\ds \int x \sqrt {a x + b} \rd x\)

\(=\)







\(\ds \frac 2 a \int \frac {u^2 - b} a u^2 \rd u\)





Primitive of Function of $\sqrt {a x + b}$














\(\ds \)

\(=\)







\(\ds \frac 2 {a^2} \int u^4 \rd u - \frac {2 b} {a^2} \int u^2 \rd u\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 2 {a^2} \frac {u^5} 5 - \frac {2 b} {a^2} \frac {u^3} 3 + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {6 u^5 - 10 b u^3} {15 a^2} + C\)





common denominator














\(\ds \)

\(=\)







\(\ds \frac {\paren {6 u^2 - 10 b} u^3} {15 a^2} + C\)





extracting $u^3$ as a factor














\(\ds \)

\(=\)







\(\ds \frac {6 \paren {a x + b} - 10 b} {15 a^2} \sqrt {\paren {a x + b}^3} + C\)





substituting for $u$














\(\ds \)

\(=\)







\(\ds \frac {2 \paren {3 a x - 2 b} } {15 a^2} \sqrt {\paren {a x + b}^3} + C\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$: $14.90$




