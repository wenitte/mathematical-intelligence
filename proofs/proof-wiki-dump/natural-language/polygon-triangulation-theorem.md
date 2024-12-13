# 

Source: https://proofwiki.org/wiki/Polygon_Triangulation_Theorem



Theorem
Let $P$ be a polygon with $n$ sides, where $n \in \N_{ \ge 3 }$.

Then there exists a triangulation of $P$ that fulfills this condition:

If $AB$ is a side of a triangle in the triangulation of $P$, then $AB$ is either a side of $P$, or a chord of $P$ that lies completely in the interior of $P$.

All triangulations of $P$ that fulfill this condition consist of exactly $n-2$ triangles.


Proof
We show existence by using strong induction over $n$, the number of sides of $P$.


Basis for the Induction
Let $n = 3$.
Then $P$ is a triangle, and $\family P$ is a triangulation of $P$ that consists of $1 = n-2$ triangles.
All sides of $P$ are equal to sides of $P$.
This is our basis for the induction.


Induction Hypothesis
This is our induction hypothesis:
For each $i$ such that $3 \le i \le n$, a polygon $P$ with $i$ sides has a triangulation that fulfills the above condition, and consists of $i-2$ triangles.
Then we need to show: 
A polygon $P$ with $n+1$ sides has a triangulation that fulfills the above condition, and consists of $n-1$ triangles.


Induction Step
This is our induction step:
As $P$ has $n+1$ sides with $n \in \N_{ \ge 3}$, it follows that $P$ is not a triangle.
Polygon not Equal to Triangle has Chord shows that there exists a chord of $P$ that lies completely in the interior of $P$.
Let $AB$ be such an arbitrary chord of $P$.
The chord $AB$ dissects $P$ into two polygons $P_1$ and $P_2$.
Let $P_1$ have $n_1$ sides, and let $P_2$ have $n_2$ sides.
All sides of $P$ are sides of either $P_1$ or $P_2$, and $AB$ is a side of both $P_1$ and $P_2$.
It follows that the combined number of sides of $P_1$ and $P_2$ are equal to:

$n_1 + n_2 = \paren { n+1 } + 2 = n+3$

As $n_1 , n_2 \in \N_{ \ge 3}$, we have:

$n_1 \le n + 3 - 3 = n$
and symmetrically, $n_2 \le n$.
By principle of strong induction, there exists a triangulation of $P_1$ that consists of $n_1 - 2$ triangles, and a triangulation of $P_2$ that consists of $n_2 - 2$ triangles.
The triangles of these two triangulation combine to form a triangulation of $P$.
These triangles have sides that are sides and chords of $P_1$ and $P_2$, which means they are sides and chords of $P$.
The total number of triangles in this triangulation of $P$ is:

$\paren { n_1 - 2 } + \paren { n_2 -2  } = n - 1$
which proves the induction hypothesis.

In the induction step, the chord $AB$ could be chosen arbitrarily.
It follows that for any triangulation of $P$ that fulfills the above condition, its triangles can be constructed by this inductive process.
These triangles cannot be dissected without creating a side that is not a chord of $P$.
It follows that the triangulation consists of exactly $n-2$ triangles.
$\blacksquare$


Sources
1987: Joseph O'Rourke: Art Gallery Theorems and Algorithms: $\S 1.3.1$




