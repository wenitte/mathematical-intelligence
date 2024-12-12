# 

Source: https://proofwiki.org/wiki/Compact_Sets_in_Fortissimo_Space



Theorem
A subset of a Fortissimo space is compact if and only if it is finite.


Proof
Let $T = \struct {S, \tau}$ be a Fortissimo space.


Necessary Condition
By Finite Topological Space is Compact, all finite sets are compact in $T$.
$\Box$


Sufficient Condition
We prove the contrapositive.

Let $A$ be an infinite subset of $S$.
Let $C$ be a countably infinite subset of $A$ that does not contain $p$.
For each $x \in A$, $C \setminus \set x$ is a countably infinite set.
Hence $\relcomp S {C \setminus \set x} = \relcomp S C \cup \set x$ is open in $T$.
Thus $\CC = \set {\relcomp S C \cup \set x: x \in A}$ is an open cover of $A$.
However, each subset of the $\CC$ contains exactly $1$ element in $C$, so a finite subset of $\CC$ can only contain a finite number of elements in $C$.
Therefore $\CC$ has no finite subcover.
Hence $A$ is not compact.

This shows that if a subset of a Fortissimo space is compact, it must be finite.
$\blacksquare$





