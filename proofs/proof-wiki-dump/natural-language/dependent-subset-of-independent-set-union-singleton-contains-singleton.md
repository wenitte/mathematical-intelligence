# 

Source: https://proofwiki.org/wiki/Dependent_Subset_of_Independent_Set_Union_Singleton_Contains_Singleton


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $X$ be an independent subset of $M$.
Let $x \in S$.
Let $C$ be a dependent subset of $M$ such that:

$C \subseteq X \cup \set x$.

Then:

$x \in C$
Proof
From the contrapositive statement of Superset of Dependent Set is Dependent:

$C \nsubseteq X$
From the contrapositive statement of Set Difference with Superset is Empty Set:

$C \setminus X \ne \O$
From Set Difference over Subset:

$C \setminus X \subseteq \paren {X \cup \set x} \setminus X = \set x$
From Power Set of Singleton:

$C \setminus X = \set x$
From Set Difference is Subset:

$\set x \subseteq C$
From Singleton of Element is Subset:

$x \in C$
$\blacksquare$





