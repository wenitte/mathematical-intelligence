# 

Source: https://proofwiki.org/wiki/Preimage_of_Singleton

Theorem
Let $\RR$ be a relation.
Let $\map {\RR^{-1} } t$ denote the preimage of $t$ under $\RR$.
Let $\RR^{-1} \sqbrk {\set t}$ denote the preimage of $\set t$ under $\RR$.

Then:

$\RR^{-1} \sqbrk {\set t} = \map {\RR^{-1} } t$


Proof













\(\ds \map {\RR^{-1} } t\)

\(=\)







\(\ds \set {s: \paren {s, t} \in \RR}\)





Definition of Preimage of Element under Relation














\(\ds \)

\(=\)







\(\ds \set {s: \exists y: \paren {y = t \land \tuple {s, y} \in \RR} }\)





Equality implies Substitution














\(\ds \)

\(=\)







\(\ds \set {s: \exists y \in \set t: \tuple {s, y} \in \RR}\)





Definition of Singleton














\(\ds \)

\(=\)







\(\ds \RR^{-1} \sqbrk {\set t}\)





Definition of Preimage of Subset under Relation



$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 6.19$




