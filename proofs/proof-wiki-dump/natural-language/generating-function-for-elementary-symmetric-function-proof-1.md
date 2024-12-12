# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Elementary_Symmetric_Function/Proof_1

Theorem
Let $U$ be a set of $n$ numbers $\set {x_1, x_2, \ldots, x_n}$.
Let $\map {e_m} U$ be the elementary symmetric function of degree $m$ on $U$:














\(\ds \map {e_m} U\)

\(=\)







\(\ds \sum_{1 \mathop \le j_1 \mathop < j_2 \mathop < \mathop \cdots \mathop < j_m \mathop \le n} \paren {\prod_{i \mathop = 1}^m x_{j_i} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{1 \mathop \le j_1 \mathop < j_2 \mathop < \mathop \cdots \mathop < j_m \mathop \le n} x_{j_1} x_{j_2} \cdots x_{j_m}\)









Let $a_m := \map {e_m} U$ for $m = 0, 1, 2, \ldots$

Let $\map G z$ be a generating function for the sequence $\sequence {a_m}$:

$\ds \map G z = \sum_{m \mathop = 0}^\infty a_m z^m$

Then:

$\ds \map G z = \prod_{k \mathop = 1}^n \paren {1 + x_k z}$


Proof
The summation for $\map G z$ is a finite sum $m = 0, 1, \ldots, n$, which settles convergence issues.
Begin with Viète's Formulas:

$\ds \prod_{k \mathop = a}^b \paren {x - x_k} = x^n + \sum_{m \mathop = 0}^{n - 1} \paren {-1}^{n - m} \map {e_{n - m} } U \, x^m$
Change variables $x = -1 / z$:














\(\ds \prod_{k \mathop = 1}^n \paren {-\frac 1 z  - x_k}\)

\(=\)







\(\ds \paren {-z}^{-n} + \sum_{m \mathop = 0}^{n - 1} \paren {-1}^{n - m} \map {e_{n - m} } U \, \paren {-z}^{-m}\)














\(\ds \leadsto \ \ \)





\(\ds \prod_{k \mathop = 1}^n \paren {1 + x_k z}\)

\(=\)







\(\ds z^n + \sum_{m \mathop = 0}^{n - 1} \map {e_{n - m} } U \, \paren z^{n - m}\)





all signs cancel








\(\ds \leadsto \ \ \)





\(\ds \prod_{k \mathop = 1}^n \paren {1 + x_k z}\)

\(=\)







\(\ds \sum_{m \mathop = 0}^n \map {e_m} U \, z^m\)









$\blacksquare$





