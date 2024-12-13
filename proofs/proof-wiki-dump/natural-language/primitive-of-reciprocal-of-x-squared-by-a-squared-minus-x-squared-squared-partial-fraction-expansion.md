# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_by_a_squared_minus_x_squared_squared/Partial_Fraction_Expansion

Lemma for Primitive of Reciprocal of $x^2 \paren {a^2 - x^2}^2$
$\dfrac 1 {x^2 \paren {a^2 - x^2}^2} \equiv \dfrac 1 {a^4 x^2} + \dfrac 3 {4 a^5 \paren {a + x} } - \dfrac 3 {4 a^5 \paren {a - x} } + \dfrac 1 {4 a^4 \paren {a + x}^2} + \dfrac 1 {4 a^4 \paren {a - x}^2}$


Proof













\(\ds \frac 1 {x^2 \paren {a^2 - x^2}^2}\)

\(=\)







\(\ds \frac 1 {x^2 \paren {a + x}^2 \paren {a - x}^2}\)





Difference of Two Squares














\(\ds \)

\(\equiv\)







\(\ds \frac A {a + x} + \frac B {\paren {a + x}^2} + \frac C {a - x} + \frac D {\paren {a - x}^2} + \frac E x + \frac F {x^2}\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\equiv\)







\(\ds A x^2 \paren {a^2 - x^2} \paren {a - x} + B x^2 \paren {a - x}^2\)





multiplying through by $x^2 \paren {a^2 - x^2}^2$














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds C x^2 \paren {a^2 - x^2} \paren {a + x} + D x^2 \paren {a + x}^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds E x \paren {a^2 - x^2}^2 + F \paren {a^2 - x^2}^2\)










\(\text {(1)}: \quad\)









\(\ds \)

\(\equiv\)







\(\ds A x^5 - A a x^4 - A a^2 x^3 + A a^3 x^2 + B x^4 - 2 B a x^3 + B a^2 x^2\)





multiplying out














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds C x^5 - C a x^4 + C a^2 x^3 + C a^3 x^2 + D x^4 + 2 D a x^3 + D a^2 x^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds E x^5 - 2 E a^2 x^3 + E a^4 x + F x^4 - 2 F a^2 x^2 + F a^4\)










Setting $x = a$ in $(1)$:














\(\ds D a^2 \paren {2 a}^2\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds D\)

\(=\)







\(\ds \frac 1 {4 a^4}\)










Setting $x = -a$ in $(1)$:














\(\ds B \paren {-a}^2 \paren {2 a}^2\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds \frac 1 {4 a^4}\)










Setting $x = 0$ in $(1)$:














\(\ds F a^4\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds F\)

\(=\)







\(\ds \frac 1 {a^4}\)










Equating coefficients of $x$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds E\)










Equating coefficients of $x^5$ in $(1)$:




\(\text {(2)}: \quad\)









\(\ds 0\)

\(=\)







\(\ds A - C + E\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds A - C\)





as $E = 0$








\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds C\)










Equating coefficients of $x^2$ in $(1)$:














\(\ds A a^3 + B a^2 + C a^3 + D a^2 - 2 F a^2\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds A a^3 + \frac 1 {4 a^4} a^2 + C a^3 + \frac 1 {4 a^4} a^2 - 2 \frac 1 {a^4} a^2\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds A + \frac 1 {4 a^5} + C + \frac 1 {4 a^5} - \frac 8 {4 a^5}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds A + C\)

\(=\)







\(\ds \frac {8 - 1 - 1} {4 a^5}\)




















\(\ds \)

\(=\)







\(\ds \frac 3 {2 a^5}\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac 3 {4 a^5}\)














\(\ds \leadsto \ \ \)





\(\ds C\)

\(=\)







\(\ds \frac 3 {4 a^5}\)





as $A = C$




Summarising:














\(\ds A\)

\(=\)







\(\ds \frac 3 {4 a^5}\)




















\(\ds B\)

\(=\)







\(\ds \frac 1 {4 a^4}\)




















\(\ds C\)

\(=\)







\(\ds \frac 3 {4 a^5}\)




















\(\ds D\)

\(=\)







\(\ds \frac 1 {4 a^4}\)




















\(\ds E\)

\(=\)







\(\ds 0\)




















\(\ds F\)

\(=\)







\(\ds \frac 1 {a^4}\)










Hence the result.
$\blacksquare$





