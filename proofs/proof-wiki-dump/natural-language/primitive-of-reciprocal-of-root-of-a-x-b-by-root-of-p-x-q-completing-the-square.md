# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_a_x_%2B_b_by_Root_of_p_x_%2B_q/Completing_the_Square

Lemma for Primitive of $\frac 1 {\sqrt {\paren {a x + b} \paren {p x + q} } }$
Let $a, b, p, q \in \R$ such that $a p \ne b q$.
Then:

$\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } } = \begin {cases}
\ds \frac 1 {\sqrt {a p} } \int \frac {\d u} {\sqrt {u^2 - \paren {b p - a q}^2} } & : a p > 0 \\
\ds \frac 1 {\sqrt {-a p} } \int \frac {\d u} {\sqrt {\paren {b p - a q}^2 - u^2} } & : a p < 0
\end {cases}$
where:

$u := 2 a p x + b p + a q$


Proof













\(\ds \paren {a x + b} \paren {p x + q}\)

\(=\)







\(\ds a p x^2 + \paren {b p + a q} + b q\)





multiplying out














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 a p x + b p + a q}^2 + 4 a p b q - \paren {b p + a q}^2} {4 a p}\)





Completing the Square: $a \gets a p$, $b \gets \paren {b p + a q}$, $c \gets b q$














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 a p x + b p + a q}^2 + 4 a p b q - \paren {\paren {b p}^2 + 2 a p b q + \paren {a q}^2} } {4 a p}\)





Square of Sum














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 a p x + b p + a q}^2 - \paren {\paren {b p}^2 - 2 a p b q + \paren {a q}^2} } {4 a p}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 a p x + b p + a q}^2 - \paren {b p - a q}^2} {4 a p}\)





Square of Difference




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)

\(=\)







\(\ds \int \sqrt {\frac {4 a p} {\paren {2 a p x + b p + a q}^2 - \paren {b p - a q}^2} } \rd x\)










Let us make the substitution:














\(\ds u\)

\(=\)







\(\ds 2 a p x + b p + a q\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d u} {\d x}\)

\(=\)







\(\ds 2 a p\)











Case $1
\quad a p > 0$













\(\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)

\(=\)







\(\ds \int \sqrt {\frac {4 a p} {\paren {2 a p x + b p + a q}^2 - \paren {b p - a q}^2} } \rd x\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \int \dfrac 1 {2 a p} \sqrt {\frac {4 a p} {u^2 - \paren {b p - a q}^2} } \rd u\)





Integration by Substitution: from $(2)$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {a p} } \int \frac {\d u} {\sqrt {u^2 - \paren {b p - a q}^2} }\)





simplification



$\Box$


Case $2
\quad a p < 0$













\(\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)

\(=\)







\(\ds \int \sqrt {\frac {4 a p} {\paren {2 a p x + b p + a q}^2 - \paren {b p - a q}^2} } \rd x\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \int \sqrt {\frac {-4 \paren {-a p} } {\paren {2 a p x + b p + a q}^2 - \paren {b p - a q}^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \sqrt {\frac {4 \paren {-a p} } {\paren {b p - a q}^2 - \paren {2 a p x + b p + a q}^2} } \rd x\)





simplification














\(\ds \)

\(=\)







\(\ds \int \dfrac 1 {2 a p} \sqrt {\frac {4 \paren {-a p} } {\paren {b p - a q}^2 - u^2} } \rd u\)





Integration by Substitution: from $(2)$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {-a p} } \int \frac {\d u} {\sqrt {\paren {b p - a q}^2 - u^2} }\)





simplification



$\blacksquare$





