# 

Source: https://proofwiki.org/wiki/Consistency_of_Logical_Formulas_has_Finite_Character/Proof_2



Theorem
Let $P$ be the property of collections of logical formulas defined as:

$\forall \FF: \map P \FF$ denotes that $\FF$ is consistent.
Then $P$ is of finite character.
That is:

$\FF$ is a consistent set of formulas if and only if every finite subset of $\FF$ is also a consistent set of formulas.


Proof
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




