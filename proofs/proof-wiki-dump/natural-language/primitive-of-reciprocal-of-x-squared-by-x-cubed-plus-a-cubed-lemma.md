# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_by_x_cubed_plus_a_cubed/Lemma

Theorem
$\ds \int \frac {\d x} {x^2 \paren {x^3 + a^3} } = \frac {-1} {a^3 x} - \frac 1 {a^3} \int \frac {x \rd x} {\paren {x^3 + a^3} }$


Proof













\(\ds \int \frac {\d x} {x^2 \paren {x^3 + a^3} }\)

\(=\)







\(\ds \int \frac {a^3 \rd x} {a^3 x^2 \paren {x^3 + a^3} }\)





multiplying top and bottom by $a^3$














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {x^3 + a^3 - x^3} \rd x} {a^3 x^2 \paren {x^3 + a^3} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \int \frac {\paren {x^3 + a^3} \rd x} {x^2 \paren {x^3 + a^3} } - \frac 1 {a^3} \int \frac {x^3 \rd x} {x^2 \paren {x^3 + a^3} }\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \int \frac {\d x} {x^2} - \frac 1 {a^3} \int \frac {x \rd x} {\paren {x^3 + a^3} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \paren {\frac {-1} x} - \frac 1 {a^3} \int \frac {x \rd x} {\paren {x^3 + a^3} }\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {-1} {a^3 x} - \frac 1 {a^3} \int \frac {x \rd x} {\paren {x^3 + a^3} }\)





simplifying



$\blacksquare$





