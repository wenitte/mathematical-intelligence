# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Ultrafilter_on_Set



Theorem
The following definitions of the concept of ultrafilter on a set $S$ are equivalent:

Definition 1
Let $S$ be a set.
Let $\FF \subseteq \powerset S$ be a filter on $S$.

Then $\FF$ is an ultrafilter (on $S$) if and only if:

there is no filter on $S$ which is strictly finer than $\FF$
or equivalently, if and only if:

whenever $\GG$ is a filter on $S$ and $\FF \subseteq \GG$ holds, then $\FF = \GG$.
Definition 2
Let $S$ be a set.
Let $\FF \subseteq \powerset S$ be a filter on $S$.

Then $\FF$ is an ultrafilter (on $S$) if and only if:

for every $A \subseteq S$ and $B \subseteq S$ such that $A \cap B = \O$ and $A \cup B \in \FF$, either $A \in \FF$ or $B \in \FF$.
Definition 3
Let $S$ be a set.
Let $\FF \subseteq \powerset S$ be a filter on $S$.

Then $\FF$ is an ultrafilter (on $S$) if and only if:

for every $A \subseteq S$, either $A \in \FF$ or $\relcomp S A \in \FF$
where $\relcomp S A$ is the relative complement of $A$ in $S$, that is, $S \setminus A$.

Definition 4
Let $S$ be a non-empty set.
Let $\FF$ be a non-empty set of subsets of $S$.

Then $\FF$ is an ultrafilter on $S$ if and only if both of the following hold:

$\FF$ has the finite intersection property
For all $U \subseteq S$, either $U \in \FF$ or $U^\complement \in \FF$
where $U^\complement$ is the complement of $U$ in $S$.


Proof
Let $S$ be a set.

Equivalence of Definitions 1, 2 and 3
Definition 1 implies Definition 2
Let $\FF$ be an ultrafilter on $S$ by definition 1.
Thus $\FF \subseteq \powerset S$ is a filter on $S$ which fulfills the condition:

whenever $\GG$ is a filter on $S$ and $\FF \subseteq \GG$ holds, then $\FF = \GG$.

Let $A \subseteq S$ and $B \subseteq S$ such that:

$A \cap B = \O$
$A \cup B \in \FF$

Aiming for a contradiction, suppose $A \notin \FF$ and $B \notin \FF$.
Consider the set $\BB := \set {V \cap A: V \in \FF} \cup \set {V \cap B: V \in \FF}$.
This is a basis of a filter $\GG$ on $S$, for which $\FF \subseteq \GG$ holds.

Let $U \in \FF$.














\(\ds A\)

\(\notin\)







\(\ds \FF\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds U \cap A\)

\(=\)







\(\ds \O\)





Definition of Filter: Axiom $(4)$: $U \cap A \subseteq A \implies A \in \FF$








\(\ds \leadsto \ \ \)





\(\ds U\)

\(\subseteq\)







\(\ds \relcomp S A\)





Empty Intersection iff Subset of Complement














\(\ds B\)

\(\notin\)







\(\ds \FF\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds U \cap B\)

\(=\)







\(\ds \O\)





Definition of Filter: Axiom $(4)$: $U \cap B \subseteq B \implies B \in \FF$








\(\ds \leadsto \ \ \)





\(\ds U\)

\(\subseteq\)







\(\ds \relcomp S B\)





Empty Intersection iff Subset of Complement








\(\ds \leadsto \ \ \)





\(\ds U\)

\(\subseteq\)







\(\ds \relcomp S A \cap \relcomp S B\)





Intersection is Largest Subset








\(\ds \leadsto \ \ \)





\(\ds U\)

\(\subseteq\)







\(\ds \relcomp S {A \cup B}\)





De Morgan's Laws: Relative Complement of Union








\(\ds \leadsto \ \ \)





\(\ds U \cap \paren {A \cup B}\)

\(=\)







\(\ds \O\)





Empty Intersection iff Subset of Complement



But by definition of a filter:

$U, V \in \FF \implies U \cap V \in \FF$
But $\O \notin \FF$.
This contradicts our initial hypothesis.
Hence either:

$A \in \FF$
or:

$B \in \FF$
and so $\FF$ fulfills the conditions to be an ultrafilter by Definition 2.
$\Box$


Definition 2 implies Definition 3
Let $\FF$ be an ultrafilter on $S$ by definition 2.
That is, $\FF \subseteq \powerset S$ is a filter on $S$ which fulfills the condition:

for every $A \subseteq S$ and $B \subseteq S$ such that $A \cap B = \O$ and $A \cup B \in \FF$, either $A \in \FF$ or $B \in \FF$.

Let $A \subseteq S$.
We have:














\(\ds A \cup \relcomp S A\)

\(=\)







\(\ds S\)





Union with Relative Complement








\(\ds \leadsto \ \ \)





\(\ds A \cup \relcomp S A\)

\(\in\)







\(\ds \FF\)





Definition of Filter: Axiom $(1)$: $S \in \FF$














\(\ds A \cap \relcomp S A\)

\(=\)







\(\ds \O\)





Intersection with Relative Complement is Empty








\(\ds \leadsto \ \ \)





\(\ds A\)

\(\in\)







\(\ds \FF\)





by hypothesis: Definition of Ultrafilter by Definition 2












\(\, \ds \lor \, \)

\(\ds \relcomp S A\)

\(\in\)







\(\ds \FF\)









So $\FF$ fulfills the conditions to be an ultrafilter by Definition 3.
$\Box$


Definition 3 implies Definition 1
Let $\FF$ be an ultrafilter on $S$ by definition 3.
That is, $\FF \subseteq \powerset S$ is a filter on $S$ which fulfills the condition:

for any $A \subseteq S$ either $A \in \FF$ or $\relcomp S A \in \FF$ holds.

Let $\GG$ be a filter on $X$ such that $\FF \subseteq \GG$.
Aiming for a contradiction, suppose $\FF \subsetneq \GG$.
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


$\Box$


Definition 1 implies Definition 4
Let $\FF \subseteq \powerset S$ a filter on $S$ which fulfills the condition:

whenever $\GG$ is a filter on $S$ and $\FF \subseteq \GG$ holds, then $\FF = \GG$
By definition of filter, $\FF$ satisfies the Finite Intersection Property and is a non-empty set of subsets of $S$.
Let $U \subseteq S$.
Aiming for a contradiction, suppose $U \notin \FF$.
Let $V = U^c$, where $U^c$ denotes the relative complement of $U$ in $S$.
Suppose there exists $C \in \FF$ such that:

$C \cap V = \O$
By Empty Intersection iff Subset of Complement, it follows that:

$C \subset U$
Thus $U \in \FF$, which contradicts our hypothesis that $U \notin \FF$.
Hence the set $\Omega = \set {C \cap V: C \in \FF}$ is a non-empty set of non-empty set.
Note that $\Omega$ is downward directed, that is, $\Omega$ is a filter basis.
From Filter Basis Generates Filter, $\Omega$ generates a filter $\GG$ on $S$ that contains $\FF$ and $\set V$.
By hypothesis, we have:

$\FF =\GG$
Hence $U^c = V \in \FF$.
Thus $\FF$ is an ultrafilter by Definition 2.
$\Box$


Definition 4 implies Definition 1
Let $S$ be a non-empty set and $\FF$ a non-empty set of subsets on $S$ which fulfills the conditions:

$\FF$ has the finite intersection property
For all $U \subseteq S$, either $U \in \FF$ or $U^c \in \FF$.

Because $\FF$ has the finite intersection property, it follows that $\O \notin \FF$.
As $\O \notin \FF$, it follows that $\O^c = S \in \FF$.

Let $U, V \in \FF$.
Then either $U \cap V \in \FF$ or $\paren {U \cap V}^c \in \FF$.
However we observe that:

$\paren {U \cap V}^c \cap U \cap V = \O$
By finite intersection property, it follows that $U \cap V \in \FF$.

Now let $U \in \FF$ and $V \in S$ such that $U \subseteq V \subseteq S$.
Then either $V \in \FF$ or $V^c \in \FF$.
However we observe that:

$V^c \cap U \subseteq V^c \cap V = \O$
By finite intersection property, it follows that $V \in \FF$.
Therefore $\FF$ is a filter.

Let $\GG$ be a filter on $S$ such that $\FF \subseteq \GG$.
Assume that $\FF \subsetneq \GG$.
Then there exists $A \in \GG \setminus \FF$.
Since $\O \notin \GG$ this implies that $A^c \notin \GG$.
As $\FF \subsetneq \GG$, it follows that $A^c \notin \FF$.
Therefore neither $A \in \FF$ nor $A^c \in \FF$, a contradiction to our assumption.
Thus $\FF = \GG$, which implies that $\FF$ is an ultrafilter by definition 1.
$\blacksquare$





