# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_square_of_p_plus_q_by_Cosine_of_a_x



Theorem
$\ds \int \frac {\d x} {\paren {p + q \cos a x}^2} = \frac {q \sin a x} {a \paren {q^2 - p^2} \paren {p + q \cos a x} } - \frac p {q^2 - p^2} \int \frac {\d x} {p + q \cos a x}$


Proof













\(\ds \map {\dfrac \d {\d x} } {\dfrac {\sin a x} {p + q \cos a x} }\)

\(=\)







\(\ds \dfrac {\paren {p + q \cos a x} \map {\frac \d {\d x} } {\sin a x} - \sin a x \map {\frac \d {\d x} } {p + q \sin a x} } {\paren {p + q \cos a x}^2}\)





Quotient Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {p + q \cos a x} \paren {a \cos a x} - \sin a x \paren {-a q \sin a x} } {\paren {p + q \cos a x}^2}\)





Derivative of Cosine Function, Derivative of Sine Function














\(\ds \)

\(=\)







\(\ds a \dfrac {p \cos a x + q \paren {\cos^2 a x + \sin^2 a x} } {\paren {p + q \cos a x}^2}\)





simplification














\(\ds \)

\(=\)







\(\ds a \dfrac {p \cos a x + q} {\paren {p + q \cos a x}^2}\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds a \dfrac {p q \cos a x + q^2} {q \paren {p + q \cos a x}^2}\)




















\(\ds \)

\(=\)







\(\ds a \dfrac {p q \cos a x + q^2 + p^2 - p^2} {q \paren {p + q \cos a x}^2}\)




















\(\ds \)

\(=\)







\(\ds a \dfrac {q^2 - p^2} {q \paren {p + q \cos a x}^2} + a \dfrac {p q \cos a x + p^2} {q \paren {p + q \cos a x}^2}\)




















\(\ds \)

\(=\)







\(\ds a \dfrac {q^2 - p^2} {q \paren {p + q \cos a x}^2} + a \dfrac {p \paren {p + q \cos a x} } {q \paren {p + q \cos a x}^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {a \paren {q^2 - p^2} } {q \paren {p + q \cos a x}^2} + \dfrac {a p} q \dfrac 1 {p + q \cos a x}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac q {a \paren {q^2 - p^2} } \map {\dfrac \d {\d x} } {\dfrac {\sin a x} {p + q \cos a x} }\)

\(=\)







\(\ds \dfrac 1 {\paren {p + q \cos a x}^2} + \dfrac p {\paren {q^2 - p^2} } \dfrac 1 {p + q \cos a x}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac q {a \paren {q^2 - p^2} } {\dfrac {\sin a x} {p + q \cos a x} }\)

\(=\)







\(\ds \int \dfrac {\d x} {\paren {p + q \cos a x}^2} + \dfrac p {\paren {q^2 - p^2} } \int \dfrac {\d x} {p + q \cos a x}\)









Hence the result.
$\blacksquare$


Also see
Primitive of $\dfrac 1 {\paren {p + q \sin a x}^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cos a x$: $14.391$




