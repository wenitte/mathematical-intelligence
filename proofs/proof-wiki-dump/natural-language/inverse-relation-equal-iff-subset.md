# 

Source: https://proofwiki.org/wiki/Inverse_Relation_Equal_iff_Subset



Theorem
Let $S$ and $T$ be sets. Let $\RR \subseteq S \times T$ be a relation.
If $\RR$ is a subset or superset of its inverse, then it equals its inverse.
That is, the following are equivalent:




\(\text {(1)}: \quad\)









\(\ds \RR\)

\(\subseteq\)







\(\ds \RR^{-1}\)










\(\text {(2)}: \quad\)









\(\ds \RR^{-1}\)

\(\subseteq\)







\(\ds \RR\)










\(\text {(3)}: \quad\)









\(\ds \RR\)

\(=\)







\(\ds \RR^{-1}\)











Proof
$(1)$ implies $(2)$
Suppose $\RR \subseteq \RR^{-1}$.
Then:














\(\ds \tuple {a, b}\)

\(\in\)







\(\ds \RR^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {b, a}\)

\(\in\)







\(\ds \RR\)





Definition of Inverse Relation








\(\ds \leadsto \ \ \)





\(\ds \tuple {b, a}\)

\(\in\)







\(\ds \RR^{-1}\)





Definition of Subset (as $\RR \subseteq \RR^{-1}$)








\(\ds \leadsto \ \ \)





\(\ds \tuple {a, b}\)

\(\in\)







\(\ds \RR\)





Definition of Inverse Relation



Hence $\RR^{-1} \subseteq \RR$.
$\Box$


$(2)$ implies $(1)$
Since $(1)$ implies $(2)$ was already established above, interpreting it on $\RR^{-1}$ yields:

$\RR^{-1} \subseteq \paren {\RR^{-1} }^{-1}$
By Inverse of Inverse Relation, $\paren {\RR^{-1} }^{-1} = \RR$.
Hence $(2)$ implies $(1)$.
$\Box$


$(3)$ if and only if $(1)$ and $(2)$
This is precisely the definition of set equality.
$\blacksquare$





