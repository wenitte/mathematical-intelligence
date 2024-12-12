# 

Source: https://proofwiki.org/wiki/Convergent_Product_Satisfies_Cauchy_Criterion

Theorem
Let $\struct {\mathbb K, \norm {\,\cdot\,} }$ be a valued field.
Let the infinite product $\ds \prod_{n \mathop = 1}^\infty a_n$ be convergent.

Then it satisfies Cauchy's criterion for products.


Proof
Let $\epsilon > 0$.
Let $n_0 \in \N$ be such that $\ds \prod_{n \mathop = n_0}^\infty a_n$ converges to some $a \in \mathbb K \setminus \set 0$.
By Convergent Sequence is Cauchy Sequence, there exists $N_0 \ge n_0$ such that:

$\ds \norm {\prod_{n \mathop = n_0}^k a_n - \prod_{n \mathop = n_0}^l a_n} \le \epsilon$
for $k, l \ge N_0$.

By Sequence Converges to Within Half Limit, there exists $N_1 \ge n_0$ such that:

$\ds \norm {\prod_{n \mathop = n_0}^M a_n} \ge \frac {\norm a}2$
for $M \ge N_1$.

Let $N = \max \set {N_0, N_1}$.
For $N + 1 \le k \le l$:














\(\ds \norm {\prod_{n \mathop = k}^l a_n - 1}\)

\(=\)







\(\ds \norm {\frac {\prod_{n \mathop = n_0}^l a_n - \prod_{n \mathop = n_0}^{k - 1} a_n} {\prod_{n \mathop = n_0}^{k - 1} } }\)




















\(\ds \)

\(\le\)







\(\ds \frac {2 \epsilon} {\norm{a} }\)





$l, k - 1 \ge N_0$ and $k - 1 \ge N_1$




Hence the result.
$\blacksquare$


Also see
Uniformly Convergent Product Satisfies Uniform Cauchy Criterion




