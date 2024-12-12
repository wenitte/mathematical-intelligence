# 

Source: https://proofwiki.org/wiki/Doubleton_of_Elements_is_Subset



Theorem
Let $S$ be a set.
Let $\set {x,y}$ be the doubleton of distinct $x$ and $y$.

Then:

$x, y \in S \iff \set {x,y} \subseteq S$


Proof
Necessary Condition
Let $x, y \in S$.
From Singleton of Element is Subset:

$\set x \subseteq S$
$\set y \subseteq S$
From Union of Subsets is Subset:

$\set x \cup \set y \subseteq S$
From Union of Disjoint Singletons is Doubleton:

$\set x \cup \set y = \set {x, y}$
Hence:

$\set {x,y} \subseteq S$
$\Box$


Sufficient Condition
Let $\set {x,y} \subseteq S$.
From the definition of a subset:

$x \in \set {x,y} \implies x \in S$
$y \in \set {x,y} \implies y \in S$
$\blacksquare$





