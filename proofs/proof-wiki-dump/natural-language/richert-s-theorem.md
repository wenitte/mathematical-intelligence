# 

Source: https://proofwiki.org/wiki/Richert%27s_Theorem



Theorem
Let $S = \set {s_1, s_2, \dots}$ be an infinite set of (strictly) positive integers, with the property:

$s_n < s_{n + 1}$ for every $n \in \N$
Suppose there exists some integers $N, k$ such that every integer $n$ with $N < n \le N + s_{k + 1}$:

$n$ can be expressed as a sum of distinct elements in $\set {s_1, s_2, \dots, s_k}$
$s_{i + 1} \le 2 s_i$ for every $i \ge k$

Then for any $n > N$, $n$ can be expressed as a sum of distinct elements in $S$.


Proof
We prove this using First Principle of Mathematical Induction.

Let $\map P n$ be the proposition:

For every integer $m$ with $N < m \le N + s_{n + 1}$:
$m$ can be expressed as a sum of distinct elements in $\set {s_1, s_2, \dots, s_n}$.


Basis for the induction
From our assumption above, $\map P k$ is true.
This is the basis for the induction.


Induction Hypothesis
Suppose for some $n > k$, $\map P {n - 1}$ is true.
That is, for every integer $m$ with $N < m \le N + s_n$:

$m$ can be expressed as a sum of distinct elements in $\set {s_1, s_2, \dots, s_{n - 1}}$.
This is the induction hypothesis.

We need to show that $\map P n$ is true.
That is, for every integer $m$ with $N < m \le N + s_{n + 1}$:

$m$ can be expressed as a sum of distinct elements in $\set {s_1, s_2, \dots, s_n}$.


Induction Step
This is the induction step:
By the induction hypothesis, for every integer $m$ with $N < m \le N + s_n$:

$m$ can be expressed as a sum of distinct elements in $\set {s_1, s_2, \dots, s_{n - 1}}$.
Hence we only need to consider $N + s_n < m \le N + s_{n + 1}$.

For $m$ in this range:

$N < m - s_n \le N + s_{n + 1} - s_n \le N + s_n$
By the induction hypothesis, $m - s_n$ can be expressed as a sum of distinct elements in $\set {s_1, s_2, \dots, s_{n - 1}}$.
Hence $m$ can be expressed as a sum of distinct elements in $\set {s_1, s_2, \dots, s_{n - 1}, s_n}$.

Hence $\map P n$ is true.

By the First Principle of Mathematical Induction, $\map P n$ is true for all $n \ge k$.
$\Box$

Since $1 \le s_n < s_{n + 1}$ for every $n \in N$:

$s_n \ge n$ for every $n \in \N$
Let $K > N$.
Then:














\(\ds N + s_{K + k + 1}\)

\(\ge\)







\(\ds N + K + k + 1\)




















\(\ds \)

\(>\)







\(\ds K\)




















\(\ds \)

\(>\)







\(\ds N\)









By the result above, since $K + k \ge k$:

$K$ can be expressed as the sum of distinct elements in $\set {s_1, s_2, \dots, s_{K + k}}$.

Thus every number greater than $N$ can be expressed as the sum of distinct elements in $S$.
$\blacksquare$


Source of Name
This entry was named for Hans-Egon Richert.





