# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_x_%2B_b_by_p_x_%2B_q/Partial_Fraction_Expansion

Lemma for Primitive of Reciprocal of a x + b by p x + q
$\dfrac 1 {\paren {a x + b} \paren {p x + q} } \equiv \dfrac {-a} {\paren {b p - a q} \paren {a x + b} } + \dfrac p {\paren {b p - a q} \paren {p x + q} }$
for $b p \ne a q$.


Proof













\(\ds \frac 1 {\paren {a x + b} \paren {p x + q} }\)

\(\equiv\)







\(\ds \frac A {a x + b} + \frac B {p x + q}\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds 1\)

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







\(\ds 1\)





substituting for $x$ in $(1)$: term in $p x + q$ is $0$








\(\ds \leadsto \ \ \)





\(\ds B \paren {\frac {b p - a q} p}\)

\(=\)







\(\ds 1\)





valid only when $b p \ne a q$








\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds \frac p {b p - a q}\)










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







\(\ds 1\)





substituting for $x$ in $(1)$: term in $a x + b$ is $0$








\(\ds \leadsto \ \ \)





\(\ds A \paren {\frac {-b p + a q} a}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac {-a} {b p - a q}\)










Summarising:














\(\ds A\)

\(=\)







\(\ds \frac {-a} {p b - a q}\)




















\(\ds B\)

\(=\)







\(\ds \frac p {b p - a q}\)









Hence the result.
$\blacksquare$





