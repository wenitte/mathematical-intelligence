# 

Source: https://proofwiki.org/wiki/Rational_Number_Space_is_not_Complete_Metric_Space



Theorem
Let $\struct {\Q, \tau_d}$ be the rational number space under the Euclidean metric $d$.

Then $\struct {\Q, \tau_d}$ is not a complete metric space.


Proof
Proof by Counterexample:
First note that Rational Numbers form Metric Space.
It remains to be shown that $\struct {\Q, \tau_d}$ is not complete.
Consider the sequence $\sequence {a_n}$ given by:

$a_n := \dfrac {f_{n + 1} } {f_n}$
where $\sequence {f_n}$ is the sequence of Fibonacci numbers.
By Ratio of Consecutive Fibonacci Numbers:

$\ds \lim_{n \mathop \to \infty} a_n = \phi := \dfrac {1 + \sqrt 5} 2$
But Square Root of Prime is Irrational.
That means $\dfrac {1 + \sqrt 5} 2$ is likewise irrational.
Thus $\sequence {a_n}$ is a Cauchy sequence of rational numbers which converges to a number which is not in $\Q$.

The result follows by definition of complete metric space.
$\blacksquare$

In fact, any sequence of rational numbers that converges to an irrational number (in the metric space $\R$) is a Cauchy sequence that does not converge in $\Q$.


Also see
Normed Vector Space of Rational Numbers is not Banach Space


Sources
1964: Walter Rudin: Principles of Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $1$: The Real and Complex Number Systems: Introduction: $1.2$. Remark
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): metric space
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): metric space
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Cauchy sequence




