# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Square_of_p_plus_q_by_Hyperbolic_Sine_of_a_x



Theorem
$\ds \int \frac {\d x} {\paren {p + q \sinh a x}^2}  = \frac {-q \cosh a x} {a \paren {p^2 + q^2} \paren {p + q \sinh a x} } + \frac p {p^2 + q^2} \int \frac {\d x} {p + q \sinh a x} + C$


Proof













\(\ds \map {\dfrac \d {\d x} } {\dfrac {\cosh a x} {p + q \sinh a x} }\)

\(=\)







\(\ds \dfrac {\paren {p + q \sinh a x} \map {\frac \d {\d x} } {\cosh a x} - \cosh a x \map {\frac \d {\d x} } {p + q \sinh a x} } {\paren {p + q \sinh a x}^2}\)





Quotient Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {p + q \sinh a x} \paren {a \sinh a x} - \cosh a x \paren {a q \cosh a x} } {\paren {p + q \sinh a x}^2}\)





Derivative of Hyperbolic Cosine Function, Derivative of Hyperbolic Sine Function














\(\ds \)

\(=\)







\(\ds a \dfrac {p \sinh a x - q \paren {\cosh^2 a x - \sinh^2 a x} } {\paren {p + q \sinh a x}^2}\)





simplification














\(\ds \)

\(=\)







\(\ds a \dfrac {p \sinh a x + q} {\paren {p + q \sinh a x}^2}\)





Difference of Squares of Hyperbolic Cosine and Sine














\(\ds \)

\(=\)







\(\ds a \dfrac {p q \sinh a x + q^2} {q \paren {p + q \sinh a x}^2}\)




















\(\ds \)

\(=\)







\(\ds a \dfrac {p q \sinh a x + q^2 + p^2 - p^2} {q \paren {p + q \sinh a x}^2}\)




















\(\ds \)

\(=\)







\(\ds a \dfrac {p q \sinh a x + p^2} {q \paren {p + q \sinh a x}^2} - a \dfrac {p^2 + q^2} {q \paren {p + q \sinh a x}^2}\)




















\(\ds \)

\(=\)







\(\ds a \dfrac {p \paren {p + q \sinh a x} } {q \paren {p + q \sinh a x}^2} - a \dfrac {p^2 + q^2} {q \paren {p + q \sinh a x}^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {a p} q \dfrac 1 {p + q \sinh a x} - \dfrac {a \paren {p^2 + q^2} } {q \paren {p + q \sinh a x}^2}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac q {a \paren {p^2 + q^2} } \map {\dfrac \d {\d x} } {\dfrac {\cosh a x} {p + q \sinh a x} }\)

\(=\)







\(\ds \dfrac p {\paren {p^2 + q^2} } \dfrac 1 {p + q \sinh a x} - \dfrac 1 {\paren {p + q \sinh a x}^2}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac q {a \paren {p^2 + q^2} } {\dfrac {\cosh a x} {p + q \sinh a x} }\)

\(=\)







\(\ds \dfrac p {\paren {p^2 + q^2} } \int \dfrac {\d x} {p + q \sinh a x} - \int \dfrac {\d x} {\paren {p + q \sinh a x}^2}\)









Hence the result.
$\blacksquare$


Also see
Primitive of $\dfrac 1 {\paren {p + q \cosh a x}^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sinh a x$: $14.554$




