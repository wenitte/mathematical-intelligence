# 

Source: https://proofwiki.org/wiki/Closed_Subsets_of_Symmetry_Group_of_Square



Theorem
Recall the symmetry group of the square:

Symmetry Group of Square
Let $\SS = ABCD$ be a square.


The various symmetries of $\SS$ are:

the identity mapping $e$
the rotations $r, r^2, r^3$ of $90^\circ, 180^\circ, 270^\circ$ around the center of $\SS$ anticlockwise respectively
the reflections $t_x$ and $t_y$ are reflections in the $x$ and $y$ axis respectively
the reflection $t_{AC}$ in the diagonal through vertices $A$ and $C$
the reflection $t_{BD}$ in the diagonal through vertices $B$ and $D$.
This group is known as the symmetry group of the square, and can be denoted $D_4$.

The subsets of $\SS$ which are closed under composition of mappings are:

$\O$
$\set e$
$\set {e, r^2}$
$\set {e, t_x}$
$\set {e, t_y}$
$\set {e, t_{AC} }$
$\set {e, t_{BD} }$
$\set {e, r, r^2, r^3}$
$\set {e, r^2, t_x, t_y}$
$\set {e, r^2, t_{AC}, t_{BD} }$
$\SS$


Proof
Recall that a submagma of an algebraic structure $\SS$ is a subsets of $\SS$ which is closed.

Let $\XX$ be the set of all submagmas of $\SS$.
From Empty Set is Submagma of Magma:

$\O \in \XX$
From Magma is Submagma of Itself:

$\SS \in \XX$
From Idempotent Magma Element forms Singleton Submagma:

$\set e \in \XX$

Let us refer to the Cayley table:

Cayley Table of Symmetry Group of Square
The Cayley table of the symmetry group of the square can be written:

$\begin{array}{c|cccccc}        & e & r & r^2 & r^3 & t_x & t_y & t_{AC} & t_{BD} \\ \hline e      & e & r & r^2 & r^3 & t_x & t_y & t_{AC} & t_{BD} \\ r      & r & r^2 & r^3 & e & t_{AC} & t_{BD} & t_y & t_x \\ r^2    & r^2 & r^3 & e & r & t_y & t_x & t_{BD} & t_{AC} \\ r^3    & r^3 & e & r & r^2 & t_{BD} & t_{AC} & t_x & t_y \\ t_x    & t_x & t_{BD} & t_y & t_{AC} & e & r^2 & r^3 & r \\ t_y    & t_y & t_{AC} & t_x & t_{BD} & r^2 & e & r & r^3 \\ t_{AC} & t_{AC} & t_x & t_{BD} & t_y & r & r^3 & e & r^2 \\ t_{BD} & t_{BD} & t_y & t_{AC} & t_x & r^3 & r & r^2 & e\\ \end{array}$

Taking each of the elements of $\SS$ in order:














\(\ds t_x \circ t^x\)

\(=\)







\(\ds e\)




















\(\ds t_y \circ t^y\)

\(=\)







\(\ds e\)




















\(\ds t_{AC} \circ t^{AC}\)

\(=\)







\(\ds e\)




















\(\ds t_{BD} \circ t^{BD}\)

\(=\)







\(\ds e\)




















\(\ds r^2 \circ r^2\)

\(=\)







\(\ds e\)




















\(\ds r \circ r\)

\(=\)







\(\ds r^2\)




















\(\ds r \circ r^2\)

\(=\)







\(\ds r^3\)




















\(\ds r \circ r^3\)

\(=\)







\(\ds e\)




















\(\ds r^3 \circ r^3\)

\(=\)







\(\ds r^2\)




















\(\ds r^3 \circ r^2\)

\(=\)







\(\ds r\)




















\(\ds r^3 \circ r\)

\(=\)







\(\ds e\)










Thus we have:














\(\ds \set {e, r^2}\)

\(\in\)







\(\ds \XX\)




















\(\ds \set {e, t_x}\)

\(\in\)







\(\ds \XX\)




















\(\ds \set {e, t_y}\)

\(\in\)







\(\ds \XX\)




















\(\ds \set {e, t_{AC} }\)

\(\in\)







\(\ds \XX\)




















\(\ds \set {e, t_{BD} }\)

\(\in\)







\(\ds \XX\)




















\(\ds \set {e, r, r^2, r^3}\)

\(\in\)







\(\ds \XX\)










Next note by inspection that:

$\set {e, r^2, t_x, t_y} \in \XX$
and:

$\set {e, r^2, t_{AC}, t_{BD} } \in \XX$













\(\ds \set {e, r^2, t_x, t_y}\)

\(\in\)







\(\ds \XX\)




















\(\ds \set {e, r^2, t_{AC}, t_{BD} }\)

\(\in\)







\(\ds \XX\)










Finally note by inspection that:

any closed subset of $\SS$ which contains both $r$ and any of the reflections contains all the elements of $\SS$
any closed subset of $\SS$ which contains both $r^3$ and any of the reflections contains all the elements of $\SS$.
Thus there are no more proper subsets of $\SS$ which are submagmas of $\SS$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Example $8.5$




