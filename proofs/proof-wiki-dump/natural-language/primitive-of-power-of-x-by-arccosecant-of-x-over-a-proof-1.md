# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Arccosecant_of_x_over_a/Proof_1

Theorem
$\ds \int x^m \arccsc \frac x a \rd x = \begin{cases}
\ds \dfrac {x^{m + 1} } {m + 1} \arccsc \dfrac x a + \dfrac a {m + 1} \int \dfrac {x^m \rd x} {\sqrt {x^2 - a^2} } & : 0 < \arccsc \dfrac x a < \dfrac \pi 2 \\
\ds \dfrac {x^{m + 1} } {m + 1} \arccsc \dfrac x a - \dfrac a {m + 1} \int \dfrac {x^m \rd x} {\sqrt {x^2 - a^2} } & : -\dfrac \pi 2 < \arccsc \dfrac x a < 0 \\
\end{cases}$


Proof
Recall:




\(\text {(1)}: \quad\)









\(\ds \int x^m \arccsc x \rd x\)

\(=\)







\(\ds \begin {cases}
\ds \dfrac {x^{m + 1} } {m + 1} \arccsc x + \dfrac 1 {m + 1} \int \dfrac {x^m \rd x} {\sqrt {x^2 - 1} } & : 0 < \arccsc x < \dfrac \pi 2 \\
\ds \dfrac {x^{m + 1} } {m + 1} \arccsc x - \dfrac 1 {m + 1} \int \dfrac {x^m \rd x} {\sqrt {x^2 - 1} } & : -\dfrac \pi 2 < \arccsc x < 0 \\
\end {cases}\)






Primitive of $x^m \arccsc x$




Then:














\(\ds \int x^m \arccsc \frac x a \rd x\)

\(=\)







\(\ds \int a^m \paren {\dfrac x a}^m \arccsc \frac x a \rd x\)





manipulating into appropriate form














\(\ds \)

\(=\)







\(\ds a^m \int \paren {\dfrac x a}^m \arccsc \frac x a \rd x\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds a^m \paren {\dfrac 1 {1 / a} \paren {\begin {cases}
\dfrac 1 {m + 1} \paren {\dfrac x a}^{m + 1} \arccsc \dfrac x a + \dfrac 1 {m + 1} \ds \int \paren {\dfrac x a}^m \frac {\d x} {\sqrt {\paren {\dfrac x a}^2 - 1} } & : 0 < \arccsc \dfrac x a < \dfrac \pi 2 \\
\dfrac 1 {m + 1} \paren {\dfrac x a}^{m + 1} \arccsc \dfrac x a - \dfrac 1 {m + 1} \ds \int \paren {\dfrac x a}^m \frac {\d x} {\sqrt {\paren {\dfrac x a}^2 - 1} } & : -\dfrac \pi 2 < \arccsc \dfrac x a < 0 \\
\end {cases} } }\)






Primitive of Function of Constant Multiple, from $(1)$














\(\ds \)

\(=\)







\(\ds \begin {cases}
\dfrac {x^{m + 1} } {m + 1} \arccsc \dfrac x a + \dfrac a {m + 1} \ds \int \dfrac {x^m \rd x} {\sqrt {x^2 - a^2} } & : 0 < \arccsc \dfrac x a < \dfrac \pi 2 \\
\dfrac {x^{m + 1} } {m + 1} \arccsc \dfrac x a - \dfrac a {m + 1} \ds \int \dfrac {x^m \rd x} {\sqrt {x^2 - a^2} } & : -\dfrac \pi 2 < \arccsc \dfrac x a < 0 \\
\end {cases}\)






simplifying



$\blacksquare$


Also see
Primitive of $x^m \arcsin \dfrac x a$
Primitive of $x^m \arccos \dfrac x a$
Primitive of $x^m \arctan \dfrac x a$
Primitive of $x^m \arccot \dfrac x a$
Primitive of $x^m \arcsec \dfrac x a$




