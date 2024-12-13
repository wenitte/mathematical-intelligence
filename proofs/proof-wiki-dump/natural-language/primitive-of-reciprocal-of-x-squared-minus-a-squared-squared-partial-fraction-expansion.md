# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_minus_a_squared_squared/Partial_Fraction_Expansion

Lemma for Primitive of Reciprocal of $\paren {x^2 - a^2}^2$
$\dfrac 1 {\paren {x^2 - a^2}^2} \equiv \dfrac 1 {4 a^3 \paren {x + a} } - \dfrac 1 {4 a^3 \paren {x - a} } + \dfrac 1 {4 a^2 \paren {x + a}^2} + \dfrac 1 {4 a^2 \paren {x - a}^2}$


Proof













\(\ds \dfrac 1 {\paren {x^2 - a^2}^2}\)

\(=\)







\(\ds \dfrac 1 {\paren {x + a}^2 \paren {x - a}^2}\)





Difference of Two Squares














\(\ds \)

\(\equiv\)







\(\ds \dfrac A {x + a} + \dfrac B {\paren {x + a}^2} + \dfrac C {x - a} + \dfrac D {\paren {x - a}^2}\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\equiv\)







\(\ds A \paren {x^2 - a^2} \paren {x - a} + B \paren {x - a}^2 + C \paren {x^2 - a^2} \paren {x + a} + D \paren {x + a}^2\)





multiplying through by $\paren {x^2 - a^2}^2$




\(\text {(1)}: \quad\)









\(\ds \)

\(\equiv\)







\(\ds A x^3 - A a x^2 - A a^2 x + A a^3 + B x^2 - 2 B a x + B a^2\)





multiplying out














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds C x^3 + C a x^2 - C a^2 x - C a^3 + D x^2 + 2 D a x + D a^2\)










Setting $x = a$ in $(1)$:














\(\ds D \paren {2 a}^2\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds D\)

\(=\)







\(\ds \frac 1 {4 a^2}\)










Setting $x = -a$ in $(1)$:














\(\ds B \paren {-2 a}^2\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds \frac 1 {4 a^2}\)










Equating coefficients of $x^3$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds A + C\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds -C\)










Equating coefficients of $x^2$ in $(1)$:














\(\ds - A a + C a + B + D\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds - A a + C a + \frac 1 {4 a^2} + \frac 1 {4 a^2}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds C a + C a + \frac 1 {2 a^2}\)

\(=\)







\(\ds 0\)





as $A = - C$








\(\ds \leadsto \ \ \)





\(\ds 2 C\)

\(=\)







\(\ds \frac {-1} {2 a^3}\)














\(\ds \leadsto \ \ \)





\(\ds C\)

\(=\)







\(\ds \frac {-1} {4 a^3}\)














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







\(\ds \frac {-1} {4 a^3}\)




















\(\ds D\)

\(=\)







\(\ds \frac 1 {4 a^2}\)









Hence the result.
$\blacksquare$





