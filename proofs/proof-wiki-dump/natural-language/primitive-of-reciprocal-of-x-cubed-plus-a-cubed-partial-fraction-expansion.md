# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_cubed_plus_a_cubed/Partial_Fraction_Expansion

Lemma for Primitive of Reciprocal of $x^3 + a^3$
$\dfrac 1 {x^3 + a^3} = \dfrac 1 {3 a^2 \paren {x + a} } - \dfrac {x - 2 a} {3 a^2 \paren {x^2 - a x + a^2} }$


Proof













\(\ds \frac 1 {x^3 + a^3}\)

\(\equiv\)







\(\ds \frac 1 {\paren {x + a} \paren {x^2 - a x + a^2} }\)





Sum of Two Cubes














\(\ds \)

\(\equiv\)







\(\ds \frac A {x + a} + \frac {B x + C} {x^2 - a x + a^2}\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\equiv\)







\(\ds A \paren {x^2 - a x + a^2} + \paren {B x + C} \paren {x + a}\)





multiplying through by $x^3 + a^3$




\(\text {(1)}: \quad\)









\(\ds \)

\(\equiv\)







\(\ds A x^2 - A a x + A a^2 + B x^2 + B a x + C x + C a\)





multiplying out




Equating coefficients of $x^2$ in $(1)$:














\(\ds A + B\)

\(=\)







\(\ds 0\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds -A\)

\(=\)







\(\ds B\)










Equating coefficients of $x$ in $(1)$:














\(\ds -A a + B a + C\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds -A a + -A a + C\)

\(=\)







\(\ds 0\)





from $(2)$




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds 2 A a\)

\(=\)







\(\ds C\)










Setting $x = 0$ in $(1)$:














\(\ds A a^2 + C a\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds A a^2 + \paren {2 A a} a\)

\(=\)







\(\ds 1\)





from $(3)$








\(\ds \leadsto \ \ \)





\(\ds A a^2 + \paren {2 A a} a\)

\(=\)







\(\ds \frac 1 {3 a^2}\)














\(\ds \leadsto \ \ \)





\(\ds C\)

\(=\)







\(\ds 1 - \frac a {3 a^2}\)





from $(3)$














\(\ds \)

\(=\)







\(\ds \frac {2 a} {3 a^2}\)














\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds -\frac {-1} {3 a^2}\)





from $(2)$




Summarising:














\(\ds A\)

\(=\)







\(\ds \frac 1 {3 a^2}\)




















\(\ds B\)

\(=\)







\(\ds -\frac 1 {3 a^2}\)




















\(\ds C\)

\(=\)







\(\ds \frac {2 a} {3 a^2}\)










Hence the result.
$\blacksquare$





