# 

Source: https://proofwiki.org/wiki/Identity_of_Group_is_in_Center

Theorem
Let $G$ be a group.
Let $e$ be the identity of $G$.

Then $e$ is in the center of $G$:

$e \in \map Z G$


Proof
From Center is Intersection of Centralizers:

$\ds \map Z G = \bigcap_{g \mathop \in G} \map {C_G} g$
where $\map {C_G} g$ denotes the centralizer of $g$.
From Centralizer of Group Element is Subgroup, each of $\map {C_G} g$ is a subgroup of $G$.
From Identity of Subgroup:

$\forall g \in G: e \in \map {C_G} g$
Hence by definition of set intersection:

$e \in \ds \bigcap_{g \mathop \in G} \map {C_G} g$
whence the result.
$\blacksquare$





