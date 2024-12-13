# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_x_cubed_plus_a_cubed_squared/Lemma

Primitive of x over x cubed plus a cubed squared: Lemma
$\ds \int \frac {x \rd x} {\paren {x^3 + a^3}^2} = \frac {x^2} {3 a^3 \paren {x^3 + a^3} } + \frac 1 {3 a^3} \int \frac {x \rd x} {\paren {x^3 + a^3} }$


Proof













\(\ds z\)

\(=\)







\(\ds x^3\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 3 x^2\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac {x \rd x} {\paren {x^3 + a^3}^2}\)

\(=\)







\(\ds \int \frac {x \rd z} {3 x^2 \paren {z + a^3}^2}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 3 \int \frac {\d z} {z^{1/3} \paren {z + a^3}^2}\)





Linear Combination of Primitives




Then from Primitive of $\dfrac {\d x} {\paren {a x + b}^m \paren {p x + q}^n}$:

$\ds \int \frac {\d x} {\paren {a x + b}^m \paren {p x + q}^n} = \frac {-1} {\paren {n - 1} \paren {b p - a q} } \paren {\frac 1 {\paren {a x + b}^{m - 1} \paren {p x + q}^{n - 1} } + a \paren {m + n - 2} \int \frac {\d x} {\paren {a x + b}^m \paren {p x + q}^{n - 1} } }$
Here we have $a = 1, b = 0, m = \dfrac 1 3, p = 1, q = a^3, n = 2$.

So:














\(\ds \)

\(\)







\(\ds \frac 1 3 \int \frac {\d z} {z^{1/3} \paren {z + a^3}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 3 \paren {\frac {-1} {\paren 1 \paren {-a^3} } \paren {\frac 1 {z^{-2/3} \paren {z + a^3}^1} + \paren {\frac 1 3 + 2 - 2} \int \frac {\d z} {\paren z^{1/3} \paren {z + a^3}^1} } }\)





Primitive of $\dfrac 1 {\paren {a x + b}^m \paren {p x + q}^n}$














\(\ds \)

\(=\)







\(\ds \frac 1 {3 a^3 z^{-2/3} \paren {z + a^3} } + \frac 1 {9 a^3} \int \frac {\d z} {z^{1/3} \paren {z + a^3} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {x^2} {3 a^3 \paren {x^3 + a^3} } + \frac 1 {9 a^3} \int \frac {3 x^2 \rd x} {x \paren {x^3 + a^3} }\)





substituting for $z$














\(\ds \)

\(=\)







\(\ds \frac {x^2} {3 a^3 \paren {x^3 + a^3} } + \frac 1 {3 a^3} \int \frac {x \rd x} {\paren {x^3 + a^3} }\)





simplifying



$\blacksquare$





