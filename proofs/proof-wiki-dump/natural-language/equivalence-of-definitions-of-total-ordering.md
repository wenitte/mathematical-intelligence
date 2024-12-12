# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Total_Ordering



Theorem
The following definitions of the concept of Total Ordering are equivalent:

Definition 1
$\RR$ is a total ordering on $S$ if and only if:

$(1): \quad \RR$ is an ordering on $S$
$(2): \quad \RR$ is connected
That is, $\RR$ is an ordering with no non-comparable pairs:

$\forall x, y \in S: x \mathop \RR y \lor y \mathop \RR x$
Definition 2
$\RR$ is a total ordering on $S$ if and only if:




\(\text {(1)}: \quad\)









\(\ds \RR \circ \RR\)

\(\subseteq\)







\(\ds \RR\)










\(\text {(2)}: \quad\)









\(\ds \RR \cap \RR^{-1}\)

\(\subseteq\)







\(\ds \Delta_S\)










\(\text {(3)}: \quad\)









\(\ds \RR \cup \RR^{-1}\)

\(=\)







\(\ds S \times S\)











Proof
Definition 1 implies Definition 2
Let $\RR$ be an ordering which is also connected.
By definition 2 of ordering:

$\RR \circ \RR = \RR$
$\RR \cap \RR^{-1} = \Delta_S$
and hence by definition of set equality:

$(1): \quad \RR \circ \RR \subseteq \RR$
$(2): \quad \RR \cap \RR^{-1} \subseteq \Delta_S$
By Relation is Connected and Reflexive iff Total, $\RR$ is a total relation.
Thus by Relation is Total iff Union with Inverse is Trivial Relation:

$(3): \quad \RR \cup \RR^{-1} = S \times S$

Hence $\RR$ is a total ordering by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $\RR$ be a relation which fulfils the conditions:

$(1): \quad \RR \circ \RR \subseteq \RR$
$(2): \quad \RR \cap \RR^{-1} \subseteq \Delta_S$
$(3): \quad \RR \cup \RR^{-1} = S \times S$
By definition of transitive relation, we have from $(1)$ that $\RR$ is transitive.
From Relation is Antisymmetric iff Intersection with Inverse is Coreflexive, it follows from $(2)$ that $\RR$ is an antisymmetric relation.
By Relation is Total iff Union with Inverse is Trivial Relation it follows from $(3)$ that $\RR$ is a total relation.
From Relation is Connected and Reflexive iff Total, $\RR$ is both connected and reflexive.

Hence we have that $\RR$ is:

an ordering by definition 1
and hence:

a total ordering by definition 1.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.27 \ \text {(b)}$




