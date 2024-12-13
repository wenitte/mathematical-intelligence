# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_a_x_%2B_b_squared_by_p_x_%2B_q/Partial_Fraction_Expansion

Lemma for Primitive of $\dfrac {x^2} {\paren {a x + b}^2 \paren {p x + q} }$
$\dfrac {x^2} {\paren {a x + b}^2 \paren {p x + q} } \equiv \dfrac {b \paren {b p - 2 a q} } {a \paren {b p - a q}^2 \paren {a x + b} } + \dfrac {-b^2} {a \paren {b p - a q} \paren {a x + b}^2} + \dfrac {q^2} {\paren {b p - a q}^2 \paren {p x + q} }$


Proof













\(\ds \frac {x^2} {\paren {a x + b}^2 \paren {p x + q} }\)

\(\equiv\)







\(\ds \frac A {a x + b} + \frac B {\paren {a x + b}^2} + \frac C {p x + q}\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds x^2\)

\(\equiv\)







\(\ds A \paren {a x + b} \paren {p x + q} + B \paren {p x + q} + C \paren {a x + b}^2\)





multiplying through by $\paren {a x + b}^2 \paren {p x + q}$




Setting $a x + b = 0$ in $(1)$:














\(\ds a x + b\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds -\frac b a\)














\(\ds \leadsto \ \ \)





\(\ds B \paren {p \paren {-\frac b a} + q}\)

\(=\)







\(\ds \frac {b^2} {a^2}\)





substituting for $x$ in $(1)$: term in $a x + b$ is $0$








\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds \frac {-b^2} {a \paren {b p - a q} }\)










Setting $p x + q = 0$ in $(1)$:














\(\ds p x + q\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds -\frac q p\)














\(\ds \leadsto \ \ \)





\(\ds C \paren {a \paren {-\frac q p} + b}^2\)

\(=\)







\(\ds \frac {q^2} {p^2}\)





substituting for $x$ in $(1)$: term in $a x + b$ is $0$




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds C\)

\(=\)







\(\ds \frac {q^2} {\paren {b p - a q}^2}\)










Equating $2$nd powers of $x$ in $(1)$:














\(\ds 1\)

\(=\)







\(\ds A a p + C a^2\)














\(\ds \leadsto \ \ \)





\(\ds A a p\)

\(=\)







\(\ds 1 - \frac {q^2} {\paren {b p - a q}^2} a^2\)





substituting for $C$ from $(2)$








\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac 1 {a p} - \frac {a q^2} {p \paren {b p - a q}^2}\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac {\paren {b p - a q}^2 - a^2 q^2} {a p \paren {b p - a q}^2}\)





common denominator








\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac {b \paren {b p - 2 a q} } {a \paren {b p - a q}^2}\)





simplifying




Summarising:














\(\ds A\)

\(=\)







\(\ds \frac {b \paren {b p - 2 a q} } {a \paren {b p - a q}^2}\)




















\(\ds B\)

\(=\)







\(\ds \frac {-b^2} {a \paren {b p - a q} }\)




















\(\ds C\)

\(=\)







\(\ds \frac {q^2} {\paren {b p - a q}^2}\)









Hence the result.
$\blacksquare$





