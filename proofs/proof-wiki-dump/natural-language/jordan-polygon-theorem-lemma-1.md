# 

Source: https://proofwiki.org/wiki/Jordan_Polygon_Theorem/Lemma_1

Lemma
Let $P$ be a polygon embedded in $\R^2$.
Denote the boundary of $P$ as $\partial P$.

$\R^2 \setminus \partial P$ is the union of at most two disjoint path-connected sets.


Proof
The polygon $P$ has $n$ sides, where $n \in \N$.
Denote the vertices of $P$ as $A_1, \ldots, A_n$.
Denote the sides of $P$ as $S_1, \ldots, S_n$, such that each vertex $A_i$ has adjacent sides $S_{i - 1}$ and $S_i$.
We use the conventions that $S_0 = S_n$, and $A_{n + 1} = A_1$.

Let $\ds \delta_i = \map d {S_i, \bigcup_{j \mathop = 1, \ldots, n: \size {i - j} > 1} S_j}$ be the Euclidean distance between a side $S_i$ and all sides not adjacent to $S_i$.
From Distance between Closed Sets in Euclidean Space:

$\delta_i > 0$
Put $\ds \delta = \min_{i \mathop = 1, \ldots, n} \delta_i$.

From Boundary of Polygon is Jordan Curve, it follows that $\partial P$ is equal to the image of a Jordan curve:

$\gamma: \closedint 0 1 \to \R^2$
that is a concatenation of $n$ paths:

$\gamma_1, \ldots, \gamma_n$
Each $\gamma_i$ is a line segment that joins its initial point $A_i$ and its final point $A_{i + 1}$.
Therefore the image of $\gamma_i$ is equal to the side $S_i$.

Let $\mathbf v_i = \dfrac {A_{i + 1} - A_i} {\map d {A_{i + 1}, A_i} }$ be the direction vector of $\gamma_i$ with norm $\norm {\mathbf v_i} = 1$.
Let $\mathbf w_i$ be the vector $v_i$ rotated $\dfrac \pi 2$ radians counterclockwise, so $\norm {\mathbf w_i} = 1$.


This article, or a section of it, needs explaining.In particular: Invoke the fact that rotation is an isometry (still to be covered on $\mathsf{Pr} \infty \mathsf{fWiki}$).You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

For any $\epsilon \in \openint 0 {\dfrac \delta 2}$, we intend to construct two Jordan curves $\sigma, \overline \sigma$ such that:

$\Img \sigma \cup \Img {\overline \sigma} = \set {q \in \R^2: \map d {q, \partial P} = \epsilon}$
  Illustration of the Jordan curves $\sigma, \overline \sigma$ which both have distance $\epsilon$ to $\partial P$.Note the rounded corners of the curves that occur in place of non-convex angles.

For $i \in \set {1, \ldots, n}$, initially define the $\sigma_i$ as the line segment that joins its initial point $A_i + \epsilon \mathbf w_i$ with its final point $A_{i + 1} + \epsilon \mathbf w_i$.

Suppose $\sigma_i$ and $\sigma_{i + 1}$ intersect at some point $p_{i + 1} \in R^2$.
Then re-define the two line segments so that:

the final point of $\sigma_i$ becomes $p_{i + 1}$
and:

the initial point of $\sigma_{i + 1}$ becomes $p_{i + 1}$.
Then define a path $\rho_i$ as the constant function $\map {\rho_i} t = p_{i + 1}$.
Otherwise, define a path $\rho_i$ with initial point $A_{i + 1} + \epsilon \mathbf w_i$ and final point $A_{i + 1} + \epsilon \mathbf w_{i + 1}$, such that:

the image of $\rho_i$ is part of the circumference of the circle with center $A_{i + 1}$ and radius $\epsilon$.

Define the path $\sigma: \closedint 0 1 \to \R^2$ as the concatenation:

$\sigma = \sigma_1 * \rho_1 * \sigma_2 * \rho_2 * \ldots \sigma_n * \rho_n$
Then $\sigma$ is a closed path, as $\sigma_1$ has initial point $A_1$ equal to the final point of $\rho_n$.

Each of the paths $\sigma_i$ and $\rho_i$ is injective.
For all $i, j \in \set {1, \ldots, n}$, $\sigma_i$ only intersects $\rho_{i - 1}$ and $\rho_i$ in their endpoints.
Also, $\sigma_i$ can only possibly intersect $\sigma_{i - 1}$ in its endpoint.
In that case the path $\rho_{i - 1}$ is constant.
Similarly, $\sigma_i$ can only possibly intersect $\sigma_{i + 1}$ in its endpoint.
In that case the path $\rho_{i + 1}$ is constant.
For $\size {i - j} > 1$:

let $x_i \in \Img {\sigma_i} \cup \Img {\rho_i}$
let $x_j \in \Img {\sigma_j} \cup \Img {\rho_j}$.
Let $p_i, p_j \in \partial P$ be two points such that:

$\map d {x_i, p_i} = \map d {x_j, p_j} = \epsilon$

Suppose $x_i \in \Img {\sigma_i}$.
Then we can put:

$p_i = x_i - \epsilon \mathbf w_i$
Suppose $x_i \in \Img {\rho_i}$.
Then we can put $p_i = A_{i + 1}$.

Then $x_i \ne x_j$, as:














\(\ds \map d {x_i, x_j}\)

\(=\)







\(\ds \map d {x_i, x_j} + \map d {x_i, p_i} + \map d {x_j, p_j} - 2 \epsilon\)




















\(\ds \)

\(\ge\)







\(\ds \map d {p_i, p_j} - 2 \epsilon\)





Triangle Inequality for Vectors in Euclidean Space














\(\ds \)

\(>\)







\(\ds \delta - 2 \epsilon\)





as $p_i \in S_i, p_j \in S_j$, and $\map d {S_i, S_j} \ge \delta$














\(\ds \)

\(=\)







\(\ds 0\)









It follows that $\sigma_i$ and $\rho_i$ do not intersect $\sigma_j$ and $\rho_j$.
It follows that $\sigma$ is a Jordan curve.

Now for $i \in \set {1, \ldots, n}$, initially define the $\overline \sigma_i$ as the line segment that joins its initial point $A_i - \epsilon \mathbf w_i$ with its final point $A_{i + 1} - \epsilon \mathbf w_i$.
Proceed to define $\overline \rho_i$ and re-define $\overline \sigma_i$ similarly to what was done with $\sigma_i$ and $\rho_i$.
Finally, define $\overline \sigma$ as the concatenation:

$\overline \sigma = \overline \sigma_1 * \overline \rho_1 * \overline \sigma_2 * \overline \rho_2 * \ldots \overline \sigma_n * \overline \rho_n$
It follows that $\overline \sigma$ is a Jordan curve as above.

We now show that $\sigma$ and $\overline \sigma$ do not intersect.
First, $\sigma_i$ and $\overline \sigma_i$ do not intersect, as they are both line segments parallel to $S_i$ with a distance of $2 \epsilon$.
Second, $\rho_i$ and $\overline \rho_i$ do not intersect, as one path, say $\rho_i$, is constant with image equal to the crossing point of $\sigma_{i - 1}$ and $\sigma_i$. 
The other path, say $\overline \rho_i$, is part of the circumference of the circle that joins the final point of $\overline \sigma_{i - 1}$ with the initial point of $\overline \sigma_i$.
Third, $\sigma_i$ and $\overline \sigma_{i + 1}$ do not intersect, since neither line segment crosses $\partial P$, which would be necessary if the two line segments should intersect.
Similarly, $\sigma_i$ and $\overline \sigma_{i - 1}$ do not intersect.
For all other combinations of $i, j \in \set {1, \ldots, n}$, $\sigma_i$ and $\rho_i$ do not intersect with $\overline \sigma_j$ and $\overline \rho_j$. 
This follows as:

$\map d {\sigma_i, S_i} = \map d {\rho_i, S_i} = \map d {\rho_i, S_{i - 1} } = \epsilon$
and as $S_i$, or $S_{i - 1}$, are not adjacent sides to $S_j$, we have $\map d {S_i, S_j} > 2 \epsilon$.
Now we can use the Triangle Inequality for Vectors in Euclidean Space as above, to prove that the paths do not intersect.
$\Box$

Finally, let $q_1, q_2, q_3 \in R^2 \setminus \partial P$. 
Let:

$\epsilon = \min \set {\map d {q_1, \partial P} / 2, \map d {q_2, \partial P} / 2, \map d {q_3, \partial P} / 2, \delta}$
For all $i \in \set {1, 2, 3}$, draw a line segment $\LL_i$ joining $q_i$ with any point on the boundary $\partial P$.

As $\map d {q_i, \partial P} > \epsilon$, it follows from the Intermediate Value Theorem that there is a point $x_i$ on $\LL_i$ such that $\map d {x_i, \partial P} = \epsilon$.
Then we have either:

$x_i \in \Img \sigma$
or:

$x_i \in \Img {\overline \sigma}$
when the Jordan curves $\sigma$ and $\overline \sigma$ gets defined from the new value of $\epsilon$.
It follows that at least two out of three of the points $q_1, q_2, q_3$ is path-connected to the same Jordan curve.
As a Jordan curve is a path, it follows that at least two of the points can be connected by a path.
Hence, $R^2 \setminus \partial P$ is the union of at most two disjoint path-connected sets.
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Revisit this linkIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
Jeff Ericsson: Computational Topology





