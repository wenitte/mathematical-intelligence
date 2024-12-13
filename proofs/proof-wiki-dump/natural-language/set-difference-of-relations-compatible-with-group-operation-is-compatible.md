# 

Source: https://proofwiki.org/wiki/Set_Difference_of_Relations_Compatible_with_Group_Operation_is_Compatible

Theorem
Let $\struct {G, \circ}$ be a group.
Let $\RR, \QQ$ be relations on $G$ which are compatible with $\circ$.

Then the difference $\RR \setminus \QQ$ is compatible with $\circ$.


Proof
By Complement of Relation Compatible with Group is Compatible, $\relcomp {G \times G} \QQ$ is compatible with $\circ$.
Thus by Intersection of Relations Compatible with Operation is Compatible, $\RR \cap \relcomp {G \times G} \QQ$ is compatible with $\circ$.
But:

$\RR \cap \relcomp {G \times G} \QQ = \RR \setminus \QQ$
so the theorem holds.
$\blacksquare$





