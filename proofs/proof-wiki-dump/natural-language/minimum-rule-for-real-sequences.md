# 

Source: https://proofwiki.org/wiki/Minimum_Rule_for_Real_Sequences

Theorem
Let $\sequence {x_n}$ and $\sequence {y_n}$ be sequences in $\R$.
Let $\sequence {x_n}$ and $\sequence {y_n}$ be convergent to the following limits:

$\ds \lim_{n \mathop \to \infty} x_n = l$
$\ds \lim_{n \mathop \to \infty} y_n = m$

Then:

$\ds \lim_{n \mathop \to \infty} \min \set {x_n, y_n} = \min \set {l, m}$


Proof
By Sum Less Maximum is Minimum:

$\forall n \in \R: \min \set {x_n, y_n} = x_n + y_n - \max \set {x_n, y_n}$
and

$\min \set {m, l} = m + l - \max \set {m, l}$

By Maximum Rule for Real Sequences:

$\ds \lim_{n \mathop \to \infty} \max \set {x_n, y_n} = \max \set {m, l}$
By the Multiple Rule for Real Sequences:

$\ds \lim_{n \mathop \to \infty} - \max \set {x_n, y_n} = - \max \set {m, l}$
By the Sum Rule for Real Sequences:

$\ds \lim_{n \mathop \to \infty}  x_n + y_n - \max \set {x_n, y_n} = m + l - \max \set {m, l}$

Hence:

$\ds \lim_{n \mathop \to \infty} \min \set {x_n, y_n} = \min \set {l, m}$
$\blacksquare$


Also see
Maximum Rule for Real Sequences




