# 

Source: https://proofwiki.org/wiki/Path_Components_are_Open_iff_Union_of_Open_Path-Connected_Sets/Space_is_Union_of_Open_Path-Connected_Sets_implies_Path_Components_are_Open

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $S$ be the union of open path-connected sets of $T$.

Then:

The path components of $T$ are open sets.


Proof
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





