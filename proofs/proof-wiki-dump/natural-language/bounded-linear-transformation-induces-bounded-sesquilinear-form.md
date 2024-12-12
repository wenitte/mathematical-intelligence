# 

Source: https://proofwiki.org/wiki/Bounded_Linear_Transformation_Induces_Bounded_Sesquilinear_Form



Theorem
Let $\Bbb F$ be a subfield of $\C$. 
Let $\struct {V, \innerprod \cdot \cdot_V}$ and $\struct {U, \innerprod \cdot \cdot_U}$ be inner product spaces over $\Bbb F$. 
Let $A : V \to U$ and $B : U \to V$ be bounded linear transformations.

Let $u, v: V \times U \to \C$ be defined by:

$\map u {h, k} := \innerprod {Ah} k_U$
$\map v {h, k} := \innerprod h {Bk}_V$

Then $u$ and $v$ are bounded sesquilinear forms.


Proof
We first show that $u$ and $v$ are sesquilinear, and then that they are bounded. 
Let $\alpha \in \mathbb F$ and $h_1, h_2 \in V$ and $k \in U$. 
We have: 














\(\ds \map u {\alpha h_1 + h_2, k}\)

\(=\)







\(\ds \innerprod {\map A {\alpha h_1 + h_2} } k_U\)




















\(\ds \)

\(=\)







\(\ds \innerprod {\alpha A h_1 + A h_2} k_U\)





Definition of Linear Transformation














\(\ds \)

\(=\)







\(\ds \alpha \innerprod {A h_1} k_U + \innerprod {A h_2} k_U\)





Inner Product is Sesquilinear














\(\ds \)

\(=\)







\(\ds \alpha \map u {h_1, k} + \map u {h_2, k}\)









and:














\(\ds \map v {\alpha h_1 + h_2, k}\)

\(=\)







\(\ds \innerprod {\alpha h_1 + h_2} {B k}_V\)




















\(\ds \)

\(=\)







\(\ds \alpha \innerprod {h_1} {B k}_V + \innerprod {h_2} {B k}_V\)





Inner Product is Sesquilinear














\(\ds \)

\(=\)







\(\ds \alpha \map v {h_1, k} + \map v {h_2, k}\)









Now, let $h \in V$ and $k_1, k_2 \in U$. 
We have: 














\(\ds \map u {h, \alpha k_1 + k_2}\)

\(=\)







\(\ds \innerprod {A h} {\alpha k_1 + k_2}_U\)




















\(\ds \)

\(=\)







\(\ds \overline \alpha \innerprod {A h} {k_1}_U + \innerprod {A h} {k_2}_U\)





Inner Product is Sesquilinear














\(\ds \)

\(=\)







\(\ds \overline \alpha \map u {h, k_1} + \map u {h, k_2}\)









and:














\(\ds \map v {h, \alpha k_1 + k_2}\)

\(=\)







\(\ds \innerprod h {\map A {\alpha k_1 + k_2} }_V\)




















\(\ds \)

\(=\)







\(\ds \innerprod h {\alpha A k_1 + A k_2}_V\)





Definition of Linear Transformation














\(\ds \)

\(=\)







\(\ds \overline \alpha \innerprod h {A k_1}_V + \innerprod h {A k_2}_V\)





Inner Product is Sesquilinear














\(\ds \)

\(=\)







\(\ds \overline \alpha \map v {h, k_1} + \map v {h, k_2}\)









So $u$ and $v$ are both sesquilinear. 

It remains to show that they are bounded.
Let $\norm \cdot_V$ be the inner product norm of $V$.
Let $\norm \cdot_U$ be the inner product norm of $U$.

Let $\norm A$ denote the norm on $A$.
We have that $A$ is a bounded linear transformation.
From Norm on Bounded Linear Transformation is Finite:

$\norm A$ is finite.

Similarly, since $B$ is a bounded linear transformations, we have that:

$\norm B$ is finite.
We then have, for all $h \in V$ and $k \in U$: 














\(\ds \size {\map u {h, k} }\)

\(=\)







\(\ds \size {\innerprod {A h} k_U}\)




















\(\ds \)

\(\le\)







\(\ds \norm {A h}_U \norm k_U\)





Cauchy-Bunyakovsky-Schwarz Inequality for Inner Product Spaces














\(\ds \)

\(\le\)







\(\ds \norm A \norm h_V \norm k_U\)





Fundamental Property of Norm on Bounded Linear Transformation



so $u$ is bounded.
Similarly:














\(\ds \size {\map v {h, k} }\)

\(=\)







\(\ds \size {\innerprod h {B k}_V}\)




















\(\ds \)

\(\le\)







\(\ds \norm h_V \size {B k}_V\)





Cauchy-Bunyakovsky-Schwarz Inequality for Inner Product Spaces














\(\ds \)

\(\le\)







\(\ds \norm B \norm h_V \norm k_U\)





Fundamental Property of Norm on Bounded Linear Transformation



so $v$ is also bounded.
$\blacksquare$


Also see
Classification of Bounded Sesquilinear Forms, which states that all sesquilinear forms are of this type.


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\S \text {II}.2$




