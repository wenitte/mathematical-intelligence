# 

Source: https://proofwiki.org/wiki/Dot_Product_Distributes_over_Addition



Theorem
Let $\mathbf u, \mathbf v, \mathbf w$ be vectors in the real Euclidean space $\R^n$.

Then:

$\paren {\mathbf u + \mathbf v} \cdot \mathbf w = \mathbf u \cdot \mathbf w + \mathbf v \cdot \mathbf w$


Proof 1













\(\ds \left({\mathbf u + \mathbf v}\right) \cdot \mathbf w\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \left({u_i + v_i}\right) w_i\)





Definition of Vector Sum and Definition of Dot Product














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \left({u_i w_i + v_i w_i}\right)\)





Real Multiplication Distributes over Real Addition














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n u_i w_i + \sum_{i \mathop = 1}^n v_i w_i\)




















\(\ds \)

\(=\)







\(\ds \mathbf u \cdot \mathbf w + \mathbf v \cdot \mathbf w\)





Definition of Dot Product



$\blacksquare$


Proof 2
The following proof is valid in the context of a Cartesian $3$-space:

Let the vectors $\mathbf u$, $\mathbf v$ and $\mathbf w$ be embedded in a Cartesian $3$-space.
It is noted that $\mathbf u$, $\mathbf v$ and $\mathbf w$ are not necessarily coplanar.


Let instances of $\mathbf u$ and $\mathbf w$ be selected so their initial points are at some point $O$.
Let an instance of $\mathbf v$ be selected so its initial point is positioned at the terminal point $U$ of $\mathbf u$.
Let the terminal point $\mathbf v$ be $V$.
Let $UA$ be dropped perpendicular to $\mathbf w$.
Let $VB$ be dropped perpendicular to $\mathbf w$.
Let another instance of $\mathbf w$ be selected so that its initial point is at $U$.
Let $VC$ be dropped perpendicular to this second instance of $\mathbf w$.
Let $CB$ be dropped from $C$ to the first instance of $\mathbf w$.

We have that:

$UA \parallel CB$
and:

$UC \parallel AB$
Thus $\Box ABCU$ is a parallelogram.
Hence:

$AB = UC$
Then we have that:














\(\ds OA\)

\(=\)







\(\ds OU \cos \angle \mathbf u, \mathbf w\)




















\(\ds \)

\(=\)







\(\ds \norm {\mathbf u} \cos \angle \mathbf u, \mathbf w\)




















\(\ds AB\)

\(=\)







\(\ds UV \cos \angle \mathbf v, \mathbf w\)




















\(\ds \)

\(=\)







\(\ds \norm {\mathbf v} \cos \angle \mathbf v, \mathbf w\)




















\(\ds OB\)

\(=\)







\(\ds OV \cos \angle \paren {\mathbf u + \mathbf v}, \mathbf w\)




















\(\ds \)

\(=\)







\(\ds \norm {\paren {\mathbf u + \mathbf v} } \cos \angle \paren {\mathbf u + \mathbf v}, \mathbf w\)




















\(\ds \)

\(=\)







\(\ds \norm {\mathbf u} \cos \angle \mathbf u, \mathbf w + \norm {\mathbf v} \cos \angle \mathbf v, \mathbf w\)














\(\ds \leadsto \ \ \)





\(\ds \norm {\paren {\mathbf u + \mathbf v} } \norm {\mathbf w} \cos \angle \paren {\mathbf u + \mathbf v}, \mathbf w\)

\(=\)







\(\ds \norm {\mathbf u} \norm {\mathbf w} \cos \angle \mathbf u, \mathbf w + \norm {\mathbf v} \norm {\mathbf w} \cos \angle \mathbf v, \mathbf w\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\mathbf u + \mathbf v} \cdot \mathbf w\)

\(=\)







\(\ds \mathbf u \cdot \mathbf w + \mathbf v \cdot \mathbf w\)





Definition of Dot Product



Hence the result.
$\blacksquare$


Proof 3
From Dot Product Operator is Bilinear:

$\paren {c \mathbf u + \mathbf v} \cdot \mathbf w = c \paren {\mathbf u \cdot \mathbf w} + \paren {\mathbf v \cdot \mathbf w}$
Setting $c = 1$ yields the result.
$\blacksquare$


Sources
1927: C.E. Weatherburn: Differential Geometry of Three Dimensions: Volume $\text { I }$ ... (previous) ... (next): Introduction: Vector Notation and Formulae: Products of Vectors
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 22$: Dot or Scalar Product: $22.9$
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: The Dot and Cross Product: $113 \ \text{(a)}$
1992: Frederick W. Byron, Jr. and Robert W. Fuller: Mathematics of Classical and Quantum Physics ... (previous) ... (next): Volume One: Chapter $1$ Vectors in Classical Physics: $1.3$ The Scalar Product
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): scalar product
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): scalar product




