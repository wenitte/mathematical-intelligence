# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_Root_of_a_x_%2B_b

Theorem
$\ds \int \frac {x^2 \rd x} {\sqrt {a x + b} } = \frac {2 \paren {3 a^2 x^2 - 4 a b x + 8 b^2} \sqrt {a x + b} } {15 a^3}$


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \sqrt {a x + b}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \frac {u^2 - b} a\)










Thus:














\(\ds \map F {\sqrt {a x + b} }\)

\(=\)







\(\ds \frac {x^2} {\sqrt {a x + b} }\)














\(\ds \leadsto \ \ \)





\(\ds \map F u\)

\(=\)







\(\ds \paren {\frac {u^2 - b} a}^2 \frac 1 u\)










Then:














\(\ds \int \frac {x^2 \rd x} {\sqrt {a x + b} }\)

\(=\)







\(\ds \frac 2 a \int u \paren {\frac {u^2 - b} a}^2 \frac 1 u \rd u\)





Primitive of Function of $\sqrt {a x + b}$














\(\ds \)

\(=\)







\(\ds \frac 2 {a^3} \int \paren {u^4 - 2 b u^2 + b^2} \rd u\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 2 {a^3} \paren {\frac {u^5} 5 - \frac {2 b u^3} 3 + b^2 u} + C\)





Primitive of Power and Primitive of Constant














\(\ds \)

\(=\)







\(\ds \frac 2 {a^3} \paren {\frac {\paren {a x + b}^2} 5 - \frac {2 b \paren {a x + b} } 3 + b^2} \sqrt {a x + b} + C\)





substituting for $u$ and extracting common factors














\(\ds \)

\(=\)







\(\ds \frac 2 {15 a^2} \paren {3 a^2 x^2 + 6 a b x + 3 b^2 - 10 a b x - 10 b^2 + 15 b^2} \sqrt {a x + b} + C\)





multiplying out and combining fractions














\(\ds \)

\(=\)







\(\ds \frac {2 \paren {3 a^2 x^2 - 4 a b x + 8 b^2} \sqrt {a x + b} } {15 a^3} + C\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$: $14.86$




