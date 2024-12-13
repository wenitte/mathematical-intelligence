# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_by_a_x_%2B_b_cubed/Partial_Fraction_Expansion

Lemma for Primitive of $\dfrac 1 {x^2 \paren {a x + b}^3}$
$\dfrac 1 {x^2 \paren {a x + b}^3} \equiv \dfrac {-3 a} {b^4 x} + \dfrac 1 {b^3 x^2} + \dfrac {3 a^2} {b^4 \paren {a x + b} } + \dfrac {2 a^2} {b^3 \paren {a x + b}^2} + \dfrac {a^2} {b^2 \paren {a x + b}^3}$


Proof













\(\ds \dfrac 1 {x^2 \paren {a x + b}^3}\)

\(\equiv\)







\(\ds \dfrac A x + \dfrac B {x^2} + \dfrac C {a x + b} + \dfrac D {\paren {a x + b}^2} + \dfrac E {\paren {a x + b}^3}\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\equiv\)







\(\ds A x \paren {a x + b}^3 + B \paren {a x + b}^3 + C x^2 \paren {a x + b}^2 + D x^2 \paren {a x + b} + E x^2\)





multiplying through by $x^2 \paren {a x + b}^3$














\(\ds \)

\(\equiv\)







\(\ds A a^3 x^4 + 3 A a^2 b x^3 + 3 A a b^2 x^2 + A b^3 x\)





multiplying everything out














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds B a^3 x^3 + 3 B a^2 b x^2 + 3 B a b^2 x + B b^3\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds C a^2 x^4 + 2 C a b x^3 + C b^2 x^2 + D a x^3 + D b x^2 + E x^2\)










Setting $a x + b = 0$ in $(1)$:














\(\ds a x + b\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds -\frac b a\)














\(\ds \leadsto \ \ \)





\(\ds E \paren {-\frac b a}^2\)

\(=\)







\(\ds 1\)





substituting for $x$ in $(1)$: terms in $a x + b$ are all $0$








\(\ds \leadsto \ \ \)





\(\ds E\)

\(=\)







\(\ds \frac {a^2} {b^2}\)










Equating constants in $(1)$:














\(\ds 1\)

\(=\)







\(\ds B b^3\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds \frac 1 {b^3}\)










Equating $1$st powers of $x$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds A b^3 + 3 B a b^2\)














\(\ds \leadsto \ \ \)





\(\ds A b^3\)

\(=\)







\(\ds -3 \frac 1 {b^3} a b^2\)





substituting for $B$ from $(2)$




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac {-3 a} {b^4}\)





simplifying




Equating $4$th powers of $x$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds A a^3 + C a^2\)














\(\ds \leadsto \ \ \)





\(\ds C a^2\)

\(=\)







\(\ds \frac {3 a} {b^4} a^3\)





substituting for $A$ from $(3)$




\(\text {(4)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds C\)

\(=\)







\(\ds \frac {3 a^2} {b^4}\)





simplifying




Equating $3$rd powers of $x$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds 3 A a^2 b + B a^3 + 2 C a b + D a\)














\(\ds \leadsto \ \ \)





\(\ds D\)

\(=\)







\(\ds -3 A a b - B a^2 - 2 C b\)





rearranging














\(\ds \)

\(=\)







\(\ds -3 a b \frac {-3 a} {b^4} - \frac 1 {b^3} a^2 - 2 b \frac {3 a^2} {b^4}\)





substituting for $A$ from $(3)$, $B$ from $(2)$ and $C$ from $(4)$














\(\ds \)

\(=\)







\(\ds \frac {9 a^2} {b^3} - \frac {a^2} {b^3} - \frac {6 a^2} {b^3}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {2 a^2} {b^3}\)





simplifying




Summarising:














\(\ds A\)

\(=\)







\(\ds \frac {-3 a} {b^4}\)




















\(\ds B\)

\(=\)







\(\ds \frac 1 {b^3}\)




















\(\ds C\)

\(=\)







\(\ds \frac {3 a^2} {b^4}\)




















\(\ds D\)

\(=\)







\(\ds \frac {2 a^2} {b^3}\)




















\(\ds E\)

\(=\)







\(\ds \frac {a^2} {b^2}\)









Hence the result.
$\blacksquare$





