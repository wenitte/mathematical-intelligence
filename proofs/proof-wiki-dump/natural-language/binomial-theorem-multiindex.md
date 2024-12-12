# 

Source: https://proofwiki.org/wiki/Binomial_Theorem/Multiindex

Theorem
Let $\alpha$ be a multiindex, indexed by $\set {1, \ldots, n}$ such that $\alpha_j \ge 0$ for $j = 1, \ldots, n$.
Let $x = \tuple {x_1, \ldots, x_n}$ and $y = \tuple {y_1, \ldots, y_n}$ be ordered tuples of real numbers.
Then:

$\ds \paren {x + y}^\alpha = \sum_{0 \mathop \le \beta \mathop \le \alpha} \dbinom \alpha \beta x^\beta y^{\alpha - \beta}$
where $\dbinom n k$ is a binomial coefficient.


Proof
First of all, by definition of multiindexed powers:

$\ds \paren {x + y}^\alpha = \prod_{k \mathop = 1}^n \paren {x_k + y_k}^{\alpha_k}$

Then:














\(\ds \paren {x + y}^\alpha\)

\(=\)







\(\ds \prod_{k \mathop = 1}^n \sum_{\beta_k \mathop = 0}^{\alpha_k} \dbinom {\alpha_k} {\beta_k} x_k^{\alpha_k - \beta_k} y_k^{\beta_k}\)





Binomial Theorem for Integral Indices














\(\ds \)

\(=\)







\(\ds \sum_{\beta_1 \mathop = 0}^{\alpha_1} \cdots \sum_{\beta_n \mathop = 0}^{\alpha_n} \dbinom {\alpha_1} {\beta_1} \cdots \dbinom {\alpha_n} {\beta_n} x_1^{\alpha_1 - \beta_1} \cdots x_n^{\alpha_n - \beta_n} y_1^{\beta_1} \cdots y_n^{\beta_n}\)





expanding out the product




On the other hand:














\(\ds \sum_{0 \mathop \le \beta \mathop \le \alpha} \dbinom \alpha \beta x^\beta y^{\alpha - \beta}\)

\(=\)







\(\ds \sum_{0 \mathop \le \beta \mathop \le \alpha} \dbinom {\alpha_1} {\beta_1} \cdots \dbinom {\alpha_n} {\beta_n} x_1^{\alpha_1 - \beta_1} \cdots x_n^{\alpha_n - \beta_n} y_1^{\beta_1} \cdots y_n^{\beta_n}\)





Definition of Power and Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \sum_{\beta_1 \mathop = 0}^{\alpha_1} \cdots \sum_{\beta_n \mathop = 0}^{\alpha_n} \dbinom {\alpha_1} {\ell_1}  \cdots \dbinom {\alpha_n} {\ell_n} x_1^{\alpha_1 - \ell_1} \cdots x_n^{\alpha_n - \ell_n} y_1^{\ell_1} \cdots y_n^{\ell_n}\)





Definition of Ordering on Multiindices




There is believed to be a mistake here, possibly a typo.In particular: In the second of the equations above, $\ell$ has not been introduced.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
This shows that:

$\ds \paren {x + y}^\alpha = \sum_{0 \mathop \le \beta \mathop \le \alpha} \dbinom \alpha \beta x^\beta y^{\alpha - \beta}$
as required.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.




