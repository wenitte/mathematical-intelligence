# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Sequences/Normed_Division_Ring/Sum_Rule

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.
Let $\sequence {x_n}$,  $\sequence {y_n} $ be sequences in $R$.
Let $\sequence {x_n}$ and $\sequence {y_n}$ be convergent in the norm $\norm {\, \cdot \,}$ to the following limits:

$\ds \lim_{n \mathop \to \infty} x_n = l$
$\ds \lim_{n \mathop \to \infty} y_n = m$
Then:

$\sequence {x_n + y_n}$ is convergent and $\ds \lim_{n \mathop \to \infty} \paren {x_n + y_n} = l + m$


Proof
Let $\epsilon > 0$ be given.
Then $\dfrac \epsilon 2 > 0$.
Since $\sequence {x_n}$ is convergent to $l$, we can find $N_1$ such that:

$\forall n > N_1: \norm {x_n - l} < \dfrac \epsilon 2$
Similarly, for $\sequence {y_n}$ we can find $N_2$ such that:

$\forall n > N_2: \norm {y_n - m} < \dfrac \epsilon 2$
Now let $N = \max \set {N_1, N_2}$.
Then if $n > N$, both the above inequalities will be true.
Thus $\forall n > N$:














\(\ds \norm {\paren {x_n + y_n} - \paren {l + m} }\)

\(=\)







\(\ds \norm {\paren {x_n - l} + \paren {y_n - m} }\)




















\(\ds \)

\(\le\)







\(\ds \norm {x_n - l} + \norm {y_n - m}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2 = \epsilon\)









Hence:

$\sequence {x_n + y_n}$ is convergent to $l + m$.
$\blacksquare$





