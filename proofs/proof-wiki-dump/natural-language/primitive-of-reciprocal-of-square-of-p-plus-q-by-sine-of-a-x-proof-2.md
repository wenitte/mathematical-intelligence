# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_square_of_p_plus_q_by_Sine_of_a_x/Proof_2



Theorem
$\ds \int \frac {\d x} {\paren {p + q \sin a x}^2} = \frac {q \cos a x} {a \paren {p^2 - q^2} \paren {p + q \sin a x} } + \frac p {p^2 - q^2} \int \frac {\d x} {p + q \sin a x}$


Proof
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





