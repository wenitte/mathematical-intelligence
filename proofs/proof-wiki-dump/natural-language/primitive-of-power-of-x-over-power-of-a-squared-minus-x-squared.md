# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_over_Power_of_a_squared_minus_x_squared



Theorem
$\ds \int \frac {x^m \rd x} {\paren {a^2 - x^2}^n} = a^2 \int \frac {x^{m - 2} \rd x} {\paren {a^2 - x^2}^n} - \int \frac {x^{m - 2} \rd x} {\paren {a^2 - x^2}^{n - 1} }$
for $x^2 < a^2$.


Proof













\(\ds \int \frac {x^m \rd x} {\paren {a^2 - x^2}^n}\)

\(=\)







\(\ds \int \frac {x^{m - 2} \paren {x^2} \rd x} {\paren {a^2 - x^2}^n}\)




















\(\ds \)

\(=\)







\(\ds \int \frac {x^{m - 2} \paren {a^2 + x^2 - a^2} \rd x} {\paren {a^2 - x^2}^n}\)




















\(\ds \)

\(=\)







\(\ds \int \frac {x^{m - 2} \paren {a^2 - \paren {a^2 - x^2} } \rd x} {\paren {a^2 - x^2}^n}\)




















\(\ds \)

\(=\)







\(\ds a^2 \int \frac {x^{m - 2} \rd x} {\paren {a^2 - x^2}^n} - \int \frac {x^{m - 2} \paren {a^2 - x^2} \rd x} {\paren {a^2 - x^2}^n}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds a^2 \int \frac {x^{m - 2} \rd x} {\paren {a^2 - x^2}^n} - \int \frac {x^{m - 2} \rd x} {\paren {a^2 - x^2}^{n - 1} }\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac {x^m} {\paren {x^2 - a^2}^n}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a^2 - x^2$, $x^2 < a^2$: $14.180$




