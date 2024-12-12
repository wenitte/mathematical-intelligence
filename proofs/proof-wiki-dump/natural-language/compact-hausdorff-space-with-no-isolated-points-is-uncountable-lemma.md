# 

Source: https://proofwiki.org/wiki/Compact_Hausdorff_Space_with_no_Isolated_Points_is_Uncountable/Lemma


It has been suggested that this page be renamed.In particular: The proof of which this is a lemma seems to no longer exist (if it ever did) so this needs renaming so as to be independent of such a proof.To discuss this page in more detail, feel free to use the talk page.
Lemma for Compact Hausdorff Space with no Isolated Points is Uncountable
Let $T = \left({S, \tau}\right)$ be a Hausdorff space with no isolated points.
Let $U \subseteq S$ be a non-empty open set in $T$.
Let $x \in S$.

Then there is a non-empty open subset $V \subseteq U$ such that $x \notin V^-$, where $V^-$ is the closure of $V$.


Proof
First we show that there is a $y \in U$ such that $y \ne x$:
By Law of Excluded Middle, either $x \in U$ or $x \notin U$.

Let $x \in U$.
We have that $x$ is not an isolated point.
Therefore:

$\exists y \in U: y \ne x$

Let $x \notin U$.
As $U$ is non-empty it has an element $y$, and $y \ne x$.
Thus in either case, there is a $y \in U$ such that $y \ne x$.
$\Box$

By Closure Condition for Hausdorff Space, there is an open set $V$ such that $y \in V$ and $x \notin V^-$.
$\blacksquare$

Law of the Excluded Middle
This proof depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this proof from an intuitionistic perspective.





