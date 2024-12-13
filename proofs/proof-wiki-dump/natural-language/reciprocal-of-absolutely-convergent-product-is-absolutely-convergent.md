# 

Source: https://proofwiki.org/wiki/Reciprocal_of_Absolutely_Convergent_Product_is_Absolutely_Convergent

Theorem
Let $\struct {\mathbb K, \norm{\,\cdot\,}}$ be a valued field.
Let $\sequence {1 + a_n}$ be a sequence of nonzero elements of $\mathbb K$.
Let the infinite product $\ds \prod_{n \mathop = 1}^\infty \left({1 + a_n}\right)$ converge absolutely to $a \in \mathbb K \setminus \set 0$.

Then $\ds \prod_{n \mathop = 1}^\infty \frac 1 {1 + a_n}$  converges absolutely to $1 / a$.


Proof
By continuity of $x \mapsto 1 / x$:

$\ds \lim_{N \mathop \to \infty} \prod_{n \mathop = 1}^N \frac 1 {1 + a_n} = \frac 1 a$
It remains to prove the absolute convergence.
Because $\ds \prod_{n \mathop = 1}^\infty \paren {1 + a_n}$  converges absolutely, $\ds \sum_{n \mathop = 1}^\infty a_n$ converges absolutely.
By Factors in Absolutely Convergent Product Converge to One, $\norm {a_n} \le \dfrac 1 2 $ for $n$ sufficiently large.
Thus $\norm {\dfrac 1 {a_n + 1} - 1} = \norm {\dfrac {a_n} {a_n + 1} } \le 2 \norm {a_n}$ for $n$ sufficiently large.
By the Comparison Test, $\ds \sum_{n \mathop = 1}^\infty \paren {\frac 1 {a_n + 1} - 1}$ converges absolutely.
Thus $\ds \prod_{n \mathop = 1}^\infty \frac 1 {1 + a_n}$  converges absolutely.
$\blacksquare$





