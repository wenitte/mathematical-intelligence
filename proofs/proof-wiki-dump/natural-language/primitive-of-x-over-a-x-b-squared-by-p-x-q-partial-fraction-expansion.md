# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_a_x_%2B_b_squared_by_p_x_%2B_q/Partial_Fraction_Expansion

Lemma for Primitive of x over a x + b squared by p x + q
$\dfrac x {\paren {a x + b}^2 \paren {p x + q} } \equiv \dfrac 1 {b p - a q} \paren {\dfrac {a q} {\paren {b p - a q} \paren {a x + b} } + \dfrac b {\paren {a x + b}^2} - \dfrac {p q} {\paren {b p - a q} \paren {p x + q} } }$


Proof













\(\ds \frac x {\paren {a x + b}^2 \paren {p x + q} }\)

\(\equiv\)







\(\ds \frac A {a x + b} + \frac B {\paren {a x + b}^2} + \frac C {p x + q}\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds x\)

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







\(\ds -\frac b a\)





substituting for $x$ in $(1)$: term in $a x + b$ is $0$








\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds \frac b {b p - a q}\)










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







\(\ds -\frac q p\)





substituting for $x$ in $(1)$: term in $a x + b$ is $0$




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds C\)

\(=\)







\(\ds \frac {-p q} {\paren {b p - a q}^2}\)










Equating $2$nd powers of $x$ in $(1)$:














\(\ds 0\)

\(=\)







\(\ds A a p + C a^2\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds -C \frac a p\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds -\frac {p q} {\paren {b p - a q}^2} \frac a p\)





substituting for $C$ from $(2)$








\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac {a q} {\paren {b p - a q}^2}\)





simplifying




Summarising:














\(\ds A\)

\(=\)







\(\ds \frac {a q} {\paren {b p - a q}^2}\)




















\(\ds B\)

\(=\)







\(\ds \frac b {b p - a q}\)




















\(\ds C\)

\(=\)







\(\ds \frac {-p q} {\paren {b p - a q}^2}\)









Hence the result.
$\blacksquare$





