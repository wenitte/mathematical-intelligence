# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_squared_by_square_of_Sine_of_a_x_plus_q_squared_by_square_of_Cosine_of_a_x/Proof_1

Theorem
$\ds \int \frac {\d x} {p^2 \sin^2 a x + q^2 \cos^2 a x} = \frac 1 {a p q} \map \arctan {\frac {p \tan a x} q} + C$


Proof
Let $u = p^2 + q^2$ and $v = q^2 - p^2$.

Then:




\(\text {(1)}: \quad\)









\(\ds u + v\)

\(=\)







\(\ds 2 q^2\)










\(\text {(2)}: \quad\)









\(\ds u - v\)

\(=\)







\(\ds 2 p ^2\)










Also:














\(\ds u^2 - v^2\)

\(=\)







\(\ds \paren {u + v} \paren {u - v}\)




















\(\ds u^2 - v^2\)

\(=\)







\(\ds \paren {2 q^2} \paren {2 p^2}\)





from $\paren 1$ and $\paren 2$




\(\text {(3)}: \quad\)









\(\ds u^2 - v^2\)

\(=\)







\(\ds 4 p^2 q^2\)










Therefore:














\(\ds \int \frac {\d x} {p^2 \sin^2 a x + q^2 \cos^2 a x}\)

\(=\)







\(\ds \int \frac {\d x} {p^2 \paren {\frac {1 - \cos 2 a x} 2} + q^2 \cos^2 a x}\)





Square of Sine














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} {p^2 \paren {\frac {1 - \cos 2 a x} 2} + q^2 \paren {\frac {1 + \cos 2 a x} 2} }\)





Square of Cosine














\(\ds \)

\(=\)







\(\ds \int \frac {2 \d x} {p^2 - p^2 \cos 2 a x + q^2 + q^2 \cos 2 a x}\)




















\(\ds \)

\(=\)







\(\ds \int \frac {2 \d x} {p^2 + q^2 + \paren {q^2 - p^2} \cos 2 a x}\)




















\(\ds \)

\(=\)







\(\ds 2 \paren { \frac 2 {\paren {2 a} \sqrt{u^2 - v^2} } } \map \arctan {\sqrt{ \frac {u - v} {u + v} } \tan \frac {\paren {2 a} x} 2} + C\)





Primitive of $\dfrac 1 {p + q \cos a x}$














\(\ds \)

\(=\)







\(\ds 2 \paren {\frac 1 {a \sqrt{4 p^2 q^2} } } \map \arctan {\sqrt{ \frac {2 p^2} {2 q^2} } \tan a x} + C\)





from $\paren 3$














\(\ds \)

\(=\)







\(\ds \paren {\frac 2 {2 a p q} } \map \arctan {\sqrt{ \frac {p^2} {q^2} } \tan a x} + C\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac 1 {a p q} } \map \arctan {\frac p q \tan a x} + C\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {a p q} \map \arctan {\frac {p \tan a x} q} + C\)









$\blacksquare$





