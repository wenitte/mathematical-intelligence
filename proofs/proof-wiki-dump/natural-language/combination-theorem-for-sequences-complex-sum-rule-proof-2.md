# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Sequences/Complex/Sum_Rule/Proof_2

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





