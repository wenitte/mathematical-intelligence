# 

Source: https://proofwiki.org/wiki/Direct_Image_Mapping_of_Domain_is_Image_Set_of_Relation

Theorem
Let $S$ and $T$ be sets.
Let $\powerset S$ and $\powerset T$ be their power sets.
Let $\RR \subseteq S \times T$ be a relation on $S \times T$.
Let $\RR^\to: \powerset S \to \powerset T$ be the direct image mapping of $\RR$:

$\forall X \in \powerset S: \map {\RR^\to} X = \begin {cases} \set {t \in T: \exists s \in X: \tuple {x, t} \in \RR} & : X \ne \O \\ \O & : X = \O \end {cases}$

Then:

$\map {\RR^\to} {\Dom \RR} = \Img \RR$
where:

$\Dom \RR$ is the domain of $\RR$
$\Img \RR$ is the image set of $\RR$.


Proof













\(\ds y\)

\(\in\)







\(\ds \map {\RR^\to} {\Dom \RR}\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \exists x \in S: \, \)



\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR\)





Definition of Direct Image Mapping of Mapping








\(\ds \leadstoandfrom \ \ \)





\(\ds y\)

\(\in\)







\(\ds \Img \RR\)





Definition of Image Set of Relation



$\blacksquare$





