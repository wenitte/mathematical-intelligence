# 

Source: https://proofwiki.org/wiki/Direct_Product_of_Central_Subgroups

Theorem
Let $G$ and $H$ be groups.
Let $Z$ and $W$ be central subgroups of $G$ and $H$ respectively.

Then $Z \times W$ is a central subgroup of $G \times H$.


Proof
Let $\tuple {z, w} \in Z \times W$.
Let $\tuple {x, y} \in G \times H$.
Then:














\(\ds \tuple {x, y} \tuple {z, w}\)

\(=\)







\(\ds \tuple {x z, y w}\)





Definition of Group Direct Product














\(\ds \)

\(=\)







\(\ds \tuple {z x, w y}\)





Definition of Central Subgroup














\(\ds \)

\(=\)







\(\ds \tuple {z, w} \tuple {x, y}\)





Definition of Group Direct Product



$\tuple {x, y}$ is arbitrary.
Thus $\tuple {z, w}$ commutes with all elements of $G \times H$.
Hence $\tuple {z, w}$ is in the center of $G \times H$
That is, $Z \times W$ is a subgroup of the center $G \times H$.
The result follows by definition of central subgroup.
$\blacksquare$





