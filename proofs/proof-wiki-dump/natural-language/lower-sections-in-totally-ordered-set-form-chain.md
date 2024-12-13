# 

Source: https://proofwiki.org/wiki/Lower_Sections_in_Totally_Ordered_Set_form_Chain

Theorem
Let $\struct {S, \preceq}$ be a totally ordered set.
Let $\LL$ be a set of lower sections in $S$.

Then $\LL$ is a chain.
That is, $\LL$ is totally ordered by $\subseteq$.


Proof
Let $L, M \in \LL$.
Suppose that $M \nsubseteq L$.
Then:

$\exists x \in M: x \notin L$

Let $y \in L$.
Then since $\preceq$ is a total ordering, $x \preceq y$ or $y \preceq x$.
If $x \preceq y$, then since $L$ is a lower section: $x \in L$, a contradiction.
Thus $y \preceq x$.
Since $M$ is a lower section, $y \in M$.
Since this holds for all $y \in L$, $L \subseteq M$.

Hence, for all $L, M \in \LL$:

$M \subseteq L$ or $L \subseteq M$
That is, $\LL$ is a chain.
$\blacksquare$





