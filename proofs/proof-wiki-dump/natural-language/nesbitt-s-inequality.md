# 

Source: https://proofwiki.org/wiki/Nesbitt%27s_Inequality



Theorem
Let $a$, $b$ and $c$ be (strictly) positive real numbers.
Then:

$\dfrac a {b + c} + \dfrac b {a + c} + \dfrac c {a + b} \ge \dfrac 3 2$


Proof 1













\(\ds \frac a {b + c} + \frac b {a + c} + \frac c {a + b}\)

\(\ge\)







\(\ds \dfrac 3 2\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \frac {a + b + c} {b + c} + \frac {a + b + c} {a + c} + \frac {a + b + c} {a + b}\)

\(\ge\)







\(\ds \frac 9 2\)





by adding $3$








\(\ds \leadstoandfrom \ \ \)





\(\ds \frac {a + b + c} {b + c} + \frac {a + b + c} {a + c} + \frac {a + b + c} {a + b}\)

\(\ge\)







\(\ds \frac {9 \paren {a + b + c} } {\paren {b + c} + \paren {a + c} + \paren {a + b} }\)





as $\dfrac {a + b + c} {\paren {b + c} + \paren {a + c} + \paren {a + b} } = \dfrac 1 2$








\(\ds \leadstoandfrom \ \ \)





\(\ds \frac {\frac 1 {b + c} + \frac 1 {a + c} + \frac 1 {a + b} } 3\)

\(\ge\)







\(\ds \frac 3 {\paren {b + c} + \paren {a + c} + \paren {a + b} }\)





dividing by $3 \paren {a + b + c}$



These are the arithmetic mean and the harmonic mean of $\dfrac 1 {b + c}$, $\dfrac 1 {a + c}$ and $\dfrac 1 {a + b}$.
From AM-HM Inequality the last inequality is true.
Thus Nesbitt's Inequality holds.
$\blacksquare$


Proof 2
Let:














\(\ds S\)

\(=\)







\(\ds \frac a {b + c} + \frac b {c + a} + \frac c {a + b}\)




















\(\ds M\)

\(=\)







\(\ds \frac b {b + c} + \frac c {c + a} + \frac a {a + b}\)




















\(\ds N\)

\(=\)







\(\ds \frac c {b + c} + \frac a {c + a} + \frac b {a + b}\)










Then:




\(\text {(1)}: \quad\)









\(\ds M + N\)

\(=\)







\(\ds \frac {b + c} {b + c} + \frac {c + a} {c + a} + \frac {a + b} {a + b}\)




















\(\ds \)

\(=\)







\(\ds 3\)










\(\text {(2)}: \quad\)









\(\ds S + M\)

\(=\)







\(\ds \frac {a + b} {b + c} + \frac {b + c} {c + a} + \frac {c + a} {a + b}\)




















\(\ds \)

\(\ge\)







\(\ds 3 \sqrt [3] {\frac {a + b} {b + c} \cdot \frac {b + c} {c + a} \cdot \frac {c + a} {a + b} }\)





Cauchy's Mean Theorem














\(\ds \)

\(=\)







\(\ds 3\)










\(\text {(3)}: \quad\)









\(\ds N + S\)

\(=\)







\(\ds \frac {c + a} {b + c} + \frac {a + b} {c + a} + \frac {b + c} {a + b}\)




















\(\ds \)

\(\ge\)







\(\ds 3 \sqrt [3] {\frac {c + a} {b + c} \cdot \frac {a + b} {c + a} \cdot \frac {b + c} {a + b} }\)





Cauchy's Mean Theorem














\(\ds \)

\(=\)







\(\ds 3\)









From $(2)$ and $(3)$:

$(4): \quad M + N + 2 S \ge 6$
From $(1)$ and $(4)$:














\(\ds 2 S\)

\(\ge\)







\(\ds 3\)














\(\ds \leadsto \ \ \)





\(\ds S\)

\(\ge\)







\(\ds \frac 3 2\)









$\blacksquare$


Source of Name
This entry was named for Alfred Mortimer Nesbitt.


Sources
1903: A.M. Nesbitt: Problem 15114 (Educational Times Vol. 3: pp. 37 – 38)




