# 

Source: https://proofwiki.org/wiki/Relation_between_Adjacent_Best_Rational_Approximations_to_Root_2



Theorem
Consider the Sequence of Best Rational Approximations to Square Root of 2:

$\sequence S := \dfrac 1 1, \dfrac 3 2, \dfrac 7 5, \dfrac {17} {12}, \dfrac {41} {29}, \dfrac {99} {70}, \dfrac {239} {169}, \dfrac {577} {408}, \ldots$
Let $\dfrac {p_n} {q_n}$ and $\dfrac {p_{n + 1} } {q_{n + 1} }$ be adjacent terms of $\sequence S$.
Then:

$\dfrac {p_{n + 1} } {q_{n + 1} } = \dfrac {p_n + 2 q_n} {p_n + q_n}$


Proof
The proof proceeds by induction.
For all $n \in \Z_{> 0}$, let $\map P n$ be the proposition:

$\dfrac {p_{n + 1} } {q_{n + 1} } = \dfrac {p_n + 2 q_n} {p_n + q_n}$


Basis for the Induction
$\map P 1$ is the case:














\(\ds \dfrac {p_2} {q_2}\)

\(=\)







\(\ds \dfrac 3 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 + 2 \times 1} {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {p_1 + 2 \times q_1} {p_1 + q_1}\)










Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\dfrac {p_{k + 1} } {q_{k + 1} } = \dfrac {p_k + 2 q_k} {p_k + q_k}$

from which it is to be shown that:

$\dfrac {p_{k + 2} } {q_{k + 2} } = \dfrac {p_{k + 1} + 2 q_{k + 1} } {p_{k + 1} + q_{k + 1} }$


Induction Step
This is the induction step:















\(\ds \dfrac {p_{k + 2} } {q_{k + 2} }\)

\(=\)







\(\ds \dfrac {2 p_{k + 1} + p_k} {2 q_{k + 1} + q_k}\)





Definition of Numerators and Denominators of Continued Fraction














\(\ds \)

\(=\)







\(\ds \dfrac {2 \paren {p_k + 2 q_k} + p_k} {2 \paren {p_k + q_k} + q_k}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \dfrac {3 p_k + 4 q_k} {2 p_k + 3 q_k}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {p_k + 2 q_k} + 2 \paren {p_k + q_k} } {\paren {p_k + q_k} + \paren {p_k + 2 q_k} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {p_{k + 1} + 2 q_{k + 1} } {p_{k + 1} + q_{k + 1} }\)





Induction Hypothesis




So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{>0}: \dfrac {p_{n + 1} } {q_{n + 1} } = \dfrac {p_n + 2 q_n} {p_n + q_n}$
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $1 \cdotp 41421 \, 35623 \, 73095 \, 04880 \, 16887 \, 24209 \, 69807 \, 85697 \ldots$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1 \cdotp 41421 \, 35623 \, 73095 \, 04880 \, 16887 \, 24209 \, 69807 \, 85697 \ldots$




