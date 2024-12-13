# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_a_x_%2B_b_by_Root_of_p_x_%2B_q/Lemma_2

Lemma for Primitive of $\frac 1 {\sqrt {\paren {a x + b} \paren {p x + q} } }$
$\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } } = \begin {cases}
\ds \frac 2 {\sqrt {a p} } \int \frac {\d u} {\sqrt {u^2 - \paren {\frac {b p - a q} p} } } & : a p > 0 \\
\ds \frac 2 {\sqrt {-a p} } \int \frac {\d u} {\sqrt {\paren {\frac {b p - a q} p} - u^2} } & : a p < 0
\end {cases}$
where:

$u := \sqrt {a x + b}$


Proof
Let us make the substitution:

$u = \sqrt {a x + b}$


Lemma
Let $u = \sqrt {a x + b}$.
Then:

$\ds \sqrt {p x + q} = \sqrt {\paren {\frac p a} \paren {u^2 - \paren {\frac {b p - a q} p} } }$
$\Box$


Case $1
\quad a p > 0$













\(\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)

\(=\)







\(\ds \int \frac {2 u \rd u} {a \sqrt {\frac p a} \sqrt {u^2 - \paren {\frac {b p - a q} p} } u}\)





Primitive of Function of $\sqrt {p x + q}$














\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt {a p} } \int \frac {\d u} {\sqrt {u^2 - \paren {\frac {b p - a q} p} } }\)





Primitive of Constant Multiple of Function



$\Box$


Case $2
\quad a p < 0$
We have:














\(\ds a p\)

\(<\)







\(\ds 0\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds \dfrac p a\)

\(<\)







\(\ds 0\)









Then:














\(\ds \sqrt {p x + q}\)

\(=\)







\(\ds \sqrt {\paren {\frac p a} \paren {u^2 - \paren {\frac {b p - a q} p} } }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \sqrt {\paren {-\frac p a} \paren {\paren {\frac {b p - a q} p} - u^2} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {-\frac p a} \sqrt {\paren {\frac {b p - a q} p} - u^2}\)










Then:














\(\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)

\(=\)







\(\ds \dfrac 2 p \int \frac {u \rd u} {\sqrt {-\frac p a} \paren {\sqrt {\paren {\frac {b p - a q} p} - u^2} } u}\)





Primitive of Function of $\sqrt {p x + q}$














\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt {-a p} } \int \frac {\d u} {\sqrt {\paren {\frac {b p - a q} p} - u^2} }\)





Primitive of Constant Multiple of Function and simplifying



$\blacksquare$





