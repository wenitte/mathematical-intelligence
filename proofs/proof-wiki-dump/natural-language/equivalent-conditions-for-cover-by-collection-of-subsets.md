# 

Source: https://proofwiki.org/wiki/Equivalent_Conditions_for_Cover_by_Collection_of_Subsets


This page has been identified as a candidate for refactoring of medium complexity.In particular: Use TFAE template for a start, and perhaps extract into separate definition pagesUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $X$ be a set.

Then the following conditions are equivalent for a subset $\CC \subseteq \powerset X$ of the power set of $X$:

$(1): \quad \CC$ is a cover for $X$.
$(2): \quad \ds X = \bigcup \CC$.
$(3): \quad \ds \exists \SS \subseteq \CC: X = \bigcup \SS$.


Proof
$(1)$ implies $(2)$
By definition, $\CC$ covers $X$ if and only if $X \subseteq \ds \bigcup \CC$.
By Union of Subsets is Subset, we have that:

$\ds \bigcup \CC \subseteq X$
since $\CC \subseteq \powerset X$.
By definition of set equality, it follows that $X = \ds \bigcup \CC$.
$\Box$


$(2)$ implies $(3)$
Since $\CC \subseteq \CC$, we can take $\SS = \CC$.
Hence $(3)$ is immediate from $(2)$.
$\Box$


$(3)$ implies $(1)$
By assumption, $X = \ds \bigcup \SS$ for some $\SS \subseteq \CC$.
By Union is Increasing, we have that:

$\ds \bigcup \SS \subseteq \bigcup \CC$

Hence, $X \subseteq \ds \bigcup \CC$, that is $\CC$ is a cover for $X$.
$\blacksquare$





