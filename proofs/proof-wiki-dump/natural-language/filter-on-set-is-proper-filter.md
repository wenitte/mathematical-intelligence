# 

Source: https://proofwiki.org/wiki/Filter_on_Set_is_Proper_Filter



Theorem
Let $S$ be a set.
Let $\powerset S$ denote the power set of $S$.
Let $\struct {\powerset S, \subseteq}$ be the poset defined on $\powerset S$ by the subset relation.

Let $\FF$ be a filter on $S$.

Then $\FF$ is a proper filter on $\struct {\powerset S, \subseteq}$.


Proof
From the general definition of a filter, we have:
A filter on $\struct {S, \preccurlyeq}$ is a subset $\FF \subseteq S$ which satisfies the following conditions:

$\FF \ne \O$
$x, y \in \FF \implies \exists z \in \FF: z \preccurlyeq x, z \preccurlyeq y$
$\forall x \in \FF: \forall y \in S: x \preccurlyeq y \implies y \in \FF$
A filter $\FF$ is proper if it does not equal $S$ itself.

From the definition of a filter on a set, we have:
A filter on $T$ is a set $\FF \subset \powerset T$ which satisfies the following conditions:

$T \in \FF$
$\O \notin \FF$
$U, V \in \FF \implies U \cap V \in \FF$
$\forall U \in \FF: U \subseteq V \subseteq T \implies V \in \FF$

We can identify:

$\powerset T$ with $S$
$\subseteq$ with $\preccurlyeq$.


Filter Not Empty
We have that $T \in \FF$ and so $\FF \ne \O$.


Preceding Elements in Filter
We have that:

$U, V \in \FF \implies U \cap V \in \FF$
From Intersection is Subset, we have that $U \cap V \subseteq U$ and $U \cap V \subseteq V$.

So identifying $U$ with $x$, $V$ with $y$ and $U \cap V$ with $z$ it is clear that:

$x, y \in \FF \implies \exists z \in \FF: z \preccurlyeq x, z \preccurlyeq y$


Succeeding Elements in Filter
We have that:

$\forall U \in \FF: U \subseteq V \subseteq T \implies V \in \FF$
This can be rewritten:

$\forall U \in \FF, V \in \powerset T: U \subseteq V \implies V \in \FF$
Identifying $U$ with $x$ and $V$ with $y$, this translates as:

$\forall x \in \FF, y \in S: x \preccurlyeq y \implies y \in \FF$


Proper Filter
For $\FF$ to be a proper filter on $\struct {\powerset T, \subseteq}$, it must not equal $\powerset T$.
This is seen to be satisfied by the axiom $\O \notin \FF$.

All axioms are fulfilled, hence the result.
$\blacksquare$


Note about Axioms
It seems at first glance that the condition $T \in \FF$ is not axiomatic, as it is clear from the third property:

$U \in \FF: U \subseteq T \subseteq T \implies T \in \FF$
However, one of the properties of a filter is that it is specifically not empty.
Specifying that $T \in \FF$ is therefore equivalent to specifying that $\FF \ne \O$.
Thus it would be possible to cite the first axiom as $\FF \ne \O$ instead, but this is rarely done.





