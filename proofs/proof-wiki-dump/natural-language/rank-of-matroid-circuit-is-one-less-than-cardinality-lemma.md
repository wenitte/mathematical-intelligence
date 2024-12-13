# 

Source: https://proofwiki.org/wiki/Rank_of_Matroid_Circuit_is_One_Less_Than_Cardinality/Lemma


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $C \subseteq S$ be a circuit of $M$.
Let $x \in C$.

Then:

$C \setminus \set x$ is a maximal independent subset of $C$


Proof
From Set Difference is Subset:

$C \setminus \set x \subseteq C$
Because $x \in C$ and $x \notin C \setminus \set x$:

$C \setminus \set x \ne C$
From Proper Subset of Matroid Circuit is Independent and matroid axiom $(\text I 1)$:

$C \setminus \set x \in \mathscr I$

Let $X$ be an independent subset such that:

$C \setminus \set x \subseteq X \subseteq C$
As $C$ is dependent:

$X \ne C$

Aiming for a contradiction, suppose:

$x \in X$
From Singleton of Element is Subset:

$\set x \subseteq X$
$\set x \subseteq C$
We have:














\(\ds X\)

\(=\)







\(\ds X \cup \set x\)





Union with Superset is Superset














\(\ds \)

\(\supseteq\)







\(\ds \paren{C \setminus \set x} \cup \set x\)





Set Difference over Subset














\(\ds \)

\(=\)







\(\ds C \cup \set x\)





Set Difference with Union














\(\ds \)

\(=\)







\(\ds C\)





Union with Superset is Superset



Hence $C = X$ by definition of set equality. 
This contradicts the fact that:

$X \ne C$
Hence:

$x \notin X$

From Intersection With Singleton is Disjoint if Not Element:

$X \cap \set x = \O$
We have:














\(\ds X\)

\(=\)







\(\ds X \setminus \set x\)





Set Difference with Disjoint Set














\(\ds \)

\(\subseteq\)







\(\ds C \setminus \set x\)





Set Difference over Subset



By definition of set equality:

$X = C \setminus \set x$

It follows that $C \setminus \set x$ is a maximal independent subset of $C$ by definition.
$\blacksquare$





