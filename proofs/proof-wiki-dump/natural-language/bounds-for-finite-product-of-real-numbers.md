# 

Source: https://proofwiki.org/wiki/Bounds_for_Finite_Product_of_Real_Numbers


This page has been identified as a candidate for refactoring of basic complexity.In particular: Separate subpages for upper and lower bound for consistent referencingUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $a_1, a_2, \ldots, a_n$ be positive real numbers.

Then:

$\ds \sum_{k \mathop = 1}^n a_k \le \prod_{k \mathop = 1}^n \paren {1 + a_k} \le \map \exp {\sum_{k \mathop = 1}^n a_k}$


Proof
Lower bound
Follows by expanding.
$\Box$


Upper Bound
Proof 1
By Exponential of x not less than 1+x:

$\ds \prod_{k \mathop = 1}^n \paren {1 + a_k} \le \prod_{k \mathop = 1}^n \exp a_k = \map \exp {\sum_{k \mathop = 1}^n a_k}$
$\blacksquare$


Proof 2
By the AM-GM Inequality:

$\ds \prod_{k \mathop = 1}^n \paren {1 + a_k} \le \paren {\frac {n + \sum_{k \mathop = 1}^n a_k} n}^n$

A specific link is needed here.In particular: link to an article that this is less than $\map \exp {\sum a_k}$, i.e. that this expression is increasing with $n$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by searching for it, and adding it here.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{LinkWanted}} from the code.
$\blacksquare$


Also see
Weierstrass Product Inequality




