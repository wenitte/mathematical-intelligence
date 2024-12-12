# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Well-Ordering/Definition_1_implies_Definition_2

Theorem
Let $\struct {S, \preceq}$ be an ordered set such that:

$\forall T \subseteq S: \exists a \in T: \forall x \in T: a \preceq x$
That is, such that $\preceq$ is a well-ordering by definition 1.

Then $\preceq$ is a total ordering.


Proof
Consider $X = \set {a, b}$ where $a, b \in S$.
We have by hypothesis that $X$ has a smallest element.
So either $\min X = a$ or $\min X = b$.
If $\min X = a$, then $a \preceq b$.
If $\min X = b$, then $b \preceq a$.
So either $a \preceq b$ or $b \preceq a$.
That is, $a$ and $b$ are comparable.
As this applies to all $a, b \in S$, the ordering $\preceq$ is total.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 17$: Well Ordering
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 7$: Exercise $4$




