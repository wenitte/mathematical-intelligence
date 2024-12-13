# 

Source: https://proofwiki.org/wiki/Non-Trivial_Event_is_Union_of_Simple_Events

Theorem
Let $\EE$ be an experiment.
Let $e$ be an event in $\EE$ such that $e \ne \O$.
That is, such that $e$ is non-trivial.

Then $e$ can be expressed as the union of a set of simple events in $\EE$.


Proof
By definition of event, $e$ is a subset of the sample space $\Omega$ of $\EE$.
By hypothesis:

$e \ne \O$
and so:

$\exists s \in \Omega: s \in e$
Let $S$ be the set defined as:

$S = \set {\set s: s \in e}$
By Union is Smallest Superset: Set of Sets it follows that:

$\ds \bigcup S \subseteq e$
Let $x \in e$.
Then by Singleton of Element is Subset:

$\set x \subseteq e$
and by definition of $S$ it follows that:

$\set x \in S$
and so by definition of set union:

$x \in \ds \bigcup S$
Thus we have:

$e \subseteq \ds \bigcup S$

The result follows by definition of set equality.
$\blacksquare$


Sources
1965: A.M. Arthurs: Probability Theory ... (previous) ... (next): Chapter $2$: Probability and Discrete Sample Spaces: $2.2$ Sample spaces and events




