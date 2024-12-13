# 

Source: https://proofwiki.org/wiki/Image_of_Preimage_under_Relation_is_Subset

Theorem
Let $\RR \subseteq S \times T$ be a relation.
Then:

$B \subseteq T \implies \paren {\RR \circ \RR^{-1} } \sqbrk B \subseteq B$
where:

$\RR \sqbrk B$ denotes the image of $B$ under $\RR$
$\RR^{-1} \sqbrk B$ denotes the preimage of $B$ under $\RR$
$\RR \circ \RR^{-1}$ denotes composition of $\RR$ and $\RR^{-1}$.


Proof
Let $B \subseteq T$.
Then:














\(\ds y\)

\(\in\)







\(\ds \paren {\RR \circ \RR^{-1} } \sqbrk B\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds \RR \sqbrk {\RR^{-1} \sqbrk B}\)





Definition of Composition of Relations








\(\ds \leadsto \ \ \)

\(\ds \exists x \in \RR^{-1} \sqbrk B: \, \)



\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds B\)









So by definition of subset:

$B \subseteq T \implies \paren {\RR \circ \RR^{-1} }\sqbrk B \subseteq B$
$\blacksquare$


Also see
Subset of Domain is Subset of Preimage of Image




