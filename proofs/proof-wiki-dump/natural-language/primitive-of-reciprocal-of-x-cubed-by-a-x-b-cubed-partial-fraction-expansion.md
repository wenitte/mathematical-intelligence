# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_cubed_by_a_x_%2B_b_cubed/Partial_Fraction_Expansion

Lemma for Primitive of $\dfrac 1 {x^3 \paren {a x + b}^3}$
$\dfrac 1 {x^3 \paren {a x + b}^3} \equiv \dfrac {6 a^2} {b^5 x} - \dfrac {3 a} {b^4 x^2} + \dfrac 1 {b^3 x^3} - \dfrac {6 a^3} {b^5 \paren {a x + b} } -\dfrac {3 a^3} {b^4 \paren {a x + b}^2} - \dfrac {a^3} {b^3 \paren {a x + b}^3}$


Proof













\(\ds \dfrac 1 {x^3 \paren {a x + b}^3}\)

\(\equiv\)







\(\ds \dfrac A x + \dfrac B {x^2} + \dfrac C {x^3} + \dfrac D {a x + b} + \dfrac E {\paren {a x + b}^2} + \dfrac F {\paren {a x + b}^3}\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\equiv\)







\(\ds A x^2 \paren {a x + b}^3 + B x \paren {a x + b}^3 + C \paren {a x + b}^3 + D x^3 \paren {a x + b}^2 + E x^2 \paren {a x + b} + F x^2\)





multiplying through by $x^2 \paren {a x + b}^3$














\(\ds \)

\(\equiv\)







\(\ds A a^3 x^5 + 3 A a^2 b x^4 + 3 A a b^2 x^3 + A b^3 x^2\)





multiplying everything out














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds B a^3 x^4 + 3 B a^2 b x^3 + 3 B a b^2 x^2 + B b^3 x\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds C a^3 x^3 + 3 C a^2 b x^2 + 3 C a b^2 x + C b^3\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds D a^2 x^5 + 2 D a b x^4 + D b^2 x^3 + E a x^4 + E b x^3 + F x^3\)










Setting $a x + b = 0$ in $(1)$:














\(\ds a x + b\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds -\frac b a\)














\(\ds \leadsto \ \ \)





\(\ds F \paren {-\frac b a}^3\)

\(=\)







\(\ds 1\)





substituting for $x$ in $(1)$: terms in $a x + b$ are all $0$








\(\ds \leadsto \ \ \)





\(\ds F\)

\(=\)







\(\ds -\frac {a^3} {b^3}\)










Equating constants in $(1)$:














\(\ds 1\)

\(=\)







\(\ds C b^3\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds C\)

\(=\)







\(\ds \frac 1 {b^3}\)










Equating $1$st powers of $x$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds B b^3 + 3 C a b^2\)














\(\ds \leadsto \ \ \)





\(\ds B b^3\)

\(=\)







\(\ds -3 \frac 1 {b^3} a b^2\)





substituting for $C$ from $(2)$




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds \frac {-3 a} {b^4}\)





simplifying




Equating $2$nd powers of $x$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds A b^3 + 3 B a b^2 + 3 C a^2 b\)














\(\ds \leadsto \ \ \)





\(\ds A b^3\)

\(=\)







\(\ds -3 \frac {-3 a} {b^4} a b^2 - 3 \frac 1 {b^3} a^2 b\)





substituting for $C$ from $(2)$ and $B$ from $(3)$








\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac {9 a^2} {b^5} - 3 \frac {a^2} {b^5}\)





simplifying




\(\text {(4)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {6 a^2} {b^5}\)





simplifying




Equating $5$th powers of $x$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds A a^3 + D a^2\)














\(\ds \leadsto \ \ \)





\(\ds D a^2\)

\(=\)







\(\ds -\frac {6 a^2} {b^5} a^3\)





substituting for $A$ from $(4)$




\(\text {(5)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds D\)

\(=\)







\(\ds -\frac {6 a^3} {b^5}\)





simplifying




Equating $4$th powers of $x$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds 3 A a^2 b + B a^3 + 2 D a b + E a\)














\(\ds \leadsto \ \ \)





\(\ds E\)

\(=\)







\(\ds -3 A a b - B a^2 - 2 D b\)





rearranging














\(\ds \)

\(=\)







\(\ds -3 a b \frac {6 a^2} {b^5} - \frac {-3 a} {b^4} a^2 - 2 \frac {-6 a^3} {b^5} b\)





substituting for $A$ from $(4)$, $B$ from $(3)$ and $D$ from $(5)$














\(\ds \)

\(=\)







\(\ds -\frac {18 a^3} {b^4} + \frac {3 a^3} {b^4} + \frac {12 a^3} {b^4}\)





simplifying














\(\ds \)

\(=\)







\(\ds -\frac {3 a^3} {b^4}\)





simplifying




Summarising:














\(\ds A\)

\(=\)







\(\ds \frac {6 a^2} {b^5}\)




















\(\ds B\)

\(=\)







\(\ds -\frac {3 a} {b^4}\)




















\(\ds C\)

\(=\)







\(\ds \frac 1 {b^3}\)




















\(\ds D\)

\(=\)







\(\ds -\frac {6 a^3} {b^5}\)




















\(\ds E\)

\(=\)







\(\ds -\frac {3 a^3} {b^4}\)




















\(\ds F\)

\(=\)







\(\ds -\frac {a^3} {b^3}\)









Hence the result.
$\blacksquare$





