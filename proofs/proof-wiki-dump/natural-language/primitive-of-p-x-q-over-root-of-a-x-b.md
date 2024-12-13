# 

Source: https://proofwiki.org/wiki/Primitive_of_p_x_%2B_q_over_Root_of_a_x_%2B_b

Theorem
$\ds \int \frac {p x + q} {\sqrt {a x + b} } \rd x = \frac {2 \paren {a p x + 3 a q - 2 b p} } {3 a^2} \sqrt{a x + b}$


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \sqrt{a x + b}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \frac {u^2 - b} a\)









Then:














\(\ds \int \frac {p x + q} {\sqrt {a x + b} } \rd x\)

\(=\)







\(\ds \int \paren {p \paren {\frac {u^2 - b} a} + q} \frac {2 u} {a u} \rd x\)





Primitive of Function of $\sqrt {a x + b}$














\(\ds \)

\(=\)







\(\ds \frac 2 {a^2} \int \paren {p u^2 - b p + a q} \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 2 {a^2} \paren {\frac {p u^3} 3 - b p z + a q z} + C\)





Primitive of Power




Note that at this point we can assume $u > 0$, otherwise $\sqrt {a x + b}$ would not have been defined.












\(\ds \)

\(=\)







\(\ds \frac 2 {a^2} \paren {\frac {p \paren {\sqrt {a x + b} }^3} 3 - b p \sqrt {a x + b} + a q \sqrt {a x + b} } + C\)





substituting for $u$














\(\ds \)

\(=\)







\(\ds \frac {2 \paren {a p x - 2 b p + 3 a q} } {3 a^2} \sqrt {a x + b} + C\)





simplification



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$ and $p x + q$: $14.113$




