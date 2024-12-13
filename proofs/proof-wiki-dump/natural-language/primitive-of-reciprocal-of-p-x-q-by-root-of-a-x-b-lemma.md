# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_x_%2B_q_by_Root_of_a_x_%2B_b/Lemma

Lemma for Primitive of $\frac 1 {\paren {p x + q} \sqrt {a x + b} }$ 
Let $a, b, p, q \in \R$ such that $a p \ne b q$ and such that $p \ne 0$.
Then:

$\ds \int \frac {\d x} {\paren {p x + q} \sqrt {a x + b} } = \dfrac 2 p \int \frac {\d u} {u^2 - \paren {\dfrac {b p - a q} p} }$
where:

$u = \sqrt {a x + b}$


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \sqrt {a x + b}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \frac {u^2 - b} a\)









and:














\(\ds \dfrac {\d u} {\d x}\)

\(=\)







\(\ds \dfrac a {2 \sqrt {a x + b} }\)





Power Rule for Derivatives, Chain Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d x} {\d u}\)

\(=\)







\(\ds \dfrac {2 \sqrt {a x + b} } a\)





Derivative of Inverse Function




Then:














\(\ds \int \frac {\d x} {\paren {p x + q} \sqrt {a x + b} }\)

\(=\)







\(\ds \int \frac 1 {\paren {p \paren {\frac {u^2 - b} a} + q} \sqrt {a x + b} } \dfrac {2 \sqrt {a x + b} } a \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \dfrac 2 a \int \frac {\d u} {\paren {\dfrac {p \paren {u^2 - b} + a q} a} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 2 p \int \frac {\d u} {u^2 - \dfrac {b p - a q} p}\)





simplifying



$\blacksquare$





