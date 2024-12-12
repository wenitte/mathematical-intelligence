# 

Source: https://proofwiki.org/wiki/Consistency_of_Logical_Formulas_has_Finite_Character



Theorem
Let $P$ be the property of collections of logical formulas defined as:

$\forall \FF: \map P \FF$ denotes that $\FF$ is consistent.
Then $P$ is of finite character.
That is:

$\FF$ is a consistent set of formulas if and only if every finite subset of $\FF$ is also a consistent set of formulas.


Proof 1

This theorem requires a proof.In particular: Use Compactness Theorem. And again, the "iff" in the definition of finite character is the interesting partYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof 2
Sufficient Condition
Let $\FF$ be a consistent set of formulas.
Aiming for a contradiction, suppose there exists $\GG \subseteq \FF$ where $\GG$ is finite such that $\GG$ is inconsistent.
But then from Set of Logical Formulas is Inconsistent iff it has Finite Inconsistent Subset, $\FF$ is itself inconsistent.
From this contradiction it follows that $\GG$ must be consistent.
As $\GG$ is arbitrary, it follows that every finite subset of $\FF$ is consistent.
$\Box$


Necessary Condition
Let every finite subset of $\FF$ is consistent.
Aiming for a contradiction, suppose $\FF$ is inconsistent.
Then by Set of Logical Formulas is Inconsistent iff it has Finite Inconsistent Subset there exists a finite subset $\GG \subseteq \FF$ such that $\GG$ is inconsistent.
But by hypothesis $\GG$ is consistent.
From this contradiction it follows that $\FF$ must also be consistent.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text {II}$ -- Maximal principles: $\S 5$ Maximal principles




