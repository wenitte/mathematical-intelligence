# 

Source: https://proofwiki.org/wiki/Product_of_Convergent_Products_is_Convergent

Theorem
Let $\struct {\mathbb K, \norm {\,\cdot\,} }$ be a valued field.
Let $\ds \prod_{n \mathop = 1}^\infty a_n$ converge to $a$.
Let $\ds \prod_{n \mathop = 1}^\infty b_n$ converge to $b$.

Then $\ds \prod_{n \mathop = 1}^\infty a_n b_n$ converges to $ab$.


Proof
Let $n_0 \in \N$ such that $a_n \ne 0$ for $n> n_0$.
Let $n_1 \in \N$ such that $b_n \ne 0$ for $n> n_1$.
Then $a_n b_n \ne 0$ for $n > n_2 = \max \set {n_0, n_1}$.
Let $p_n$ be the $n$th partial product of $\ds \prod_{n \mathop = n_2 + 1}^\infty a_n$.
Let $q_n$ be the $n$th partial product of $\ds \prod_{n \mathop = n_2 + 1}^\infty b_n$.
Then $p_n q_n$ is the $n$th partial product of $\ds \prod_{n \mathop = n_2 + 1}^\infty a_n b_n$.
Because $p_n$ and $q_n$ converge to a nonzero limit, so does $p_n q_n$.
Thus $\ds \prod_{n \mathop = 1}^\infty a_n b_n$ converges.

Let $P_n$ be the $n$th partial product of $\ds \prod_{n \mathop = 1}^\infty a_n$.
Let $Q_n$ be the $n$th partial product of $\ds \prod_{n \mathop = 1}^\infty b_n$.
Then $P_n Q_n$ is the $n$th partial product of $\ds \prod_{n \mathop = 1}^\infty a_n b_n$.
By Limit of Product of Sequences, $P_n Q_n\to ab$.
Thus $\ds \prod_{n \mathop = 1}^\infty a_n b_n$ converges to $a b$.
$\blacksquare$


Also see
Product of Convergent and Divergent Product is Divergent
Product of Absolutely Convergent Products is Absolutely Convergent




