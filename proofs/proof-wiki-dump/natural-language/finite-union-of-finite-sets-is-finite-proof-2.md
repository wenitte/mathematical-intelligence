# 

Source: https://proofwiki.org/wiki/Finite_Union_of_Finite_Sets_is_Finite/Proof_2

Theorem
Let $S$ be a finite set of finite sets.

Then the union of $S$ is finite.


Proof
Let $S = \set {A_1, \ldots, A_n}$ such that $A_k$ is finite $\forall k = 1, \ldots, n$.
Set:

$m = \max \set {\card {A_1}, \ldots, \card {A_n} }$
Then:

$\ds \card {\bigcup_{k \mathop = 1}^n A_k} \le \sum_{k \mathop = 1}^n \card {A_k} \le \sum_{k \mathop = 1}^n m = n m$

This article, or a section of it, needs explaining.In particular: needs to invoke a link to result that shows $\card {\bigcup_{k \mathop = 1}^n A_k} \le \sum_{k \mathop = 1}^n \card {A_k}$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence the result.
$\blacksquare$


Also see
Inclusion-Exclusion Principle




