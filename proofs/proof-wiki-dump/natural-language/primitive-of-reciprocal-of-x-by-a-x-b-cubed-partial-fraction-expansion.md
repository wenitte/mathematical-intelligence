# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_a_x_%2B_b_cubed/Partial_Fraction_Expansion

Lemma for Primitive of $\dfrac 1 {x \paren {a x + b}^3}$
$\dfrac 1 {x \paren {a x + b}^3} \equiv \dfrac 1 {b^3 x} - \dfrac a {b^3 \paren {a x + b} } - \dfrac a {b^2 \paren {a x + b}^2} - \dfrac a {b \paren {a x + b}^3}$


Proof













\(\ds \dfrac 1 {x \paren {a x + b}^3}\)

\(\equiv\)







\(\ds \dfrac A x + \dfrac B {a x + b} + \dfrac C {\paren {a x + b}^2} + \dfrac D {\paren {a x + b}^3}\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\equiv\)







\(\ds A \paren {a x + b}^3 + B x \paren {a x + b}^2 + C x \paren {a x + b} + D x\)





multiplying through by $x \paren {a x + b}^3$














\(\ds \)

\(\equiv\)







\(\ds A a^3 x^3 + 3 A a^2 b x^2 + 3 A a b^2 x + A b^3\)





multiplying everything out














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds B a^2 x^3 + 2 B a b x^2 + B b^2 x + C a x^2 + C b x + D x\)










Setting $a x + b = 0$ in $(1)$:














\(\ds a x + b\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds -\frac b a\)














\(\ds \leadsto \ \ \)





\(\ds D \paren {-\frac b a}\)

\(=\)







\(\ds 1\)





substituting for $x$ in $(1)$: terms in $a x + b$ are all $0$








\(\ds \leadsto \ \ \)





\(\ds D\)

\(=\)







\(\ds -\frac a b\)










Equating constants in $(1)$:














\(\ds 1\)

\(=\)







\(\ds A b^3\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac 1 {b^3}\)










Equating $3$rd powers of $x$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds A a^3 + B a^2\)














\(\ds \leadsto \ \ \)





\(\ds B a^2\)

\(=\)







\(\ds -\frac {a^3} {b^3}\)





substituting for $A$ from $(2)$




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds -\frac a {b^3}\)





simplifying




Equating $2$nd powers of $x$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds 3 A a^2 b + 2 B a b + C a\)














\(\ds \leadsto \ \ \)





\(\ds C\)

\(=\)







\(\ds -3 A a b - 2 B b\)





rerranging














\(\ds \)

\(=\)







\(\ds -3 a b \frac 1 {b^3} + 2 b \frac a {b^3}\)





substituting for $A$ from $(2)$ and $B$ from $(3)$














\(\ds \)

\(=\)







\(\ds -3 \frac a {b^2} + 2 \frac a {b^2}\)





simplifying














\(\ds \)

\(=\)







\(\ds -\frac a {b^2}\)





simplifying




Summarising:














\(\ds A\)

\(=\)







\(\ds \frac 1 {b^3}\)




















\(\ds B\)

\(=\)







\(\ds -\frac a {b^3}\)




















\(\ds C\)

\(=\)







\(\ds -\frac a {b^2}\)




















\(\ds D\)

\(=\)







\(\ds -\frac a b\)









Hence the result.
$\blacksquare$





