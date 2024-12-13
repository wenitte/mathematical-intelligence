# 

Source: https://proofwiki.org/wiki/Integer_as_Sum_of_Polygonal_Numbers/Lemma_3



Theorem
Let $n, m, r \in \R_{>0}$.
Suppose $\dfrac n m > 1$.
Let $b \in \openint {\dfrac 2 3 + \sqrt {8 \paren {\dfrac n m} - 8} } {\dfrac 1 2 + \sqrt {6 \paren {\dfrac n m} - 3} }$.

Define:

$a = 2 \paren {\dfrac {n - b - r} m} + b = \paren {1 - \dfrac 2 m} b + 2 \paren {\dfrac {n - r} m}$

Then $a, b$ satisfy:

$b^2 < 4 a$
$3 a < b^2 + 2 b + 4$


Proof
$b^2 < 4 a$
$b^2 - 4 a = b^2 - 4 \paren {1 - \dfrac 2 m} b - 8 \paren {\dfrac {n - r} m}$
By the Quadratic Formula, $b^2 - 4 a < 0$ when $b$ is between:














\(\ds \)

\(\)







\(\ds \frac 1 2 \paren {4 \paren {1 - \frac 2 m} \pm \sqrt {16 \paren {1 - \frac 2 m}^2 + 32 \paren {\frac {n - r} m} } }\)




















\(\ds \)

\(=\)







\(\ds 2 - \frac 4 m \pm \sqrt {\paren {2 - \frac 4 m}^2 + 8 \paren {\frac n m} - 8 \paren {\frac r m} }\)










Observing the term in the square root, we have: 

$2 - \dfrac 4 m - \sqrt {\paren {2 - \dfrac 4 m}^2 + 8 \paren {\dfrac n m} - 8 \paren {\dfrac r m} } < 0$
Since $b > 0$ this is satisfied.

Also we have:














\(\ds b\)

\(<\)







\(\ds \frac 2 3 + \sqrt {8 \paren {\frac n m} - 8}\)




















\(\ds \)

\(<\)







\(\ds 2 - \frac 4 m + \sqrt {8 \paren {\frac n m} - 8 \paren {\dfrac r m} }\)





$m \ge 3$, $r < m$














\(\ds \)

\(\le\)







\(\ds 2 - \frac 4 m + \sqrt {\paren {2 - \frac 4 m}^2 + 8 \paren {\frac n m} - 8 \paren {\dfrac r m} }\)





Square is nonnegative



showing that first inequality is satisfied.
$\Box$


$3 a < b^2 + 2 b + 4$
$b^2 + 2 b + 4 - 3 a = b^2 - \paren {1 - \dfrac 6 m} b - 6 \paren {\dfrac {n - r} m} + 4$
By the Quadratic Formula, $b^2 + 2 b + 4 - 3 a > 0$ when $b$ is greater than:














\(\ds \)

\(\)







\(\ds \frac 1 2 \paren {1 - \frac 6 m + \sqrt {\paren {1 - \frac 6 m}^2 + 4 \paren {6 \paren {\frac {n - r} m} - 4} } }\)




















\(\ds \)

\(<\)







\(\ds \frac 1 2 \paren {1 + \sqrt {24 \paren {\frac n m} - 16} }\)





$m > 0$, $r \ge 0$, $-1 \le 1 - \dfrac 6 m < 1$














\(\ds \)

\(=\)







\(\ds \frac 1 2 + \sqrt {6 \paren {\frac n m} - \frac {15} 4}\)









showing that second inequality is satisfied by any $b > \dfrac 1 2 + \sqrt {6 \paren {\dfrac n m} - 3}$.
$\blacksquare$


Sources
Jan 1987: Melvyn B. Nathanson: A Short Proof of Cauchy's Polygonal Number Theorem (Proceedings of the American Mathematical Society Vol. 99, no. 1: pp. 22 – 24)




