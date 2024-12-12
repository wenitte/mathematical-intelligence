# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Sequences/Normed_Division_Ring/Product_Rule/Proof_1

Theorem
Let $\struct {R, \norm {\,\cdot\,}}$ be a normed division ring.
Let $\sequence {x_n}$,  $\sequence {y_n} $ be sequences in $R$.
Let $\sequence {x_n}$ and $\sequence {y_n}$ be convergent in the norm $\norm {\,\cdot\,}$ to the following limits:

$\ds \lim_{n \mathop \to \infty} x_n = l$
$\ds \lim_{n \mathop \to \infty} y_n = m$

Then:

$\sequence {x_n y_n}$ is convergent to the limit $\ds \lim_{n \mathop \to \infty} \paren {x_n y_n} = l m$


Proof
By Convergent Sequence in Normed Division Ring is Bounded, $\sequence {x_n}$ is bounded.
Suppose $\norm {x_n} \le K$ for $n = 1, 2, 3, \ldots$.
Let $M = \max \set {K, \norm m}$.
Then:

$\norm m \le M$
and:

$\forall n: \norm{x_n} \le M$

Let $\epsilon > 0$ be given.
Then $\dfrac \epsilon {2 M} > 0$.
As $\sequence {x_n}$ converges to $l$, we can find $N_1$ such that:

$\forall n > N_1: \norm {x_n - l} < \dfrac \epsilon {2 M}$
Similarly, for $\sequence {y_n}$ we can find $N_2$ such that:

$\forall n > N_2: \norm {y_n - m} < \dfrac \epsilon {2 M}$
Now let $N = \max \set {N_1, N_2}$.
Then if $n > N$, both the above inequalities will be true.
Thus $\forall n > N$:














\(\ds \norm {x_n y_n - l m}\)

\(=\)







\(\ds \norm {x_n y_n - x_n m + x_n m - l m}\)




















\(\ds \)

\(\le\)







\(\ds \norm {x_n y_n - x_n m} + \norm {x_n m - l m}\)





Axiom (N3) of norm (Triangle Inequality).














\(\ds \)

\(=\)







\(\ds \norm {x_n \paren {y_n - m } } + \norm {\paren {x_n - l } m}\)




















\(\ds \)

\(\le\)







\(\ds \norm {x_n} \cdot \norm {y_n - m} + \norm {x_n - l} \cdot \norm m\)





Axiom (N2) of norm (Multiplicativity).














\(\ds \)

\(\le\)







\(\ds M \cdot \norm {y_n - m} + \norm {x_n - l} \cdot M\)





since $\sequence {x_n}$ is bounded by $M$ and $\norm m \le M$














\(\ds \)

\(\le\)







\(\ds M \cdot \dfrac \epsilon {2 M} + \dfrac \epsilon {2 M} \cdot M\)




















\(\ds \)

\(=\)







\(\ds \dfrac \epsilon 2 + \dfrac \epsilon 2\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









Hence:

$\sequence {x_n y_n}$ is convergent.
It follows that:

$\ds \lim_{n \mathop \to \infty} \paren {x_n y_n} = l m$
$\blacksquare$





