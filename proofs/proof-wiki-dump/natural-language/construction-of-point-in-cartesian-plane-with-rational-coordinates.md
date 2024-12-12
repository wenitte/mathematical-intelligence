# 

Source: https://proofwiki.org/wiki/Construction_of_Point_in_Cartesian_Plane_with_Rational_Coordinates

Theorem
Let $\CC$ be a Cartesian plane.
Let $P = \tuple {x, y}$ be a rational point in $\CC$.

Then $P$ is constructible using a compass and straightedge construction.


Proof
Let $x = \dfrac m n$ where $m, n \in \Z_{\ne 0}$ are non-zero integers.
Let $O$ denote the point $\tuple {0, 0}$.
Let $A$ denote the point $\tuple {1, 0}$.
Let $M$ denote the point $\tuple {0, m}$.
Let $N$ denote the point $\tuple {0, n}$.

The $x$-axis is identified with the straight line through $O$ and $A$.
The $y$-axis is constructed as the line perpendicular to $OA$ through $O$.

Using Construction of Lattice Point in Cartesian Plane, the points $M$ and $\N$ are constructed.
The line $NA$ is drawn.
Using Construction of Parallel Line, $MQ$ is drawn, where $Q$ is the point of intersection of $MQ$ with the $x$-axis.

We have that $\dfrac {OM} {ON} = \dfrac m n$
As $\triangle ONA$ is similar to $\triangle OMQ$, it follows that $\dfrac {OM} {ON} = \dfrac {OQ} {OA}$
Therefore $Q$ is the point $\tuple {\dfrac m n, 0}$.




Let $y = \dfrac r s$ where $r, s \in \Z_{\ne 0}$ are non-zero integers.
Using Construction of Lattice Point in Cartesian Plane, the points $\tuple {r, 0}$ and $\tuple {s, 0}$ are constructed.
Using the same technique as above, mutatis mutandis, the point $\tuple {0, \dfrac r s}$ is constructed.
Using Construction of Parallel Line, a straight line is drawn through $\tuple {\dfrac m n, 0}$ parallel to the $y$-axis.
Using Construction of Parallel Line, a straight line is drawn through $\tuple {0, \dfrac r s}$ parallel to the $x$-axis.

By definition of Cartesian plane, their intersection is at $\tuple {\dfrac m n, \dfrac r s}$, which is the required point $P = \tuple {x, y}$.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Field Extensions: $\S 40$. Construction with Ruler and Compasses




