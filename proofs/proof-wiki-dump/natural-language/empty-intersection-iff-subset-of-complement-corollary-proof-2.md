# 

Source: https://proofwiki.org/wiki/Empty_Intersection_iff_Subset_of_Complement/Corollary/Proof_2

Corollary to Empty Intersection iff Subset of Complement
Let $A, B, S$ be sets such that $A, B \subseteq S$.
Then:

$\exists X \in \powerset S: \paren {A \cap X} \cup \paren {B \cap \complement_S \paren X} = \O \iff A \cap B = \O$
where $\overline X$ denotes the relative complement of $X$ in $S$.


Proof
We have:

result $\paren {A \cap C} \cup \paren {B \cap \map \complement C} = \O \iff B \subseteq C \subseteq \map \complement A$:
where the universe $\Bbb U$ is posited.

Let $S$ take the position of $\Bbb U$.
Let $C = X$.
Then we have:

$\paren {A \cap X} \cup \paren {B \cap \relcomp S X} = \O \iff B \subseteq X \subseteq \relcomp S A$

Thus we have shown that:

$B \subseteq \relcomp S A$
and it follows from Empty Intersection iff Subset of Complement that:

$A \cap B = \O$
$\blacksquare$





