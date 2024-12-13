# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_a_x_%2B_b_by_p_x_%2B_q/Partial_Fraction_Expansion

Lemma for Primitive of x over a x + b by p x + q
$\dfrac x {\paren {a x + b} \paren {p x + q} } \equiv \dfrac b {\paren {b p - a q} \paren {a x + b} } - \dfrac q {\paren {b p - a q} \paren {p x + q} }$


Proof













\(\ds \frac x {\paren {a x + b} \paren {p x + q} }\)

\(\equiv\)







\(\ds \frac A {a x + b} + \frac B {p x + q}\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds x\)

\(\equiv\)







\(\ds A \paren {p x + q} + B \paren {a x + b}\)





multiplying through by $\paren {a x + b} \paren {p x + q}$




Setting $p x + q = 0$ in $(1)$:














\(\ds p x + q\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds -\frac q p\)














\(\ds \leadsto \ \ \)





\(\ds B \paren {a \paren {-\frac q p} + b}\)

\(=\)







\(\ds -\frac q p\)





substituting for $x$ in $(1)$: term in $p x + q$ is $0$








\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds \frac {-q} {b p - a q}\)










Setting $a x + b = 0$ in $(1)$:














\(\ds a x + b\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds -\frac b a\)














\(\ds \leadsto \ \ \)





\(\ds A \paren {p \paren {-\frac b a} + q}\)

\(=\)







\(\ds -\frac b a\)





substituting for $x$ in $(1)$: term in $a x + b$ is $0$








\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac b {b p - a q}\)










Summarising:














\(\ds A\)

\(=\)







\(\ds \frac b {p b - a q}\)




















\(\ds B\)

\(=\)







\(\ds \frac {-q} {b p - a q}\)









Hence the result.
$\blacksquare$





