# 

Source: https://proofwiki.org/wiki/User:Ariana/Sandbox



Proof 3
Consider the Euclidean algorithm in action:














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









First it will be established that there exist $x_i, y_i \in \Z$ such that:

$(1): \quad a x_i + b y_i = r_i$
for $i \in \set{1, 2, \ldots, n - 1}$.

The proof proceeds by induction.


Basis for the Induction
When $i = 1$, let $x_1 = 1, y_1 = -q_1$.
When $i = 2$, let $x_2 = -q_2, y_2 = 1 + q_1 q_2$.
This is the basis for the induction.


Induction Hypothesis
Our induction hypothesis is that the integer solutions to $(1)$ have been found for all $i$ such that $i \le k$ where $k < n - 1$.


Induction Step
We know that:

$r_{k - 1} = r_k q_{k + 1} + r_{k + 1}$
Thus, by the induction hypothesis:

$\paren {a x_{k - 1} + b y_{k - 1} } - \paren {a x_k + b y_k} q_{k + 1} = r_{k + 1}$
which can be rewritten as:

$\paren {x_{k - 1} - x_k q_{k + 1} } a + \paren {y_{k - 1} - y_k q_{k + 1} } b = r_{k + 1}$
Hence we have the following solutions to $(1)$ when $i = k + 1$:

$x_{k + 1} = x_{k - 1} - x_k q_{k + 1}$
$y_{k + 1} = y_{k - 1} - y_k q_{k + 1}$

The result follows by the Principle of Mathematical Induction.
$\blacksquare$





