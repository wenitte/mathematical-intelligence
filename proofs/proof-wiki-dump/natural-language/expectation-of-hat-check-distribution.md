# 

Source: https://proofwiki.org/wiki/Expectation_of_Hat-Check_Distribution

Theorem
Let $X$ be a discrete random variable with the Hat-Check distribution with parameter $n$.

Then the expectation of $X$ is given by:

$\expect X = n - 1$


Proof
From the definition of expectation:

$\ds \expect X = \sum_{x \mathop \in \Img X} x \map \Pr {X = x}$
By definition of hat-check distribution:

$\ds \expect X = \sum_{k \mathop = 0}^n k \dfrac 1 {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}$
Then:














\(\ds \expect X\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n k \dfrac 1 {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)





as the $k = 0$ term vanishes














\(\ds \)

\(=\)







\(\ds \sum_{y \mathop = n - 1}^0 \paren {n - y } \dfrac 1 {y!} \sum_{s \mathop = 0}^{n - y} \dfrac {\paren {-1}^s} {s!}\)





Let $y = n - k$














\(\ds \)

\(=\)







\(\ds n \sum_{y \mathop = 0}^{n - 1} \dfrac 1 {y!} \sum_{s \mathop = 0}^{n - y} \dfrac {\paren {-1}^s} {s!} - \sum_{y \mathop = 0}^{n - 1} \dfrac y {y!} \sum_{s \mathop = 0}^{n - y} \dfrac {\paren {-1}^s} {s!}\)




















\(\ds \)

\(=\)







\(\ds n \sum_{k \mathop = 1}^n \dfrac 1 {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} - \sum_{k \mathop = 1}^n \dfrac {n - k} {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)





Let $y = n - k$














\(\ds \)

\(=\)







\(\ds n \sum_{k \mathop = 1}^n \dfrac 1 {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} + \dfrac n {n!} - \dfrac n {n!} - \sum_{k \mathop = 1}^n \dfrac {n - k} {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)





adding $0$














\(\ds \)

\(=\)







\(\ds n \sum_{k \mathop = 0}^n \dfrac 1 {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} - \sum_{k \mathop = 0}^n \dfrac {n - k} {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)




















\(\ds \)

\(=\)







\(\ds n \sum_{k \mathop = 0}^n \dfrac 1 {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} - \sum_{k \mathop = 0}^{n - 1} \dfrac {n - k} {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)





as the $k = n$ term vanishes














\(\ds \)

\(=\)







\(\ds n \sum_{k \mathop = 0}^n \dfrac 1 {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} - \sum_{k \mathop = 0}^{n - 1} \dfrac 1 {\paren {n - 1 - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)




















\(\ds \)

\(=\)







\(\ds n - 1\)





Hat-Check Distribution Gives Rise to Probability Mass Function



$\blacksquare$


Also see
Variance of Hat-Check Distribution




