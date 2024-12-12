# 

Source: https://proofwiki.org/wiki/Equivalence_Relation/Examples/Non-Equivalence/People_with_Common_Ancestor

Example of Equivalence Relation
Let $P$ be the set of people.
Let $\sim$ be the relation on $P$ defined as:

$\forall \tuple {x, y} \in P \times P: x \sim y \iff \text { $x$ and $y$ have an ancestor in common}$
Then $\sim$ is not an equivalence relation.


Proof
We have that $\sim$ is reflexive and symmetric.

But $\sim$ is not transitive:
Let $a$ and $b$ be half-siblings, whose mother is $d$ and whose fathers are $e$ and $f$ respectively.
Then $a \sim b$ as they share an ancestor $d$.
Let $a$ and $g$ be full siblings, whose mother is $i$ and whose father is $e$.
Then $g \sim a$ as they share father $e$ and mother $i$.
But $b$ and $g$ do not have the same father or mother, and it is possible that they share no ancestor.
And in that case:

$g \nsim b$
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $2$. Equivalence Relations: Exercise $1 \ \text {(iii)}$




