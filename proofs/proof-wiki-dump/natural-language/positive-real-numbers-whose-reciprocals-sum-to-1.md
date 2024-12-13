# 

Source: https://proofwiki.org/wiki/Positive_Real_Numbers_whose_Reciprocals_Sum_to_1

Theorem
Let $p, q \in \R_{\ge 0}$ be positive real numbers such that:

$\dfrac 1 p + \dfrac 1 q = 1$
Then $p > 1$ and $q > 1$.


Proof
From Division by Zero it is immediate that $p > 0$ and $q > 0$.
Aiming for a contradiction, suppose either $0 < p \le 1$ or $0 < q \le 1$.
Without loss of generality, suppose $0 < p \le 1$.
Note we have that:

$\dfrac 1 q = 1 - \dfrac 1 p$
First suppose $p = 1$.
Then:

$\dfrac 1 q = 0$
But there exists no $q \in \R$ such that $\dfrac 1 q = 0$.
Hence it cannot be the case that $p = 1$.
Now suppose $0 < p < 1$.
Then:














\(\ds \dfrac 1 p\)

\(>\)







\(\ds 1\)




















\(\ds 1 - \dfrac 1 p\)

\(<\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 q\)

\(<\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds q\)

\(<\)







\(\ds 0\)









But this contradicts our assertion that $q > 0$.
Hence by Proof by Contradiction it follows that $p > 1$.
Similarly we reach a contradiction by assuming $0 < q \le 1$.
Hence $p > 1$ and $q > 1$ as required.
$\blacksquare$





