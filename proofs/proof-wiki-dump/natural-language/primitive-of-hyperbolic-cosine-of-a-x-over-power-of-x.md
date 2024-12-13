# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Cosine_of_a_x_over_Power_of_x



Theorem
$\ds \int \frac {\cosh a x \rd x} {x^n} = \frac {-\cosh a x} {\paren {n - 1} x^{n - 1} } + \frac a {n - 1} \int \frac {\sinh a x \rd x} {x^{n - 1} } + C$


Proof
With a view to expressing the problem in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \cosh a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds a \sinh a x\)





Derivative of $\cosh a x$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \frac 1 {x^n}\)




















\(\ds \)

\(=\)







\(\ds x^{-n}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {x^{-n + 1} } {- n + 1}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {-1} {\paren {n - 1} x^{n - 1} }\)





simplifying




Then:














\(\ds \int \frac {\cosh a x \rd x} {x^n}\)

\(=\)







\(\ds \cosh a x \paren {\frac {-1} {\paren {n - 1} x^{n - 1} } } - \int \paren {\frac {-1} {\paren {n - 1} x^{n - 1} } } \paren {a \sinh a x} \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {-\cosh a x} {\paren {n - 1} x^{n - 1} } + \frac a {n - 1} \int \frac {\sinh a x \rd x} {x^{n - 1} } + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac {\sinh a x} {x^n}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cosh a x$: $14.587$




