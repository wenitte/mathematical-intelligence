# 

Source: https://proofwiki.org/wiki/Inverse_Image_under_Embedding_of_Image_under_Relation_of_Image_of_Point


It has been suggested that this page be renamed.To discuss this page in more detail, feel free to use the talk page.
Theorem
Let $S$ and $T$ be sets.
Let $\RR_S$ and $\RR_t$ be relations on $S$ and $T$, respectively.
Let $\phi: S \to T$ be a mapping with the property that:

$\forall p, q \in S: \paren {p \mathrel {\RR_S} q \iff \map \phi p \mathrel {\RR_T} \map \phi q}$

Then for each $p \in S$:

$\map {\RR_S} p = \phi^{-1} \sqbrk {\map {\RR_T} {\map \phi p} }$


Proof
Let $p \in S$.














\(\ds x\)

\(\in\)







\(\ds \map {\RR_S} p\)














\(\ds \leadstoandfrom \ \ \)





\(\ds p\)

\(\mathrel {\RR_S}\)







\(\ds x\)





Definition of Image of $p$ under $\RR_S$








\(\ds \leadstoandfrom \ \ \)





\(\ds \map \phi p\)

\(\mathrel {\RR_T}\)







\(\ds \map \phi x\)





by hypothesis








\(\ds \leadstoandfrom \ \ \)





\(\ds \map \phi x\)

\(\in\)







\(\ds \map {\RR_T} {\map \phi p}\)





Definition of the image of $\map \phi x$ under $\RR_T$








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds \phi^{-1} \sqbrk {\map {\RR_T} {\map \phi p} }\)





Definition of inverse image



Thus by definition of set equality:

$\map {\RR_S} p = \phi^{-1} \sqbrk {\map {\RR_T} {\map \phi p} }$
$\blacksquare$





