# 

Source: https://proofwiki.org/wiki/Maximal_Element/Examples/Finite_Subsets_of_Natural_Numbers

Examples of Minimal Elements
Let $\FF$ denote the set of finite subsets of the natural numbers $\N$.
Consider the ordered set $\struct {\FF, \subseteq}$.
There are no maximal elements of $\struct {\FF, \subseteq}$.


Proof
Aiming for a contradiction, suppose $A \in \FF$ is a maximal element of $\struct {\FF, \subseteq}$.
Then $A$ consists of a finite number of natural numbers.
Let $M = \map \max A$ denote the maximum of the elements of $A$.
Now consider the set:

$A' = A \cup \set {M + 1}$
We have that $A'$ is a finite subset of $\N$.
Hence $A' \in \FF$.
But also from Set is Subset of Union:

$A \subseteq A'$
while because $M + 1 \notin A$:

$A' \ne A$
Hence $A$ cannot be a maximal element of $\struct {\FF, \subseteq}$.
The result follows from Proof by Contradiction.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $6 \ \text {(a)}$




