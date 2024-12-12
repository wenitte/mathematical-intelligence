# 

Source: https://proofwiki.org/wiki/Exponential_of_Sum/Real_Numbers/Proof_5

Theorem
Let $x, y \in \R$ be real numbers.
Let $\exp x$ be the exponential of $x$.

Then:

$\map \exp {x + y} = \paren {\exp x} \paren {\exp y}$


Proof
This proof assumes the definition of $\exp$ as a series.

Then:














\(\ds \map \exp {x + y}\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac 1 {n!} \paren {x + y}^n\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac 1 {n!} \sum_{k \mathop = 0}^n \frac {n!} {k! \paren {n - k}!} x^k y^{n - k}\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \sum_{k \mathop = 0}^n \paren {\frac 1 {k!} x^k} \paren {\frac 1 {\paren {n - k}!} y^{n - k} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{n \mathop = 0}^\infty \frac {x^n} {n!} } \paren {\sum_{n \mathop = 0}^\infty \frac {y^n} {n!} }\)





Definition of Cauchy Product














\(\ds \)

\(=\)







\(\ds \map \exp x \, \map \exp y\)









$\blacksquare$





