# 

Source: https://proofwiki.org/wiki/Intersection_is_Subset_of_Union_of_Intersections_with_Complements



Theorem
Let $R, S, T$ be sets.
Then:

$S \cap T \subseteq \paren {R \cap S} \cup \paren {\overline R \cap T}$
where $\overline R$ denotes the complement of $R$.


Proof
Let $x \in S \cap T$.
Then by definition of set intersection, $x \in S \land x \in T$.
From Conjunction implies Disjunction of Conjunctions with Complements, it follows that:

$\paren {x \in S \land \psi} \lor \paren {x \in T \land \neg \psi}$
where $\psi$ is any arbitrary statement.
Let $\psi$ be the statement $x \in R$.
Thus:

$\paren {x \in S \land x \in T} \implies \paren {x \in S \land x \in R} \lor \paren {x \in T \land x \notin R}$
By definition of subset, set intersection, set union and set complement, it follows that:

$S \cap T \subseteq \paren {R \cap S} \cup \paren {\overline R \cap T}$
$\blacksquare$


Illustration by Venn Diagram
A Venn diagram illustrating this result is given below:


The red field marks $R \cap S$.
The blue field marks $\overline R \cap T$.
The purple field marks $S \cap T$, where both the red and blue are seen to intersect with the purple field.


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 5$: Complements and Powers




