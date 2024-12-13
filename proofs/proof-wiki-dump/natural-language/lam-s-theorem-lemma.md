# 

Source: https://proofwiki.org/wiki/Lam%C3%A9%27s_Theorem/Lemma



Theorem
Let $a, b \in \Z_{>0}$ be (strictly) positive integers.
Let the Euclidean Algorithm be employed to find the GCD of $a$ and $b$.
Suppose it takes $n$ cycles around the Euclidean Algorithm to find $\gcd \set {a, b}$.
Then $\min \set {a, b} \ge F_{n + 2}$, where $F_n$ denotes the $n$th Fibonacci number.


Proof
Without loss of generality, suppose $a \ge b$.
Let $q_i, r_i$ be the quotients and remainders of each step of the Euclidean Algorithm, that is:














\(\ds a\)

\(=\)







\(\ds q_1 b + r_1\)




















\(\ds b\)

\(=\)







\(\ds q_2 r_1 + r_2\)




















\(\ds r_1\)

\(=\)







\(\ds q_3 r_2 + r_3\)




















\(\ds \cdots\)

\(\)







\(\ds \)




















\(\ds r_{n - 2}\)

\(=\)







\(\ds q_n r_{n - 1} + r_n\)




















\(\ds r_{n - 1}\)

\(=\)







\(\ds q_{n + 1} r_n + 0\)









so $r_n = \gcd \set {a, b}$.
We prove that $r_{n - m} \ge F_{m + 2}$ for $0 \le m < n$ by the Principle of Mathematical Induction:


Basis for the Induction
When $m = 0$, we have:














\(\ds r_n\)

\(=\)







\(\ds \gcd \set {a, b}\)





Euclidean Algorithm














\(\ds \)

\(\ge\)







\(\ds 1\)





Greatest Common Divisor is at least $1$














\(\ds \)

\(=\)







\(\ds F_2\)





Definition of Fibonacci Number



When $m = 1$, we have:














\(\ds r_{n - 1}\)

\(>\)







\(\ds r_n\)





Euclidean Algorithm








\(\ds \leadsto \ \ \)





\(\ds r_{n - 1}\)

\(\ge\)







\(\ds 2\)




















\(\ds \)

\(=\)







\(\ds F_3\)





Definition of Fibonacci Number



These are our base cases.


Induction Hypothesis
This is our induction hypothesis:

$r_{n - k + 2} \ge F_k$
$r_{n - k + 1} \ge F_{k + 1}$
for some $k$ where $2 \le k < n$.
It is to be demonstrated that:

$r_{n - k} \ge F_{k + 2}$


Induction Step
This is our induction step:














\(\ds r_{n - k}\)

\(=\)







\(\ds q_{n - k + 2} r_{n - k + 1} + r_{n - k + 2}\)





Euclidean Algorithm














\(\ds \)

\(\ge\)







\(\ds 1 \times F_{k + 1} + F_k\)





Induction hypothesis














\(\ds \)

\(=\)







\(\ds F_{k + 2}\)





Definition of Fibonacci Number



We have shown that the result for $m = k - 2$ and $m = k - 1$ implies the result for $m = k$.
Thus we have $r_{n - m} \ge F_{m + 2}$ for all $0 \le m < n$.
Hence:














\(\ds b\)

\(=\)







\(\ds q_2 r_1 + r_2\)





Euclidean Algorithm














\(\ds \)

\(\ge\)







\(\ds 1 \times F_{n + 1} + F_n\)





the result above














\(\ds \)

\(=\)







\(\ds F_{n + 2}\)





Definition of Fibonacci Number



$\blacksquare$





