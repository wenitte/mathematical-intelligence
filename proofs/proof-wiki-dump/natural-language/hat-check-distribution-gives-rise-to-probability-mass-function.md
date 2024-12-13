# 

Source: https://proofwiki.org/wiki/Hat-Check_Distribution_Gives_Rise_to_Probability_Mass_Function

Theorem
Let $X$ be a discrete random variable on a probability space $\struct {\Omega, \Sigma, \Pr}$.

Let $X$ have the hat-check distribution with parameter $n$ (where $n > 0$).

Then $X$ gives rise to a probability mass function.


Proof
By definition:

$\Img X = \set {0, 1, \ldots, n}$
$\ds \map \Pr {X = k} = \dfrac 1 {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}$
Then:














\(\ds \map \Pr \Omega\)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \dfrac 1 {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \dfrac 1 {\paren {n - k }! } \dfrac {n! k!} {n! k!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \dbinom n k \dfrac {k!} {n!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \dfrac 1 {n!} \sum_{k \mathop = 0}^n \dbinom n k k! \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {n!} n!\)





Sum over k of r Choose k by -1^r-k by Polynomial














\(\ds \)

\(=\)







\(\ds 1\)










So $X$ satisfies $\map \Pr \Omega = 1$, and hence the result.
$\blacksquare$





