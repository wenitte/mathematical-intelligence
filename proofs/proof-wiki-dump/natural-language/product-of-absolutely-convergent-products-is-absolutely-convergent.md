# 

Source: https://proofwiki.org/wiki/Product_of_Absolutely_Convergent_Products_is_Absolutely_Convergent

Theorem
Let $\struct {\mathbb K, \norm {\,\cdot\,} }$ be a valued field.
Let $\ds \prod_{n \mathop = 1}^\infty a_n$ converge absolutely.
Let $\ds \prod_{n \mathop = 1}^\infty b_n$ converge absolutely.

Then $\ds \prod_{n \mathop = 1}^\infty a_nb_n$ converges absolutely.


Proof
We have:

$a_n b_n - 1 = \paren {a_n - 1} \paren {b_n - 1} + \paren {a_n - 1} + \paren {b_n - 1}$
By the Triangle Inequality:

$\norm {a_n b_n - 1} \le \norm {a_n - 1} \norm {b_n - 1} + \norm {a_n - 1} + \norm {b_n -1}$
By the absolute convergence, $\ds \sum_{n \mathop = 1}^\infty \norm {a_n - 1}$ and $\ds \sum_{n \mathop = 1}^\infty \norm {b_n - 1}$ converge.
By Inner Product of Absolutely Convergent Series, $\ds \sum_{n \mathop = 1}^\infty \norm {a_n - 1} \norm{b_n -1}$ converges.
By the Comparison Test, $\ds \sum_{n \mathop = 1}^\infty \norm {a_n b_n - 1}$ converges.
$\blacksquare$


Also see
Product of Convergent and Divergent Product is Divergent
Product of Convergent Products is Convergent




