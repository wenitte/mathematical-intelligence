# 

Source: https://proofwiki.org/wiki/Principle_of_Mathematical_Induction_for_Minimally_Inductive_Set


This article is complete as far as it goes, but it could do with expansion.In particular: Create Predicate FormYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Theorem
Let $\omega$ be the minimally inductive set.
Let $S \subseteq \omega$.

Suppose that:

$(1): \quad \O \in S$
$(2): \quad \forall x: x \in S \implies x^+ \in S$
where $x^+$ is the successor set of $x$.

Then:

$S = \omega$


Proof
The hypotheses state precisely that $S$ is an inductive set.
Then the minimally inductive set $\omega$ being defined as the intersection of all inductive sets, we conclude that:

$\omega \subseteq S$
by Intersection is Subset: General Result.
Thus, by definition of set equality:

$S = \omega$
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 12$: The Peano Axioms
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 7.31$




