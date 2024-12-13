# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Sine_of_a_x_over_Power_of_x



Theorem
$\ds \int \frac {\sinh a x \rd x} {x^n} = \frac {-\sinh a x} {\paren {n - 1} x^{n - 1} } + \frac a {n - 1} \int \frac {\cosh a x \rd x} {x^{n - 1} }$


Proof
With a view to expressing the problem in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \sinh a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds a \cosh a x\)





Derivative of $\sinh a x$




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














\(\ds \int \frac {\sinh a x \rd x} {x^n}\)

\(=\)







\(\ds \sinh a x \paren {\frac {-1} {\paren {n - 1} x^{n - 1} } } - \int \paren {\frac {-1} {\paren {n - 1} x^{n - 1} } } \paren {a \cosh a x} \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {-\sinh a x} {\paren {n - 1} x^{n - 1} } + \frac a {n - 1} \int \frac {\cosh a x \rd x} {x^{n - 1} }\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac {\cosh a x} {x^n}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sinh a x$: $14.559$




