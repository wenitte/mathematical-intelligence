# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Sequences/Complex/Sum_Rule



Theorem
Let $\sequence {z_n}$ and $\sequence {w_n}$ be sequences in $\C$.
Let $\sequence {z_n}$ and $\sequence {w_n}$ be convergent to the following limits:

$\ds \lim_{n \mathop \to \infty} z_n = c$
$\ds \lim_{n \mathop \to \infty} w_n = d$

Then:

$\ds \lim_{n \mathop \to \infty} \paren {z_n + w_n} = c + d$


Proof 1
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


Proof 2
Let $\epsilon > 0$ be given.
Then $\dfrac \epsilon 2 > 0$.
We are given that:

$\ds \lim_{n \mathop \to \infty} z_n = c$
$\ds \lim_{n \mathop \to \infty} w_n = d$

Let:

$z_n = x_n + i y_n$
$w_n = r_n + i s_n$
$c = a + i b$
$d = l + i m$
where each of $x_n, y_n, r_n, s_n, a, b, l, m \in \R$ are real.

By definition:
$\sequence {z_n}$ converges to the limit $c = a + i b$ if and only if both:

$\forall \epsilon \in \R_{>0}: \exists N \in \R: n > N \implies \size {x_n - a} < \epsilon \text { and } \size {y_n - b} < \epsilon$
$\sequence {w_n}$ converges to the limit $d = l + i m$ if and only if both:

$\forall \epsilon \in \R_{>0}: \exists N \in \R: n > N \implies \size {r_n - l} < \epsilon \text { and } \size {s_n - m} < \epsilon$

where $\size x$ denotes the absolute value of $x \in \R$.

Then:














\(\ds \lim_{n \mathop \to \infty} \paren {z_n + w_n}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {x_n + i y_n + r_n + i s_n}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {x_n + r_n + i \paren {y_n + s_n} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {x_n + r_n} + i \lim_{n \mathop \to \infty} \paren {y_n + s_n}\)





Definition 1 of Convergent Sequence














\(\ds \)

\(=\)







\(\ds \paren {a + l} + i \paren {b + m}\)




















\(\ds \)

\(=\)







\(\ds \paren {a + i b} + \paren {l + i m}\)




















\(\ds \)

\(=\)







\(\ds c + d\)









$\blacksquare$


Also see
Difference Rule for Complex Sequences


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4.2$. Sequences: Rules. $\text {(i)}$




