# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_cubed_plus_a_cubed_squared

Theorem
$\ds \int \frac {\d x} {\paren {x^3 + a^3}^2} = \frac x {3 a^3 \paren {x^3 + a^3} } + \frac 1 {9 a^5} \map \ln {\frac {\paren {x + a}^2} {x^2 - a x + a^2} } + \frac 2 {3 a^5 \sqrt 3} \arctan \frac {2 x - a} {a \sqrt 3}$


Proof













\(\ds z\)

\(=\)







\(\ds x^3\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 3 x^2\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\paren {x^3 + a^3}^2}\)

\(=\)







\(\ds \int \frac {\d z} {3 x^2 \paren {z + a^3}^2}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 3 \int \frac {\d z} {z^{2/3} \paren {z + a^3}^2}\)





Linear Combination of Primitives




Then from Primitive of $\dfrac 1 {\paren {a x + b}^m \paren {p x + q}^n}$:

$\ds \int \frac {\d x} {\paren {a x + b}^m \paren {p x + q}^n} = \frac {-1} {\paren {n - 1} \paren {b p - a q} } \paren {\frac 1 {\paren {a x + b}^{m - 1} \paren {p x + q}^{n - 1} } + a \paren {m + n - 2} \int \frac {\d x} {\paren {a x + b}^m \paren {p x + q}^{n - 1} } }$
Here we have $a = 1, b = 0, m = \dfrac 2 3, p = 1, q = a^3, n = 2$.

So:














\(\ds \)

\(\)







\(\ds \frac 1 3 \int \frac {\d z} {z^{2/3} \paren {z + a^3}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 3 \paren {\frac {-1} {\paren 1 \paren {-a^3} } \paren {\frac 1 {z^{-1/3} \paren {z + a^3}^1} + \paren {\frac 2 3 + 2 - 2} \int \frac {\d z} {\paren z^{2/3} \paren {z + a^3}^1} } }\)





Primitive of $\dfrac 1 {\paren {a x + b}^m \paren {p x + q}^n}$














\(\ds \)

\(=\)







\(\ds \frac 1 {3 a^3 z^{-1/3} \paren {z + a^3} } + \frac 2 {9 a^3} \int \frac {\d z} {z^{2/3} \paren {z + a^3} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac x {3 a^3 \paren {x^3 + a^3} } + \frac 2 {9 a^3} \int \frac {3 x^2 \rd x} {x^2 \paren {x^3 + a^3} }\)





substituting for $z$














\(\ds \)

\(=\)







\(\ds \frac x {3 a^3 \paren {x^3 + a^3} } + \frac 2 {3 a^3} \int \frac {\d x} {\paren {x^3 + a^3} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac x {3 a^3 \paren {x^3 + a^3} } + \frac 2 {3 a^3} \paren {\frac 1 {6 a^2} \map \ln {\frac {\paren {x + a}^2} {x^2 - a x + a^2} } + \frac 1 {a^2 \sqrt 3} \arctan \frac {2 x - a} {a \sqrt 3} }\)





Primitive of $\dfrac 1 {\paren {x^3 + a^3} }$














\(\ds \)

\(=\)







\(\ds \frac x {3 a^3 \paren {x^3 + a^3} } + \frac 1 {9 a^5} \map \ln {\frac {\paren {x + a}^2} {x^2 - a x + a^2} } + \frac 2 {3 a^5 \sqrt 3} \arctan \frac {2 x - a} {a \sqrt 3}\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^3 + a^3$: $14.304$




