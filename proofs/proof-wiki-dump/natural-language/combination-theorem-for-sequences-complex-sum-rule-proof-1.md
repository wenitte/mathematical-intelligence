# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Sequences/Complex/Sum_Rule/Proof_1

Theorem
Let $\sequence {z_n}$ and $\sequence {w_n}$ be sequences in $\C$.
Let $\sequence {z_n}$ and $\sequence {w_n}$ be convergent to the following limits:

$\ds \lim_{n \mathop \to \infty} z_n = c$
$\ds \lim_{n \mathop \to \infty} w_n = d$

Then:

$\ds \lim_{n \mathop \to \infty} \paren {z_n + w_n} = c + d$


Proof
Let $\epsilon > 0$ be given.
Then $\dfrac \epsilon 2 > 0$.
We are given that:

$\ds \lim_{n \mathop \to \infty} z_n = c$
$\ds \lim_{n \mathop \to \infty} w_n = d$
By definition of the limit of a complex sequence, we can find $N_1$ such that:

$\forall n > N_1: \cmod {z_n - c} < \dfrac \epsilon 2$
where $\cmod {z_n - c}$ denotes the complex modulus of $z_n - c$.
Similarly we can find $N_2$ such that:

$\forall n > N_2: \cmod {w_n - d} < \dfrac \epsilon 2$

Let $N = \max \set {N_1, N_2}$.
Then if $n > N$, both the above inequalities will be true:

$n > N_1$
$n > N_2$

Thus $\forall n > N$:














\(\ds \cmod {\paren {z_n + w_n} - \paren {c + d} }\)

\(=\)







\(\ds \cmod {\paren {z_n - c} + \paren {w_n - d} }\)




















\(\ds \)

\(\le\)







\(\ds \cmod {z_n - l} + \cmod {w_n - m}\)





Triangle Inequality for Complex Numbers














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)










Hence the result:

$\ds \lim_{n \mathop \to \infty} \paren {z_n + w_n} = c + d$
$\blacksquare$





