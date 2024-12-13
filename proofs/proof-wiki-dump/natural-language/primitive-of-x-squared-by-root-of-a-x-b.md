# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_by_Root_of_a_x_%2B_b

Theorem
$\ds \int x^2 \sqrt {a x + b} \rd x = \frac {2 \paren {15 a^2 x^2 - 12 a b x + 8 b^2} } {105 a^3} \sqrt {\paren {a x + b}^3} + C$


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







\(\ds \frac 2 a \int \paren {\frac {u^2 - b} a}^2 u^2 \rd u\)





Primitive of Function of $\sqrt {a x + b}$














\(\ds \)

\(=\)







\(\ds \frac 2 {a^3} \paren {\int u^6 \rd u - 2 b \int u^4 \rd u + b^2 \int u^2 \rd u}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 2 {a^3} \paren {\frac {u^7} 7 - 2 b \frac {u^5} 5 + b^2 \frac {u^3} 3} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 2 {a^3} \paren {\frac {15 u^4 - 42 b u^2 + 35 b^2} {105} } u^3 + C\)





common denominator and $u^3$ as a factor














\(\ds \)

\(=\)







\(\ds \frac 2 {a^3} \paren {\frac {15 \paren {a x + b}^2 - 42 b \paren {a x + b} + 35 b^2} {105} } \sqrt {\paren {a x + b}^3} + C\)





substituting for $u$














\(\ds \)

\(=\)







\(\ds \frac {2 \paren {15 a^2 x^2 + 30 a b x + 15 b^2 - 42 a b x - 42 b^2 + 35 b^2} } {105 a^3} \sqrt {\paren {a x + b}^3} + C\)





multiplying out














\(\ds \)

\(=\)







\(\ds \frac {2 \paren {15 a^2 x^2 - 12 a b x + 8 b^2} } {105 a^3} \sqrt {\paren {a x + b}^3} + C\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$: $14.91$




