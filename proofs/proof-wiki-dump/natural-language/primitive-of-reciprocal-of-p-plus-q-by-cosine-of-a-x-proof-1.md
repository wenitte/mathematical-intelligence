# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_plus_q_by_Cosine_of_a_x/Proof_1

Theorem
$\ds \int \frac {\rd x} {p + q \cos a x} = \begin {cases}
\dfrac 2 {a \sqrt {p^2 - q^2} } \map \arctan {\sqrt {\dfrac {p - q} {p + q} } \tan \dfrac {a x} 2} + C & : p^2 > q^2 \\
\dfrac 1 {a \sqrt {q^2 - p^2} } \ln \size {\dfrac {\tan \dfrac {a x} 2 + \sqrt {\dfrac {q + p} {q - p} } } {\tan \dfrac {a x} 2 - \sqrt {\dfrac {q + p} {q - p} } } } + C & : p^2 < q^2 \\
\end {cases}$
for $p \ne q$.


Proof













\(\ds \int \frac {\d x} {p + q \cos a x}\)

\(=\)







\(\ds \frac 2 {a \paren {p - q} } \int \frac {\d u} {u^2 + \dfrac {p + q} {p - q} }\)





Weierstrass Substitution: $u = \tan \dfrac {a x} 2$




Let $p^2 > q^2$.
Then, by Sign of Quotient of Factors of Difference of Squares:

$\dfrac {p + q} {p - q} > 0$
Thus, let $\dfrac {p + q} {p - q} = d^2$.
Then:














\(\ds \int \frac {\d x} {p + q \cos a x}\)

\(=\)







\(\ds \frac 2 {a \paren {p - q} } \int \frac {\d u} {u^2 + d^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 2 {a \paren {p - q} } \frac 1 d \arctan \frac u d + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \frac 2 {a \paren {p - q} } \frac 1 {\sqrt {\dfrac {p + q} {p - q} } } \map \arctan {\frac {\tan \dfrac {a x} 2} {\sqrt {\dfrac {p + q} {p - q} } } } + C\)





substituting for $u$ and $d$














\(\ds \)

\(=\)







\(\ds \frac 2 {a \sqrt {p^2 - q^2} } \map \arctan {\sqrt {\frac {p - q} {p + q} } \tan \dfrac {a x} 2} + C\)





simplifying



$\Box$

Now let $p^2 < q^2$.
Then, by Sign of Quotient of Factors of Difference of Squares:

$\dfrac {p + q} {p - q} < 0$

Thus, let:

$-\dfrac {p + q} {p - q} = d^2$
or:

$\dfrac {q + p} {q - p} = d^2$

Then:














\(\ds \int \frac {\d x} {p + q \cos a x}\)

\(=\)







\(\ds \frac 2 {a \paren {p - q} } \int \frac {\d u} {u^2 - d^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 2 {a \paren {p - q} } \frac 1 {2 d} \ln \size {\frac {u - d} {u + d} } + C\)





Primitive of $\dfrac 1 {x^2 - a^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {a \paren {p - q} } \frac 1 {\sqrt {\dfrac {q + p} {q - p} } } \ln \size {\frac {\tan \dfrac {a x} 2 - \sqrt {\dfrac {q + p} {q - p} } } {\tan \dfrac {a x} 2 + \sqrt {\dfrac {q + p} {q - p} } } } + C\)





substituting for $u$ and $d$














\(\ds \)

\(=\)







\(\ds \frac 1 {a \sqrt {q^2 - p^2} } \ln \size {\frac {\tan \dfrac {a x} 2 - \sqrt {\dfrac {q + p} {q - p} } } {\tan \dfrac {a x} 2 + \sqrt {\dfrac {q + p} {q - p} } } } + C\)





simplifying



$\blacksquare$





