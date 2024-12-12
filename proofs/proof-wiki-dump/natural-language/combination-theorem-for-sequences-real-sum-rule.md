# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Sequences/Real/Sum_Rule



Theorem
Let $\sequence {x_n}$ and $\sequence {y_n}$ be sequences in $\R$.
Let $\sequence {x_n}$ and $\sequence {y_n}$ be convergent to the following limits:

$\ds \lim_{n \mathop \to \infty} x_n = l$
$\ds \lim_{n \mathop \to \infty} y_n = m$

Then:

$\ds \lim_{n \mathop \to \infty} \paren {x_n + y_n} = l + m$


Proof
Let $\epsilon > 0$ be given.
Then $\dfrac \epsilon 2 > 0$.
We are given that:

$\ds \lim_{n \mathop \to \infty} x_n = l$
$\ds \lim_{n \mathop \to \infty} y_n = m$
By definition of the limit of a real sequence, we can find $N_1$ such that:

$\forall n > N_1: \size {x_n - l} < \dfrac \epsilon 2$
where $\size {x_n - l}$ denotes the absolute value of $x_n - l$
Similarly we can find $N_2$ such that:

$\forall n > N_2: \size {y_n - m} < \dfrac \epsilon 2$

Let $N = \max \set {N_1, N_2}$.
Then if $n > N$, both the above inequalities will be true:

$n > N_1$
$n > N_2$

Thus $\forall n > N$:














\(\ds \size {\paren {x_n + y_n} - \paren {l + m} }\)

\(=\)







\(\ds \size {\paren {x_n - l} + \paren {y_n - m} }\)




















\(\ds \)

\(\le\)







\(\ds \size {x_n - l} + \size {y_n - m}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)










Hence the result:

$\ds \lim_{n \mathop \to \infty} \paren {x_n + y_n} = l + m$
$\blacksquare$


Also see
Difference Rule for Real Sequences


Sources
1953: Walter Rudin: Principles of Mathematical Analysis ... (previous): $3.3a$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: $\S 1.2$: Real Sequences: Proposition $1.2.11 \ \text {(a)}$




