# 

Source: https://proofwiki.org/wiki/Power_Set_of_Doubleton

Theorem
Let $x, y$ be distinct objects.

Then the power set of the doubleton $\set {x, y}$ is:

$\powerset {\set {x, y} } = \set {\O, \set x, \set y, \set {x, y} }$


Proof
By definition of a subset:

$\set x , \set y, \set {x, y} \subseteq \set {x, y}$

Let $A \subseteq \set {x, y}$:

$A \ne \set x, \set y, \set {x, y}$

From set equality:

$\set {x, y} \nsubseteq A$
From Doubleton of Elements is Subset:

either $x \notin A$ or $y \notin A$.

Without loss of generality assume that $x \notin A$.
From Intersection With Singleton is Disjoint if Not Element:

$A \cap \set x = \O$
From Subset of Set Difference iff Disjoint Set:

$A \subseteq \set {x, y} \setminus \set x$
From Set Difference of Doubleton and Singleton is Singleton:

$A \subseteq \set y$
From set equality:

$\set y \nsubseteq A$
From Singleton of Element is Subset:

$y \notin A$.
From Intersection With Singleton is Disjoint if Not Element:

$A \cap \set y = \O$
From Subset of Set Difference iff Disjoint Set:

$A \subseteq \set y \setminus \set y$
From Set Difference with Self is Empty Set:

$A \subseteq \O$
From Empty Set is Subset of All Sets:

$\O \subseteq A$
From set equality:

$A = \O$
It follows that:

$\powerset {\set {x, y} } = \set {\O, \set x, \set y, \set {x, y} }$
$\blacksquare$





