# 

Source: https://proofwiki.org/wiki/Orthogonal_Projection_onto_Closed_Linear_Span

Theorem
Let $H$ be a Hilbert space with inner product $\innerprod \cdot \cdot$ and inner product norm $\norm \cdot$. 
Let $E = \set {e_1, \ldots, e_n}$ be an orthonormal subset of $H$.
Let $M = \vee E$, where $\vee E$ is the closed linear span of $E$. 
Let $P$ be the orthogonal projection onto $M$.

Then:

$\forall h \in H: P h = \ds \sum_{k \mathop = 1}^n \innerprod h {e_k} e_k$


Proof
Let $h \in H$. 
Let: 

$\ds u = \sum_{k \mathop = 1}^n \innerprod h {e_k} e_k$
We have that:

$u \in \map \span E$
and from the definition of closed linear span:

$M = \paren {\map \span E}^-$
We therefore have, by the definition of closure: 

$u \in M$
Let $v = h - u$ 
We want to show that $v \in M^\bot$. 
From Intersection of Orthocomplements is Orthocomplement of Closed Linear Span, it suffices to show that: 

$v \in E^\bot$

Note that for each $l$ we have: 

$\innerprod v {e_l} = \innerprod h {e_l} - \innerprod u {e_l}$
since the inner product is linear in its first argument. 
We have: 














\(\ds \innerprod u {e_l}\)

\(=\)







\(\ds \innerprod {\sum_{k \mathop = 1}^n \innerprod h {e_k} e_k} {e_l}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \innerprod {\innerprod h {e_k} e_k} {e_l}\)





linearity of inner product in first argument














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \innerprod h {e_k} \innerprod {e_k} {e_l}\)





linearity of inner product in first argument














\(\ds \)

\(=\)







\(\ds \innerprod h {e_l} \innerprod {e_l} {e_l}\)





Definition of Orthonormal Subset














\(\ds \)

\(=\)







\(\ds \innerprod h {e_l} \norm {e_l}^2\)





Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds \innerprod h {e_l}\)





since $\norm {e_l} = 1$



so:

$\innerprod v {e_l} = 0$
That is: 

$v \in E^\bot$
so, by Intersection of Orthocomplements is Orthocomplement of Closed Linear Span, we have: 

$v \in M^\bot$

We can therefore decompose each $h \in H$ as: 

$h = u + v$
with $u \in M$ and $v \in M^\bot$. 
So we have: 














\(\ds P h\)

\(=\)







\(\ds \map P {u + v}\)




















\(\ds \)

\(=\)







\(\ds \map P u + \map P v\)





Orthogonal Projection is Linear Transformation














\(\ds \)

\(=\)







\(\ds v\)





Kernel of Orthogonal Projection, Fixed Points of Orthogonal Projection














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \innerprod h {e_k} e_k\)









for each $h \in H$. 
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 4.$ Orthonormal Sets of Vectors and Bases: Proposition $4.7$




