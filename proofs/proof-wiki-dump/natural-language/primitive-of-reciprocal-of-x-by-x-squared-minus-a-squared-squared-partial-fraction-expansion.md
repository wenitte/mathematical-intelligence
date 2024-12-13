# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_x_squared_minus_a_squared_squared/Partial_Fraction_Expansion

Lemma for Primitive of Reciprocal of $x \paren {x^2 - a^2}^2$
$\dfrac 1 {x \paren {x^2 - a^2}^2} \equiv \dfrac 1 {a^4 x} + \dfrac {-x} {a^4 \paren {x^2 - a^2} } + \dfrac x {a^2 \paren {x^2 - a^2}^2}$


Proof













\(\ds \frac 1 {x \paren {x^2 - a^2}^2}\)

\(=\)







\(\ds \frac 1 {x \paren {x + a}^2 \paren {x - a}^2}\)





Difference of Two Squares














\(\ds \)

\(\equiv\)







\(\ds \frac A {x + a} + \frac B {\paren {x + a}^2} + \frac C {x - a} + \frac D {\paren {x - a}^2} + \frac E x\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\equiv\)







\(\ds A x \paren {x^2 - a^2} \paren {x - a} + B x \paren {x - a}^2\)





multiplying through by $x \paren {x^2 - a^2}^2$














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds C x \paren {x^2 - a^2} \paren {x + a} + D x \paren {x + a}^2 + E \paren {x^2 - a^2}^2\)










\(\text {(1)}: \quad\)









\(\ds \)

\(\equiv\)







\(\ds A x^4 - A a x^3 - A a^2 x^2 + A a^3 x + B x^3 - 2 B a x^2 + B a^2 x\)





multiplying out














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds C x^4 + C a x^3 - C a^2 x^2 - C a^3 x + D x^3 + 2 D a x^2 + D a^2 x\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds E x^4 - 2 E a^2 x^2 + E a^4\)










Setting $x = a$ in $(1)$:














\(\ds D a \paren {2 a}^2\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds D\)

\(=\)







\(\ds \frac 1 {4 a^3}\)










Setting $x = -a$ in $(1)$:














\(\ds B \paren {-a} \paren {-2 a}^2\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds \frac {-1} {4 a^3}\)










Setting $x = 0$ in $(1)$:














\(\ds E a^4\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds E\)

\(=\)







\(\ds \frac 1 {a^4}\)










Equating coefficients of $x^4$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds A + C + E\)














\(\ds \leadsto \ \ \)





\(\ds -A - \frac 1 {a^4}\)

\(=\)







\(\ds C\)










Equating coefficients of $x^3$ in $(1)$:














\(\ds - A a + C a + B + D\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds - A a + C a + \frac 1 {4 a^3} + \frac {-1} {4 a^3}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds -A a + \paren {-A - \frac 1 {a^4} } a\)

\(=\)







\(\ds 0\)





as $C = -A  -\dfrac 1 {a^4}$








\(\ds \leadsto \ \ \)





\(\ds -2 A - \frac 1 {a^4}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac {-1} {2 a^4}\)














\(\ds \leadsto \ \ \)





\(\ds C\)

\(=\)







\(\ds \frac {-1} {2 a^4}\)










Summarising:














\(\ds A\)

\(=\)







\(\ds \frac {-1} {2 a^4}\)




















\(\ds B\)

\(=\)







\(\ds \frac {-1} {4 a^3}\)




















\(\ds C\)

\(=\)







\(\ds \frac {-1} {2 a^4}\)




















\(\ds D\)

\(=\)







\(\ds \frac 1 {4 a^3}\)




















\(\ds E\)

\(=\)







\(\ds \frac 1 {a^4}\)










Thus:














\(\ds \frac 1 {x \paren {x^2 - a^2}^2}\)

\(\equiv\)







\(\ds \frac {-1} {2 a^4 \paren {x + a} } + \frac {-1} {4 a^3 \paren {x + a}^2} + \frac {-1} {2 a^4 \paren {x - a} } + \frac 1 {4 a^3 \paren {x - a}^2} + \frac 1 {a^4 x}\)




















\(\ds \)

\(\equiv\)







\(\ds - \frac {\paren {x - a} + \paren {x + a} } {2 a^4 \paren {x + a} \paren {x - a} } + \frac {\paren {x + a}^2 - \paren {x - a}^2} {4 a^3 \paren {x + a}^2 \paren {x - a}^2} + \frac 1 {a^4 x}\)





common denominators














\(\ds \)

\(\equiv\)







\(\ds \frac {- 2 x} {2 a^4 \paren {x^2 - a^2} } + \frac {\paren {x^2 + 2 a x + a^2} - \paren {x^2 - 2 a x + a^2} } {4 a^3 \paren {x^2 - a^2}^2} + \frac 1 {a^4 x}\)





simplifying














\(\ds \)

\(\equiv\)







\(\ds \frac {-x} {a^4 \paren {x^2 - a^2} } + \frac {4 a x} {4 a^3 \paren {x^2 - a^2}^2} + \frac 1 {a^4 x}\)





simplifying














\(\ds \)

\(\equiv\)







\(\ds \dfrac 1 {a^4 x} + \dfrac {-x} {a^4 \paren {x^2 - a^2} } + \dfrac x {a^2 \paren {x^2 - a^2}^2}\)





simplifying and rearranging



Hence the result.
$\blacksquare$





