# 

Source: https://proofwiki.org/wiki/Accuracy_of_Convergents_of_Continued_Fraction_Expansion_of_Irrational_Number



Theorem
Let $x$ be an irrational number.
Let $(a_0, a_1, \ldots)$ be its continued fraction expansion.
Let $\left \langle {C_n}\right \rangle_{n \geq 0}$ be its sequence of convergents.
Let $p_0, p_1, p_2, \ldots$ and $q_0, q_1, q_2, \ldots$ be its numerators and denominators.

Then:

$\forall k \ge 1: \left\vert{x - \dfrac {p_{k + 1} } {q_{k + 1} } }\right\vert < \dfrac 1 {q_{k + 1} q_{k + 2} } \le \dfrac 1 {2 q_k q_{k + 1} } < \left\vert{x - \dfrac {p_k} {q_k} }\right\vert$

Thus:

The left hand side of the inequality gives an indication of how close each convergent gets to its true value.
The right hand side gives a bound that limits its accuracy.


Corollary
$\forall k \ge 1: \dfrac 1 {q_k q_{k+1}} > \left\vert{x - \dfrac {p_k} {q_k}}\right\vert > \dfrac 1 {2 q_k q_{k+1}}$


Proof
The Continued Fraction Algorithm gives the following system of equations:














\(\ds x\)

\(=\)







\(\ds \left[{a_0, x_2}\right]\)




















\(\ds \)

\(=\)







\(\ds \left[{a_0, a_1, x_3}\right]\)




















\(\ds \)

\(=\)







\(\ds \ldots\)




















\(\ds \)

\(=\)







\(\ds \left[{a_0, a_1, \ldots, a_n, x_{n + 1} }\right]\)




















\(\ds \)

\(=\)







\(\ds \ldots\)









and














\(\ds \left\vert{x - \frac {p_n} {q_n} }\right\vert\)

\(=\)







\(\ds \left\vert{\left[{a_0, a_1, \ldots, a_n, x_{n + 1} }\right] - \frac {p_n} {q_n} }\right\vert\)




















\(\ds \)

\(=\)







\(\ds \left\vert{\frac {x_{n + 1} p_n + p_{n - 1} } {x_{n + 1} q_n + q_{n - 1} } - \frac {p_n} {q_n} }\right\vert\)





Value of Finite Continued Fraction equals Numerator Divided by Denominator














\(\ds \)

\(=\)







\(\ds \left\vert{\frac {p_{n - 1} q_n - p_n q_{n - 1} } {q_n \left({x_{n + 1} q_n + q_{n - 1} }\right)} }\right\vert\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {q_n \left({x_{n + 1} q_n + q_{n - 1} }\right)}\)





Difference between Adjacent Convergents of Simple Continued Fraction




Now from the Continued Fraction Algorithm:

$x_{n + 1} = \left[{a_{n + 1}, a_{n + 2}, a_{n + 3}, \ldots}\right]$
So:

$a_{n + 1} < x_{n + 1} < a_{n + 1} + 1$
Therefore:

$\left\vert{x - \dfrac {p_n} {q_n} }\right\vert < \dfrac 1 {q_n \left({a_{n + 1} q_n + q_{n - 1} }\right)} = \dfrac 1 {q_n q_{n + 1} }$
This gives the left hand side of the inequality when $n = k + 1$.

We also have:

$\left\vert{x - \dfrac {p_n} {q_n} }\right\vert > \dfrac 1 {q_n \left({\left({a_{n + 1} + 1}\right) q_n + q_{n - 1} }\right)}$















\(\ds \left\vert{x - \frac {p_n} {q_n} }\right\vert\)

\(>\)







\(\ds \frac 1 {q_n \left({\left({a_{n + 1} + 1}\right) q_n + q_{n - 1} }\right)}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {q_n \left({a_{n + 1} q_n + q_{n - 1} }\right) + q_n^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {q_n \left({q_{n + 1} + q_n}\right)}\)




















\(\ds \)

\(>\)







\(\ds \frac 1 {q_n \left({q_{n + 1} + q_{n + 1} }\right)}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 q_n q_{n + 1} }\)









This gives the right hand side of the inequality when $n = k$.

For the middle inequality, note that:

$q_{k + 2} = a_{k + 2} q_{k + 1} + q_k > q_k + q_k = 2 q_k$
So:

$\dfrac 1 {q_{k + 1} q_{k + 2} } \le \dfrac 1 {2 q_k q_{k + 1} }$
$\blacksquare$


Also see
Accuracy of Convergents of Continued Fraction




