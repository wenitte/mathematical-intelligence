# 

Source: https://proofwiki.org/wiki/Excess_Kurtosis_of_Hat-Check_Distribution

Theorem
Let $X$ be a discrete random variable with a Hat-Check distribution with parameter $n$. ($n \gt 3$)
Then the excess kurtosis $\gamma_2$ of $X$ is given by: 

$\gamma_2 = 1$
Proof
From Kurtosis in terms of Non-Central Moments, we have: 

$\gamma_2 = \dfrac {\expect {X^4} - 4 \mu \expect {X^3} + 6 \mu^2 \expect {X^2} - 3 \mu^4} {\sigma^4} - 3$
where: 

$\mu$ is the expectation of $X$.
$\sigma$ is the standard deviation of $X$.
We have, by Expectation of Hat-Check Distribution:

$\expect X = n - 1$
By Variance of Hat-Check Distribution:

$\var X = \sigma^2 = 1$
$\expect {X^2} = \paren {n - 1 }^2 + 1$
By Skewness of Hat-Check Distribution:

$\expect {X^3} = n^3 - 3n^2 + 6n - 5$

To now calculate $\gamma_2$, we must calculate $\expect {X^4}$.














\(\ds \expect {X^4}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^n {k^4 \dfrac 1 {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} }\)





Definition of Hat-Check Distribution














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n {k^4 \dfrac 1 {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} }\)





as the $k = 0$ term vanishes














\(\ds \)

\(=\)







\(\ds \sum_{y \mathop = n - 1}^0 \paren {n - y }^4 \dfrac 1 {y!} \sum_{s \mathop = 0}^{n - y} \dfrac {\paren {-1}^s} {s!}\)





Let $y = n - k$














\(\ds \)

\(=\)







\(\ds n^4 \sum_{y \mathop = 0}^{n - 1} \dfrac 1 {y!} \sum_{s \mathop = 0}^{n - y} \dfrac {\paren {-1}^s} {s!} - 4n^3 \sum_{y \mathop = 0}^{n - 1} \dfrac y {y!} \sum_{s \mathop = 0}^{n - y} \dfrac {\paren {-1}^s} {s!} + 6n^2 \sum_{y \mathop = 0}^{n - 1} \dfrac {y^2} {y!} \sum_{s \mathop = 0}^{n - y} \dfrac {\paren {-1}^s} {s!} - 4n\sum_{y \mathop = 0}^{n - 1} \dfrac {y^3} {y!} \sum_{s \mathop = 0}^{n - y} \dfrac {\paren {-1}^s} {s!} + \sum_{y \mathop = 0}^{n - 1} \dfrac {y^4} {y!} \sum_{s \mathop = 0}^{n - y} \dfrac {\paren {-1}^s} {s!}\)




















\(\ds \)

\(=\)







\(\ds n^4 \sum_{k \mathop = 1}^n \dfrac 1 {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} - 4n^3 \sum_{k \mathop = 1}^n \dfrac {n - k} {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} + 6n^2 \sum_{k \mathop = 1}^n \dfrac {\paren {n - k}^2 } {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} - 4n\sum_{k \mathop = 1}^n \dfrac {\paren {n - k}^3 } {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} + \sum_{k \mathop = 1}^n \dfrac {\paren {n - k}^4 } {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)





Let $y = n - k$














\(\ds \)

\(=\)







\(\ds n^4 \sum_{k \mathop = 1}^n \dfrac 1 {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} - 4n^3 \sum_{k \mathop = 1}^n \dfrac {n - k} {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} + 6n^2 \sum_{k \mathop = 1}^n \dfrac {\paren {n - k}^2 } {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} - 4n\sum_{k \mathop = 1}^n \dfrac {\paren {n - k}^3 } {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} + \sum_{k \mathop = 1}^n \dfrac {\paren {n - k}^4 } {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} + 8 \dfrac {n^4} {n!} - 8 \dfrac {n^4} {n!}\)





adding $0$ - re-index sums














\(\ds \)

\(=\)







\(\ds n^4 \sum_{k \mathop = 0}^n \dfrac 1 {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} - 4n^3 \sum_{k \mathop = 0}^n \dfrac {n - k} {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} + 6n^2 \sum_{k \mathop = 0}^n \dfrac {\paren {n - k}^2 } {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} - 4n\sum_{k \mathop = 0}^n \dfrac {\paren {n - k}^3 } {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} + \sum_{k \mathop = 0}^n \dfrac {\paren {n - k}^4 } {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)




















\(\ds \)

\(=\)







\(\ds n^4 \sum_{k \mathop = 0}^n \dfrac 1 {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} - 4n^3 \sum_{k \mathop = 0}^{n - 1} \dfrac {n - k} {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} + 6n^2 \sum_{k \mathop = 0}^{n - 1} \dfrac {\paren {n - k}^2 } {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} - 4n\sum_{k \mathop = 0}^{n - 1} \dfrac {\paren {n - k}^3 } {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} + \sum_{k \mathop = 0}^{n - 1} \dfrac {\paren {n - k}^4 } {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)





as the $k = n$ term vanishes














\(\ds \)

\(=\)







\(\ds n^4 \sum_{k \mathop = 0}^n \dfrac 1 {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} - 4n^3 \sum_{k \mathop = 0}^{n - 1} \dfrac 1 {\paren {n - 1 - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} + 6n^2 \sum_{k \mathop = 0}^{n - 1} \dfrac {\paren {n - k} } {\paren {n - 1 - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} - 4n\sum_{k \mathop = 0}^{n - 1} \dfrac {\paren {n - k}^2 } {\paren {n - 1 - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} + \sum_{k \mathop = 0}^{n - 1} \dfrac {\paren {n - k}^3 } {\paren {n - 1 - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)





canceling terms














\(\ds \)

\(=\)







\(\ds n^4 \sum_{k \mathop = 0}^n \dfrac 1 {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} - 4n^3 \sum_{k \mathop = 0}^{n - 1} \dfrac 1 {\paren {n - 1 - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} + 6n^3 \sum_{k \mathop = 0}^{n - 1} \dfrac 1 {\paren {n - 1 - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} - 6n^2 \sum_{k \mathop = 0}^{n - 1} \dfrac k {\paren {n - 1 - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds 4n^3\sum_{k \mathop = 0}^{n - 1} \dfrac 1 {\paren {n - 1 - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} + 8n^2 \sum_{k \mathop = 0}^{n - 1} \dfrac k {\paren {n - 1 - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} - 4n \sum_{k \mathop = 0}^{n - 1} \dfrac {k^2 } {\paren {n - 1 - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds n^3\sum_{k \mathop = 0}^{n - 1} \dfrac 1 {\paren {n - 1 - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} - 3n^2 \sum_{k \mathop = 0}^{n - 1} \dfrac k {\paren {n - 1 - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} + 3n \sum_{k \mathop = 0}^{n - 1} \dfrac {k^2 } {\paren {n - 1 - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!} - \sum_{k \mathop = 0}^{n - 1} \dfrac {k^3 } {\paren {n - 1 - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)









To help complete the sum above, recall that:














\(\ds \sum_{k \mathop = 0}^n \dfrac 1 {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)

\(=\)







\(\ds 1\)





Hat-Check Distribution Gives Rise to Probability Mass Function














\(\ds \sum_{k \mathop = 0}^{n - 1} \dfrac 1 {\paren {n - 1 - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)

\(=\)







\(\ds 1\)





Hat-Check Distribution Gives Rise to Probability Mass Function














\(\ds \sum_{k \mathop = 0}^{n - 1} \dfrac k {\paren {n - 1 - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)

\(=\)







\(\ds \paren {n - 1} - 1\)





Expectation of Hat-Check Distribution














\(\ds \)

\(=\)







\(\ds \paren {n - 2}\)




















\(\ds \sum_{k \mathop = 0}^{n - 1} \dfrac {k^2} {\paren {n - 1 - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)

\(=\)







\(\ds \paren{\paren {n - 1} - 1}^2 + 1\)





Variance of Hat-Check Distribution














\(\ds \)

\(=\)







\(\ds \paren{n^2 -4n + 5}\)




















\(\ds \sum_{k \mathop = 0}^{n - 1} \dfrac {k^3} {\paren {n - 1 - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)

\(=\)







\(\ds \paren{n - 1}^3 - 3\paren {n - 1}^2 + 6\paren {n - 1} - 5\)





Skewness of Hat-Check Distribution














\(\ds \)

\(=\)







\(\ds \paren{n^3 -6n^2 + 15n - 15}\)









Therefore:














\(\ds \)

\(=\)







\(\ds n^4 - 4n^3 + 6n^3 - 6n^2 \paren {n - 2} - 4n^3 + 8n^2 \paren {n - 2} - 4n \paren {n^2 -4n + 5} + n^3 - 3n^2 \paren {n - 2} + 3n \paren {n^2 -4n + 5} - \paren {n^3 -6n^2 + 15n - 15}\)




















\(\ds \)

\(=\)







\(\ds n^4 + \paren {-4 + 6 - 6 - 4 + 8 - 4 +1 - 3 + 3 - 1} n^3 + \paren {12 - 16 + 16 + 6 - 12 + 6 } n^2 + \paren {-20 + 15 - 15 } n + 15\)




















\(\ds \)

\(=\)







\(\ds n^4 - 4n^3 + 12n^2 - 20n + 15\)










So:














\(\ds \gamma_2\)

\(=\)







\(\ds \frac {\paren {n^4 - 4n^3 + 12n^2 - 20n + 15 } - 4 \paren {n - 1} \paren {n^3 - 3n^2 + 6n - 5} + 6 \paren {n - 1}^2 \paren {n^2 - 2n + 2} - 3\paren {n - 1}^4} 1 - 3\)




















\(\ds \)

\(=\)







\(\ds \paren {n^4 - 4n^3 + 12n^2 - 20n + 15 } - \paren {4n^4 - 12n^3 + 24n^2 - 20n} + \paren {4n^3 - 12n^2 + 24n - 20}\)





Expand the second term














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds 6 \paren {n^2 - 2n + 1} \paren {n^2 - 2n + 2} - 3\paren {n^4 - 4n^3 + 6n^2 - 4n + 1} - 3\)





Expand powers: Binomial Theorem














\(\ds \)

\(=\)







\(\ds n^4 - 4n^3 + 12n^2 - 20n + 15 - 4n^4 + 12n^3 - 24n^2 + 20n + 4n^3 - 12n^2 + 24n - 20\)





Remove parentheses














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds 6n^4 - 12n^3 + 12n^2 - 12n^3 + 24n^2 - 24n + 6n^2 - 12n + 12 - 3n^4 + 12n^3 - 18n^2 + 12n -3 - 3\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - 4 + 6 - 3 }n^4 + \paren {-4 + 12 + 4 - 12 - 12 + 12 }n^3 + \paren {12 - 24 - 12 + 12 + 24 + 6 - 18 }n^2 + \paren {-20 + 20 + 24 - 24 - 12 + 12 }n + \paren {15 - 20 + 12 - 3 - 3 }\)




















\(\ds \)

\(=\)







\(\ds \paren {0 }n^4 + \paren {0 }n^3 + \paren {0 }n^2 + \paren {0 }n + \paren {1 }\)




















\(\ds \)

\(=\)







\(\ds 1\)









$\blacksquare$





