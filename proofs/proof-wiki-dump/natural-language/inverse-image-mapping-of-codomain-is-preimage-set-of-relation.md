# 

Source: https://proofwiki.org/wiki/Inverse_Image_Mapping_of_Codomain_is_Preimage_Set_of_Relation

Theorem
Let $S$ and $T$ be sets.
Let $\powerset S$ and $\powerset T$ be their power sets.
Let $\RR \subseteq S \times T$ be a relation on $S \times T$.
Let $\RR^\gets: \powerset T \to \powerset S$ be the inverse image mapping of $\RR$:

$\forall X \in \powerset S: \map {\RR^\to} X = \begin {cases} \set {t \in T: \exists s \in X: \tuple {x, t} \in \RR} & : X \ne \O \\ \O & : X = \O \end {cases}$

Then:

$\map {\RR^\gets} T = \Preimg \RR$
where $\Preimg \RR$ is the preimage of $\RR$.


Proof













\(\ds x\)

\(\in\)







\(\ds \map {\RR^\gets} T\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \exists x \in S: \, \)



\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR\)





Definition of Inverse Image Mapping of Mapping








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds \Preimg \RR\)





Definition of Preimage of Relation



$\blacksquare$





