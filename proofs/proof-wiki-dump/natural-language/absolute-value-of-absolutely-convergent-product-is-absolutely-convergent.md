# 

Source: https://proofwiki.org/wiki/Absolute_Value_of_Absolutely_Convergent_Product_is_Absolutely_Convergent

Theorem
Let $\struct {\mathbb K, \norm {\,\cdot\,} }$ be a valued field.
Let the infinite product $\ds \prod_{n \mathop = 1}^\infty a_n$ converge absolutely to $a \in \mathbb K$.

Then $\ds \prod_{n \mathop = 1}^\infty \norm {a_n}$ converges absolutely to $\norm a$.


Proof
By absolute convergence of $\ds \prod_{n \mathop = 1}^\infty a_n$, $\ds \sum_{n \mathop = 1}^\infty \paren {a_n - 1}$ converges absolutely.
By the Triangle Inequality:

$\size {\norm {a_n} - 1} \le \norm {a_n - 1}$
By the Comparison Test, $\ds \prod_{n \mathop = 1}^\infty \norm {a_n}$ converges absolutely.
By Absolute Value is Continuous, its limit is $\norm a$.
$\blacksquare$


This article needs to be linked to other articles.In particular: limitYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Also see
Absolute Value of Infinite Product, for related results




