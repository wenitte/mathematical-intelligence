# 

Source: https://proofwiki.org/wiki/Alternative_Definition_of_Ordinal_in_Well-Founded_Theory


It has been suggested that this page be renamed.In particular: Definitions are treated as "equal" in that they are entered as definitions. Then an equivalence proof page is built to demonstrate that those two definitions are indeed equivalent.To discuss this page in more detail, feel free to use the talk page.

It has been suggested that this page or section be merged into Equivalence of Definitions of Ordinal.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.


Theorem
A set $S$ is an ordinal if and only if $S$ is transitive and $\forall x, y \in S: \paren {x \in y \lor x = y \lor y \in x}$.


Proof
Forward Implication
Let $S$ be an ordinal.
By Alternative Definition of Ordinal, $S$ is transitive and strictly well-ordered by the epsilon relation.
By Strict Well-Ordering is Strict Total Ordering, $S$ is strictly totally ordered by $\in$.
Thus:

$\forall x, y \in S: \paren {x \in y \lor x = y \lor y \in x}$
$\Box$


Reverse Implication
Let $S$ be a transitive set such that for any $x, y \in S$, $x \in y \lor y \in x \lor x = y$.
We first show that $\in$ is a strict ordering of $S$.


Asymmetric
Let $x, y \in S$.
By Epsilon Relation is Strictly Well-Founded, $\set {x, y}$ has a strictly minimal element under $\in$.
Thus $x \notin t$ or $y \notin x$.


Transitive
Let $x, y, z \in S$ with $x \in y$ and $y \in z$.
By assumption, $x = z$, $x \in z$, or $z \in x$.
Aiming for a contradiction, suppose that $x = z$.
Then $x \in y$ and $y \in x$, contradicting the fact that $\Epsilon$ is asymmetric.
Suppose that $z \in x$.
Then $x \in y$, $y \in z$, and $z \in x$.
Thus the set $\set {x, y, z}$ has no strictly minimal element under $\Epsilon$, contradicting Epsilon Relation is Strictly Well-Founded.
Thus $x \in z$.
Thus $\in$ is a strict ordering of $S$.

Let $T$ be a non-empty subset of $S$.
By Epsilon Relation is Strictly Well-Founded, $T$ has a strictly minimal element $m$ under $\Epsilon$.
From Strictly Minimal Element is Minimal Element, $m$ is a minimal element of $T$ under $\Epsilon$.
From Minimal Element in Toset is Unique and Smallest, $m$ is the smallest element of $T$.
It follows by definition that $\Epsilon$ strictly well-orders $S$.
Thus by Alternative Definition of Ordinal, $S$ is an ordinal.
$\blacksquare$


Also see
Alternative Definition of Ordinal


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 7.3$, $\S 7.4$




