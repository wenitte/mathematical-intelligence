# 

Source: https://proofwiki.org/wiki/Principle_of_Finite_Induction/One-Based


It has been suggested that this page or section be merged into Equivalence of Well-Ordering Principle and Induction/Proof/WOP implies PFI.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.

This page has been identified as a candidate for refactoring of advanced complexity.In particular: As part of the merge, set this result up as a contributing result to the above result. Sources need careful treatment.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $S \subseteq \N_{>0}$ be a subset of the $1$-based natural numbers.

Suppose that:

$(1): \quad 1 \in S$
$(2): \quad \forall n \in \N_{>0} : n \in S \implies n + 1 \in S$

Then:

$S = \N_{>0}$


Proof 1
Consider $\N$ defined as a naturally ordered semigroup.
The result follows directly from Principle of Mathematical Induction for Naturally Ordered Semigroup: General Result.
$\blacksquare$


Proof 2
Let $T$ be the set of all $1$-based natural numbers not in $S$:

$T = \N_{>0} \setminus S$
Aiming for a contradiction, suppose $T$ is non-empty.
From the Well-Ordering Principle, $T$ has a smallest element.
Let this smallest element be denoted $a$.
We have been given that $1 \in S$.
So:

$a > 1$
and so:

$0 < a - 1 < a$
As $a$ is the smallest element of $T$, it follows that:

$a - 1 \notin T$
That means $a - 1 \in S$.
But then by hypothesis:

$\paren {a - 1} + 1 \in S$
But:

$\paren {a - 1} + 1 = a$
and so $a \notin T$.
This contradicts our assumption that $a \in T$.
It follows by Proof by Contradiction that $T$ has no such smallest element.
Hence it follows that $T$ can have no elements at all.
That is:

$\N_{>0} \setminus S = \O$
That is:

$S = \N_{>0}$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 20$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.17$: Finite Induction and Well-Ordering for Positive Integers: $17.1$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers: $\mathbf{I}$
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): Appendix $\text{A}$: Set Theory: Induction




