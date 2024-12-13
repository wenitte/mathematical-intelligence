# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_by_a_x_%2B_b_squared/Partial_Fraction_Expansion

Lemma for Primitive of $\dfrac 1 {x^2 \paren {a x + b}^2}$
$\dfrac 1 {x^2 \paren {a x + b}^2} \equiv -\dfrac {2 a} {b^3 x} + \dfrac 1 {b^2 x^2} + \dfrac {2 a^2} {b^3 \paren {a x + b} } + \dfrac {a^2} {b^2 \paren {a x + b}^2}$


Proof













\(\ds \dfrac 1 {x^2 \paren {a x + b}^2}\)

\(\equiv\)







\(\ds \dfrac A x + \dfrac B {x^2} + \dfrac C {a x + b} + \dfrac D {\paren {a x + b}^2}\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\equiv\)







\(\ds A x \paren {a x + b}^2 + B \paren {a x + b}^2 + C x^2 \paren {a x + b} + D x^2\)





multiplying through by $x^2 \paren {a x + b}^2$














\(\ds \)

\(\equiv\)







\(\ds A a^2 x^3 + 2 A a b x^2 + A b^2 x\)





multiplying everything out














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds B a^2 x^2 + 2 B a b x + B b^2\)





(tedious though this is, it helps to














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds C a x^3 + C b x^2 + D x^2\)





identify the equal indices)




Setting $a x + b = 0$ in $(1)$:














\(\ds a x + b\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds -\frac b a\)














\(\ds \leadsto \ \ \)





\(\ds D \paren {-\frac b a}^2\)

\(=\)







\(\ds 1\)





substituting for $x$ in $(1)$: terms in $a x + b$ are all $0$








\(\ds \leadsto \ \ \)





\(\ds D\)

\(=\)







\(\ds \frac {a^2} {b^2}\)










Equating constants in $(1)$:














\(\ds 1\)

\(=\)







\(\ds B b^2\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds \frac 1 {b^2}\)










Equating $1$st powers of $x$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds A b^2 + 2 B a b\)














\(\ds \leadsto \ \ \)





\(\ds A b^2\)

\(=\)







\(\ds -\frac {2 a b} {b^2}\)





subtituting for $B$ from $(2)$




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds -\frac {2 a} {b^3}\)










Equating $3$rd powers of $x$:














\(\ds 0\)

\(=\)







\(\ds A a^2 + C a\)














\(\ds \leadsto \ \ \)





\(\ds C\)

\(=\)







\(\ds \frac {2 a^2} {b^3}\)





substituting for $A$ from $(3)$ and simplifying




Summarising:














\(\ds A\)

\(=\)







\(\ds -\frac {2 a} {b^3}\)




















\(\ds B\)

\(=\)







\(\ds \frac 1 {b^2}\)




















\(\ds C\)

\(=\)







\(\ds \frac {2 a^2} {b^3}\)




















\(\ds D\)

\(=\)







\(\ds \frac {a^2} {b^2}\)









Hence the result.
$\blacksquare$





