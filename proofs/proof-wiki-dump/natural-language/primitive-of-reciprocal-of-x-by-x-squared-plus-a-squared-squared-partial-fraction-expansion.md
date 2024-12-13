# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_x_squared_plus_a_squared_squared/Partial_Fraction_Expansion

Lemma for Primitive of Reciprocal of $x \paren {x^2 + a^2}^2$
$\dfrac 1 {x \paren {x^2 + a^2}^2} \equiv \dfrac 1 {a^4 x} - \dfrac x {a^4 \paren {x^2 + a^2} } - \dfrac x {a^2 \paren {x^2 + a^2}^2}$


Proof













\(\ds \dfrac 1 {x \paren {x^2 + a^2}^2}\)

\(\equiv\)







\(\ds \dfrac A x + \dfrac {B x + C} {x^2 + a^2} + \dfrac {D x + E} {\paren {x^2 + a^2}^2}\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\equiv\)







\(\ds A \paren {x^2 + a^2}^2 + \paren {B x + C} x \paren {x^2 + a^2} + \paren {D x + E} x\)





multiplying through by $x \paren {x^2 + a^2}^2$




\(\text {(1)}: \quad\)









\(\ds \)

\(\equiv\)







\(\ds A x^4 + 2 A a^2 x^2 + A a^4 + B x^4 + B x^2 a^2 + C x^3 + C x a^2 + D x^2 + E x\)





multiplying everything out




Setting $x = 0$ in $(1)$:














\(\ds A a^4\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac 1 {a^4}\)










Equating coefficients of $x^4$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds A + B\)














\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds -\frac 1 {a^4}\)










Equating coefficients of $x^3$ in $(1)$:














\(\ds C\)

\(=\)







\(\ds 0\)










Equating coefficients of $x$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds C + E\)














\(\ds \leadsto \ \ \)





\(\ds E\)

\(=\)







\(\ds 0\)










Equating coefficients of $x^2$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds 2 A a^2 + B a^2 + D\)














\(\ds \leadsto \ \ \)





\(\ds D\)

\(=\)







\(\ds -\frac 1 {a^2}\)










Summarising:














\(\ds A\)

\(=\)







\(\ds \frac 1 {a^4}\)




















\(\ds B\)

\(=\)







\(\ds -\frac 1 {a^4}\)




















\(\ds C\)

\(=\)







\(\ds 0\)




















\(\ds D\)

\(=\)







\(\ds -\frac 1 {a^2}\)




















\(\ds E\)

\(=\)







\(\ds 0\)









Hence the result.
$\blacksquare$





