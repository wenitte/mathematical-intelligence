# 

Source: https://proofwiki.org/wiki/Path_Components_are_Open_iff_Union_of_Open_Path-Connected_Sets



Theorem
Let $T = \struct {S, \tau}$ be a topological space.

The following statements are equivalent:

$(1): \quad$ The path components of $T$ are open.
$(2): \quad S$ is a union of open path-connected sets of $T$.


Proof
Condition (1) implies Condition (2)
Let the path components of $T$ be open sets.
By definition, the path components of $T$ are a partition of $S$.
Hence $S$ is the union of the open path components of $T$.
Since a path component is a maximal path-connected set by definition, then $S$ is a union of open path-connected sets of $T$
$\Box$


Condition (2) implies Condition (1)
Let $S = \ds \bigcup \set {U \subseteq S : U \in \tau \text { and } U \text { is path-connected} }$.
Let $C$ be a path component of $T$.


Lemma
Let $U$ be a path-connected set of $T$.
Then:

$U \cap C \ne \O$ if and only if $U \ne \O$ and $U \subseteq C$
$\Box$

Then:














\(\ds C\)

\(=\)







\(\ds C \cap S\)





Intersection with Subset is Subset














\(\ds \)

\(=\)







\(\ds C \cap \bigcup \set {U \subseteq S : U \in \tau \text { and } U \text { is path-connected} }\)




















\(\ds \)

\(=\)







\(\ds \bigcup \set {C \cap U : U \in \tau \text { and } U \text { is path-connected} }\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds \bigcup \set {C \cap U : U \in \tau, U \cap C \ne \O \text { and } U \text { is path-connected} }\)





Union with Empty Set














\(\ds \)

\(=\)







\(\ds \bigcup \set {U \subseteq C : U \in \tau, U \ne \O \text { and } U \text { is path-connected} }\)





Lemma




Hence $C$ is the union of open sets.
By definition of a topology then $C$ is an open set.
The result follows.
$\blacksquare$


Also see
Components are Open iff Union of Open Connected Sets, an analogous result for components




