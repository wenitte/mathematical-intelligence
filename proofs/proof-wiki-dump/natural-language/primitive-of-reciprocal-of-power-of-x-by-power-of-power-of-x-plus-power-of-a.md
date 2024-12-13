# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Power_of_x_by_Power_of_Power_of_x_plus_Power_of_a

Theorem
$\ds \int \frac {\d x} {x^m \paren {x^n + a^n}^r} = \frac 1 {a^n} \int \frac {\d x} {x^m \paren {x^n + a^n}^{r - 1} } - \frac 1 {a^n} \int \frac {\d x} {x^{m - n} \paren {x^n + a^n}^r}$


Proof













\(\ds \int \frac {\d x} {x^m \paren {x^n + a^n}^r}\)

\(=\)







\(\ds \int \frac {a^n \rd x} {a^n x^m \paren {x^n + a^n}^r}\)





multiplying top and bottom by $a^n$














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {x^n + a^n - x^n} \rd x} {a^n x^m \paren {x^n + a^n}^r}\)





adding and subtracting $x^n$














\(\ds \)

\(=\)







\(\ds \frac 1 {a^n} \int \frac {\paren {x^n + a^n} \rd x} {x^m \paren {x^n + a^n}^r} - \frac 1 {a^n} \int \frac {x^n \rd x} {x^m \paren {x^n + a^n}^r}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^n} \int \frac {\d x} {x^m \paren {x^n + a^n}^{r - 1} } - \frac 1 {a^n} \int \frac {\d x} {x^{m - n} \paren {x^n + a^n}^r}\)





simplification



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^n \pm a^n$: $14.328$




