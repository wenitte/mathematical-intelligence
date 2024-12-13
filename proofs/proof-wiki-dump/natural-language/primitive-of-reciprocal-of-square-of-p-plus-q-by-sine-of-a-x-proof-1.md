# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_square_of_p_plus_q_by_Sine_of_a_x/Proof_1

Theorem
$\ds \int \frac {\d x} {\paren {p + q \sin a x}^2} = \frac {q \cos a x} {a \paren {p^2 - q^2} \paren {p + q \sin a x} } + \frac p {p^2 - q^2} \int \frac {\d x} {p + q \sin a x}$


Proof













\(\ds \map {\dfrac \d {\d x} } {\dfrac {\cos a x} {p + q \sin a x} }\)

\(=\)







\(\ds \dfrac {\paren {p + q \sin a x} \map {\frac \d {\d x} } {\cos a x} - \cos a x \map {\frac \d {\d x} } {p + q \sin a x} } {\paren {p + q \sin a x}^2}\)





Quotient Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {p + q \sin a x} \paren {-a \sin a x} - \cos a x \paren {a q \cos a x} } {\paren {p + q \sin a x}^2}\)





Derivative of Cosine Function, Derivative of Sine Function














\(\ds \)

\(=\)







\(\ds -a \dfrac {p \sin a x + q \paren {\sin^2 a x + \cos^2 a x} } {\paren {p + q \sin a x}^2}\)





simplification














\(\ds \)

\(=\)







\(\ds -a \dfrac {p \sin a x + q} {\paren {p + q \sin a x}^2}\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds -a \dfrac {p q \sin a x + q^2} {q \paren {p + q \sin a x}^2}\)




















\(\ds \)

\(=\)







\(\ds -a \dfrac {p q \sin a x + q^2 + p^2 - p^2} {q \paren {p + q \sin a x}^2}\)




















\(\ds \)

\(=\)







\(\ds -a \dfrac {q^2 - p^2} {q \paren {p + q \sin a x}^2} - a \dfrac {p q \sin a x + p^2} {q \paren {p + q \sin a x}^2}\)




















\(\ds \)

\(=\)







\(\ds a \dfrac {p^2 - q^2} {q \paren {p + q \sin a x}^2} - a \dfrac {p \paren {p + q \sin a x} } {q \paren {p + q \sin a x}^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {a \paren {p^2 - q^2} } {q \paren {p + q \sin a x}^2} - \dfrac {a p} q \dfrac 1 {p + q \sin a x}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac q {a \paren {p^2 - q^2} } \map {\dfrac \d {\d x} } {\dfrac {\cos a x} {p + q \sin a x} }\)

\(=\)







\(\ds \dfrac 1 {\paren {p + q \sin a x}^2} - \dfrac p {\paren {p^2 - q^2} } \dfrac 1 {p + q \sin a x}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac q {a \paren {p^2 - q^2} } {\dfrac {\cos a x} {p + q \sin a x} }\)

\(=\)







\(\ds \int \dfrac {\d x} {\paren {p + q \sin a x}^2} - \dfrac p {\paren {p^2 - q^2} } \int \dfrac {\d x} {p + q \sin a x}\)









Hence the result.
$\blacksquare$





