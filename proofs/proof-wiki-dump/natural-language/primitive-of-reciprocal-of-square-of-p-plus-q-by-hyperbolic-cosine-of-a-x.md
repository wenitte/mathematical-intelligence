# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Square_of_p_plus_q_by_Hyperbolic_Cosine_of_a_x



Theorem
$\ds \int \frac {\d x} {\paren {p + q \cosh a x}^2}  = \frac {q \sinh a x} {a \paren {q^2 - p^2} \paren {p + q \cosh a x} } - \frac p {q^2 - p^2} \int \frac {\rd x} {p + q \cosh a x} + C$


Proof













\(\ds \map {\dfrac \d {\d x} } {\dfrac {\sinh a x} {p + q \cosh a x} }\)

\(=\)







\(\ds \dfrac {\paren {p + q \cosh a x} \map {\frac \d {\d x} } {\sinh a x} - \sinh a x \map {\frac \d {\d x} } {p + q \sinh a x} } {\paren {p + q \cosh a x}^2}\)





Quotient Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {p + q \sinh a x} \paren {a \cosh a x} - \sinh a x \paren {a q \sinh a x} } {\paren {p + q \cosh a x}^2}\)





Derivative of Hyperbolic Cosine Function, Derivative of Hyperbolic Sine Function














\(\ds \)

\(=\)







\(\ds a \dfrac {p \cosh a x + q \paren {\cosh^2 a x - \sinh^2 a x} } {\paren {p + q \cosh a x}^2}\)





simplification














\(\ds \)

\(=\)







\(\ds a \dfrac {p \cosh a x + q} {\paren {p + q \cosh a x}^2}\)





Difference of Squares of Hyperbolic Cosine and Sine














\(\ds \)

\(=\)







\(\ds a \dfrac {p q \cosh a x + q^2} {q \paren {p + q \cosh a x}^2}\)




















\(\ds \)

\(=\)







\(\ds a \dfrac {p q \cosh a x + q^2 + p^2 - p^2} {q \paren {p + q \cosh a x}^2}\)




















\(\ds \)

\(=\)







\(\ds a \dfrac {q^2 - p^2} {q \paren {p + q \cosh a x}^2} + a \dfrac {p q \cosh a x + p^2} {q \paren {p + q \cosh a x}^2}\)




















\(\ds \)

\(=\)







\(\ds a \dfrac {q^2 - p^2} {q \paren {p + q \cosh a x}^2} + a \dfrac {p \paren {p + q \cosh a x} } {q \paren {p + q \cosh a x}^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {a \paren {q^2 - p^2} } {q \paren {p + q \cosh a x}^2} + \dfrac {a p} q \dfrac 1 {p + q \cosh a x}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac q {a \paren {q^2 - p^2} } \map {\dfrac \d {\d x} } {\dfrac {\sinh a x} {p + q \cosh a x} }\)

\(=\)







\(\ds \dfrac 1 {\paren {p + q \cosh a x}^2} + \dfrac p {\paren {q^2 - p^2} } \dfrac 1 {p + q \cos a x}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac q {a \paren {q^2 - p^2} } {\dfrac {\sinh a x} {p + q \cosh a x} }\)

\(=\)







\(\ds \int \dfrac {\d x} {\paren {p + q \cosh a x}^2} + \dfrac p {\paren {q^2 - p^2} } \int \dfrac {\d x} {p + q \cosh a x}\)









Hence the result.
$\blacksquare$


Also see
Primitive of $\dfrac 1 {\paren {p + q \sinh a x}^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cosh a x$: $14.582$




