# 

Source: https://proofwiki.org/wiki/Cauchy-Goursat_Theorem/Proof_1

Theorem
Let $f: D \to \C$ be a holomorphic function, where $D \subseteq \C$ is a simply connected domain.
Let $C$ be a closed contour in $D$.

Then:

$\ds \oint_C \map f z \rd z = 0$


Proof
Suppose that $C$ is a simple closed staircase contour.
Then $C$ is a concatenation of $n$ directed smooth curves that can be parameterized as line segments, where $n \in \N_{ \ge 4}$.
The image of $C$ is equal to the boundary of a polygon embedded in the complex plane.
Denote this polygon as $P_n$, where $n$ will be equal to the number of sides of $P_n$, and denote the boundary of $P_n$ as $\partial P_n$.
From Boundary of Polygon is Topological Boundary, it follows that $\partial P_n$ is the boundary of $\Int C$, where $\Int C$ denotes the interior of $C$.

From Complex Plane is Homeomorphic to Real Plane, it follows that we can identify the complex plane $\C$ with the real plane $\R^2$ by the homeomorphism $\map \phi {x, y} = x + i y$.
By Interior of Simple Closed Contour is Well-Defined, there exists a Jordan curve $f: \closedint 0 1 \to \R^2$ with $\Img f = \phi^{-1} \sqbrk { \Img C }$.
From Simple Connectedness is Preserved under Homeomorphism, it follows that $\phi^{-1} \sqbrk D$ is simply connected.
From Jordan Curve Characterization of Simply Connected Set, it follows that $\Int f \subseteq \phi^{-1} \sqbrk D$.
It follows that $\Int C = \phi \sqbrk { \Int f } \subseteq D$.
Two Ears Theorem shows that $P_n$ has an ear, a triangle $\triangle_n$ with two sides in common with $P_n$.
The two sides will be represented by the directed smooth curves $C_k , C_{k+1}$ for some $k \in \set { 1, \ldots, n }$, or possibly $C_n , C_1$.
The third side is a chord of $P_n$ that dissects $P_n$ into $\triangle_n$ and another polygon $P_{n-1}$.
The polygon $P_{n-1}$ has $n-1$ sides.
Let $\tilde C$ be the directed smooth curve that can be parameterized as the line segment equal to the chord, with start point equal to the start point of $C_k$, and end point equal to the end point of $C_{k+1}$.

We define two contours with images equal to the boundaries of $\triangle_n$, respectively $P_{n-1}$, as follows:














\(\ds \partial \triangle_n\)

\(=\)







\(\ds C_k \cup C_{k+1} \cup \paren { - \tilde C }\)




















\(\ds \partial P_{n-1}\)

\(=\)







\(\ds C_1 \cup \ldots \cup C_{k-1} \cup \tilde C \cup C_{k+2} \cup C_n\)










As $\Int { \triangle_n } \subseteq \Int C \subseteq D$, we can use Goursat's Integral Lemma to get:














\(\ds \ds \oint_C \map f z \rd z\)

\(=\)







\(\ds \ds \oint_{ \partial P_{n-1} } \map f z \rd z + \ds \oint_{ \partial \triangle_n } \map f z \rd z\)





Contour Integral of Closed Contour Split into Two Contours














\(\ds \)

\(=\)







\(\ds \ds \oint_{ \partial P_{n-1} } \map f z \rd z\)





Goursat's Integral Lemma




We continue by finding an ear $\triangle_{n-1}$ of $P_{n-1}$, which results in a dissection of $P_{n-1}$ into $\triangle_{n-1}$ and $P_{n-2}$, which is a polygon with $n-2$ sides.














\(\ds \ds \oint_C \map f z \rd z\)

\(=\)







\(\ds \ds \oint_{ \partial P_{n-2} } \map f z \rd z + \ds \oint_{ \partial \triangle_{n-1} } \map f z \rd z\)





Contour Integral of Closed Contour Split into Two Contours














\(\ds \)

\(=\)







\(\ds \ds \oint_{ \partial P_{n-3} } \map f z \rd z\)





Goursat's Integral Lemma














\(\ds \)

\(=\)







\(\ds \ds \oint_{ \partial P_3 } \map f z \rd z\)





repeat the process, until only one triangle remains














\(\ds \)

\(=\)







\(\ds 0\)





Goursat's Integral Lemma




From Zero Simple Staircase Integral Condition for Primitive, it follows that $f$ has a primitive defined in $D$.
From Primitive of Function on Connected Domain, it follows that in the general case where $C$ is a closed contour, we have:

$\ds \oint_C \map f z \rd z = 0$
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori: $\S 3.1$




