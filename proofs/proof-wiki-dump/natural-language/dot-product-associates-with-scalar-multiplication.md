# 

Source: https://proofwiki.org/wiki/Dot_Product_Associates_with_Scalar_Multiplication



Theorem
Let $\mathbf u, \mathbf v$ be vectors in the real Euclidean space $\R^n$.
Let $c$ be a real scalar.

Then:

$\paren {c \mathbf u} \cdot \mathbf v = c \paren {\mathbf u \cdot \mathbf v}$


Proof 1













\(\ds \left({c \mathbf u}\right) \cdot \mathbf v\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \left({c u_i}\right) v_i\)





Definition of Dot Product














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n c \left({ u_i v_i }\right)\)





Real Multiplication is Associative














\(\ds \)

\(=\)







\(\ds c \sum_{i \mathop = 1}^n u_i v_i\)





Real Multiplication Distributes over Real Addition














\(\ds \)

\(=\)







\(\ds c \left({\mathbf u \cdot \mathbf v}\right)\)





Definition of Dot Product



$\blacksquare$


Proof 2













\(\ds \paren {c \mathbf u} \cdot \mathbf v\)

\(=\)







\(\ds \norm {c \mathbf u} \norm {\mathbf v} \cos \angle c \mathbf u, \mathbf v\)





Definition of Dot Product














\(\ds \)

\(=\)







\(\ds \sqrt {\sum_{i \mathop = 1}^n \paren {c u_i}^2} \norm {\mathbf v} \cos \angle c \mathbf u, \mathbf v\)





Definition of Vector Length in $\R^n$














\(\ds \)

\(=\)







\(\ds \sqrt {c^2 \sum_{i \mathop = 1}^n u_i^2} \norm {\mathbf v} \cos \angle \mathbf u, \mathbf v\)





$c \mathbf u$ and $\mathbf u$ are in the same direction














\(\ds \)

\(=\)







\(\ds c \sqrt {\sum_{i \mathop = 1}^n u_i^2} \norm {\mathbf v} \cos \angle \mathbf u, \mathbf v\)




















\(\ds \)

\(=\)







\(\ds c \norm {\mathbf u} \norm {\mathbf v} \cos \angle \mathbf u, \mathbf v\)





Definition of Vector Length in $\R^n$














\(\ds \)

\(=\)







\(\ds c \paren {\mathbf u \cdot \mathbf v}\)





Definition of Dot Product



$\blacksquare$


Proof 3
From Dot Product Operator is Bilinear:

$\left({c \mathbf u + \mathbf v}\right) \cdot \mathbf w = c \left({\mathbf u \cdot \mathbf w}\right) + \left({\mathbf v \cdot \mathbf w}\right)$
Setting $\mathbf v = 0$ and renaming $\mathbf w$ yields the result.
$\blacksquare$


Sources
1957: D.E. Rutherford: Vector Methods (9th ed.) ... (previous) ... (next): Chapter $\text I$: Vector Algebra: $\S 2$.
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): scalar product
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): scalar product




