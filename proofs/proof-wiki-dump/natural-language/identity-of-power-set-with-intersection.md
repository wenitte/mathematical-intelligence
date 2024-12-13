# 

Source: https://proofwiki.org/wiki/Identity_of_Power_Set_with_Intersection

Theorem
Let $S$ be a set and let $\powerset S$ be its power set.
Consider the algebraic structure $\struct {\powerset S, \cap}$, where $\cap$ denotes set intersection.

Then $S$ serves as the identity for $\struct {\powerset S, \cap}$.


Proof
We note that by Set is Subset of Itself, $S \subseteq S$ and so $S \in \powerset S$ from the definition of the power set.
From Intersection with Subset is Subset‎, we have:

$A \subseteq S \iff A \cap S = A = S \cap A$
By definition of power set:

$A \subseteq S \iff A \in \powerset S$
So:

$\forall A \in \powerset S: A \cap S = A = S \cap A$
Thus we see that $S$ acts as the identity element.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $1.4: \ 9$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 4.3$. Units and zeros: Example $75$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 4$: Neutral Elements and Inverses
1972: A.G. Howson: A Handbook of Terms used in Algebra and Analysis ... (previous) ... (next): $\S 2$: Sets and functions: Operations




