# 

Source: https://proofwiki.org/wiki/Direct_Product_of_C*-Algebras_is_C*-Algebra

Theorem
Let $\struct {A, \square, \norm {\, \cdot \,}_A}$ and $\struct {B, \diamond, \norm {\, \cdot \,}_B}$ be $\text C^\ast$-algebras.
Let $A \times B$ be the direct product of $A$ and $B$.
Define $\ast : A \times B \to A \times B$ by:

$\tuple {a, b}^\ast = \tuple {a^\square, b^\diamond}$
for each $\tuple {a, b} \in A \times B$.
Let $\norm {\, \cdot \,}_{A \times B}$ be the direct product norm on $A \times B$. 

Then $\struct {A \times B, \ast, \norm {\, \cdot \,}_{A \times B} }$ is a $\text C^\ast$-algebra.


Proof
From Direct Product of Normed Algebras is Normed Algebra with Direct Product Norm, $\struct {A \times B, \norm {\, \cdot \,}_{A \times B} }$ is a normed algebra. 
From Direct Product of Banach Spaces is Banach Space, $\struct {A \times B, \norm {\, \cdot \,}_{A \times B} }$ is a Banach algebra. 
From Direct Product of *-Algebras is *-Algebra, $\struct  {A \times B, \ast}$ is a $\ast$-algebra.
It remains to show $(\text C^\ast 5)$, that:

$\norm {\tuple {a, b} \tuple {a, b}^\ast}_{A \times B} = \norm {\tuple {a, b} }^2_{A \times B}$
for each $\tuple {a, b} \times A \times B$. 
We have:














\(\ds \norm {\tuple {a, b} \tuple {a, b}^\ast}_{A \times B}\)

\(=\)







\(\ds \norm {\tuple {a, b} \tuple {a^\square, b^\diamond} }_{A \times B}\)




















\(\ds \)

\(=\)







\(\ds \norm {\tuple {a a^\square, b b^\diamond} }_{A \times B}\)




















\(\ds \)

\(=\)







\(\ds \max \set {\norm {a a^\square}_A, \norm {b b^\diamond}_B}\)




















\(\ds \)

\(=\)







\(\ds \max \set {\norm a^2_A, \norm b^2_B}\)





$(\text C^\ast 5)$ in Definition of C*-Algebra














\(\ds \)

\(=\)







\(\ds \max \set {\norm a_A, \norm b_B}^2\)





since $\norm a_A, \norm b_B \ge 0$














\(\ds \)

\(=\)







\(\ds \norm {\tuple {a, b} }^2_{A \times B}\)









$\blacksquare$





