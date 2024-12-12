# 

Source: https://proofwiki.org/wiki/Direct_Image_Mapping_of_Domain_is_Image_Set_of_Mapping

Theorem
Let $S$ and $T$ be sets.
Let $\powerset S$ and $\powerset T$ be their power sets.
Let $f \subseteq S \times T$ be a mapping from $S$ to $T$.
Let $f^\to: \powerset S \to \powerset T$ be the direct image mapping of $f$:

$\forall X \in \powerset S: \map {f^\to} X = \begin {cases} \set {t \in T: \exists s \in X: \map f s = t} & : X \ne \O \\ \O & : X = \O \end {cases}$

Then:

$\map {f^\to} S = \Img f$
where $\Img f$ is the image set of $f$.


Proof













\(\ds y\)

\(\in\)







\(\ds \map {f^\to} S\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \exists x \in S: \, \)



\(\ds \map f x\)

\(=\)







\(\ds y\)





Definition of Direct Image Mapping of Mapping








\(\ds \leadstoandfrom \ \ \)





\(\ds y\)

\(\in\)







\(\ds \Img f\)





Definition of Image Set of Mapping



$\blacksquare$





