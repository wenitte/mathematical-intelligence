# 

Source: https://proofwiki.org/wiki/Identity_of_Power_Set_with_Union

Theorem
Let $S$ be a set and let $\powerset S$ be its power set.
Consider the algebraic structure $\struct {\powerset S, \cup}$, where $\cup$ denotes set union.

Then the empty set $\O$ serves as the identity for $\struct {\powerset S, \cup}$.


Proof
From Empty Set is Element of Power Set:

$\O \in \powerset S$
From Union with Empty Set:

$\forall A \subseteq S: A \cup \O = A = \O \cup A$
By definition of power set:

$A \subseteq S \iff A \in \powerset S$
So:

$\forall A \in \powerset S: A \cup \O = A = \O \cup A$

Thus we see that $\O$ acts as the identity for $\struct {\powerset S, \cup}$.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $1.4: \ 9$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 4.3$. Units and zeros: Example $75$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 4$: Neutral Elements and Inverses




