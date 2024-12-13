# 

Source: https://proofwiki.org/wiki/Noetherian_Topological_Space_is_Compact/Proof_1

Theorem
Let $T = \struct {X, \tau}$ be a Noetherian topological space.

Then $T$ is compact.


Proof

This article needs to be tidied.In particular: Clarification of notation -- too much assumed knowledge. Definition of exactly what $I$ is, for example.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Let $\family {U_i}_{i \mathop \in I}$ be a cover of $X$.
That is:

$\ds \bigcup_{i \mathop \in I} U_i = X$
Let $V$ be the collection of finite cover of $\family {U_i}_{i \mathop \in I}$.


This article, or a section of it, needs explaining.In particular: Exactly what is meant by the above? Does it mean "the set / collection of all finite covers of $X$"? If not, can it be explained? If so, is there a reason why we cannot use the word "Set" here? If not, we need to change that word "collection" to a specific link to set, and make "finite cover" plural.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $W = \set {\bigcup Y: Y \in V}$.
Then $W$ is a collection of open sets of $T$.


This article, or a section of it, needs explaining.In particular: Again, is there any reason to use "collection" and not "set"? Is there a possibility that $W$ is itself not a set?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By Definition 4 of Noetherian Topological Space, $W$ has a maximal element with respect to the subset relation.
Let $\ds U' = \bigcup_{j \mathop = 1}^n U_{i_j}$ be the maximal element.
Aiming for a contradiction, suppose $U' \subsetneq X$.
Let $x \in X \setminus U'$.
Let $U_{i_{n + 1} }$ be a neighborhood of $x$, where $i_{n + 1} \in I$.
Then $U' \cup U_{i_{n + 1} }$ is larger than $U'$.
This contradicts our hypothesis that $U'$ is maximal.
Hence $U'$ is a finite subcover.
This shows that $\struct {X, \tau}$ is compact.
$\blacksquare$





