# 

Source: https://proofwiki.org/wiki/Classification_of_Compact_Two-Manifolds


This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
A smooth, compact, path-connected manifold of dimension $2$ is diffeomorphic to one of the following:

the sphere $\mathbb S^2$
a connected sum of tori $\mathbb T^2$
a connected sum of projective spaces $\mathbb{RP}^2$.
Such a $2$-manifold with boundary is diffeomorphic to one of the following:

the sphere $\mathbb S^2$
a connected sum of tori $\mathbb T^2$
a connected sum of projective spaces $\mathbb{RP}^2$, with a number of open disks removed.

The Euler characteristic, orientability, and number of boundary curves suffice to describe a surface.


Proof
It is known that the connected sum of $g$ tori, $\mathbb T_1^2 \# \mathbb T_2^2 \# \ldots \# \mathbb T_g^2$, which we denote $g \mathbb T^2$, is orientable and has Euler characteristic $2 - 2 g - b$, where $b$ is the number of boundary curves.
It is also known that the connected sum of $p$ projective spaces $p \mathbb{RP}^2$ is non-orientable and has Euler characteristic $2 - p - b$.
Thus the Euler characteristic, number of boundary curves and orientability distinguish any closed, path-connected $2$-manifold.


This article, or a section of it, needs explaining.In particular: All the results referred to above need to be sourced.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Lemma
A compact, boundaryless $2$-manifold $S$ is diffeomorphic to a polyhedral disk $P$ with edges identified pairwise.
That is, for any closed, connected $2$-manifold, there exists a polyhedral disk $P$ and an equivalence relation $\sim$ such that:

$S \cong P \setminus \sim$
$\Box$

With this lemma, the classification can be completed.
Throughout the proof, the term surface is used in its topological meaning of smooth $2$-manifold.
Consider the polygonal representation guaranteed to exist by the lemma above.
Suppose there is only one pair of edges on $P$.
Then they are either identified in an orientable or non-orientable manner.
Thus they yield either $\mathbb S^2$ or $\mathbb{RP}^2$, respectively.

Now suppose there is more than one pair of edges in $P$ identified by $\sim$.
If it can be shown that such a surface can always be decomposed into the connected sum of:

either a $\mathbb T^2$ or a $\mathbb{RP}^2$
and:

a surface described by a polyhedral disk with fewer edges than $P$
the classification of path-connected surface will be complete.

There are $5$ cases to be examined:


Case 1
There are two adjacent edges identified with opposite orientations.
Then the identification can be performed to obtain a new polyhedral disk with one less pair of edges.
$\Box$


Case 2
There are two adjacent edges identified with the same orientations.
Then there is a curve in $P$ from the unshared points of these two edges which, under $\sim$, becomes a simple closed curve in $S$.


This article, or a section of it, needs explaining.In particular: Is "curve" in this context synonymous with Definition:Arc (Topology)?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
The triangular disk $\Delta$ created by this curve and the two edges is just two edges identified with the same orientations, with a boundary.
Hence:

$\Delta \cong \mathbb{RP}^2 - \mathbb D_\Delta^2$
and therefore if we remove the two edges in question from $P$, we construct a polygonal disk $P - \Delta$ such that:

$\paren {\paren {P - \Delta} \setminus \sim} \# \mathbb{RP}^2 \cong S$

This article, or a section of it, needs explaining.In particular: "polygonal disk" or "polyhedral disk"? Terminology is confused here.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\Box$


Case 3
There are two non-adjacent edges in $P$, identified with the same orientations.
There exists a curve $C$ in $P$ from the endpoint of one of these edges to the identified point in the other.
A new polygonal disk, and a new equivalence relation, can be defined as follows:
Let $P'$ be the identification of the edges in question and the separation of the disk along $C$.
Let $\sim'$ be all the equivalences of $\sim$ together with the new equivalence taking one of the copies of $C$ in $P'$ to the other, with appropriate orientation.
$P'$ and $\sim'$ are constructed so that $P' \setminus \sim' \cong S$.
But now $P'$ satisfies Case 2 because of the orientations imposed on the copies of $C$.
$\Box$


Case 4
There are two non-adjacent edges in $P$, identified with opposite orientations, such that neither edge is between any other pair of identified edges on the perimeter of $P$.
If we identify the two edges in question, a cylinder $Y$ is obtained.
There is a curve $C$ in $Y$ such that if $Y$ is separated along $C$, two cylinders are obtained.
If the separation is maintained, but the remaining identifications are performed, then two surfaces, each with boundary $C$, are obtained.
So the original surface $S$ was the connected sum of two surfaces, each with fewer edges in their respective polyhedral disks than $S$ had. 
$\Box$


Case 5
There are two non-adjacent edges identified with opposing orientations, such that some other pair of identified edges are interlaced with the edges in question on the perimeter of $P$.
By the preceding cases, it is possible to decompose this surface through the removal of all edges with the same orientation, and forming a connected sum with a number of projective planes.
Hence we regard $\sim$ as identifying any two edges with opposing orientations only.
Let the pairs of identified edges that are interlaced be $a_1, a_2, b_1, b_2$, such that $a_1 \sim a_2$ and $b_1 \sim b_2$.
By performing the identification on $a$, a cylinder is obtained.
By further performing the identification on $b$, the remaining edges of $P$ form the boundary of a disk on a torus $\mathbb T^2$.
Hence the original surface was the connected sum:

$\mathbb T^2 \# \paren {P - a_1 - a_2 - b_1 - b_2} \setminus \sim$
$\Box$

Any polyhedral disk with more than one pair of identified edges must satisfy at least one of the above $5$ cases.
So it can be decomposed into the connected sum of either a projective plane or a torus with a surface described by a polyhedral disk with fewer pairs of identified edges.
Since the polyhedral disk with only one pair of identified edges is either a sphere or a projective plane, every surface without boundary $S$ is either a sphere or the connected sum of a collection of tori and projective planes.
Since:

$\mathbb T^2 \# \mathbb{RP}^2 = \mathbb{RP}^2 \# \mathbb{RP}^2 \# \mathbb{RP}^2$
any compact surface without boundary is diffeomorphic to either $\mathbb S^2, g \mathbb T^2$, or $p \mathbb{RP}^2$.
The case for surfaces with boundary is obtained through the removal and insertion of $\mathbb D^2$s to the surface.
$\blacksquare$


Historical Note
The Classification of Compact Two-Manifolds was solved in $1907$ by Max Wilhelm Dehn and Poul Heegaard.


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): manifold
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): manifold




