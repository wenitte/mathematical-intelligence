# 

Source: https://proofwiki.org/wiki/Relation_between_Two_Ordinals

Theorem
Let $S$ and $T$ be ordinals.
Then either $S \subseteq T$ or $T \subseteq S$.


Corollary
Let $S$ and $T$ be ordinals.
If $S \ne T$, then either $S$ is an initial segment of $T$, or vice versa.


Proof

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Worth removing the technical complexity to make it more accessibleA better approach may be to write a second proof rather than change this one.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Aiming for a contradiction, suppose the claim is false.
That is, by De Morgan's laws: Conjunction of Negations:

$\paren {\neg \paren {S \subseteq T} } \land \paren {\neg \paren {T \subseteq S} }$
where $\neg$ denotes logical not and $\land$ denotes logical and.
Now from Intersection is Subset, we have $S \cap T \subseteq S$ and $S \cap T \subseteq T$.
Also, by Intersection with Subset is Subset, we have $S \cap T \ne S$ and $S \cap T \ne T$.
That is, $S \cap T \subsetneq S$ and $S \cap T \subsetneq T$.

Note that by Intersection of Two Ordinals is Ordinal‎, $S \cap T$ is an ordinal.
So by Transitive Set is Proper Subset of Ordinal iff Element of Ordinal:

$S \cap T \in S$
$S \cap T \in T$
But then $S \cap T \in S \cap T$, which contradicts Ordinal is not Element of Itself.
$\blacksquare$





