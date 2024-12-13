# 

Source: https://proofwiki.org/wiki/Minkowski%27s_Inequality_for_Sums/Index_Greater_than_1/Proof_2

Theorem
Let $a_1, a_2, \ldots, a_n, b_1, b_2, \ldots, b_n \in \R_{\ge 0}$ be non-negative real numbers.
Let $p \in \R$ be a real number such that $p > 1$.

Then:

$\ds \paren {\sum_{k \mathop = 1}^n \paren {a_k + b_k}^p}^{1 / p} \le \paren {\sum_{k \mathop = 1}^n {a_k}^p}^{1 / p} + \paren {\sum_{k \mathop = 1}^n {b_k}^p}^{1 / p}$


Proof
Let $\mathbf a$ and $\mathbf b$ be real finite sequences:














\(\ds \mathbf a\)

\(=\)







\(\ds \sequence {a_k}_{1 \mathop \le k \mathop \le n}\)




















\(\ds \mathbf b\)

\(=\)







\(\ds \sequence {b_k}_{1 \mathop \le k \mathop \le n}\)










Let $\norm {\mathbf a}_p$ denote the $p$-norm of $\mathbf a$:

$\norm {\mathbf a}_p := \paren {\ds \sum_{k \mathop = 1}^n {a_k}^p}^{1 / p}$

Define:

$q = \dfrac p {p - 1}$
Then:

$\dfrac 1 p + \dfrac 1 q = \dfrac 1 p + \dfrac {p - 1} p = 1$

Then:














\(\ds \paren {\norm {\mathbf a + \mathbf b}_p}^p\)

\(=\)







\(\ds \norm {\paren {\mathbf a + \mathbf b}^p}_1\)




















\(\ds \)

\(=\)







\(\ds \norm {\mathbf a \paren {\mathbf a + \mathbf b}^{p - 1} + \mathbf b \paren {\mathbf a + \mathbf b}^{p - 1} }_1\)




















\(\ds \)

\(=\)







\(\ds \norm {\mathbf a \paren {\mathbf a + \mathbf b}^{p - 1} }_1 + \norm {\mathbf b \paren {\mathbf a + \mathbf b}^{p - 1} }_1\)




















\(\ds \)

\(\le\)







\(\ds \norm {\mathbf a}_p \norm {\paren {\mathbf a + \mathbf b}^{p - 1} }_q + \norm {\mathbf b}_p \norm {\paren {\mathbf a + \mathbf b}^{p - 1} }_q\)





Hölder's Inequality for Sums (twice)














\(\ds \)

\(=\)







\(\ds \paren {\norm {\mathbf a}_p + \norm {\mathbf b}_p} \norm {\paren {\mathbf a + \mathbf b}^{p - 1} }_q\)





simplifying














\(\ds \)

\(=\)







\(\ds \paren {\norm {\mathbf a}_p + \norm {\mathbf b}_p} \norm {\paren {\mathbf a + \mathbf b}^{p - 1} }_{p / \paren {p - 1} }\)





by hypothesis: $\dfrac p {p - 1} = q$














\(\ds \)

\(=\)







\(\ds \paren {\norm {\mathbf a}_p + \norm {\mathbf b}_p} \paren {\norm {\mathbf a + \mathbf b}_p}^{p - 1}\)





Transformation of P-Norm








\(\ds \leadsto \ \ \)





\(\ds \norm {\mathbf a + \mathbf b}_p\)

\(\le\)







\(\ds \norm {\mathbf a}_p + \norm {\mathbf b}_p\)





dividing both sides by $\paren {\norm {\mathbf a + \mathbf b}_p}^{p - 1}$



$\blacksquare$


Source of Name
This entry was named for Hermann Minkowski.





