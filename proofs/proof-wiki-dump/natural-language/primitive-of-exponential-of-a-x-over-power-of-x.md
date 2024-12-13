# 

Source: https://proofwiki.org/wiki/Primitive_of_Exponential_of_a_x_over_Power_of_x



Theorem
$\ds \int \frac {e^{a x} \rd x} {x^n} = \frac {-e^{a x} } {\paren {n - 1} x^{n - 1} } + \frac a {n - 1} \int \frac {e^{a x} \rd x} {x^{n - 1} } + C$
where $n \ne 1$.


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds e^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds a e^{a x}\)





Derivative of $e^{a x}$




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







\(\ds \frac {x^{-n + 1} } {-n + 1}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {-1} {\paren {n - 1} x^{n - 1} }\)





simplifying




Then:














\(\ds \int \frac {e^{a x} \rd x} {x^n}\)

\(=\)







\(\ds e^{a x} \paren {\frac {-1} {\paren {n - 1} x^{n - 1} } } - \int \paren {\frac {-1} {\paren {n - 1} x^{n - 1} } } \paren {a e^{a x} } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {-e^{a x} } {\paren {n - 1} x^{n - 1} } + \frac a {n - 1} \int \frac {e^{a x} \rd x} {x^{n - 1} } + C\)





Primitive of Constant Multiple of Function



$\blacksquare$


Also see
Primitive of $\dfrac {e^{a x} } x$ for the case where $n = 1$
Primitive of $x^n e^{a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $e^{a x}$: $14.514$




