# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_square_of_p_plus_q_by_Sine_of_a_x



Theorem
$\ds \int \frac {\d x} {\paren {p + q \sin a x}^2} = \frac {q \cos a x} {a \paren {p^2 - q^2} \paren {p + q \sin a x} } + \frac p {p^2 - q^2} \int \frac {\d x} {p + q \sin a x}$


Proof 1













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


Proof 2
First a pair of lemmata:

Lemma
Let $u = \tan \dfrac \theta 2$.
Then:

$\dfrac 1 {p + q \sin a x} = \dfrac {u^2 + 1} {p u^2 + 2 q u + p}$
$\Box$


Weierstrass Substitution
The Weierstrass Substitution for $\ds \int \frac {\d x} {\paren {p + q \sin a x}^2}$ yields:

$\ds \frac 2 a \int \frac {\paren {u^2 + 1} \rd u} {\paren {p u^2 + 2 q u + p}^2}$
where $u = \tan \dfrac {a x} 2$.
$\Box$















\(\ds \int \frac {\d x} {\paren {p + q \sin a x}^2}\)

\(=\)







\(\ds \frac 2 a \int \frac {\paren {u^2 + 1} \rd u} {\paren {p u^2 + 2 q u + p}^2}\)





Weierstrass Substitution: $u = \tan \dfrac {a x} 2$














\(\ds \)

\(=\)







\(\ds \frac 2 a \int \frac {u^2 \rd u} {\paren {p u^2 + 2 q u + p}^2} + \frac 2 a \int \frac {\d u} {\paren {p u^2 + 2 q u + p}^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 2 a \paren {\frac {\paren {4 q^2 - 2 p^2} u + 2 p q} {p \paren {4 p^2 - 4 q^2} \paren {p u^2 + 2 q u + p} } + \frac {2 p} {4 p^2 - 4 q^2} \int \frac {\d u} {p u^2 + 2 q u + p} } + C\)





Primitive of $\dfrac {x^2} {\paren {a x^2 + b x + c}^2}$














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac 2 a \paren {\frac {2 p u + 2 q} {\paren {4 p^2 - 4 q^2} \paren {p u^2 + 2 q u + p} } + \frac {2 p} {4 p^2 - 4 q^2} \int \frac {\d u} {p u^2 + 2 q u + p} } + C\)





Primitive of $\dfrac 1 {\paren {a x^2 + b x + c}^2}$














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 q^2 - p^2} u + p q} {a p \paren {p^2 - q^2} \paren {p u^2 + 2 q u + p} } + \frac p {a \paren {p^2 - q^2} } \int \frac {\d u} {p u^2 + 2 q u + p} + C\)





simplifying ...














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {p^2 u + p q} {a p \paren {p^2 - q^2} \paren {p u^2 + 2 q u + p} } + \frac p {a \paren {p^2 - q^2} } \int \frac {\d u} {p u^2 + 2 q u + p} + C\)





... and creating common denominators














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 q^2 - p^2} u + p q + p^2 u + p q} {a p \paren {p^2 - q^2} \paren {p u^2 + 2 q u + p} } + \frac {2 p} {a \paren {p^2 - q^2} } \int \frac {\d u} {p u^2 + 2 q u + p} + C\)





summing














\(\ds \)

\(=\)







\(\ds \frac {2 q \paren {q u + p} } {a p \paren {p^2 - q^2} } \dfrac 1 {p u^2 + 2 q u + p} + \frac p {\paren {p^2 - q^2} } \paren {\frac 2 a \int \frac {\d u} {p u^2 + 2 q u + p} } + C\)





simplifying, and strategic rearrangement














\(\ds \)

\(=\)







\(\ds \frac {2 q \paren {q u + p} } {a p \paren {p^2 - q^2} \paren {p u^2 + 2 q u + p} } + \frac p {\paren {p^2 - q^2} } \int \frac {\d x} {p + q \sin a x} + C\)





Primitive of $\dfrac 1 {p + q \sin a x}$: Weierstrass Substitution



Then we note that:














\(\ds \dfrac {2 q \paren {q u + p} } p - \dfrac {q \paren {p u^2 + 2 q u + p} } p\)

\(=\)







\(\ds \dfrac {2 q^2 u + 2 p q - p q u^2 - 2 q^2 u - p q} p\)




















\(\ds \)

\(=\)







\(\ds \dfrac {p q - p q u^2} p\)




















\(\ds \)

\(=\)







\(\ds q \paren {1 - u^2}\)









Hence:














\(\ds \int \frac {\d x} {\paren {p + q \sin a x}^2}\)

\(=\)







\(\ds \frac {2 q \paren {q u + p} } {a p \paren {p^2 - q^2} \paren {p u^2 + 2 q u + p} } + \frac p {\paren {p^2 - q^2} } \int \frac {\d x} {p + q \sin a x} + C\)





from above














\(\ds \)

\(=\)







\(\ds \frac {q \paren {1 - u^2} + \frac {q \paren {p u^2 + 2 q u + p} } p} {a \paren {p^2 - q^2}  \paren {p u^2 + 2 q u + p} } + \frac p {\paren {p^2 - q^2} } \int \frac {\d x} {p + q \sin a x} + C\)




















\(\ds \)

\(=\)







\(\ds \frac {q \paren {1 - u^2} } {a \paren {p^2 - q^2} \paren {p u^2 + 2 q u + p} } + \frac {q \paren {p u^2 + 2 q u + p} } {a p \paren {p^2 - q^2} \paren {p u^2 + 2 q u + p} } + \frac p {\paren {p^2 - q^2} } \int \frac {\d x} {p + q \sin a x} + C\)




















\(\ds \)

\(=\)







\(\ds \frac {q \paren {1 - u^2} } {a \paren {p^2 - q^2} \paren {p u^2 + 2 q u + p} } + \frac q {a p \paren {p^2 - q^2} } + \frac p {\paren {p^2 - q^2} } \int \frac {\d x} {p + q \sin a x} + C\)




















\(\ds \)

\(=\)







\(\ds \frac {q \paren {1 - u^2} } {a \paren {p^2 - q^2} \paren {p u^2 + 2 q u + p} }  + \frac p {\paren {p^2 - q^2} } \int \frac {\d x} {p + q \sin a x} + C\)





subsuming $\dfrac q {a p \paren {p^2 - q^2} }$ into the constant














\(\ds \)

\(=\)







\(\ds \frac {q \paren {1 - u^2} } {a \paren {p^2 - q^2} \paren {1 + u^2} \paren {p + q \sin a x} }  + \frac p {\paren {p^2 - q^2} } \int \frac {\d x} {p + q \sin a x} + C\)





Lemma














\(\ds \)

\(=\)







\(\ds \frac {q \cos a x} {a \paren {p^2 - q^2} \paren {p + q \sin a x} }  + \frac p {\paren {p^2 - q^2} } \int \frac {\d x} {p + q \sin a x} + C\)





Tangent Half-Angle Substitution for Cosine



$\blacksquare$


Also see
Primitive of $\dfrac 1 {\paren {p + q \cos a x}^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$: $14.361$




