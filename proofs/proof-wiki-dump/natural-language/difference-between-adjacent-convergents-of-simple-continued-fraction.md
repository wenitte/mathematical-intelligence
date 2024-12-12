# 

Source: https://proofwiki.org/wiki/Difference_between_Adjacent_Convergents_of_Simple_Continued_Fraction



Theorem
Let $n \in \N \cup \set \infty$ be an extended natural number.
Let $\sqbrk {a_0, a_1, a_2, \ldots}$ be a continued fraction in $\R$ of length $n$.
Let $p_0, p_1, p_2, \ldots$ and $q_0, q_1, q_2, \ldots$ be its numerators and denominators.
Let $C_0, C_1, C_2, \ldots$ be the convergents of $\sqbrk {a_0, a_1, a_2, \ldots}$.

Then for $k \ge 1$:

$p_k q_{k - 1} - p_{k - 1} q_k = \paren {-1}^{k + 1}$
That is:

$C_k - C_{k - 1} = \dfrac {p_k} {q_k} - \dfrac {p_{k - 1} } {q_{k - 1} } = \dfrac {\paren {-1}^{k + 1} } {q_k q_{k - 1} }$


Proof
Proof by induction:
For all $n \in \Z: n \ge 2$, let $\map P n$ be the proposition:

$p_n q_{n - 1} - p_{n - 1} q_n = \paren {-1}^{n + 1}$


Basis for the Induction
$\map P 1$ is the case:

$p_0 = a_0, p_1 = a_0 a_1 + 1, q_0 = 1, q_1 = a_1$
So:

$p_1 q_0 - p_0 q_1 = \paren {a_0 a_1 + 1} \times 1 - a_0 a_1 = 1 = \paren {-1}^2$
So $P(2)$ is seen to hold.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$p_k q_{k - 1} - p_{k - 1} q_k = \paren {-1}^{k + 1}$

Then we need to show:

$p_{k + 1} q_k - p_k q_{k + 1} = \paren {-1}^{k + 2}$


Induction Step
This is our induction step:
Consider $\sqbrk {a_0, a_1, a_2, \ldots, a_k, a_{k + 1} }$.
Its final numerator and denominator are by definition:

$p_{k + 1} = a_{k + 1} p_k + p_{k - 1}, q_{k + 1} = a_{k + 1} q_k + q_{k - 1}$
Therefore:














\(\ds p_{k + 1} q_k - p_k q_{k + 1}\)

\(=\)







\(\ds \paren {a_{k + 1} p_k + p_{k - 1} } q_k - p_k \paren {a_{k + 1} q_k + q_{k - 1} }\)




















\(\ds \)

\(=\)







\(\ds p_{k - 1} q_k - p_k q_{k - 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1} \paren {p_k q_{k - 1} - p_{k - 1} q_k}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1} \paren {-1}^{k + 1}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {-1}^{k + 2}\)









So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \ge 1: p_n q_{n-1} - p_{n-1} q_n = \paren {-1}^{n + 1}$
$\blacksquare$





