# 

Source: https://proofwiki.org/wiki/Minkowski%27s_Inequality_for_Sums/Index_Greater_than_1/Proof_1

Theorem
Let $a_1, a_2, \ldots, a_n, b_1, b_2, \ldots, b_n \in \R_{\ge 0}$ be non-negative real numbers.
Let $p \in \R$ be a real number such that $p > 1$.

Then:

$\ds \paren {\sum_{k \mathop = 1}^n \paren {a_k + b_k}^p}^{1 / p} \le \paren {\sum_{k \mathop = 1}^n {a_k}^p}^{1 / p} + \paren {\sum_{k \mathop = 1}^n {b_k}^p}^{1 / p}$


Proof
Define:

$q = \dfrac p {p - 1}$
Then:

$\dfrac 1 p + \dfrac 1 q = \dfrac 1 p + \dfrac {p - 1} p = 1$

It follows that:














\(\ds \sum_{k \mathop = 1}^n \paren {a_k + b_k}^p\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n a_k \paren {a_k + b_k}^{p - 1} + \sum_{k \mathop = 1}^n b_k \paren {a_k + b_k}^{p - 1}\)




















\(\ds \)

\(\le\)







\(\ds \paren {\sum_{k \mathop = 1}^n {a_k}^p}^{1 / p} \paren {\sum_{k \mathop = 1}^n \paren {\paren {a_k + b_k}^{p - 1} }^q}^{1 / q} + \paren {\sum_{k \mathop = 1}^n {b_k}^p}^{1 / p} \paren {\sum_{k \mathop = 1}^n \paren {\paren {a_k + b_k}^{p - 1} }^q}^{1 / q}\)





Hölder's Inequality for Sums (twice)














\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop = 1}^n {a_k}^p}^{1 / p} \paren {\sum_{k \mathop = 1}^n \paren {a_k + b_k}^p}^{1 / q} + \paren {\sum_{k \mathop = 1}^n {b_k}^p}^{1 / p} \paren {\sum_{k \mathop = 1}^n \paren {a_k + b_k}^p}^{1 / q}\)





Power of Power, and by hypothesis: $\paren {p - 1} q = p$














\(\ds \)

\(=\)







\(\ds \paren {\paren {\sum_{k \mathop = 1}^n {a_k}^p}^{1 / p} + \paren {\sum_{k \mathop = 1}^n {b_k}^p}^{1 / p} } \paren {\sum_{k \mathop = 1}^n \paren {a_k + b_k}^p}^{1 / q}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\sum_{k \mathop = 1}^n \paren {a_k + b_k}^p}^{1 - 1 / q}\)

\(\le\)







\(\ds \paren {\sum_{k \mathop = 1}^n {a_k}^p}^{1 / p} + \paren {\sum_{k \mathop = 1}^n {b_k}^p}^{1 / p}\)





dividing by $\ds \paren {\sum_{k \mathop = 1}^n \paren {a_k + b_k}^p}^{1 / q}$








\(\ds \leadsto \ \ \)





\(\ds \paren {\sum_{k \mathop = 1}^n \paren {a_k + b_k}^p}^{1 / p}\)

\(\le\)







\(\ds \paren {\sum_{k \mathop = 1}^n {a_k}^p}^{1 / p} + \paren {\sum_{k \mathop = 1}^n {b_k}^p}^{1 / p}\)





as $1 - \dfrac 1 q = p$



$\blacksquare$


Source of Name
This entry was named for Hermann Minkowski.





