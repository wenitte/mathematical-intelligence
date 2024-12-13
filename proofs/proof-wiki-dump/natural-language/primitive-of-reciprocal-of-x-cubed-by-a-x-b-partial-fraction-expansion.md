# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_cubed_by_a_x_%2B_b/Partial_Fraction_Expansion

Lemma for Primitive of $\dfrac 1 {x^3 \paren {a x + b} }$
$\dfrac 1 {x^3 \paren {a x + b} } \equiv \dfrac {a^2} {b^3 x} + \dfrac {-a} {b^2 x^2} + \dfrac 1 {b x^3} + \dfrac {-a^3} {b^3 \paren {a x + b} }$


Proof













\(\ds \dfrac 1 {x^3 \paren {a x + b} }\)

\(\equiv\)







\(\ds \dfrac A x + \dfrac B {x^2} + \dfrac C {x^3} + \dfrac D {a x + b}\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\equiv\)







\(\ds A x^2 \paren {a x + b} + B x \paren {a x + b} + C \paren {a x + b} + D x^3\)





multiplying through by $x^3 \paren {a x + b}$














\(\ds \)

\(\equiv\)







\(\ds A a x^3 + A b x^2 + B a x^2 + B b x + C a x + C b + D x^3\)





multiplying everything out




Setting $a x + b = 0$ in $(1)$:














\(\ds a x + b\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds -\frac b a\)














\(\ds \leadsto \ \ \)





\(\ds D \paren {-\frac b a}^3\)

\(=\)







\(\ds 1\)





substituting for $x$ in $(1)$: terms in $a x + b$ are all $0$




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds D\)

\(=\)







\(\ds -\frac {a^3} {b^3}\)










Equating constants in $(1)$:














\(\ds 1\)

\(=\)







\(\ds C b\)














\(\ds \leadsto \ \ \)





\(\ds C\)

\(=\)







\(\ds \frac 1 b\)










Equating $3$rd powers of $x$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds A a + D\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac {a^2} {b^3}\)





substituting for $D$ from $(2)$ and simplifying




Equating $2$nd powers of $x$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds A b + B a\)




















\(\ds \)

\(=\)







\(\ds \frac {a^2} {b^3} b + B a\)





substituting for $A$ from $(3)$








\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds -\frac a {b^2}\)





rearranging and simplifying




Summarising:














\(\ds A\)

\(=\)







\(\ds \frac {a^2} {b^3}\)




















\(\ds B\)

\(=\)







\(\ds -\frac a {b^2}\)




















\(\ds C\)

\(=\)







\(\ds \frac 1 b\)




















\(\ds D\)

\(=\)







\(\ds -\frac {a^3} {b^3}\)









Hence the result.
$\blacksquare$





