# 

Source: https://proofwiki.org/wiki/Absolutely_Convergent_Product_Does_not_Diverge_to_Zero/Proof_2

Theorem
Let $\struct {\mathbb K, \norm {\, \cdot \,} }$ be a valued field.
Let the infinite product $\ds \prod_{n \mathop = 1}^\infty \paren {1 + a_n}$ be absolutely convergent.

Then it is not divergent to $0$.


Proof
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





