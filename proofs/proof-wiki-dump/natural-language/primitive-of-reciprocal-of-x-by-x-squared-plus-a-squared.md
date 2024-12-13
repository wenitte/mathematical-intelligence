# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_x_squared_plus_a_squared



Theorem
$\ds \int \frac {\rd x} {x \paren {x^2 + a^2} } = \frac 1 {2 a^2} \map \ln {\frac {x^2} {x^2 + a^2} } + C$


Proof 1













\(\ds \int \frac {\d x} {x \paren {x^2 + a^2} }\)

\(=\)







\(\ds \int \paren {\frac 1 {a^2 x} - \frac x {a^2 \paren {x^2 + a^2} } } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \frac {\d x} x - \frac 1 {a^2} \int \frac {x \rd x} {x^2 + a^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \ln \size x - \frac 1 {a^2} \int \frac {x \rd x} {x^2 + a^2} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \ln \size x - \frac 1 {a^2} \paren {\frac 1 2 \map \ln {x^2 + a^2} } + C\)





Primitive of $\dfrac x {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a^2} \map \ln {\frac {x^2} {x^2 + a^2} } + C\)





Difference of Logarithms



$\blacksquare$


Proof 2













\(\ds \int \frac {\d x} {x \paren {x^2 + a^2} }\)

\(=\)







\(\ds \int \frac {a^2 \rd x} {a^2 x \paren {x^2 + a^2} }\)





multiplying top and bottom by $a^2$














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {x^2 + a^2 - x^2} \rd x} {a^2 x \paren {x^2 + a^2} }\)





adding and subtracting $x^2$














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \frac {\paren {x^2 + a^2} \rd x} {x \paren {x^2 + a^2} } - \frac 1 {a^2} \int \frac {x^2 \rd x} {x \paren {x^2 + a^2} }\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \frac {\d x} x - \frac 1 {a^2} \int \frac {x \rd x} {x^2 + a^2}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \ln \size x - \frac 1 {a^2} \int \frac {x \rd x} {x^2 + a^2} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \ln \size x - \frac 1 {a^2} \paren {\frac 1 2 \map \ln {x^2 + a^2} } + C\)





Primitive of $\dfrac x {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a^2} \map \ln {\frac {x^2} {x^2 + a^2} } + C\)





Difference of Logarithms



$\blacksquare$


Proof 3
From Primitive of Reciprocal of x by Power of x plus Power of a:

$\ds \int \frac {\d x} {x \paren {x^n + a^n} } = \frac 1 {n a^n} \ln \size {\frac {x^n} {x^n + a^n} } + C$

So:














\(\ds \int \frac {\d x} {x \paren {x^2 + a^2} }\)

\(=\)







\(\ds \frac 1 {2 a^2} \ln \size {\frac {x^2} {x^2 + a^2} } + C\)





Primitive of $\dfrac 1 {x \paren {x^n + a^n} }$ with $n = 2$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a^2} \map \ln {\frac {x^2} {x^2 + a^2} } + C\)





Absolute Value of Even Power



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^2 + a^2$: $14.129$




