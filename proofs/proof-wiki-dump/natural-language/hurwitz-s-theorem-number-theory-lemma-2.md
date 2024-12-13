# 

Source: https://proofwiki.org/wiki/Hurwitz%27s_Theorem_(Number_Theory)/Lemma_2

Lemma
Let $\xi$ be an irrational number.
Let there be $3$ consecutive convergents of the continued fraction to $\xi$.
Then at least one of them, $\dfrac p q$ say, satisfies:

$\size {\xi - \dfrac p q} < \dfrac 1 {\sqrt 5 \, q^2}$


Proof
By definition of simple infinite continued fraction, the partial denominators are strictly positive integers:

$\forall n \in \N_{>0}: a_n > 0$

Let $\dfrac {p_k} {q_k}$ be an arbitrary convergent to $\xi$.
Let:

$\dfrac {q_{n - 1} } {q_n} = b_n$
By definition of numerators and denominators of continued fraction:

$q_{n + 1} = a_{n + 1} q_n + q_{n - 1}$

Then:














\(\ds \dfrac {q_{n + 1} } {q_n}\)

\(=\)







\(\ds a_{n + 1} + \dfrac {q_{n - 1} } {q_n}\)




















\(\ds \)

\(=\)







\(\ds a_{n + 1} + b_n\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 {b_{n + 1} }\)

\(=\)







\(\ds a_{n + 1} + b_n\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds a_{n + 1}\)

\(=\)







\(\ds \dfrac 1 {b_{n + 1} } - b_n\)










From Difference between Adjacent Convergents of Simple Continued Fraction:














\(\ds \dfrac {p_{n + 1} } {q_{n + 1} } - \dfrac {p_n} {q_n}\)

\(=\)







\(\ds \dfrac {\paren {-1}^{n + 2} } {q_{n + 1} q_n }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {-1}^{n + 2} } {\paren{a_{n + 1} q_n + q_{n - 1} } q_n }\)





Definition of Numerators and Denominators of Continued Fraction














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {-1}^{n + 2} } {\paren{a_{n + 1} q_n + \dfrac {q_n} {q_n} q_{n - 1} } q_n }\)





multiply by $1$














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {-1}^{n + 2} } {\paren{a_{n +1 } + \dfrac{q_{n - 1} } {q_n} } q_n^2 }\)





move $q_n$ outside














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {-1}^{n + 2} } {\paren{a_{n + 1} + b_n } q_n^2 }\)





$\dfrac {q_{n - 1} } {q_n} = b_n$



Therefore:




\(\text {(3)}: \quad\)









\(\ds \size {\dfrac {p_{n + 1} } {q_{n + 1} } - \dfrac {p_n} {q_n} }\)

\(=\)







\(\ds \dfrac 1 { {q_n}^2} \dfrac 1 {a_{n + 1} + b_n }\)










We aim to show that given $3$ consecutive convergents of the continued fraction to $\xi$, at least one of them satisfies:

$\size {\xi - \dfrac p q} < \dfrac 1 {\sqrt 5 \, q^2}$

Aiming for a contradiction, suppose that $3$ consecutive convergents do NOT satisfy the inequality.
Thus for arbitrary $n$:




\(\text {(4)}: \quad\)









\(\ds \size {\xi - \dfrac {p_n} {q_n} }\)

\(>\)







\(\ds \dfrac 1 {\sqrt 5 \, q_n^2}\)




















\(\ds \size {\xi - \dfrac {p_{n + 1} } {q_{n + 1} } }\)

\(>\)







\(\ds \dfrac 1 {\sqrt 5 \, q_{n + 1}^2}\)










Therefore:














\(\ds \size {\xi - \dfrac {p_n} {q_n} } + \size {\xi - \dfrac {p_{n + 1} } {q_{n + 1} } }\)

\(>\)







\(\ds \dfrac 1 {\sqrt 5 \, q_n^2} + \dfrac 1 {\sqrt 5 \, q_{n + 1}^2}\)














\(\ds \leadsto \ \ \)





\(\ds \size {\dfrac {p_{n + 1} } {q_{n + 1} } - \dfrac {p_n} {q_n} }\)

\(>\)







\(\ds \dfrac {q_{n + 1}^2 + q_n^2 } {\sqrt 5 \, q_n^2 q_{n + 1}^2 }\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 { {q_n}^2} \dfrac 1 {a_{n + 1} + b_n }\)

\(>\)







\(\ds \dfrac {q_{n + 1}^2 + q_n^2 } {\sqrt 5 \, q_n^2 q_{n + 1}^2 }\)





from $(3)$








\(\ds \leadsto \ \ \)





\(\ds a_{n + 1} + b_n\)

\(<\)







\(\ds \dfrac {\sqrt 5 \, q_{n + 1}^2 } {q_{n + 1}^2 + q_n^2 }\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 {b_{n + 1} }\)

\(<\)







\(\ds \dfrac {\sqrt 5 \, q_{n + 1}^2 } {q_{n + 1}^2 + q_n^2 }\)





from $(1)$














\(\ds \)

\(<\)







\(\ds \dfrac {\sqrt 5} {1 + \dfrac {q_n^2} {q_{n + 1}^2 } }\)




















\(\ds \)

\(<\)







\(\ds \dfrac {\sqrt 5} {1 + b_{n + 1}^2 }\)














\(\ds \leadsto \ \ \)





\(\ds 1 + b_{n + 1}^2\)

\(<\)







\(\ds \sqrt 5 \, b_{n + 1}\)





multiplying both sides by $b_{n + 1} \paren {1 + b_{n + 1}^2} $








\(\ds \leadsto \ \ \)





\(\ds b_{n + 1}^2 - \sqrt 5 \, b_{n + 1} + 1\)

\(<\)







\(\ds 0\)









Using the Quadratic Formula, we arrive at:














\(\ds b_{n + 1}\)

\(=\)







\(\ds \dfrac {-\paren {- \sqrt 5 } \pm \sqrt {\paren {- \sqrt 5}^2 - 4 } } 2\)





Quadratic Formula














\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt 5  \pm 1 } 2\)




















\(\ds \)

\(=\)







\(\ds \phi \text { and } \phi - 1\)





Definition of Golden Mean



Therefore:

$\phi - 1 < b_{n + 1} < \phi$
Taking reciprocals:

$\phi > \dfrac 1 {b_{n + 1} } > \phi - 1$

Starting with $(4)$ above and replacing $n$ with $n - 1$, and replacing $n + 1$ with $n$, an identical argument can be made for $b_n$.
We now have:

$\phi - 1 < \dfrac 1 {b_{n + 1} } < \phi$
and

$\phi - 1 < b_n < \phi$
And from $(2)$ above:

$a_{n + 1} = \dfrac 1 {b_{n + 1} } - b_n$
Therefore, from $(2)$ and the two inequalities immediately above:

$a_{n + 1} = \dfrac 1 {b_{n + 1} } - b_n < 1$
But this contradicts our premise that the partial denominators are strictly positive integers.
Hence the result by Proof by Contradiction.
$\blacksquare$


Sources
1979: G.H. Hardy and E.M. Wright: An Introduction to the Theory of Numbers (5th ed.): $11.8$: The measure of the closest approximation to an arbitrary irrational: Theorem $195$




