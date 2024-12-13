# 

Source: https://proofwiki.org/wiki/Preceding_iff_Join_equals_Larger_Operand


It has been suggested that this page be renamed.In particular: "Larger" does not make sense as a priori there is no comparison on the RHSTo discuss this page in more detail, feel free to use the talk page.

This page has been identified as a candidate for refactoring of medium complexity.In particular: Given the two definitions of join semilattice, this cannot stay up in the current form. It ought to be transformed into half of the equivalence proof.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $\left({S, \preceq}\right)$ be a join semilattice.
Let $x, y \in S$.
Then

$x \preceq y$ if and only if $x \vee y = y$


Proof
Sufficient Condition
Let

$x \preceq y$
By definition of join:

$x \vee y = \sup \left\{ {x, y}\right\}$
By definitions of upper bound and reflexivity:

$y$ is upper bound for $\left\{ {x, y}\right\}$
and

$\forall z \in S: z$ is upper bound for $\left\{ {x, y}\right\} \implies y \preceq z$
Thus by definition of supremum:

$y = \sup \left\{ {x, y}\right\} = x \vee y$
$\Box$

Necessary Condition
Let

$x \vee y = y$
Thus by Join Succeeds Operands:

$x \preceq y$
$\blacksquare$


Sources
Mizar article YELLOW_0:24




