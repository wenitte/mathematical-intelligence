# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Ultrafilter_on_Set/Definition_1_iff_Definition_3



Theorem
The following definitions of the concept of ultrafilter on a set $S$ are equivalent:

Definition 1
Let $S$ be a set.
Let $\FF \subseteq \powerset S$ be a filter on $S$.

Then $\FF$ is an ultrafilter (on $S$) if and only if:

there is no filter on $S$ which is strictly finer than $\FF$
or equivalently, if and only if:

whenever $\GG$ is a filter on $S$ and $\FF \subseteq \GG$ holds, then $\FF = \GG$.
Definition 3
Let $S$ be a set.
Let $\FF \subseteq \powerset S$ be a filter on $S$.

Then $\FF$ is an ultrafilter (on $S$) if and only if:

for every $A \subseteq S$, either $A \in \FF$ or $\relcomp S A \in \FF$
where $\relcomp S A$ is the relative complement of $A$ in $S$, that is, $S \setminus A$.


Proof
Let $S$ be a set.


Definition 1 implies Definition 3
Let $\FF$ be an ultrafilter on $S$ by definition 1.
Thus $\FF \subseteq \powerset S$ is a filter on $S$ which fulfills the condition:

whenever $\GG$ is a filter on $S$ and $\FF \subseteq \GG$ holds, then $\FF = \GG$.

Let $A \subseteq S$.
Aiming for a contradiction, suppose $A \notin \FF$ and $\relcomp S A \notin \FF$.
Consider the set $\BB := \set {A \cap V: V \in \FF}$.
This is a basis of a filter $\GG$ on $S$, for which $\FF \subseteq \GG$ holds.

Let $U \in \FF$.














\(\ds \relcomp S A\)

\(\notin\)







\(\ds \FF\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds U\)

\(\nsubseteq\)







\(\ds \relcomp S A\)





Definition of Filter: Axiom $(4)$: $U \subseteq \relcomp S A \subseteq S \implies \relcomp S A \in \FF$








\(\ds \leadsto \ \ \)





\(\ds A \cap U\)

\(\ne\)







\(\ds \O\)





Empty Intersection iff Subset of Complement








\(\ds \leadsto \ \ \)





\(\ds A \cap U\)

\(\in\)







\(\ds \GG\)





Definition of $\GG$ by way of $\BB$








\(\ds \leadsto \ \ \)





\(\ds A\)

\(\in\)







\(\ds \GG\)





Definition of Filter: Axiom $(4)$: $A \cap U \subseteq A \subseteq S \implies A \in \GG$




But we have:

$A \notin \FF$
and so:

$\FF \subsetneq \GG$
Thus $\FF$ is not an ultrafilter by Definition 1.
This contradicts our initial hypothesis.
Hence either:

$A \in \FF$
or:

$\relcomp S A \in \FF$
and so $\FF$ fulfills the conditions to be an ultrafilter by Definition 3.
$\Box$


Definition 3 implies Definition 1
Let $\FF$ be an ultrafilter on $S$ by definition 3.
That is, $\FF \subseteq \powerset S$ is a filter on $S$ which fulfills the condition:

for any $A \subseteq S$ either $A \in \FF$ or $\relcomp S A \in \FF$ holds.

Let $\GG$ be a filter on $X$ such that $\FF \subseteq \GG$.
Aiming for a contradiction, suppose $\FF \subsetneq GG$.
Then there exists $A \in \GG \setminus \FF$.
By definition of filter, $\O \notin \GG$.
But from Intersection with Relative Complement is Empty:

$A \cap \relcomp S A$
and so:

$\relcomp S A \notin \GG$

By hypothesis:

$\FF \subsetneq \GG$
and so:

$\relcomp S A \notin \FF$
Therefore neither $A \in \FF$ nor $\relcomp S A \in \FF$.
This contradicts our assumption:

for any $A \subseteq S$ either $A \in \FF$ or $\relcomp S A \in \FF$ holds.
Thus:

$\FF = \GG$
and so $\FF$ fulfills the conditions to be an ultrafilter by Definition 1.
$\blacksquare$





