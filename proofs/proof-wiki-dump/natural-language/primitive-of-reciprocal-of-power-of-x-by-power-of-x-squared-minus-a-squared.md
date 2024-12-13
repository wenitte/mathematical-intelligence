# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Power_of_x_by_Power_of_x_squared_minus_a_squared



Theorem
$\ds \int \frac {\d x} {x^m \paren {x^2 - a^2}^n} = \frac 1 {a^2} \int \frac {\d x} {x^{m - 2} \paren {x^2 - a^2}^n} - \frac 1 {a^2} \int \frac {\d x} {x^m \paren {x^2 - a^2}^{n - 1} }$
for $x^2 > a^2$.


Proof













\(\ds \int \frac {\d x} {x^m \paren {x^2 - a^2}^{n - 1} }\)

\(=\)







\(\ds \int \frac {\paren {x^2 - a^2} \rd x} {x^m \paren {x^2 - a^2}^{n - 1} \paren {x^2 - a^2} }\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\paren {x^2 - a^2} \rd x} {x^m \paren {x^2 - a^2}^{\paren {n - 1} + 1} }\)




















\(\ds \)

\(=\)







\(\ds \int \frac {x^2 \rd x} {x^m \paren {x^2 - a^2}^n} - a^2 \int \frac {\d x} {x^m \paren {x^2 - a^2}^n}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} {x^{m - 2} \paren {x^2 - a^2}^n} - a^2 \int \frac {\d x} {x^m \paren {x^2 - a^2}^n}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds a^2 \int \frac {\d x} {x^m \paren {x^2 - a^2}^n}\)

\(=\)







\(\ds \int \frac {\d x} {x^{m - 2} \paren {x^2 - a^2}^n} - \int \frac {\d x} {x^m \paren {x^2 - a^2}^{n - 1} }\)





changing sides








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {x^m \paren {x^2 - a^2}^n}\)

\(=\)







\(\ds \frac 1 {a^2} \int \frac {\d x} {x^{m - 2} \paren {x^2 - a^2}^n} - \frac 1 {a^2} \int \frac {\d x} {x^m \paren {x^2 - a^2}^{n - 1} }\)









$\blacksquare$


Also see
Primitive of $\dfrac 1 {x^m \paren {a^2 - x^2}^n}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^2 - a^2$, $x^2 > a^2$: $14.162$




