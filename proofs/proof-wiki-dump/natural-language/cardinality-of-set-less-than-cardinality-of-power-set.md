# 

Source: https://proofwiki.org/wiki/Cardinality_of_Set_less_than_Cardinality_of_Power_Set

Theorem
Let $X$ be a set.
Then:

$\card X < \card {\powerset X}$
where

$\card X$ denotes the cardinality of $X$,
$\powerset X$ denotes the power set of $X$.


Proof
By No Bijection from Set to its Power Set:

there exist no bijections $X \to \powerset X$
Then by definition of set equivalence:

$X \not\sim \powerset X$
Hence by definition of cardinality:

$(1): \quad \card X \ne \card {\powerset X}$

By Cardinality of Set of Singletons:

$(2): \quad \card {\set {\set {x}: x \in X} } = \card X$
By definition of subset:

$\forall x \in X: \set {x} \subseteq X$
Then by definition of power set:

$\forall x \in X: \set {x} \in \powerset X$
Hence by definition of subset:

$\set {\set {x}: x \in X} \subseteq \powerset X$
Then by Subset implies Cardinal Inequality and $(2)$:

$\card X \le \card {\powerset X}$
Thus by $(1)$:

$\card X < \card {\powerset X}$
$\blacksquare$


Sources
Mizar article CARD_1:14




