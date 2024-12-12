# 

Source: https://proofwiki.org/wiki/Five_Platonic_Solids



Theorem
There exist exactly five platonic solids:

$\paren 1: \quad$ the regular tetrahedron
$\paren 2: \quad$ the cube
$\paren 3: \quad$ the regular octahedron
$\paren 4: \quad$ the regular dodecahedron
$\paren 5: \quad$ the regular icosahedron.
In the words of Euclid:

I say next that no other figure, besides the said five figures, can be constructed which is contained by equilateral and equiangular figures equal to one another.
(The Elements: Book $\text{XIII}$: Proposition $18$ : Endnote)


Proof 1
A solid angle cannot be constructed from only two planes.
Therefore at least three faces need to come together to form a vertex.
Let $P$ be a platonic solid.
Let the polygon which forms each face of $P$ be a equilateral triangles.
We have that:

each vertex of a regular tetrahedron is composed of $3$ equilateral triangles
each vertex of a regular octahedron is composed of $4$ equilateral triangles
each vertex of a regular icosahedron is composed of $5$ equilateral triangles.
$6$ equilateral triangles, placed together at a vertex, form $4$ right angles.
From Proposition $21$ of Book $\text{XI} $: Solid Angle contained by Plane Angles is Less than Four Right Angles:

a solid angle is contained by plane angles which total less than $4$ right angles.
Thus it is not possible to form $P$ such that its vertices are formed by $6$ equilateral triangles.
For the same reason, it is not possible to form $P$ such that its vertices are formed by more than $6$ equilateral triangles.
Hence there are only $3$ possible platonic solids whose faces are equilateral triangles.

We have that each vertex of a cube is composed of $3$ squares.
$4$ squares, placed together at a vertex, form $4$ right angles.
Thus, again from Proposition $21$ of Book $\text{XI} $: Solid Angle contained by Plane Angles is Less than Four Right Angles:

it is not possible to form $P$ such that its vertices are formed by $4$ squares.
For the same reason, it is not possible to form $P$ such that its vertices are formed by more than $4$ squares.
Hence there is only $1$ possible platonic solid whose faces are squares.

We have that each vertex of a regular dodecahedron is composed of $3$ regular pentagons.
From Lemma to Proposition $18$ of Book $\text{XIII} $: Comparison of Sides of Five Platonic Figures:

the vertices of a regular pentagon equal $1 \dfrac 1 5$ right angles.
$4$ regular pentagons, placed together at a vertex, form $4 \dfrac 4 5$ right angles.
Thus, again from Proposition $21$ of Book $\text{XI} $: Solid Angle contained by Plane Angles is Less than Four Right Angles:

it is not possible to form $P$ such that its vertices are formed by $4$ regular pentagons.
For the same reason, it is not possible to form $P$ such that its vertices are formed by more than $4$ regular pentagons.
Hence there is only $1$ possible platonic solid whose faces are regular pentagons.

$3$ regular hexagons, placed together at a vertex, form $4$ right angles.
Thus, again from Proposition $21$ of Book $\text{XI} $: Solid Angle contained by Plane Angles is Less than Four Right Angles:

it is not possible to form $P$ such that its vertices are formed by $3$ or more regular hexagons.

Regular polygons with more than $6$ sides have vertices which are greater than those of a regular hexagon.
Therefore $3$ such regular polygons, placed together at a vertex, form more than $4$ right angles.
Thus, again from Proposition $21$ of Book $\text{XI} $: Solid Angle contained by Plane Angles is Less than Four Right Angles:

it is not possible to form $P$ such that its vertices are formed by $3$ or more regular polygons with more than $6$ sides.

Hence the $5$ possible platonic solids have been enumerated and described.
$\blacksquare$


Proof 2
Consider a convex regular polyhedron $P$.
Let $m$ be the number of sides of each of the regular polygons that form the faces of $P$.
Let $n$ be the number of those polygons which meet at each vertex of $P$.
From Internal Angles of Regular Polygon, the internal angles of each face of $P$ measure $180^\circ - \dfrac {360^\circ} m$.

The sum of the internal angles must be less than $360^\circ$.
So:














\(\ds n \paren {180^\circ - \dfrac {360^\circ} m}\)

\(<\)







\(\ds 360^\circ\)














\(\ds \leadsto \ \ \)





\(\ds n \paren {1 - \dfrac 2 m}\)

\(<\)







\(\ds 2\)














\(\ds \leadsto \ \ \)





\(\ds n \paren {m - 2}\)

\(<\)







\(\ds 2m\)














\(\ds \leadsto \ \ \)





\(\ds n \paren {m - 2} - 2 \paren {m - 2}\)

\(<\)







\(\ds 2m - 2 \paren {m - 2}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {m - 2} \paren {n - 2}\)

\(<\)







\(\ds 4\)










But $m$ and $n$ are both greater than $2$.
So:

if $m = 3$, $n$ can only be $3$, $4$ or $5$
if $m = 4$, $n$ can only be $3$
if $m = 5$, $n$ can only be $3$
and $m$ cannot be greater than $3$.
There are $5$ possibilities in all.
Therefore all platonic solids have been accounted for.
$\blacksquare$


Historical Note
Euclid's proof that there exist exactly Five Platonic Solids appears to have originated with Theaetetus of Athens.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.4$: Euclid (flourished ca. $300$ B.C.)
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): polyhedron: 1. (plural polyhedra)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): polyhedron: 1. (plural polyhedra)
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $2$: The Logic of Shape: The golden mean




