# 

Source: https://proofwiki.org/wiki/Finite_Group_with_2_Conjugacy_Classes_has_2_Elements

Theorem
Let $G$ be a finite group.
Let $G$ have exactly $2$ conjugacy classes.
Then $G$ has exactly $2$ elements.


Proof
Let $G$ be of order $n$.
Let $G$ have exactly $2$ conjugacy classes.
Let $x \in G$ such that $x \ne e$.
Let $\conjclass x$ denote the conjugacy class of $x$.

From Identity of Group is in Singleton Conjugacy Class:
$\conjclass e = \set e$
where $\conjclass e$ denotes the conjugacy class of $e$
The other elements of $G$ are in $\conjclass x$.
Thus:

$\card {\conjclass x} = n - 1$
where $\card {\, \cdot \,}$ denotes the cardinality of a set.

We have that Size of Conjugacy Class is Index of Normalizer.

From Lagrange's Theorem, the index of any subgroup of $G$ is a divisor of $G$.
Thus:

$\paren {n - 1} \divides n$
where $\divides$ denotes divisibility.
It follows that $n = 2$.

Hence the result by definition of order of group.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $10$: The Orbit-Stabiliser Theorem: Exercise $5$




