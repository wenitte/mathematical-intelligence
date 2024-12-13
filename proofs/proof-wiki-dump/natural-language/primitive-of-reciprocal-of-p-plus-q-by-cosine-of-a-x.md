# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_plus_q_by_Cosine_of_a_x



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


Examples
Primitive of $\dfrac 1 {5 + 3 \cos x}$
$\ds \int \dfrac {\d x} {5 + 3 \cos x} = \dfrac 1 2 \map \arctan {\dfrac 1 2 \tan \dfrac x 2} + C$


Also presented as
$p^2 < q^2$: Also presented as
The result for $p^2 < q^2$ is also seen presented in the form:

$\ds \int \frac {\d x} {p + q \cos a x} = \frac 1 {a \sqrt {q^2 - p^2} } \ln \size {\dfrac {q + p \cos a x + \sqrt {q^2 - p^2} \sin a x} {p + q \cos a x} } + C$


Also see
For $p = q$: Primitive of $\dfrac 1 {1 + \cos a x}$


For $p = -q$: Primitive of $\dfrac 1 {1 - \cos a x}$


Primitive of $\dfrac 1 {p + q \sin a x}$
Primitive of $\dfrac 1 {p + q \tan a x}$
Primitive of $\dfrac 1 {p + q \cot a x}$
Primitive of $\dfrac 1 {q + p \sec a x}$
Primitive of $\dfrac 1 {q + p \csc a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cos a x$: $14.390$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Back endpapers: A Brief Table of Integrals: $74$.




