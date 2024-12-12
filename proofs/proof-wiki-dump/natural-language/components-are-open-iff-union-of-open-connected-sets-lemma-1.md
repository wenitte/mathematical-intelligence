# 

Source: https://proofwiki.org/wiki/Components_are_Open_iff_Union_of_Open_Connected_Sets/Lemma_1



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $C$ be a component of $T$.
Let $U$ be a connected set of $T$.
Then:

$U \cap C \ne \O$ if and only if $U \ne \O$ and $U \subseteq C$


Proof
Necessary Condition
Let $U \cap C \ne \O$.
From Union of Connected Sets with Common Point is Connected, $U \cup C$ is a connected set of $T$.
From Set is Subset of Union, $C \subseteq U \cup C$.
By definition of a component, $C$ is a maximal connected set.
Hence $C = U \cup C$.
From Union with Superset is Superset, $U \subseteq C$.
Then:














\(\ds U\)

\(=\)







\(\ds U \cap C\)





Intersection with Subset is Subset














\(\ds \)

\(\ne\)







\(\ds \O\)





Assumption



The result follows.
$\Box$

Sufficient Condition
Let $U \ne \O$ and $U \subseteq C$.
Then:














\(\ds U \cap C\)

\(=\)







\(\ds U\)





Intersection with Subset is Subset














\(\ds \)

\(\ne\)







\(\ds \O\)





Assumption



The result follows.
$\blacksquare$





