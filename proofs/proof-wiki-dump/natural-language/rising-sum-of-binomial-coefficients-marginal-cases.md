# 

Source: https://proofwiki.org/wiki/Rising_Sum_of_Binomial_Coefficients/Marginal_Cases

Theorem
$\ds \sum_{j \mathop = 0}^m \binom {n + j} n = \binom {n + m + 1} {n + 1} = \binom {n + m + 1} m$


$n = 0$
When $n = 0$ we have:














\(\ds \sum_{j \mathop = 0}^m \binom j 0\)

\(=\)







\(\ds \binom 0 0 + \binom 1 0 + \binom 2 0 + \cdots \binom m 0\)




















\(\ds \)

\(=\)







\(\ds 1 + 1 + \cdots + 1\)





from $0$ to $m$














\(\ds \)

\(=\)







\(\ds m + 1\)





as there are $m + 1$ of them














\(\ds \)

\(=\)







\(\ds \binom {m + 1} 1\)









So the theorem holds for $n = 0$.
$\Box$


$n = 1$
When $n = 1$ we have:














\(\ds \sum_{j \mathop = 0}^m \binom {1 + j} 1\)

\(=\)







\(\ds \binom 1 1 + \binom 2 1 + \binom 3 1 + \cdots \binom {m + 1} 1\)




















\(\ds \)

\(=\)







\(\ds 1 + 2 + \cdots + \paren {m + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {m + 1} \paren {m + 2} } 2\)





Closed Form for Triangular Numbers














\(\ds \)

\(=\)







\(\ds \binom {m + 2} 2\)





Definition of Binomial Coefficient



So the theorem holds for $n = 1$.
$\Box$

From Symmetry Rule for Binomial Coefficients:

$\dbinom {m + n} n = \dbinom {m + n} m$
thus:

$\dbinom {m + 1} 1 = \dbinom {m + 1} m$
and:

$\dbinom {m + 2} 2 = \dbinom {m + 2} m$
$\blacksquare$





