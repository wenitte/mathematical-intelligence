# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Power_of_Root_of_a_x_%2B_b

Theorem
$\ds \int x \paren {\sqrt {a x + b} }^m \rd x = \frac {2 \paren {\sqrt {a x + b} }^{m + 4} } {a^2 \paren {m + 4} } - \frac {2 b \paren {\sqrt {a x + b} }^{m + 2} } {a^2 \paren {m + 2} } + C$


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














\(\ds \int x \paren {\sqrt {a x + b} }^m \rd x\)

\(=\)







\(\ds \frac 2 a \int \frac {u^2 - b} a u^{m + 1} \rd x\)





Primitive of Function of $a x + b$














\(\ds \)

\(=\)







\(\ds \frac 2 {a^2} \int u^{m + 3} \rd x - \frac {2 b} {a^2} \int u^{m + 1} \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 2 {a^2} \frac {u^{m + 4} } {m + 4} - \frac {2 b} {a^2} \frac {u^{m + 2} } {m + 2} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {2 \paren {\sqrt {a x + b} }^{m + 4} } {a^2 \paren {m + 4} } - \frac {2 b \paren {\sqrt {a x + b} }^{m + 2} } {a^2 \paren {m + 2} } + C\)





substituting for $u$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$: $14.100$




