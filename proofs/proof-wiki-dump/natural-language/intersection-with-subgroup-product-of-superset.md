# 

Source: https://proofwiki.org/wiki/Intersection_with_Subgroup_Product_of_Superset



Theorem
Let $X, Y, Z$ be subgroups of a group $\struct {G, \circ}$.
Let $Y \subseteq X$.

Then:

$X \cap \paren {Y \circ Z} = Y \circ \paren {X \cap Z}$
where $Y \circ Z$ denotes subset product.


Proof
By definition of set equality, it suffices to prove:

$X \cap \paren {Y \circ Z} \subseteq Y \circ \paren {X \cap Z}$
and:

$Y \circ \paren {X \cap Z} \subseteq X \cap \paren {Y \circ Z}$


$X \cap \paren {Y \circ Z}$ is contained in $Y \circ \paren {X \cap Z}$
Let $s \in X \cap \paren {Y \circ Z}$.















\(\ds s\)

\(\in\)







\(\ds X \cap \paren {Y \circ Z}\)














\(\ds \leadsto \ \ \)





\(\ds s\)

\(\in\)







\(\ds X\)





Definition of Set Intersection












\(\, \ds \land \, \)

\(\ds s\)

\(\in\)







\(\ds Y \circ Z\)





Definition of Set Intersection








\(\ds \leadsto \ \ \)

\(\ds \exists y \in Y, z \in Z: \, \)



\(\ds s\)

\(=\)







\(\ds y \circ z\)





Definition of Subset Product




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds y^{-1} \circ s\)





Group has Latin Square Property




Then:














\(\ds Y\)

\(\subseteq\)







\(\ds X\)












\(\ds \leadsto \ \ \)







\(\ds y\)

\(\in\)







\(\ds X\)





Definition of Subset




So we have:














\(\ds y\)

\(\in\)







\(\ds X\)


















\(\, \ds \land \, \)

\(\ds s\)

\(\in\)







\(\ds X\)





Definition of Subset






\(\ds \leadsto \ \ \)







\(\ds y^{-1} \circ s\)

\(\in\)







\(\ds X\)





One-Step Subgroup Test






\(\ds \leadsto \ \ \)







\(\ds z\)

\(\in\)







\(\ds X\)





from $(1)$




Thus by definition of set intersection:

$z \in X \cap Z$
So:

$s = y \circ z \in Y \circ \paren {X \cap Z}$
By definition of subset:

$X \cap \paren {Y \circ Z} \subseteq Y \circ \paren {X \cap Z}$
$\Box$


$Y \circ \paren {X \cap Z}$ is contained in $X \cap \paren {Y \circ Z}$













\(\ds Y \circ X\)

\(\subseteq\)







\(\ds X \circ X\)





Subset Relation is Compatible with Subset Product




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds Y \circ X\)

\(\subseteq\)







\(\ds X\)





Product of Subgroup with Itself




Then:














\(\ds Y \circ \paren {X \cap Z}\)

\(\subseteq\)







\(\ds \paren {Y \circ X} \cap \paren {Y \circ Z}\)





Product of Subset with Intersection














\(\ds \)

\(\subseteq\)







\(\ds X \cap \paren {Y \circ Z}\)





from $(1)$



$\Box$

We have established that:

$x \in Y \circ \paren {X \cap Z} \iff x \in X \cap \paren {Y \circ Z}$
From the definition of set equality:

$Y \circ \paren {X \cap Z} = X \cap \paren {Y \circ Z}$
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 35 \theta$




