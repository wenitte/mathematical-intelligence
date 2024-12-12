# 

Source: https://proofwiki.org/wiki/Direct_Product_of_Normed_Algebras_is_Normed_Algebra_with_Direct_Product_Norm

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {A, \norm {\, \cdot \,}_A}$ and $\struct {B, \norm {\, \cdot \,}_B}$ be normed algebras over $\GF$.
Let $A \times B$ be the direct product of $A$ and $B$.
Let $\norm {\, \cdot \,}_{A \times B}$ be the direct product norm on $A \times B$.

Then $\struct {A \times B, \norm {\, \cdot \,}_{A \times B} }$ is a normed algebra. 


Proof
From Direct Product Norm is Norm, $\struct {A \times B, \norm {\, \cdot \,}_{A \times B} }$ is a normed vector space.
We just need to show that $\norm {\, \cdot \,}_{A \times B}$ is an algebra norm.
Let $\tuple {a, b}, \tuple {a', b'} \in A \times B$. 
We hae:

$\norm {\tuple {a, b} \tuple {a', b'} }_{A \times B} = \norm {\tuple {a a', b b'} }_{A \times B} = \max \set {\norm {a a'}_A, \norm {b b'}_B}$
Since $\norm {\, \cdot \,}$ is an algebra norm, we have:

$\norm {a a'}_A \le \norm a_A \norm {a'}_A \le \max \set {\norm a_A, \norm b_B} \max \set {\norm {a'}, \norm {b'}_B}$
and:

$\norm {b b'}_B \le \norm b_B \norm {b'}_B \le \max \set {\norm a_A, \norm b_B} \max \set {\norm {a'}, \norm {b'}_B}$
Hence we obtain:

$\max \set {\norm {a a'}_A, \norm {b b'}_B} \le \max \set {\norm a_A, \norm b_B} \max \set {\norm {a'}, \norm {b'}_B}$
that is:

$\norm {\tuple {a a', b b'} }_{A \times B} \le \norm {\tuple {a, b} }_{A \times B} \norm {\tuple {a', b'} }_{A \times B}$
$\blacksquare$





