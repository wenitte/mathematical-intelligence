# 

Source: https://proofwiki.org/wiki/Preimage_of_Image_under_Left-Total_Relation_is_Superset

Theorem
Let $\RR \subseteq S \times T$ be a left-total relation.
Then:

$A \subseteq S \implies A \subseteq \paren {\RR^{-1} \circ \RR} \sqbrk A$
where:

$\RR \sqbrk A$ denotes the image of $A$ under $\RR$
$\RR^{-1} \sqbrk A$ denotes the preimage of $A$ under $\RR$
$\RR^{-1} \circ \RR$ denotes composition of $\RR^{-1}$ and $\RR$.

This can be expressed in the language and notation of direct image mappings and inverse image mappings as:

$\forall A \in \powerset S: A \subseteq \map {\paren {\RR^\gets \circ \RR^\to} } A$


Proof
Suppose $A \subseteq S$.
We have:














\(\ds x\)

\(\in\)







\(\ds A\)














\(\ds \leadsto \ \ \)





\(\ds \set x\)

\(\subseteq\)







\(\ds A\)





Singleton of Element is Subset








\(\ds \leadsto \ \ \)





\(\ds \RR \sqbrk {\set x}\)

\(\subseteq\)







\(\ds \RR \sqbrk A\)





Image of Subset under Relation is Subset of Image








\(\ds \leadsto \ \ \)





\(\ds \RR^{-1} \sqbrk {\RR \sqbrk {\set x} }\)

\(\subseteq\)







\(\ds \RR^{-1} \sqbrk {\RR \sqbrk A}\)





Image of Subset under Relation is Subset of Image: Corollary $1$




Then we have that $\RR$ is a left-total relation.
Thus:

$\exists t \in T: \tuple {x, t} \in \RR$
Hence by definition of inverse relation:

$\exists t \in T: \tuple {t, x} \in \RR^{-1}$

Hence:








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \RR^{-1} \sqbrk {\RR \sqbrk A}\)





Definition of Relation








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \paren {\RR^{-1} \circ \RR} \sqbrk A\)





Definition of Composition of Relations



So by definition of subset:

$A \subseteq S \implies A \subseteq \paren {\RR^{-1} \circ \RR} \sqbrk A$
$\blacksquare$


Also see
Subset of Domain is Subset of Preimage of Image




