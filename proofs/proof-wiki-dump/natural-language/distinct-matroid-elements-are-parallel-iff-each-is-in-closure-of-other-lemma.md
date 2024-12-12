# 

Source: https://proofwiki.org/wiki/Distinct_Matroid_Elements_are_Parallel_iff_Each_is_in_Closure_of_Other/Lemma

Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $a, b \in S$.
Let $\set a$ and $\set b$ be independent.

Then $\set {a, b}$ is dependent if and only if:

$a \in \map \sigma {\set b}$
and

$b \in \map \sigma {\set a}$
where $\sigma: \powerset S \to \powerset S$ denotes the closure operator of $M$.


Proof













\(\ds \set {a, b}\)

\(\notin\)







\(\ds \mathscr I\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \set a \cup \set b\)

\(\notin\)







\(\ds \mathscr I\)





Union of Disjoint Singletons is Doubleton








\(\ds \leadstoandfrom \ \ \)





\(\ds a\)

\(\in\)







\(\ds \map \sigma {\set b}\)





Element Depends on Independent Set iff Union with Singleton is Dependent












\(\, \ds \land \, \)

\(\ds b\)

\(\in\)







\(\ds \map \sigma {\set a}\)





Element Depends on Independent Set iff Union with Singleton is Dependent



$\blacksquare$





