# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Saturation_Under_Equivalence_Relation



Theorem
Let $\sim$ be an equivalence relation on a set $S$.
Let $T \subset S$ be a subset.

The following definitions of the concept of saturation are equivalent:

Definition 1
The saturation of $T$ is the set of all elements that are equivalent to some element in $T$:

$\overline T = \{s \in S : \exists t\in T : s\sim t\}$
Definition 2
The saturation of $T$ is the union of the equivalence classes of its elements:

$\ds \overline T = \bigcup_{t \mathop \in T} \eqclass t \sim$
Definition 3
The saturation of $T$ is the preimage of its image under the quotient mapping:

$\overline T = q^{-1} \sqbrk {q \sqbrk T}$


Proof
Definitions 1 and 2 are equivalent













\(\ds \bigcup_{t \mathop \in T} \eqclass t \sim\)

\(=\)







\(\ds \set {s \in S: \exists t \in T: s \in \eqclass t \sim}\)





Definition of Union of Family of Subsets














\(\ds \)

\(=\)







\(\ds \set {s \in S: \exists t \in T: s \sim t}\)





Definition of Equivalence Class



$\Box$


Definitions 1 and 3 are equivalent













\(\ds q^{-1} \sqbrk {q \sqbrk T}\)

\(=\)







\(\ds q^{-1} \sqbrk {\set {\eqclass t \sim: t \in T} }\)





Definition of Image of Subset under Mapping














\(\ds \)

\(=\)







\(\ds \set {s \in S: \map q s \in \set {\eqclass t \sim: t \in T} }\)





Definition of Preimage of Subset under Mapping














\(\ds \)

\(=\)







\(\ds \set {s \in S: \eqclass s \sim \in \set {\eqclass t \sim: t \in T} }\)





Definition of Quotient Mapping














\(\ds \)

\(=\)







\(\ds \set {s \in S: \exists t \in T: \eqclass s \sim = \eqclass t \sim}\)




















\(\ds \)

\(=\)







\(\ds \set {s \in S: \exists t \in T: s \sim t}\)





Equivalence Class holds Equivalent Elements



$\blacksquare$





