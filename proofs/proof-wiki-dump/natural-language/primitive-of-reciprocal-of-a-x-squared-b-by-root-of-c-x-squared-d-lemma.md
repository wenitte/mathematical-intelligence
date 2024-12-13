# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_x_squared_%2B_b_by_Root_of_c_x_squared_%2B_d/Lemma

Theorem
Let $a, b, c, d \in \R$ be real numbers such that $a d \ne b c$.
Then:

$\ds \int \dfrac {\d x} {\paren {a x^2 + b} \sqrt {c x^2 + d} } = \dfrac {\sqrt c} {2 a} \int \dfrac {\d u} {\paren {\sqrt {\paren {u - \frac d 2}^2 - \frac d 4} } \paren {u - \frac {a d + b c} a} }$
where $u := c x^2 + d$.


Proof













\(\ds u\)

\(=\)







\(\ds c x^2 + d\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \sqrt {\dfrac {u - d} c}\)


















\(\, \ds \text {and} \, \)

\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds 2 c x\)





Primitive of Power



Hence:














\(\ds \int \dfrac {\d x} {\paren {a x^2 + b} \sqrt {c x^2 + d} }\)

\(=\)







\(\ds \int \dfrac {\d u} {2 c x \paren {a x^2 + b} \sqrt {c x^2 + d} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int \dfrac {\d u} {2 c \sqrt {\frac {u - d} c} \paren {a \paren {\frac {u - d} c} + b} \sqrt u}\)





substituting for $x$














\(\ds \)

\(=\)







\(\ds \int \dfrac {c \sqrt c \d u} {2 c \sqrt {u - d} \paren {a u - a d + b c} \sqrt u}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt c} {2 a} \int \dfrac {\d u} {\paren {\sqrt {\paren {u - \frac d 2}^2 - \frac d 4} } \paren {u - \frac {a d - b c} a} }\)





completing the square



$\blacksquare$





