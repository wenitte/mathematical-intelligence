# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_squared_minus_x_squared_squared/Partial_Fraction_Expansion

Lemma for Primitive of Reciprocal of $\paren {a^2 - x^2}^2$
$\dfrac 1 {\paren {a^2 - x^2}^2} \equiv \dfrac 1 {4 a^2} \paren {\dfrac 1 {\paren {a - x}^2} + \dfrac 1 {\paren {a + x}^2} + \dfrac 1 {a \paren {a + x} } + \dfrac 1 {a \paren {a - x} } }$


Proof













\(\ds \dfrac 1 {\paren {a^2 - x^2}^2}\)

\(=\)







\(\ds \dfrac 1 {\paren {a + x}^2 \paren {a - x}^2}\)





Difference of Two Squares














\(\ds \)

\(\equiv\)







\(\ds \dfrac A {a + x} + \dfrac B {\paren {a + x}^2} + \dfrac C {a - x} + \dfrac D {\paren {a - x}^2}\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\equiv\)







\(\ds A \paren {a^2 - x^2} \paren {a - x} + B \paren {a - x}^2 + C \paren {a^2 - x^2} \paren {a + x} + D \paren {a + x}^2\)





multiplying through by $\paren {a^2 - x^2}^2$




\(\text {(1)}: \quad\)









\(\ds \)

\(\equiv\)







\(\ds A a^3 - A a^2 x - A a x^2 + A x^3 + B a^2 - 2 B a x + B x^2\)





multiplying out














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds C a^3 + C a^2 x - C a x^2 - C x^3 + D a^2 + 2 D a x + D x^2\)










Setting $x = a$ in $(1)$:














\(\ds D \paren {2 a}^2\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds D\)

\(=\)







\(\ds \frac 1 {4 a^2}\)










Setting $x = -a$ in $(1)$:














\(\ds B \paren {2 a}^2\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds \frac 1 {4 a^2}\)










Equating coefficients of $x^3$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds A - C\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds C\)










Equating coefficients of $x^2$ in $(1)$:














\(\ds - A a - C a + B + D\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds - A a - C a + \frac 1 {4 a^2} + \frac 1 {4 a^2}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds -C a - C a + \frac 1 {2 a^2}\)

\(=\)







\(\ds 0\)





as $A = C$








\(\ds \leadsto \ \ \)





\(\ds 2 C\)

\(=\)







\(\ds \frac 1 {2 a^3}\)














\(\ds \leadsto \ \ \)





\(\ds C\)

\(=\)







\(\ds \frac 1 {4 a^3}\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac 1 {4 a^3}\)










Summarising:














\(\ds A\)

\(=\)







\(\ds \frac 1 {4 a^3}\)




















\(\ds B\)

\(=\)







\(\ds \frac 1 {4 a^2}\)




















\(\ds C\)

\(=\)







\(\ds \frac 1 {4 a^3}\)




















\(\ds D\)

\(=\)







\(\ds \frac 1 {4 a^2}\)









Hence the result.
$\blacksquare$





