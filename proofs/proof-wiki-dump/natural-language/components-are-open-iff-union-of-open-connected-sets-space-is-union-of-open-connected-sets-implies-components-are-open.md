# 

Source: https://proofwiki.org/wiki/Components_are_Open_iff_Union_of_Open_Connected_Sets/Space_is_Union_of_Open_Connected_Sets_implies_Components_are_Open

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $S$ be a union of open connected sets of $T$.

Then:

The components of $T$ are open sets.


Proof
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





