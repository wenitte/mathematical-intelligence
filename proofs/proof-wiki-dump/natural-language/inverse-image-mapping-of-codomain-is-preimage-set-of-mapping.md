# 

Source: https://proofwiki.org/wiki/Inverse_Image_Mapping_of_Codomain_is_Preimage_Set_of_Mapping

Theorem
Let $S$ and $T$ be sets.
Let $\powerset S$ and $\powerset T$ be their power sets.
Let $f \subseteq S \times T$ be a mapping from $S$ to $T$.
Let $f^\gets: \powerset T \to \powerset S$ be the inverse image mapping of $f$:

$\forall Y \in \powerset T: \map {f^\gets} Y = \begin {cases} \set {s \in S: \exists t \in Y: \map f s = t} & : \Img f \cap Y \ne \O \\ \O & : \Img f \cap Y = \O \end {cases}$

Then:

$\map {f^\gets} T = \Preimg f$
where $\Preimg f$ is the preimage set of $f$.


Proof













\(\ds x\)

\(\in\)







\(\ds \map {f^\gets} T\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \exists y \in T: \, \)



\(\ds \map f x\)

\(=\)







\(\ds y\)





Definition of Inverse Image Mapping of Mapping








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds \Preimg f\)





Definition of Preimage Set of Mapping



$\blacksquare$





