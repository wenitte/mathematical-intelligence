# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_by_x_cubed_plus_a_cubed_squared

Theorem
$\ds \int \frac {\d x} {x^2 \paren {x^3 + a^3}^2} = \frac {-1} {a^6 x} - \frac {x^2} {3 a^6 \paren {x^3 + a^3} } - \frac 4 {3 a^6} \int \frac {x \rd x} {x^3 + a^3}$


Proof













\(\ds \int \frac {\d x} {x^2 \paren {x^3 + a^3}^2}\)

\(=\)







\(\ds \int \frac {a^3 \rd x} {a^3 x^2 \paren {x^3 + a^3}^2}\)





multiplying top and bottom by $a^3$














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {x^3 + a^3 - x^3} \rd x} {a^3 x^2 \paren {x^3 + a^3}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \int \frac {\paren {x^3 + a^3} \rd x} {x^2 \paren {x^3 + a^3}^2} - \frac 1 {a^3} \int \frac {x^3 \rd x} {x^2 \paren {x^3 + a^3}^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \int \frac {\d x} {x^2 \paren {x^3 + a^3} } - \frac 1 {a^3} \int \frac {x \rd x} {\paren {x^3 + a^3}^2}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \paren {\frac {-1} {a^3 x} - \frac 1 {a^3} \int \frac {x \rd x} {\paren {x^3 + a^3} } } - \frac 1 {a^3} \int \frac {x \rd x} {\paren {x^3 + a^3}^2}\)





Primitive of $\dfrac 1 {x^2 \paren {x^3 + a^3} }$: Lemma














\(\ds \)

\(=\)







\(\ds \frac {-1} {a^6 x} - \frac 1 {a^6} \int \frac {x \rd x} {\paren {x^3 + a^3} } - \frac 1 {a^3} \int \frac {x \rd x} {\paren {x^3 + a^3}^2}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {-1} {a^6 x} - \frac 1 {a^6} \int \frac {x \rd x} {\paren {x^3 + a^3} } - \frac 1 {a^3} \paren {\frac {x^2} {3 a^3 \paren {x^3 + a^3} } + \frac 1 {3 a^3} \int \frac {x \rd x} {\paren {x^3 + a^3} } }\)





Primitive of $\dfrac x {\paren {x^3 + a^3}^2}$: Lemma














\(\ds \)

\(=\)







\(\ds \frac {-1} {a^6 x} - \frac {x^2} {3 a^6 \paren {x^3 + a^3} } - \frac 4 {3 a^6} \int \frac {x \rd x} {x^3 + a^3}\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^3 + a^3$: $14.308$




