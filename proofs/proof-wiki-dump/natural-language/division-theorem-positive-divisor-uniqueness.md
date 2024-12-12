# 

Source: https://proofwiki.org/wiki/Division_Theorem/Positive_Divisor/Uniqueness


This page has been identified as a candidate for refactoring of advanced complexity.In particular: Extract the terms dividend, divisor and quotient, which are different from their definitions in the context of division on a field as the inverse of multiplication.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
For every pair of integers $a, b$ where $b > 0$, the integers $q, r$ such that $a = q b + r$ and $0 \le r < b$ are unique:

$\forall a, b \in \Z, b > 0: \exists! q, r \in \Z: a = q b + r, 0 \le r < b$

In the above equation:

$a$ is the dividend
$b$ is the divisor
$q$ is the quotient
$r$ is the principal remainder, or, more usually, just the remainder.


Proof 1
It is given by Division Theorem: Positive Divisor: Existence that such $q$ and $r$ exist.

Suppose $q_1, r_1$ and $q_2, r_2$ are two pairs of $q, r$ that satisfy $a = q b + r, 0 \le r < b$.
That is:














\(\ds a\)

\(=\)







\(\ds q_1 b + r_1, 0 \le r_1 < b\)




















\(\ds a\)

\(=\)







\(\ds q_2 b + r_2, 0 \le r_2 < b\)










This gives:

$0 = b \paren {q_1 - q_2} + \paren {r_1 - r_2}$

Aiming for a contradiction, suppose that $q_1 \ne q_2$.
Without loss of generality, suppose that $q_1 > q_2$.
Then:














\(\ds q_1 - q_2\)

\(\ge\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds r_2 - r_1\)

\(=\)







\(\ds b \paren {q_1 - q_2}\)




















\(\ds \)

\(\ge\)







\(\ds b \times 1\)





as $b > 0$














\(\ds \)

\(=\)







\(\ds b\)














\(\ds \leadsto \ \ \)





\(\ds r_2\)

\(\ge\)







\(\ds r_1 + b\)




















\(\ds \)

\(\ge\)







\(\ds b\)









This contradicts the assumption that $r_2 < b$.
A similar contradiction follows from the assumption that $q_1 < q_2$.
Therefore $q_1 = q_2$ and so $r_1 = r_2$.
Thus it follows that $q$ and $r$ are unique.
$\blacksquare$


Proof 2
It is given by Division Theorem: Positive Divisor: Existence that such $q$ and $r$ exist.

Let $a = q b + r$ where $q, r \in \Z$ and $0 \le r < b$.
Thus:

$\dfrac a b = q + \dfrac r b$
and:

$0 \le \dfrac r b \le \dfrac {b - 1} b < 1$
So:

$q = \floor {\dfrac a b}$
and so:

$r = a - b \floor {\dfrac a b}$
Thus, given $a$ and $b$, the numbers $q$ and $r$ are unique determined.
$\blacksquare$


Proof 3
It is given by Division Theorem: Positive Divisor: Existence that such $q$ and $r$ exist.
Suppose that:

$a = b q_1 + r_1 = b q_2 + r_2$
where both $0 \le r_1 < b$ and $0 \le r_2 < b$.
Without loss of generality, suppose $r_1 \ge r_2$.
Then:

$r_1 - r_2 = b \paren {q_2 - q_1}$
That is:

$b \divides \paren {r_2 - r_1}$
where $\divides$ denotes divisibility.
But:

$r_1 - r_2 < b$
while from Absolute Value of Integer is not less than Divisors: Corollary:

$r_1 - r_2 \ge b$
unless from Integer Divides Zero $r_1 - r_2 = 0$.
So $r_1 = r_2$ and it follows directly that $q_1 = q_2$.
$\blacksquare$


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 6$: The division process in $I$: Theorem
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-1}$ Euclid's Division Lemma: Theorem $\text {2-1}$




