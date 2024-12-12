# 

Source: https://proofwiki.org/wiki/Dependent_Choice_for_Finite_Sets


This page has been identified as a candidate for refactoring of basic complexity.In particular: Use remark to craft second proof, and separate themUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article, or a section of it, needs explaining.In particular: Various little gaps need proper explanationYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Theorem
Let $\RR$ be a binary relation on a non-empty set $S$.
For each $a \in S$, let $C_a = \set {b \in S: a \mathrel \RR b }$
Suppose that:

For all $a \in S$, $C_a$ is a non-empty finite set.
Let $s \in S$.

Then there exists a sequence $\sequence {x_n}_{n \mathop \in \N}$ in $S$ such that:

$x_0 = s$
$\forall n \in \N: x_n \mathrel \RR x_{n+1}$


Remark
This theorem follows trivially from Dependent Choice (Fixed First Element), a form of the Axiom of Dependent Choice.
The proof below shows that it follows from the weaker Axiom of Countable Choice for Finite Sets.


Proof
Define $\sequence {D_n}$ recursively:
Let $D_0 = \set s$.
For each $n \in \N$ let $D_{n + 1} = \map \RR {D_n}$.
Now, for each $n \in \N$ let $E_n$ be the set of all enumerations of $D_n$.
Then $E_n$ is non-empty and finite for each $n$.
By the Axiom of Countable Choice for Finite Sets, there is a sequence $\sequence {e_n}$ such that for each $n$, $e_n \in E_n$.
Now recursively define $\sequence {x_n}$:

Define $x_0$ as $s$.
Define $x_{n + 1}$ as the first element in the enumeration $e_n$ which is in $\map \RR {x_n}$.
Then $\sequence {x_n}$ is the required sequence.
$\blacksquare$


Axiom:Axiom of Countable Choice for Finite Sets
This theorem depends on Axiom:Axiom of Countable Choice for Finite Sets.
Although not as strong as the Axiom of Choice, Axiom:Axiom of Countable Choice for Finite Sets is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


Also see
Axiom:Axiom of Dependent Choice which differs from this in that there is no constraint that each element is related to only a finite number of other elements.




