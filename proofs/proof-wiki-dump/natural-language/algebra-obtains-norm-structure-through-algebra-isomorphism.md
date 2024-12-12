# 

Source: https://proofwiki.org/wiki/Algebra_obtains_Norm_Structure_through_Algebra_Isomorphism

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $A$ and $B$ be algebras over $\GF$.
Let $\norm {\, \cdot \,}_B$ be an algebra norm on $B$.
Let $\phi : A \to B$ be an algebra isomorphism.
Define $\norm {\, \cdot \,}_A : A \to \R$ by:

$\norm a_A = \norm {\map \phi a}_B$

Then $\norm {\, \cdot \,}_A$ is an algebra norm on $A$.


Proof
From Vector Space obtains Norm Structure through Linear Isomorphism:

$\norm {\, \cdot \,}$ is a vector space norm on $A$.
We want to show that:

$\norm {a b}_A \le \norm a_A \norm b_A$
for each $a, b \in A$.
Let $a, b \in A$.
We have:














\(\ds \norm {a b}_A\)

\(=\)







\(\ds \norm {\map \phi {a b} }_B\)




















\(\ds \)

\(=\)







\(\ds \norm {\map \phi a \map \phi b}_B\)





Definition of Algebra Homomorphism














\(\ds \)

\(\le\)







\(\ds \norm {\map \phi a}_B \norm {\map \phi b}_B\)





Definition of Norm on Algebra














\(\ds \)

\(=\)







\(\ds \norm a_A \norm b_A\)









So $\norm {\, \cdot \,}_A$ is an algebra norm.
$\blacksquare$





