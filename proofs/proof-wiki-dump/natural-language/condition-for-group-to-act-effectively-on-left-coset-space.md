# 

Source: https://proofwiki.org/wiki/Condition_for_Group_to_Act_Effectively_on_Left_Coset_Space

Theorem
Let $G$ be a group whose identity is $e$.
Let $H$ be a subgroup of $G$.

Then $G$ acts effectively on the left coset space $G / H$ if and only if:

$\ds \bigcap_{a \mathop \in G} H^a = \set e$
where $H^a$ denotes the conjugate of $H$ by $a$.


Proof
$G$ acts effectively on the left coset space $G / H$ if and only if $a H \mapsto g a H$ is faithful, if and only if:










\(\ds \forall g \in G: \forall a H \in G / H: \, \)



\(\ds g a H = a H\)

\(\implies\)







\(\ds g = e\)





Definition of Faithful Group Action








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall g \in G: \forall a \in G: \, \)



\(\ds a^{-1} g a \in H\)

\(\implies\)







\(\ds g = e\)





Left Cosets are Equal iff Product with Inverse in Subgroup








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall g \in G: \forall a \in G: \, \)



\(\ds g \in a H a^{-1}\)

\(\implies\)







\(\ds g = e\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall g \in G: \forall a \in G: \, \)



\(\ds g \in H^a\)

\(\implies\)







\(\ds g = e\)





Definition of Conjugate of Group Subset








\(\ds \leadstoandfrom \ \ \)





\(\ds \bigcap_{a \mathop \in G} H^a\)

\(=\)







\(\ds \set e\)





Definition of Intersection of Family



$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Sylow Theorems: $\S 53 \delta$




