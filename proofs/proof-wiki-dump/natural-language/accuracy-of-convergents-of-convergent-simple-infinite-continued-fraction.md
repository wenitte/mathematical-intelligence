# 

Source: https://proofwiki.org/wiki/Accuracy_of_Convergents_of_Convergent_Simple_Infinite_Continued_Fraction



Theorem
Let $C = \tuple {a_0, a_1, \ldots}$ be an simple infinite continued fraction in $\R$.
Let $C$ converge to $x \in \R$.
For $n \ge 0$, let $C_n = \dfrac {p_n} {q_n}$ be the $n$th convergent of $C$, where $p_n$ and $q_n$ are the $n$th numerator and denominator.

Then for all $n \ge 0$:

$\size {x - \dfrac {p_n} {q_n} } < \dfrac 1 {q_n q_{n + 1} }$


Proof
We show that either:

$x \in \closedint {C_n} {C_{n + 1} }$
or:

$x \in \closedint {C_{n + 1} } {C_n}$
so that the result follows from:

Difference between Adjacent Convergents of Simple Continued Fraction
Distance between Point of Real Interval and Endpoint is at most Length


Odd case
Let $n \ge 1$ be odd.
By Limit of Subsequence equals Limit of Sequence:

$x = \ds \lim_{k \mathop \to \infty} C_{2 k}$
For all $2 k \ge n + 1$, by:

Even Convergents of Simple Continued Fraction are Strictly Increasing
Even Convergent of Simple Continued Fraction is Strictly Smaller than Odd Convergent
we have:

$C_{n + 1} \le C_{2 k} < C_n$
By Lower and Upper Bounds for Sequences:

$x \in \closedint {C_{n + 1} } {C_n}$
$\Box$


Even case
Let $n \ge 0$ be even.
By Limit of Subsequence equals Limit of Sequence:

$x = \ds \lim_{k \mathop \to \infty} C_{2 k + 1}$
For all $2 k + 1 \ge n + 1$, by:

Odd Convergents of Simple Continued Fraction are Strictly Decreasing
Even Convergent of Simple Continued Fraction is Strictly Smaller than Odd Convergent
we have:

$C_n < C_{2 k + 1} \le C_{n + 1}$
By Lower and Upper Bounds for Sequences:

$x \in \closedint {C_n} {C_{n + 1} }$
$\blacksquare$


Also see
Accuracy of Convergents of Continued Fraction




