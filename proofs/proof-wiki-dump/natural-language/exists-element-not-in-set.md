# 

Source: https://proofwiki.org/wiki/Exists_Element_Not_in_Set

Theorem
Let $S$ be a set.

Then:

$\exists x: x \notin S$

That is, for any set, there exists some element which is not in that set.


Proof 1
Consider the power set $\powerset S$ of $S$.
Aiming for a contradiction, suppose $\forall x \in \powerset S: x \in S$.
Then the identity mapping $I_S: S \to \powerset S$ would be a surjection.
But from Cantor's Theorem, there is no surjection $f: S \to \powerset S$.
From this contradiction it follows that:

$\exists x \in \powerset S: x \notin S$
Hence the result.
$\blacksquare$


Proof 2
By Axiom of Specification, we can construct the set:

$T = \set {x \in S: x \notin x}$
Then for all $y$:

$(*) \quad y \in T$ if and only if $\paren {y \in S \land y \notin y}$.

Aiming for a contradiction, suppose $T \in S$.
By Law of Excluded Middle, either $T \in T$ or $T \notin T$.

Suppose $T \in T$.
By $(*)$, $T \in S \land T \notin T$.
By Rule of Simplification we have $T \notin T$, which is a contradiction.

Now suppose $T \notin T$.
By $(*)$ again, we have $\neg \paren {T \in S \land T \notin T}$.
By Modus Ponendo Tollens, $\neg \paren {T \in S}$, which is also a contradiction.

Hence we must have $T \notin S$.
And thus there exists something (namely $T$) that does not belong to $S$.
$\blacksquare$





