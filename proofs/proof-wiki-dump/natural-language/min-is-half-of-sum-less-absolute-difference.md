# 

Source: https://proofwiki.org/wiki/Min_is_Half_of_Sum_Less_Absolute_Difference

Theorem
For all numbers $a, b$ where $a, b$ in $\N, \Z, \Q$ or $\R$:

$\min \set {a, b} = \dfrac 1 2 \paren {a + b - \size {a - b} }$


Proof
From the definition of min:

$\map \min {a, b} = \begin{cases}
a: & a \le b \\
b: & b \le a
\end{cases}$

Let $a < b$.
Then:














\(\ds \dfrac 1 2 \paren {a + b - \size {a - b} }\)

\(=\)







\(\ds \dfrac 1 2 \paren {a + b - \paren {b - a} }\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {a + b - b + a}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {2 a}\)




















\(\ds \)

\(=\)







\(\ds a\)




















\(\ds \)

\(=\)







\(\ds \min \set {a, b}\)





Definition of Min Operation



$\Box$

Let $a \ge b$.
Then:














\(\ds \dfrac 1 2 \paren {a + b - \size {a - b} }\)

\(=\)







\(\ds \dfrac 1 2 \paren {a + b - \paren {a - b} }\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {a + b - a + b}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {2 b}\)




















\(\ds \)

\(=\)







\(\ds b\)




















\(\ds \)

\(=\)







\(\ds \min \set {a, b}\)





Definition of Min Operation



$\blacksquare$


Also see
Max is Half of Sum Plus Absolute Difference




