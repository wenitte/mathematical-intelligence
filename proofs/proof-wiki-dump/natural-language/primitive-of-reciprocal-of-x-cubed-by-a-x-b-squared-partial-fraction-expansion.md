# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_cubed_by_a_x_%2B_b_squared/Partial_Fraction_Expansion

Lemma for Primitive of $\dfrac 1 {x^3 \paren {a x + b}^2}$
$\dfrac 1 {x^3 \paren {a x + b}^2} \equiv \dfrac {3 a^2} {b^4 x} - \dfrac {2 a} {b^3 x^2} + \dfrac 1 {b^2 x^3} - \dfrac {3 a^3} {b^4 \paren {a x + b} } - \dfrac {a^3} {b^3 \paren {a x + b}^2}$


Proof













\(\ds \dfrac 1 {x^3 \paren {a x + b}^2}\)

\(\equiv\)







\(\ds \dfrac A x + \dfrac B {x^2} + \dfrac C {x^3} + \dfrac D {a x + b} + \dfrac E {\paren {a x + b}^2}\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\equiv\)







\(\ds A x^2 \paren {a x + b}^2 + B x \paren {a x + b}^2 + C \paren {a x + b}^2 + D x^3 \paren {a x + b} + E x^3\)





multiplying through by $x^3 \paren {a x + b}^2$














\(\ds \)

\(\equiv\)







\(\ds A a^2 x^4 + 2 A a b x^3 + A b^2 x^2\)





multiplying everything out














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds B a^2 x^3 + 2 B a b x^2 + B b^2 x\)





(tedious though this is, it helps to














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds C a^2 x^2 + 2 C a b x + C b^2\)





identify the equal indices)














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds D a x^4 + D b x^3 + E x^3\)










Setting $a x + b = 0$ in $(1)$:














\(\ds a x + b\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds -\frac b a\)














\(\ds \leadsto \ \ \)





\(\ds E \paren {-\frac b a}^3\)

\(=\)







\(\ds 1\)





substituting for $x$ in $(1)$: terms in $a x + b$ are all $0$








\(\ds \leadsto \ \ \)





\(\ds E\)

\(=\)







\(\ds -\frac {a^3} {b^3}\)










Equating constants in $(1)$:














\(\ds 1\)

\(=\)







\(\ds C b^2\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds C\)

\(=\)







\(\ds \frac 1 {b^2}\)










Equating $1$st powers of $x$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds 2 C a b + B b^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {2 a b} {b^2}\)

\(=\)







\(\ds -B b^2\)





subtituting for $C$ from $(2)$




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds -\frac {2 a} {b^3}\)










Equating $2$nd powers of $x$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds A b^2 + 2 B a b + C a^2\)




















\(\ds \)

\(=\)







\(\ds A b^2 + 2 \paren {-\frac {2 a} {b^3} } a b + \paren {\frac 1 {b^2} } a^2\)





substituting for $B$ and $C$ from $(2)$ and $(3)$








\(\ds \leadsto \ \ \)





\(\ds A b^2\)

\(=\)







\(\ds \frac {4 a^2} {b^2} - \frac {a^2} {b^2}\)





rearranging




\(\text {(4)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac {3 a^2} {b^4}\)





simplifying




Equating $4$th powers of $x$:














\(\ds 0\)

\(=\)







\(\ds A a^2 + D a\)














\(\ds \leadsto \ \ \)





\(\ds D\)

\(=\)







\(\ds \frac {3 a^3} {b^4}\)





substituting for $A$ from $(3)$ and simplifying




Summarising:














\(\ds A\)

\(=\)







\(\ds \frac {3 a^2} {b^4}\)




















\(\ds B\)

\(=\)







\(\ds -\frac {2 a} {b^3}\)




















\(\ds C\)

\(=\)







\(\ds \frac 1 {b^2}\)




















\(\ds D\)

\(=\)







\(\ds \frac {3 a^3} {b^4}\)




















\(\ds E\)

\(=\)







\(\ds -\frac {a^3} {b^3}\)









Hence the result.
$\blacksquare$





