# 

Source: https://proofwiki.org/wiki/Polynomials_Closed_under_Ring_Product


This page has been identified as a candidate for refactoring of advanced complexity.In particular: Extend this (via transclusions) to encompass the simple definition of polynomial. Revert (at least partly) to the original pre-2011 version.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\struct {R, +, \circ}$ be a commutative ring.
Let $\ds f = \sum_{k \mathop \in Z} a_k \mathbf X^k$, $\ds g = \sum_{k \in Z} b_k \mathbf X^k$ be polynomials in the indeterminates $\set {X_j: j \in J}$ over $R$, where $Z$ is the set of all multiindices indexed by $\set {X_j: j \in J}$.
Define the product

$\ds f \otimes g = \sum_{k \in Z} c_k \mathbf X^k$
where

$\ds c_k = \sum_{\substack {p + q = k \\ p, q \in Z} } a_p b_q$

Then $f \otimes g$ is a polynomial.


Proof

This article contains statements that are justified by handwavery.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
It is immediate that $f \otimes g$ is a map from the free commutative monoid to $R$, so we need only prove that $f \otimes g$ is nonzero on finitely many $\mathbf X^k$, $k \in Z$.
Suppose that for some $k \in Z$:

$\ds \sum_{\substack {p + q = k \\ p, q \mathop \in Z}} a_p b_q \ne 0$
Therefore if $c_k \ne 0$ there exist $p, q \in Z$ such that $p + q = k$ and $a_p$, $b_q$ are both nonzero.
Since $f$ and $g$ are polynomials, the set $\set {p + q: a_p \ne 0, b_q \ne 0}$ is finite.
Hence the result.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.




