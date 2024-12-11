# 

Source: https://proofwiki.org/wiki/*-Algebra_obtains_Banach_*-Algebra_Structure_through_*-Algebra_Isomorphism

Theorem
Let $\struct {A, \ast}$ be a $\ast$-algebra over $\C$.
Let $\struct {B, \square, \norm {\, \cdot \,}_B}$ be a Banach $\ast$-algebra.
Let $\phi : A \to B$ be a $\ast$-algebra isomorphism. 
Define $\norm {\, \cdot \,}_A : A \to \R$ by:

$\norm a_A = \norm {\map \phi a}_B$

Then $\struct {A, \ast, \norm {\, \cdot \,}_A}$ is a Banach $\ast$-algebra.
Further if $\struct {B, \square, \norm {\, \cdot \,}_B}$ is a $\text C^\ast$-algebra, then so is $\struct {A, \ast, \norm {\, \cdot \,}_A}$.


Proof
From Algebra obtains Norm Structure through Algebra Isomorphism:

$\norm {\, \cdot \,}_A$ is an algebra norm.
We want to show that:

$\norm {a^\ast}_A = \norm a_A$
for each $a \in A$. 
Let $a \in A$.
We have:














\(\ds \norm {a^\ast}_A\)

\(=\)







\(\ds \norm {\map \phi {a^\ast} }_B\)




















\(\ds \)

\(=\)







\(\ds \norm {\map \phi a^\square}_B\)





Definition of *-Algebra Homomorphism














\(\ds \)

\(=\)







\(\ds \norm {\map \phi a}_B\)





Definition of Banach *-Algebra














\(\ds \)

\(=\)







\(\ds \norm a_A\)









By definition, $\phi : A \to B$ is an isometric isomorphism.
Hence from Inverse of Isometric Isomorphism between Normed Vector Spaces is Isometric Isomorphism, $\phi^{-1} : B \to A$ is an isometric isomorphism.
From Metric Space Completeness is Preserved by Isometry, the completeness of $B$ implies the completeness of $A$.
So $\struct {A, \norm {\, \cdot \,}_A}$ is a Banach algebra.
Hence $\struct {A, \ast, \norm {\, \cdot \,}_A}$ is a Banach $\ast$-algebra.

Now suppose that $\struct {B, \square, \norm {\, \cdot \,}_B}$ is a $\ast$-algebra so that:

$\norm {b b^\square}_B = \norm b^2_B$
for each $b \in B$.
We want to show that:

$\norm {a a^\ast}_A = \norm a^2_A$
for each $a \in A$.
We have:














\(\ds \norm {a a^\ast}_A\)

\(=\)







\(\ds \norm {\map \phi {a a^\ast} }_B\)




















\(\ds \)

\(=\)







\(\ds \norm {\map \phi a \map \phi {a^\ast} }_B\)





Definition of Algebra Homomorphism














\(\ds \)

\(=\)







\(\ds \norm {\map \phi a \map \phi a^\square}_B\)





Definition of *-Algebra Homomorphism














\(\ds \)

\(=\)







\(\ds \norm {\map \phi a}_B^2\)




















\(\ds \)

\(=\)







\(\ds \norm a_A^2\)









$\blacksquare$





