# 

Source: https://proofwiki.org/wiki/Maximum_Rule_for_Real_Sequences



Theorem
Let $\sequence {x_n}$ and $\sequence {y_n}$ be sequences in $\R$.
Let $\sequence {x_n}$ and $\sequence {y_n}$ be convergent to the following limits:

$\ds \lim_{n \mathop \to \infty} x_n = l$
$\ds \lim_{n \mathop \to \infty} y_n = m$

Then:

$\ds \lim_{n \mathop \to \infty} \max \set {x_n, y_n} = \max \set {l, m}$


Proof
Case $1$: $l = m$
Let $l = m$.
Then:

$\max \set {l, m} = l = m$

Let $\epsilon > 0$ be given.
By definition of the limit of a real sequence, we can find $N_1$ such that:

$\forall n > N_1: \size {x_n - l} < \epsilon$
Similarly we can find $N_2$ such that:

$\forall n > N_2: \size {y_n - m} < \epsilon$

Let $N = \max \set {N_1, N_2}$.
Then if $n > N$, both the above inequalities will be true:

$n > N_1$
$n > N_2$

Thus $\forall n > N$:

if $y_n < x_n$ then:
$\size {\max \set {x_n, y_n} - \max \set {l, m} } = \size {x_n - l} < \epsilon$
if $x_n \le y_n$ then:
$\size {\max \set {x_n, y_n} - \max \set {l, m} } = \size {y_n - m} < \epsilon$
In either case:

$\size {\max \set {x_n, y_n} - \max \set {l, m} } < \epsilon$
The result follows.
$\Box$


Case 2: $l > m$
Let $l > m$.
Then:

$l = \max \set {l, m}$
Let $\delta = \dfrac {l - m} 2$.
Then:

$\delta > 0$

Let $\epsilon > 0$ be given.
Let $\epsilon' = \min \set {\delta, \epsilon}$.
Then:

$\epsilon' > 0$
By definition of the limit of a real sequence, we can find $N_1$ such that:

$\forall n > N_1: \size {x_n - l} < \epsilon'$
Similarly we can find $N_2$ such that:

$\forall n > N_2: \size {y_n - m} < \epsilon'$

Let $N = \max \set {N_1, N_2}$.
Then if $n > N$, both the above inequalities will be true:

$n > N_1$
$n > N_2$

From Corollary 3 of Negative of Absolute Value, we have that $\forall n > N$:

$\size {x_n - l} < \epsilon' \implies x_n > l - \epsilon'$
$\size {y_n - m} < \epsilon' \implies y_n < m + \epsilon'$

As $\epsilon' \le \delta$:














\(\ds l - \epsilon'\)

\(\ge\)







\(\ds l - \delta\)




















\(\ds \)

\(=\)







\(\ds l - \dfrac {l - m} 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 l - l + m} 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {l + m} 2\)









and:














\(\ds m + \epsilon'\)

\(\le\)







\(\ds m + \delta\)




















\(\ds \)

\(=\)







\(\ds m + \dfrac {l - m} 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 m + l - m} 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {l + m} 2\)









So:

$x_n > l - \epsilon' \ge \dfrac {l + m} 2 \ge  m + \epsilon' > y_n$
Hence:

$x_n = \max \set{x_n, y_n}$

So $\forall n > N$:

$\size {\max \set {x_n, y_n} - \max \set {l, m} }  = \size {x_n - l} < \epsilon' \le \epsilon$
The result follows.
$\Box$


Case 3: $m > l$
Similar to Case 2 by interchanging $l$ with $m$ and $x_n$ with $y_n$.
$\blacksquare$


Also see
Minimum Rule for Real Sequences




