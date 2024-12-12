# 

Source: https://proofwiki.org/wiki/AM-HM_Inequality


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
Let $x_1, x_2, \ldots, x_n \in \R_{> 0}$ be strictly positive real numbers.
Let $A_n $ be the arithmetic mean of $x_1, x_2, \ldots, x_n$.
Let $H_n$ be the harmonic mean of $x_1, x_2, \ldots, x_n$.

Then $A_n \ge H_n$.


Proof
$A_n$ is defined as:

$\ds A_n = \frac 1 n \paren {\sum_{k \mathop = 1}^n x_k}$
$H_n$ is defined as:

$\ds \frac 1 H_n = \frac 1 n \paren {\sum_{k \mathop = 1}^n \frac 1 {x_k} }$

We have that:

$\forall k \in \closedint 1 n: x_k > 0$
From Positive Real has Real Square Root, we can express each $x_k$ as a square:

$\forall k \in \closedint 1 n: x_k = y_k^2$
without affecting the result.

Thus we have:

$\ds A_n = \frac 1 n \paren {\sum_{k \mathop = 1}^n y_k^2}$
$\ds \frac 1 {H_n} = \frac 1 n \paren {\sum_{k \mathop = 1}^n \frac 1 {y_k^2} }$

Multiplying $A_n$ by $\dfrac 1 {H_n}$:














\(\ds \frac {A_n} {H_n}\)

\(=\)







\(\ds \frac 1 n \paren {\sum_{k \mathop = 1}^n y_k^2} \frac 1 n \paren {\sum_{k \mathop = 1}^n \frac 1 {y_k^2} }\)




















\(\ds \)

\(\ge\)







\(\ds \frac 1 {n^2} \paren {\sum_{k \mathop = 1}^n \frac {y_k} {y_k} }^2\)





Cauchy's Inequality














\(\ds \)

\(=\)







\(\ds \frac 1 {n^2} \paren {\sum_{k \mathop = 1}^n 1}^2\)




















\(\ds \)

\(=\)







\(\ds \frac {n^2} {n^2} = 1\)









So:

$\dfrac {A_n} {H_n} \ge 1$
and so from Real Number Axiom $\R \text O2$: Usual Ordering is Compatible with Multiplication:

$A_n \ge H_n$
$\blacksquare$


Also see
Cauchy's Mean Theorem
GM-HM Inequality


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 1$: Real Numbers: Exercise $\S 1.12 \ (5)$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): mean
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): mean




