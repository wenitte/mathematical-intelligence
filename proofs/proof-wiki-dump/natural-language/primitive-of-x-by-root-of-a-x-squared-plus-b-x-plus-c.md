# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Root_of_a_x_squared_plus_b_x_plus_c



Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int x \sqrt {a x^2 + b x + c} \rd x = \frac {\paren {\sqrt {a x^2 + b x + c} }^3} {3 a} - \frac {b \paren {2 a x + b} \sqrt {a x^2 + b x + c} } {8 a^2} - \frac {b \paren {4 a c - b^2} } {16 a^2} \int \frac {\d x} {\sqrt {a x^2 + b x + c} }$


Proof













\(\ds \)

\(\)







\(\ds \int x \sqrt {a x^2 + b x + c} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {\sqrt {a x^2 + b x + c} }^3} {3 a} - \frac b {2 a} \int \sqrt {a x^2 + b x + c} \rd x\)





Lemma for Primitive of $x \sqrt {a x^2 + b x + c}$














\(\ds \)

\(=\)







\(\ds \frac {\paren {\sqrt {a x^2 + b x + c} }^3} {3 a}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b {2 a} \paren {\frac {\paren {2 a x + b} \sqrt {a x^2 + b x + c} } {4 a} + \frac {4 a c - b^2} {8 a} \int \frac {\d x} {\sqrt {a x^2 + b x + c} } }\)





Primitive of $\sqrt {a x^2 + b x + c}$














\(\ds \)

\(=\)







\(\ds \frac {\paren {\sqrt {a x^2 + b x + c} }^3} {3 a}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {b \paren {2 a x + b} \sqrt {a x^2 + b x + c} } {8 a^2} - \frac {b \paren {4 a c - b^2} } {16 a^2} \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac 1 {\sqrt {a x^2 + b x + c} }$
For $a = 0$, see Primitive of $x \sqrt {a x + b}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x^2 + b x + c}$: $14.286$




