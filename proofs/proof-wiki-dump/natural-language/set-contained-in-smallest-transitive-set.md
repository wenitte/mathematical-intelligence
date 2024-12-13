# 

Source: https://proofwiki.org/wiki/Set_Contained_in_Smallest_Transitive_Set


It has been suggested that this page or section be merged into Transitive Closure of Set Always Exists.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.

This article needs to be linked to other articles.In particular: category for a startYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $S$ be a set.
Then there exists a transitive set $G$ such that:

$S \subseteq G$
and:

if $Q$ is any transitive set such that $S \subseteq Q$, then $G \subseteq Q$.


Proof
Construction of $G$
Let $U$ be the class of all sets.


This article, or a section of it, needs explaining.In particular: Perhaps Universal Class can be used hereYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Define the mapping $F: \N \to U$ recursively:

$\map F 0 = S$
$\map F {n + 1} = \bigcup \map F n$
Applying the axiom of union inductively, $\map F n$ is a set for each $n \in \N$.
Let $\ds G = \bigcup_{i \mathop = 0}^\infty \map F i$.
By the Axiom of Unions, $G$ is a set.


Transitivity
It is to be proved that $G$ is transitive.
That is:

$a \in b, b \in G \implies a \in G$
Let $a \in b$ and $b \in G$.
By the definition of $G$, there exists $n \in \N$, $b \in \map F n$.
By the definition of $F$:

$\map F {n + 1} = \bigcup \map F n$
Then by the definition of union:

$a \in \map F {n + 1}$
Thus by the definition of $G$:

$a \in G$
$\Box$


Minimality
It is to be proved that if $Q$ is a transitive set and $S \subseteq Q$ then $G \subseteq Q$.


This theorem requires a proof.In particular: Only an outline so farYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let $Q$ be transitive and $S \subseteq Q$.
Define $F$ as above.
Prove by induction that $\map F n \subseteq Q$ for each $n$.
$\blacksquare$





