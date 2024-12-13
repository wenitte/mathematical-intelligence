# 

Source: https://proofwiki.org/wiki/Injection_from_Set_to_Power_Set

Theorem
For every set $S$, there exists an injection from $S$ to its power set $\powerset S$.


Proof
If $S = \O$, the empty mapping suffices, as it is vacuously an injection.

Let $f: S \to \powerset S$ be the mapping defined as:

$\forall s \in S: \map f s = \set s$
Let $s, t \in S$ such that $\map f s = \map f t$.
Then $\set s = \set t$.
By definition of set equality it follows directly that $s = t$.
Hence $f$ is the required injection, by definition.
$\blacksquare$





