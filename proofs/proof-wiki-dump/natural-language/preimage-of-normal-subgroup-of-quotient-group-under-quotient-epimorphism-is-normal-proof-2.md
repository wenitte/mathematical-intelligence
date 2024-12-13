# 

Source: https://proofwiki.org/wiki/Preimage_of_Normal_Subgroup_of_Quotient_Group_under_Quotient_Epimorphism_is_Normal/Proof_2

Theorem
Let $G$ be a group.
Let $H \lhd G$ where $\lhd$ denotes that $H$ is a normal subgroup of $G$.
Let $K \lhd G / H$.
Let $L = q_H^{-1} \sqbrk K$, where:

$q_H: G \to G / H$ is the quotient epimorphism from $G$ to the quotient group $G / H$
$q_H^{-1} \sqbrk K$ is the preimage of $K$ under $q_H$.

Then:

$L \lhd G$
and there exists a group isomorphism $\phi: \paren {G / H} / K \to G / L$ defined as:

$\phi \circ q_K \circ q_H = q_L$


Proof
Let $e$ be the identity element of $G$.

Let $\RR$ be the congruence relation defined by $H$ in $G$.
Let $\SS$ be the congruence relation defined by $K$ in $G / H$.
Let $\TT$ be the relation on $G$ defined as:

$\forall x, y \in G: x \mathrel \TT y \iff x H \mathrel \SS y H$

From Equivalence Relation induced by Congruence Relation on Quotient Structure is Congruence:

$\TT$ is a congruence relation on $G$
Hence from Congruence Relation on Group induces Normal Subgroup:

the equivalence class under $\TT$ of $e$, that is $\eqclass e \TT$, is a normal subgroup of $G$.

Then we have:














\(\ds L\)

\(=\)







\(\ds q_H^{-1} \sqbrk K\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \set {x \in G: \map {q_H} x \in K}\)





Definition of Preimage of Subset under Mapping














\(\ds \)

\(=\)







\(\ds \set {x \in G: x H \in K}\)





Definition of Quotient Mapping




Recall that $H$ is the identity of $G / H$.
Then as $K$ is a subgroup of $G / H$:

$H \in K$
from Identity of Subgroup.

Then:














\(\ds x\)

\(\in\)







\(\ds \eqclass e \TT\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\TT\)







\(\ds e\)





Definition of Equivalence Class








\(\ds \leadstoandfrom \ \ \)





\(\ds x H\)

\(\SS\)







\(\ds e H\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x H\)

\(\in\)







\(\ds K\)





Definition of $\SS$, and a priori $H \in K$




That is:

$\eqclass e \TT = L$
and so $L$ is a normal subgroup of $G$ a priori.
$\Box$

We can identify:














\(\ds q_\RR\)

\(\equiv\)







\(\ds q_H\)





as $\RR$ is the congruence relation defined by $H$ in $G$














\(\ds q_\SS\)

\(\equiv\)







\(\ds q_K\)





as $\SS$ is the congruence relation defined by $K$ in $G / H$














\(\ds q_\TT\)

\(\equiv\)







\(\ds q_L\)





Congruence Relation on Group induces Normal Subgroup



From Equivalence Relation induced by Congruence Relation on Quotient Structure is Congruence we have:

there exists a unique isomorphism $\phi$ from $\paren {G / H} / K$ to $G / L$ which satisfies:
$\phi \circ q_\SS \circ q_\RR = q_\TT$

Thus using the above identfications:

$\phi \circ q_K \circ q_H = q_L$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.17 \ \text {(b)}$




