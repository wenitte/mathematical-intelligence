# 

Source: https://proofwiki.org/wiki/Absolutely_Convergent_Product_Does_not_Diverge_to_Zero



Theorem
Let $\struct {\mathbb K, \norm {\, \cdot \,} }$ be a valued field.
Let the infinite product $\ds \prod_{n \mathop = 1}^\infty \paren {1 + a_n}$ be absolutely convergent.

Then it is not divergent to $0$.


Proof 1
By Factors in Absolutely Convergent Product Converge to One, $\norm {a_n} < 1$ for $n \ge n_0$.
Let $n_1 \ge n_0$.
Aiming for a contradiction, suppose the product diverges to $0$.
Then:

$\ds \prod_{n \mathop = n_1}^\infty \paren {1 + a_n} = 0$
By Norm of Limit:

$\ds \prod_{n \mathop = n_1}^\infty \norm {1 + a_n} = 0$
By the Triangle Inequality and Squeeze Theorem:

$\ds \prod_{n \mathop = n_1}^\infty \paren {1 - \norm {a_n} } = 0$
By the Weierstrass Product Inequality, we have for $N \ge n_1$:

$\ds \prod_{n \mathop = n_1}^N \paren {1 - \norm {a_n} } \ge 1 - \sum_{n \mathop = n_1}^N \norm{a_n}$
Taking limits:

$0 \ge 1 - \ds \sum_{n \mathop = n_1}^\infty \norm {a_n}$
Because $\ds \prod_{n \mathop = 1}^\infty \paren  {1 + a_n}$ is absolutely convergent:

$\ds \sum_{n \mathop = n_1}^\infty \norm {a_n} < 1$
for $n_1$ sufficiently large.
This is a contradiction.
$\blacksquare$


Proof 2
We have that $\ds \prod_{n \mathop = 1}^\infty \paren {1 - \norm {a_n} }$ is absolutely convergent.
By Factors in Absolutely Convergent Product Converge to One, $\norm {a_n} < 1$ for $n \ge n_0$.
Thus $\ds \sum_{n \mathop = n_0}^\infty \map \ln {1 - \norm {a_n} }$ is absolutely convergent.
Aiming for a contradiction, suppose the product diverges to $0$.
Then:

$\ds \prod_{n \mathop = n_0}^\infty \paren {1 + a_n} = 0$
By Norm of Limit:

$\ds \prod_{n \mathop = n_0}^\infty \norm {1 + a_n} = 0$
By the Triangle Inequality and Squeeze Theorem:

$\ds \prod_{n \mathop = n_0}^\infty \paren {1 - \norm {a_0} } = 0$
By Logarithm of Infinite Product of Real Numbers:

$\ds \sum_{n \mathop = n_0}^\infty \map \ln {1 - \norm {a_n} }$
diverges to $-\infty$.
This is a contradiction.
$\blacksquare$


Also see
Absolutely Convergent Product is Convergent



