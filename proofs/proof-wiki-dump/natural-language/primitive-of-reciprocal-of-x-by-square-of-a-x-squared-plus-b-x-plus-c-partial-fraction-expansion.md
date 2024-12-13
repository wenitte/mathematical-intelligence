# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_square_of_a_x_squared_plus_b_x_plus_c/Partial_Fraction_Expansion

Lemma for Primitive of $\frac 1 {x \paren {a x^2 + b x + c}^2}$
$\dfrac 1 {x \paren {a x^2 + b x + c}^2} \equiv \dfrac 1 {c^2 x} - \dfrac {a x + b} {c^2 \paren {a x^2 + b x + c} } - \dfrac {a x + b} {c \paren {a x^2 + b x + c}^2}$


Proof













\(\ds \dfrac 1 {x \paren {a x^2 + b x + c}^2}\)

\(\equiv\)







\(\ds \frac A x + \frac {B x + C} {a x^2 + b x + c} + \frac {D x + E} {\paren {a x^2 + b x + c}^2}\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\equiv\)







\(\ds A \paren {a x^2 + b x + c}^2\)





multiplying through by $x \paren {a x^2 + b x + c}^2$














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {B x + C} x \paren {a x^2 + b x + c} + \paren {D x + E} x\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\equiv\)







\(\ds A a^2 x^4 + 2 A a b x^3 + 2 A a c x^2\)





multiplying out














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds A b^2 x^2 + 2 A b c x + A c^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds B a x^4 + B b x^3 + B c x^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds C a x^3 + C b x^2 + C c x\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds D x^2 + E x\)










Setting $x = 0$ in $(1)$:














\(\ds A c^2\)

\(=\)







\(\ds 1\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac 1 {c^2}\)










Equating coefficients of $x^4$ in $(1)$:














\(\ds A a^2 + B a\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \frac {a^2} {c^2}\)

\(=\)







\(\ds -B a\)





substituting for $A$ from $(2)$




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds \frac {-a} {c^2}\)










Equating coefficients of $x^3$ in $(1)$:














\(\ds 2 A a b + B b + C a\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 2 \frac 1 {c^2} a b + \frac {-a} {c^2} b\)

\(=\)







\(\ds -C a\)





substituting for $A$ from $(2)$ and $B$ from $(3)$








\(\ds \leadsto \ \ \)





\(\ds 2 \frac b {c^2} + \frac {-b} {c^2}\)

\(=\)







\(\ds -C\)





simplifying




\(\text {(4)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds C\)

\(=\)







\(\ds \frac {-b} {c^2}\)





simplifying




Equating coefficients of $x$ in $(1)$:














\(\ds 2 A b c + C c + E\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 2 \frac 1 {c^2} b c + \frac {-b} {c^2} c\)

\(=\)







\(\ds -E\)














\(\ds \leadsto \ \ \)





\(\ds E\)

\(=\)







\(\ds -2 \frac b c + \frac b c\)














\(\ds \leadsto \ \ \)





\(\ds E\)

\(=\)







\(\ds \frac {-b} c\)










Equating coefficients of $x^2$ in $(1)$:














\(\ds A \paren {2 a c + b^2} + B c + C b + D\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 {c^2} \paren {2 a c + b^2} + \frac {-a} {c^2} c + \frac {-b} {c^2} b\)

\(=\)







\(\ds - D\)














\(\ds \leadsto \ \ \)





\(\ds D\)

\(=\)







\(\ds \frac {-2 a} c + \frac {-b^2} {c^2} + \frac a c + \frac {b^2} {c^2}\)














\(\ds \leadsto \ \ \)





\(\ds D\)

\(=\)







\(\ds \frac {-a} c\)










Summarising:














\(\ds A\)

\(=\)







\(\ds \frac 1 {c^2}\)




















\(\ds B\)

\(=\)







\(\ds \frac {-a} {c^2}\)




















\(\ds C\)

\(=\)







\(\ds \frac {-b} {c^2}\)




















\(\ds D\)

\(=\)







\(\ds \frac {-a} c\)




















\(\ds E\)

\(=\)







\(\ds \frac {-b} c\)










Hence the result.
$\blacksquare$





