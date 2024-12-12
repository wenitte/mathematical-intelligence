# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Cauchy_Sequences/Sum_Rule

Theorem
Let $\struct {R, \norm {\,\cdot\,} }$ be a normed division ring.
Let $\sequence {x_n}$ and $\sequence {y_n}$ be Cauchy sequences in $R$.
Then:

$\sequence {x_n + y_n}$ is a Cauchy sequence.


Proof
Let $\epsilon > 0$ be given.
Then $\dfrac \epsilon 2 > 0$.
Since $\sequence {x_n}$ is a Cauchy sequence, we can find $N_1$ such that:

$\forall n, m > N_1: \norm{x_n - x_m} < \dfrac \epsilon 2$
Similarly, $\sequence {y_n}$ is a Cauchy sequence, we can find $N_2$ such that:

$\forall n, m > N_2: \norm{y_n - y_m} < \dfrac \epsilon 2$
Now let $N = \max \set {N_1, N_2}$.
Then if $n, m > N$, both the above inequalities will be true.
Thus $\forall n, m > N$:














\(\ds \norm {\paren {x_n + y_n} - \paren {x_m + y_m} }\)

\(=\)







\(\ds \norm {\paren {x_n - x_m} + \paren {y_n - y_m} }\)




















\(\ds \)

\(\le\)







\(\ds \norm {x_n - x_m} + \norm {y_n - y_m}\)





Axiom $\text N 3$ of norm: Triangle Inequality














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2 = \epsilon\)









Hence:

$\sequence {x_n + y_n}$ is a Cauchy sequences in $R$.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.2$: Completions




