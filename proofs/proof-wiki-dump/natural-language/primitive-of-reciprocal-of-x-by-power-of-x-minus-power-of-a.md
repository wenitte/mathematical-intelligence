# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_Power_of_x_minus_Power_of_a

Theorem
$\ds \int \frac {\d x} {x \paren {x^n - a^n} } = \frac 1 {n a^n} \ln \size {\frac {x^n - a^n} {x^n} } + C$


Proof













\(\ds \int \frac {\d x} {x \paren {x^n - a^n} }\)

\(=\)







\(\ds \int \frac {a^n \rd x} {a^n x \paren {x^2 - a^2} }\)





multiplying top and bottom by $a^n$














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {-\paren {x^n - a^n} + x^n} \rd x} {a^n x \paren {x^n - a^n} }\)





adding and subtracting $x^n$














\(\ds \)

\(=\)







\(\ds \frac {-1} {a^n} \int \frac {\paren {x^n - a^n} \rd x} {x \paren {x^n - a^n} } + \frac 1 {a^n} \int \frac {x^n \rd x} {x \paren {x^n - a^n} }\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {-1} {a^n} \int \frac {\d x} x + \frac 1 {a^n} \int \frac {x^{n - 1} \rd x} {x^n - a^n}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {-1} {a^n} \ln \size x + \frac 1 {a^n} \int \frac {x^{n - 1} \rd x} {x^n - a^n} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac {-1} {a^n} \ln \size x + \frac 1 {a^n} \paren {\frac 1 n \ln \size {x^n - a^n} } + C\)





Primitive of $\dfrac {x^{n - 1} } {x^n - a^n}$














\(\ds \)

\(=\)







\(\ds \frac {-1} {n a^n} \ln \size {x^n} + \frac 1 {n a^n} \ln \size {x^n - a^n} + C\)





Logarithm of Power














\(\ds \)

\(=\)







\(\ds \frac 1 {n a^n} \ln \size {\frac {x^n - a^n} {x^n} } + C\)





Difference of Logarithms



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^n \pm a^n$: $14.330$




