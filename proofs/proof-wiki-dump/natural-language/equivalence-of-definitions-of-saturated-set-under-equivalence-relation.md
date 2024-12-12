# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Saturated_Set_Under_Equivalence_Relation



Theorem
Let $\sim$ be an equivalence relation on a set $S$.
Let $T \subset S$ be a subset.

The following definitions of the concept of saturated set in the context of Equivalence Relation are equivalent:

Definition 1
$T$ is saturated if and only if it equals its saturation:

$T = \overline T$
Definition 2
$T$ is saturated if and only if it is a union of equivalence classes:

$\ds \exists U \subset S : T = \bigcup_{u \mathop \in U} \eqclass u {}$
Definition 3
$T$ is saturated if and only if it is the preimage of some set under the quotient mapping:

$\exists V \subset S / \sim \; : T = q^{-1} \left[{V}\right]$


Proof
1 implies 2
Let $T = \overline T$.
By definition of saturation:

$T = \ds \bigcup_{t \mathop \in T} \eqclass t {}$
so we can take $U = T$.
$\blacksquare$


1 implies 3
Let $T = \overline T$.
By definition of saturation:

$T = q^{-1} \sqbrk {q \sqbrk T}$
so we can take $V = q \sqbrk T$.
$\blacksquare$


2 implies 1
Let $T = \ds \bigcup_{u \mathop \in U} \eqclass u {}$ with $U \subset S$.
Let $s \in S$ and $t \in T$ such that $s \sim t$.
By definition of union:

$\exists u \in U : t \in \eqclass u {}$
By definition of equivalence class:

$t \sim u$
Because $\sim$ is transitive:

$s \sim u$
By definition of equivalence class:

$s \in \eqclass u {}$
Thus:

$s \in T$
Because $s$ was arbitrary:

$\overline T \subset T$
By Set is Contained in Saturation Under Equivalence Relation:

$T \subset \overline T$
Thus:

$T = \overline T$
$\blacksquare$


3 implies 1
Let $V$ be a subset of the quotient mapping of $S$ by $\sim$:

$V \subset S / \sim$
Let $T$ be the preimage of $V$ under $q$:

$T = q^{-1} \sqbrk V$

By Quotient Mapping is Surjection and Image of Preimage of Subset under Surjection equals Subset:

$q \sqbrk {q^{-1} \sqbrk V} = V$

Thus:














\(\ds q^{-1} \sqbrk {q \sqbrk T}\)

\(=\)







\(\ds q^{-1} \sqbrk {q \sqbrk {q^{-1} \sqbrk V} }\)




















\(\ds \)

\(=\)







\(\ds q^{-1} \sqbrk V\)




















\(\ds \)

\(=\)







\(\ds T\)










Thus $T$ equals its saturation.
$\blacksquare$





