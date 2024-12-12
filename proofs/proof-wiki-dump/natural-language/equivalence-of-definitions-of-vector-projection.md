# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Vector_Projection



Theorem
The following definitions of the concept of Vector Projection are equivalent:

Definition 1
The (vector) projection of $\mathbf u$ onto $\mathbf v$, denoted $\proj_\mathbf v \mathbf u$, is the orthogonal projection of $\mathbf u$ onto a straight line which is parallel to $\mathbf v$.

Hence $\proj_\mathbf v \mathbf u$ is a like vector to $\mathbf v$ whose length is $\norm {\mathbf u} \cos \theta$, where:

$\norm {\mathbf u}$ is the magnitude of $\mathbf u$
$\cos \theta$ is the angle between $\mathbf u$ and $\mathbf v$.
Definition 2
The (vector) projection of $\mathbf u$ onto $\mathbf v$ is defined and denoted:

$\proj_\mathbf v \mathbf u = \dfrac {\mathbf u \cdot \mathbf v} {\norm {\mathbf v}^2} \mathbf v$
where:

$\cdot$ denotes the dot product
$\norm {\mathbf v}$ denotes the magnitude of $\mathbf v$.
Definition 3
The (vector) projection of $\mathbf u$ onto $\mathbf v$ is defined and denoted:

$\proj_\mathbf v \mathbf u = u_{\parallel \mathbf v} \mathbf {\hat v}$
where:

$u_{\parallel \mathbf v}$ denotes the scalar projection of $\mathbf u$ on $\mathbf v$
$\mathbf {\hat v}$ denotes the unit vector in the direction of $\mathbf v$.


Proof
$(2) \iff (3)$













\(\ds \norm {\mathbf u} \norm {\mathbf v} \cos \theta\)

\(=\)







\(\ds \mathbf u \cdot \mathbf v\)





Definition of Dot Product








\(\ds \leadsto \ \ \)





\(\ds \norm {\mathbf u} \cos \theta\)

\(=\)







\(\ds \dfrac {\mathbf u \cdot \mathbf v} {\norm {\mathbf v} }\)




















\(\ds \)

\(=\)







\(\ds u_{\parallel \mathbf v}\)





Definition 2 of Scalar Projection








\(\ds \leadsto \ \ \)





\(\ds u_{\parallel \mathbf v} \mathbf {\hat v}\)

\(=\)







\(\ds \dfrac {\mathbf u \cdot \mathbf v} {\norm {\mathbf v} } \mathbf {\hat v}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\mathbf u \cdot \mathbf v} {\norm {\mathbf v} } \dfrac {\mathbf v} {\norm {\mathbf v} }\)





Unit Vector in Direction of Vector














\(\ds \)

\(=\)







\(\ds \dfrac {\mathbf u \cdot \mathbf v} {\norm {\mathbf v}^2} \mathbf v\)









$\Box$


$(1) \iff (3)$
By definition $1$ of vector projection:

$\proj_\mathbf v \mathbf u$ is a like vector to $\mathbf v$ whose length is $\norm {\mathbf u} \cos \theta$
This is obtained by creating a vector quantity:

$\paren {\norm {\mathbf u} \cos \theta} \mathbf {\hat v}$
where $\mathbf {\hat v}$ is the unit vector in the direction of $\mathbf v$.
But by Definition 1 of Scalar Projection:

$u_{\parallel \mathbf v} = \norm {\mathbf u} \cos \theta$
$\blacksquare$





