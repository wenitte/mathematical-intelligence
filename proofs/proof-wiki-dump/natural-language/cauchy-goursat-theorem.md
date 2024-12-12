# 

Source: https://proofwiki.org/wiki/Cauchy-Goursat_Theorem

This proof is about Cauchy-Goursat Theorem in the context of Complex Analysis. For other uses, see Cauchy's Theorem.



Theorem
Let $f: D \to \C$ be a holomorphic function, where $D \subseteq \C$ is a simply connected domain.
Let $C$ be a closed contour in $D$.

Then:

$\ds \oint_C \map f z \rd z = 0$


Corollary
Let $f: U \to \C$ be a holomorphic function, where $U \subseteq \C$ is an open set.
Let $C$ be a simple closed contour in $U$.
Let $\Int C \subseteq U$, where $\Int C$ denotes the interior of $C$.

Then:

$\ds \oint_C \map f z \rd z = 0$


Proof 1
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


Proof 2
This proof assumes that the derivative $f' : D \to \C$ is continuous.
This assumption is always true, as can be seen from Holomorphic Function is Continuously Differentiable.
However, the proof of that theorem depends on Cauchy's Integral Formula, which again depends on the Cauchy-Goursat Theorem.
It follows that this proof is circular, unless $f$ is known to be continuously differentiable.
This proof also references the Cauchy-Riemann Equations for results about the partial derivatives of $f$.
The part of the proof for the Cauchy-Riemann Equations that show the partial derivatives are continuous also depends on the Holomorphic Function is Continuously Differentiable theorem.
$\Box$

We rewrite $f$ as a sum of its real and imaginary parts.
Let $u, v: \R^2 \to \R$ be defined by:

$\map f {x + i y} = \map u {x, y} + i \map v {x, y}$
By the Cauchy-Riemann Equations, the partial derivatives of $u$ and $v$ fulfil these equations:

$\map {\dfrac {\partial u} {\partial x} } {x, y} = \map {\dfrac {\partial v} {\partial y} } {x, y} =  \map \Re {\map {f'} z}$
$\map {\dfrac {\partial u} {\partial y} } {x, y} = -\map {\dfrac {\partial v} {\partial x} } {x, y} = -\map \Im {\map {f'} z}$

From Real and Imaginary Part Projections are Continuous and Composite of Continuous Mappings is Continuous, it follows that $\map \Re {f'}$ and $-\map \Im {f'}$ are continuous.
Thus, all the partial derivatives of $u$ and $v$ are continuous.

First, suppose that $C$ is a simple closed contour.
Let $\phi : \R^2 \to \C$ be the homeomorphism defined in Complex Plane is Homeomorphic to Real Plane as:

$\map \phi {x, y} = x + i y$

From Complex Contour Integral as Contour Integrals, it follows that there exists a piecewiese continuously differentiable  Jordan curve $\gamma: \closedint a b \to \R^2$ such that:

$\ds \oint_C \map f z \rd z = \ds \oint_\gamma \tuple {u, -v} \cdot \rd \mathbf l + i \oint_\gamma \tuple {v, u} \cdot \rd \mathbf l$
where $\phi \circ \gamma$ is a parameterization of $C$.
Let $\Int \gamma$ denote the interior of $\gamma$.
From Interior of Simple Closed Contour is Well-Defined, it follows that the interior $\Int C$ can be identified with $\Int \gamma$ by:

$\phi \sqbrk {\Int C} = \Int \gamma$

As $\phi$ is bijective, it follows that $\gamma$ is a curve in $\phi^{-1} \sqbrk {D}$.
From Simple Connectedness is Preserved under Homeomorphism, it follows that $\phi^{-1} \sqbrk {D}$ is simply connected in $\R^2$.
From Jordan Curve Characterization of Simply Connected Set, it follows that $\Int \gamma \subseteq \phi^{-1} \sqbrk {D}$.
As $f$ is defined for all $z \in D$, it follows that the partial derivatives of $u$ and $v$ are defined for all $\tuple {x, y} \in \Int \gamma$.

Suppose that $C$ is positively oriented.
As $\gamma$ will be positively oriented, we use Green's Theorem to calculate:














\(\ds \ds \oint_\gamma \tuple {u, -v} \cdot \rd \mathbf l + i \oint_\gamma \tuple {v, u} \cdot \rd \mathbf l\)

\(=\)







\(\ds \ds \iint_{\Int \gamma} \paren {-\map {\dfrac {\partial v} {\partial x} }{x,y} - \map {\dfrac {\partial u} {\partial y} }{x,y} } \rd x \rd y + i \iint_{\Int \gamma} \paren { \map{ \dfrac {\partial u} {\partial x} }{x,y} - \map{ \dfrac {\partial v} {\partial y} }{x,y} } \rd x \rd y\)





using Green's Theorem twice














\(\ds \)

\(=\)







\(\ds \ds \iint_{\Int \gamma} 0 \rd x \rd y + i \ds \iint_{\Int \gamma} 0 \rd x \rd y\)





by the Cauchy-Riemann Equations














\(\ds \)

\(=\)







\(\ds 0\)










Suppose instead that $C$ is not positively oriented.
From Simple Closed Contour has Orientation, it follows that $C$ is negatively oriented.
From Reversed Contour Reverses Orientation:Corollary, it follows that the reversed contour $-C$ is positively oriented.
Then:














\(\ds \ds \oint_C \map f z \rd z\)

\(=\)







\(\ds - \ds \oint_{-C} \map f z \rd z\)





by Contour Integral along Reversed Contour














\(\ds \)

\(=\)







\(\ds 0\)





by the calculations above, as $-C$ is positively oriented




It follows that if $C$ is a simple closed contour in $D$, then the statement of the theorem is true.
From Zero Simple Staircase Integral Condition for Primitive, it follows that $f$ has a primitive in $D$.
From Primitive of Function on Connected Domain, it follows that in the general case where $C$ is a closed contour, we have:

$\ds \oint_C \map f z \rd z = 0$
$\blacksquare$


Examples
$z^2$ over $e^{i t}$ on $\hointr 0 {2 \pi}$
Let $\map \gamma t = e^{i t}$.
Let the domain of $\gamma$ be $\hointr 0 {2 \pi}$.
Let $\map f z = z^2$.
Then:

$\ds \oint_\gamma \map f z \rd z = 0$


Also known as
The Cauchy-Goursat Theorem is also known as Cauchy's Integral Theorem or the Cauchy Integral Theorem.
Some sources refer to it just as Cauchy's Theorem, but there are a number of theorems named such.


Also see
Definition:Contour Integral


Source of Name
This entry was named for Augustin Louis Cauchy and Édouard Jean-Baptiste Goursat.


Historical Note
The Cauchy-Goursat Theorem was actually first investigated and proved by Carl Friedrich Gauss, but it was just one of the things that he failed to get round to publishing.
He stated it in a letter of $1811$ to his friend Friedrich Wilhelm Bessel, where he says:

This is a very beautiful theorem whose fairly simple proof I will give on a suitable occasion. It is connected with other beautiful truths which are concerned with series expansions.
Augustin Louis Cauchy was, however, the first to publish a proof ca. $1825$, under the assumption that the derivative $f'$ is continuous.
Karl Weierstrass independently discovered this theorem during his exercise to rebuild the theory of complex analysis from first principles.
Édouard Goursat published a general proof in $1884$.


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Cauchy's integral theorem
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Cauchy's integral theorem
2001: Christian Berg: Kompleks funktionsteori: $\S 3.1$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Cauchy's integral theorem
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Cauchy's Integral Theorem
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Cauchy's Integral Theorem




