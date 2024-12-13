# 

Source: https://proofwiki.org/wiki/Path_Components_are_Open_iff_Union_of_Open_Path-Connected_Sets/Lemma_1



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $C$ be a path component of $T$.

Let $U$ be a path-connected set of $T$.
Then:

$U \cap C \ne \O$ if and only if $U \ne \O$ and $U \subseteq C$


Proof
Necessary Condition
Let $U \cap C \ne \O$.
From Union of Path-Connected Sets with Common Point is Path-Connected, $U \cup C$ is a path-connected set of $T$.
From Set is Subset of Union, $C \subseteq U \cup C$.
By definition of a path component, $C$ is a maximal path-connected set.
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





by hypothesis



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





by hypothesis



The result follows.
$\blacksquare$





