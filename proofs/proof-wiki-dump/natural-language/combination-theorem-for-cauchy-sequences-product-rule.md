# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Cauchy_Sequences/Product_Rule

Theorem
Let $\struct {R, \norm {\,\cdot\,} }$ be a normed division ring.
Let $\sequence {x_n}$, $\sequence {y_n} $ be Cauchy sequences in $R$.
Then:

$\sequence {x_n y_n}$ is a Cauchy sequence.


Proof
Because $\sequence {x_n} $ is a Cauchy sequence, it is bounded by Cauchy Sequence is Bounded.
Suppose $\norm {x_n} \le K_1$ for $n = 1, 2, 3, \ldots$.
Because $\sequence {y_n} $ is a is a Cauchy sequence, it is bounded by Cauchy Sequence is Bounded.
Suppose $\norm {y_n} \le K_2$ for $n = 1, 2, 3, \ldots$.
Let $K = \max \set {K_1, K_2}$. 
Then both sequences are bounded by $K$.

Let $\epsilon > 0$ be given.
Then $\dfrac \epsilon {2K} > 0$.
Since $\sequence {x_n}$ is a Cauchy sequence, we can find $N_1$ such that:

$\forall n, m > N_1: \norm {x_n - x_m} < \dfrac \epsilon {2 K}$
Similarly, $\sequence {y_n} $ is a Cauchy sequence, we can find $N_2$ such that:

$\forall n, m > N_2: \norm {y_n - y_m} < \dfrac \epsilon {2 K}$
Now let $N = \max \set {N_1, N_2}$.
Then if $n, m > N$, both the above inequalities will be true.
Thus $\forall n, m > N$:














\(\ds \norm {x_n y_n - x_m y_m}\)

\(=\)







\(\ds \norm {x_n y_n - x_n y_m + x_n y_m - x_m y_m}\)




















\(\ds \)

\(\le\)







\(\ds \norm {x_n y_n - x_n y_m} + \norm {x_n y_m - x_m y_m}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \norm {x_n \paren {y_n - y_m } } + \norm {\paren {x_n - x_m} y_m}\)




















\(\ds \)

\(=\)







\(\ds \norm {x_n} \cdot \norm {y_n - y_m} + \norm {x_n - x_m} \cdot \norm {y_m}\)





Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(\le\)







\(\ds K \cdot \norm {y_n - y_m} + \norm {x_n - x_m} \cdot K\)





as both sequences are bounded by $K$














\(\ds \)

\(\le\)







\(\ds K \cdot \dfrac \epsilon {2K} + \dfrac \epsilon {2K} \cdot K\)




















\(\ds \)

\(=\)







\(\ds \dfrac \epsilon 2 + \dfrac \epsilon 2\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









Hence:

$\sequence {x_n y_n}$ is a Cauchy sequence in $R$.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.2$: Completions




