# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_cubed_by_a_squared_minus_x_squared_squared/Partial_Fraction_Expansion

Lemma for Primitive of Reciprocal of $x^3 \paren {a^2 - x^2}^2$
$\dfrac 1 {x^3 \paren {a^2 - x^2}^2} \equiv \dfrac 1 {a^4 x^3} + \dfrac 2 {a^6 x} + \dfrac {2 x} {a^6 \paren {a^2 - x^2} } + \dfrac x {a^4 \paren {a^2 - x^2}^2}$


Proof













\(\ds \frac 1 {x^3 \paren {a^2 - x^2}^2}\)

\(=\)







\(\ds \frac 1 {x^3 \paren {a + x}^2 \paren {a - x}^2}\)





Difference of Two Squares














\(\ds \)

\(\equiv\)







\(\ds \frac A {a + x} + \frac B {\paren {a + x}^2} + \frac C {a - x} + \frac D {\paren {a - x}^2} + \frac E x + \frac F {x^2} + \frac G {x^3}\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\equiv\)







\(\ds A x^3 \paren {a^2 - x^2} \paren {a - x} + B x^3 \paren {a - x}^2\)





multiplying through by $x^3 \paren {a^2 - x^2}^2$














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds C x^3 \paren {a^2 - x^2} \paren {a + x} + D x^3 \paren {a + x}^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds E x^2 \paren {a^2 - x^2}^2 + F x \paren {a^2 - x^2}^2 + G \paren {a^2 - x^2}^2\)










\(\text {(1)}: \quad\)









\(\ds \)

\(\equiv\)







\(\ds A x^6 - A a x^5 - A a^2 x^4 + A a^3 x^3 + B x^5 - 2 B a x^4 + B a^2 x^3\)





multiplying out














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds C x^6 - C a x^5 + C a^2 x^4 + C a^3 x^3 + D x^5 + 2 D a x^4 + D a^2 x^3\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds E x^6 - 2 E a^2 x^4 + E a^4 x^2 + F x^5 - 2 F a^2 x^3 + F x a^4\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds G x^4 - 2 G a^2 x^2 + G a^4\)










Setting $x = 0$ in $(1)$:














\(\ds G a^4\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds G\)

\(=\)







\(\ds \frac 1 {a^4}\)










Setting $x = a$ in $(1)$:














\(\ds D a^3 \paren {2 a}^2\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds D\)

\(=\)







\(\ds \frac 1 {4 a^5}\)










Setting $x = -a$ in $(1)$:














\(\ds B \paren {-a}^3 \paren {2 a}^2\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds \frac {-1} {4 a^5}\)










Equating coefficients of $x$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds F\)










Equating coefficients of $x^2$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds E a^4 - 2 G a^2\)














\(\ds \leadsto \ \ \)





\(\ds E a^4\)

\(=\)







\(\ds 2 \frac 1 {a^4} a^2\)














\(\ds \leadsto \ \ \)





\(\ds E\)

\(=\)







\(\ds \frac 2 {a^6}\)










Equating coefficients of $x^6$ in $(1)$:




\(\text {(2)}: \quad\)









\(\ds 0\)

\(=\)







\(\ds A - C + E\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds A - C + \frac 2 {a^6}\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds C - \frac 2 {a^6}\)










Equating coefficients of $x^3$ in $(1)$:














\(\ds A a^3 + B a^2 + C a^3 + D a^2 - 2 F a^2\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds A a^3 + \frac {-1} {4 a^5} a^2 + C a^3 + \frac 1 {4 a^5} a^2\)

\(=\)







\(\ds 0\)





substituting for $B$, $D$ and $F$








\(\ds \leadsto \ \ \)





\(\ds A + C\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds -C\)




















\(\ds \)

\(=\)







\(\ds \frac {-1} {a^6}\)










Summarising:














\(\ds A\)

\(=\)







\(\ds \frac {-1} {a^6}\)




















\(\ds B\)

\(=\)







\(\ds \frac {-1} {4 a^5}\)




















\(\ds C\)

\(=\)







\(\ds \frac 1 {a^6}\)




















\(\ds D\)

\(=\)







\(\ds \frac 1 {4 a^5}\)




















\(\ds E\)

\(=\)







\(\ds \frac 2 {a^6}\)




















\(\ds F\)

\(=\)







\(\ds 0\)




















\(\ds G\)

\(=\)







\(\ds \frac 1 {a^4}\)










Thus:














\(\ds \frac 1 {x^3 \paren {a^2 - x^2}^2}\)

\(\equiv\)







\(\ds \dfrac 1 {a^4 x^3} + \dfrac 2 {a^6 x} - \dfrac 1 {a^6 \paren {a + x} } + \dfrac 1 {a^6 \paren {a - x} } - \dfrac 1 {4 a^5 \paren {a + x}^2} + \dfrac 1 {4 a^5 \paren {a - x}^2}\)




















\(\ds \)

\(\equiv\)







\(\ds \frac {\paren {a + x} - \paren {a - x} } {a^6 \paren {a + x} \paren {a - x} } + \frac {\paren {a + x}^2 - \paren {a - x}^2} {4 a^5 \paren {a + x}^2 \paren {a - x}^2} + \dfrac 1 {a^4 x^3} + \dfrac 2 {a^6 x}\)





common denominators














\(\ds \)

\(\equiv\)







\(\ds \frac {2 x} {a^6 \paren {a^2 - x^2} } + \frac {\paren {a^2 + 2 a x + x^2} - \paren {a^2 - 2 a x + x^2} } {4 a^5 \paren {a^2 - x^2}^2} + \dfrac 1 {a^4 x^3} + \dfrac 2 {a^6 x}\)





simplifying














\(\ds \)

\(\equiv\)







\(\ds \frac {2 x} {a^6 \paren {a^2 - x^2} } + \frac {4 a x} {4 a^5 \paren {a^2 - x^2}^2} + \frac 1 {a^4 x^3} + \frac 2 {a^6 x}\)





simplifying














\(\ds \)

\(\equiv\)







\(\ds \frac 1 {a^4 x^3} + \frac 2 {a^6 x} + \frac {2 x} {a^6 \paren {a^2 - x^2} } + \frac x {a^4 \paren {a^2 - x^2}^2}\)





simplifying and rearranging




Hence the result.
$\blacksquare$





