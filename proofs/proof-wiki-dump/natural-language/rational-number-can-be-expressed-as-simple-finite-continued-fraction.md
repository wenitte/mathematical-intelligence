# 

Source: https://proofwiki.org/wiki/Rational_Number_can_be_Expressed_as_Simple_Finite_Continued_Fraction



Theorem
Let $q \in \Q$ be a rational number.
Then $q$ can be expressed as a simple finite continued fraction.


Proof
Let $q = \dfrac a b$ be a rational number expressed in canonical form.
That is $b > 0$ and $a \perp b = 1$.
By the Euclidean Algorithm, we have:














\(\ds a\)

\(=\)







\(\ds q_1 b + r_1,\)

\(\ds 0 < r_1 < b\)



or $\dfrac a b = q_1 + \dfrac {r_1} b$














\(\ds b\)

\(=\)







\(\ds q_2 r_1 + r_2,\)

\(\ds 0 < r_2 < r_1\)



or $\dfrac b {r_1} = q_2 + \dfrac {r_2} {r_1}$














\(\ds r_1\)

\(=\)







\(\ds q_3 r_2 + r_3,\)

\(\ds 0 < r_3 < r_2\)



or $\dfrac {r_2} {r_1} = q_3 + \dfrac {r_3} {r_2}$














\(\ds \)

\(\vdots\)







\(\ds \)




















\(\ds r_{n-3}\)

\(=\)







\(\ds q_{n - 1} r_{n - 2} + r_{n - 1},\)

\(\ds 0 < r_{n - 1} < r_{n - 2}\)



or $\dfrac {r_{n - 3} } {r_{n - 2} } = q_{n - 1} + \dfrac {r_{n - 1} } {r_{n - 2} }$














\(\ds r_{n - 2}\)

\(=\)







\(\ds q_n r_{n - 1} + 0,\)





or $\dfrac {r_{n - 2} } {r_{n - 1} } = q_n$



Thus from the system of equations on the right hand side, we get:














\(\ds \frac a b\)

\(=\)







\(\ds q_1 + \cfrac 1 {\frac b {r_1} }\)




















\(\ds \)

\(=\)







\(\ds q_1 + \cfrac 1 {q_2 + \cfrac 1 {\frac {r_1} {r_2} } }\)




















\(\ds \)

\(=\)







\(\ds q_1 + \cfrac 1 {q_2 + \cfrac 1 {q_3 + \cfrac 1 {\frac {r_2} {r_3} } } }\)




















\(\ds \)

\(\cdots\)







\(\ds \)




















\(\ds \)

\(=\)







\(\ds q_1 + \cfrac 1 {q_2 + \cfrac 1 {q_3 + \cfrac 1 {\ddots \cfrac {} {q_{n - 1} + \cfrac 1 {q_n} } } } }\)









This shows that $q$ has the SFCF $\sqbrk {q_1, q_2, q_3, \ldots, q_n}$.
$\blacksquare$


Note

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
It can be seen from this proof that there is a close connection between continued fractions and the Euclidean Algorithm.


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): continued fraction




