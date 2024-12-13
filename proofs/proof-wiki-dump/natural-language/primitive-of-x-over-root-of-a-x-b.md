# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_Root_of_a_x_%2B_b

Theorem
$\ds \int \frac {x \rd x} {\sqrt {a x + b} } = \frac {2 \paren {a x - 2 b} \sqrt {a x + b} } {3 a^2}$


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \sqrt {a x + b}\)




















\(\ds x\)

\(=\)







\(\ds \frac {u^2 - b} a\)










Thus:














\(\ds \map F {\sqrt {a x + b} }\)

\(=\)







\(\ds \frac x {\sqrt {a x + b} }\)














\(\ds \leadsto \ \ \)





\(\ds \map F u\)

\(=\)







\(\ds \paren {\frac {u^2 - b} a} \frac 1 u\)










Then:














\(\ds \int \frac {x \rd x} {\sqrt {a x + b} }\)

\(=\)







\(\ds \frac 2 a \int u \paren {\frac {u^2 - b} a} \frac 1 u \rd u\)





Primitive of Function of $\sqrt {a x + b}$














\(\ds \)

\(=\)







\(\ds \frac 2 {a^2} \int \paren {u^2 - b} \rd u\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 2 {a^2} \paren {\frac {u^3} 3 - b u} + C\)





Primitive of Power and Primitive of Constant














\(\ds \)

\(=\)







\(\ds \frac 2 {a^2} \paren {\frac {\paren {a x + b} \sqrt {a x + b} } 3 - b \sqrt {a x + b} } + C\)





substituting for $u$














\(\ds \)

\(=\)







\(\ds \frac 2 {3 a^2} \paren {\paren {a x + b} - 3 b} \sqrt {a x + b} + C\)





extracting common factors














\(\ds \)

\(=\)







\(\ds \frac {2 \paren {a x - 2 b} \sqrt {a x + b} } {3 a^2} + C\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$: $14.85$




