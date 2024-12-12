# 

Source: https://proofwiki.org/wiki/Components_are_Open_iff_Union_of_Open_Connected_Sets



Theorem
Let $T = \struct {S, \tau}$ be a topological space.

The following statements are equivalent:

$(1): \quad$ The components of $T$ are open.
$(2): \quad S$ is a union of open connected sets of $T$.


Proof
Condition (1) implies Condition (2)
Let the components of $T$ be open.
By definition, the components of $T$ are a partition of $S$.
Hence $S$ is the union of the open components of $T$.
Since a component is a maximal connected set by definition, then $S$ is a union of open connected sets of $T$.
$\Box$


Condition (2) implies Condition (1)
Let $S = \ds \bigcup \set {U \subseteq S : U \in \tau \text { and } U \text { is connected} }$.
Let $C$ be a component of $T$.


Lemma
For any connected set $U$ then:
$U \cap C \ne \O$ if and only if $U \ne \O$ and $U \subseteq C$
$\Box$

Then:














\(\ds C\)

\(=\)







\(\ds C \cap S\)





Intersection with Subset is Subset














\(\ds \)

\(=\)







\(\ds C \cap \bigcup \set { U \subseteq S : U \in \tau \text { and } U \text { is connected} }\)




















\(\ds \)

\(=\)







\(\ds \bigcup \set {C \cap U : U \in \tau \text { and } U \text { is connected} }\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds \bigcup \set {C \cap U : U \in \tau, U \cap C \ne \empty \text { and } U \text { is connected} }\)





Union with Empty Set














\(\ds \)

\(=\)







\(\ds \bigcup \set {U \subseteq C : U \in \tau \text { and } U \text { is connected} }\)





Lemma




Hence $C$ is the union of open sets.
By definition of a topology then $C$ is an open set.
The result follows.
$\blacksquare$


Also see
Path Components are Open iff Union of Open Path-Connected Sets, an analogous result for path components




