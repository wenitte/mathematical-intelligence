# 

Source: https://proofwiki.org/wiki/Distance_between_Points_in_Regular_Hexagon

Theorem
Let $H$ be a regular hexagon embedded in the Euclidean plane $\R^2$.
Let $s \in \R_{>0}$ be the side length of $H$.
Let $\mathbf x, \mathbf y \in \R^2$ such that $\mathbf x$ and $\mathbf y$ lie in the interior of $H$, or on the circumference of $H$.

Then:

$\map d {\mathbf x, \mathbf y} \le 2s$
where $\map d {\mathbf x, \mathbf y}$ denotes the Euclidean distance between $\mathbf x$ and $\mathbf y$.


Proof
From Regular Polygon is Cyclic, it follows that $H$ can be inscribed in a circle with center $\mathbf c$.
The circumcircle intersects all vertices of $H$.
From Regular Hexagon is composed of Equilateral Triangles, it follows that the side length $s$ is equal to the distance from $\mathbf c$ to any vertex of $H$.
It follows that the radius of the circumcircle is equal to $s$.
Hence:














\(\ds \map d {\mathbf x, \mathbf y}\)

\(\le\)







\(\ds \map d {\mathbf x, \mathbf c} + \map d {\mathbf c, \mathbf y}\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds s + s\)





as $\mathbf x, \mathbf y$ lie in $H$, they also lie in the circumcircle














\(\ds \)

\(=\)







\(\ds 2s\)









$\blacksquare$





