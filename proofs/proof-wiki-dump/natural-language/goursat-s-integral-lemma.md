# 

Source: https://proofwiki.org/wiki/Goursat%27s_Integral_Lemma



Theorem
Let $f: D \to \C$ be a holomorphic function in $D$, where $D \subseteq \C$ is a connected domain.
Let $\triangle$ be a triangle embedded in the complex plane $\C$ with boundary $\partial \triangle$.
Let $\partial \triangle \cup \Int \triangle \subseteq D$, where $\Int \triangle$ is the interior of $\partial \triangle$.
Let $\ds \oint_{\partial \triangle} \map f z \rd z$ denote the contour integral over any simple closed contour $C$ with image $\Img C = \partial \triangle$.

Then:

$\ds \oint_{\partial \triangle} \map f z \rd z = 0$


Proof

This article needs to be tidied.In particular: Sorry, still stuff to do to improve / tidy this further. Please leave this template in place til I've had a chance to give it a workover.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
We will create a sequence of triangles $\sequence {\triangle_n}_{n \mathop \in \N}$ by an inductive process.
Put $\triangle_0 = \triangle$ as the first term of the sequence.
Denote the vertices of $\triangle_n$ as $A_1, A_2, A_3$, and put $A_4 = A_1$ for convenience.
For $k = 1, 2, 3$, let $A_k A_{k + 1}$ denote the line segment with endpoints $A_k$ and $A_{k + 1}$, and let $B_k$ denote the midpoint of this line segment.
Let $\overline{ A_k A_{k+1} }$ denote a contour that has image equal to the line segment $A_k A_{k + 1}$, and has start point $A_k$ and end point $A_{k+1}$.

From Boundary of Polygon as Contour, it follows that there exists a contour $C = \overline {A_1 A_2} \cup \overline {A_2 A_3} \cup \overline {A_3 A_1}$ with $\Img C = \partial \triangle_n$.
Define four smaller triangles by:

$\triangle^{\paren 1} = A_1 B_1 B_3$
$\triangle^{\paren 2} = A_2 B_2 B_1$
$\triangle^{\paren 3} = A_3 B_3 B_2$
$\triangle^{\paren 4} = B_1 B_2 B_3$

Let $\map L {\partial \triangle_n}$ be the length of the contour with image $\partial \triangle_n$, which is also the length of the circumference of $\triangle_n$.
The Midline Theorem shows that each side of the four smaller triangles are half the length of the corresponding side of $\triangle_n$.
The distance between any two complex numbers in the interior or on the boundary of a triangle cannot be larger than the maximal side length of the triangle.
As the side is part of the circumference, any side length is smaller than the length of the circumference.
Combining this, we get:

$(1): \quad \ds \max_{z , z' \mathop \in  \partial \triangle^{\paren k} \mathop \cup \Int{ \triangle^{\paren k} } } \cmod {z - z'} \le \dfrac 1 2 \ds \max_{z, z' \mathop \in \partial \triangle_n \mathop \cup \Int {\triangle_n^{\phantom{ ) } } } } \size {z - z'} < \dfrac 1 2 \map L {\partial \triangle_n}$
As $\overline {B_2 B_1}$ is the reversed contour of $\overline {B_1 B_2}$, we have:














\(\ds \oint_{\partial \triangle_n} \map f z \rd z\)

\(=\)







\(\ds \sum_{k \mathop = 1}^3 \oint_{\partial \triangle^{\paren k} } \map f z \rd z + \oint_{\overline {B_1 B_2} \cup \overline {B_2 B_3} \cup \overline {B_3 B_1} } \map f z \rd z\)





Contour Integral of Closed Contour Split into Two Contours used three times














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^4 \oint_{\partial \triangle^{\paren k} } \map f z \rd z\)









Choose $j \in \set {1, 2, 3, 4}$ such that:

$\cmod {\ds \oint_{\partial \triangle^{\paren j} } \map f z \rd z} = \ds \max_{k \mathop \in \set {1, 2, 3, 4} } \cmod {\oint_{\partial \triangle^{\paren k} } \map f z \rd z}$
and set $\triangle_{n + 1} = \triangle^{\paren j}$.
It follows that:














\(\ds \cmod {\oint_{\partial \triangle_n} \map f z \rd z}\)

\(\le\)







\(\ds \sum_{k \mathop = 1}^4 \size {\oint_{\partial \triangle^{\paren k} } \map f z \rd z}\)





Triangle Inequality used three times














\(\ds \)

\(\le\)







\(\ds 4 \cmod {\oint_{\partial \triangle_{n + 1} } \map f z \rd z}\)





based on the definition of $\triangle_{n + 1}$



By induction over $n \in \N$, it follows that:

$(2): \quad \ds \cmod {\oint_{\partial \triangle} \map f z \rd z} \le 4^n \size {\oint_{\partial \triangle_n} \map f z \rd z}$
$\Box$

Create a sequence $\sequence {z_n}_{n \mathop \in \N}$ in $\partial \triangle \mathop \cup \Int \triangle$ by letting $z_n$ be the incenter of $\triangle_n$, so $z_N \in \partial \triangle^{\paren n} \cup \Int {\triangle^{\paren n} }$ for all $N \ge n$.
Bolzano-Weierstrass Theorem shows that $\sequence {z_n}_{n \mathop \in \N}$ has a convergent subsequence that converges to $z_0 \in \C$.
Jordan Curve Theorem shows that $\partial \triangle^{\paren n} \mathop \cup \Int {\triangle^{\paren n} } = \complement \Ext {\triangle^{\paren n} }$ is closed.
By definition of closed set, we have $z_0 \in \partial \triangle^{\paren n} \mathop \cup \Int {\triangle^{\paren n} }$ for all $n \in \N$.
Now let $z \in \C \setminus \set {z_0}$.
Choose $n \in \N$ such that:

$\cmod {z - z_0} > \dfrac 1 {2^n} \ds \max_{z, z' \in \partial \triangle \cup \Int \triangle} \cmod {z - z'}$
From $(1)$, we have:

$\ds \dfrac 1 {2^n} \max_{z, z' \mathop \in \partial \triangle \mathop \cup \Int \triangle} \cmod {z - z'} \ge \max_{z, z' \mathop \in \partial \triangle^{\paren n} \mathop \cup \Int {\triangle^{\paren n} } } \cmod {z - z'}$
It follows that $z_0 \notin \partial \triangle_n \cup \Int {\triangle_n} $, so:

$\ds \bigcap_{n \mathop = 0}^\infty \paren {\partial \triangle_n \cup \Int {\triangle_n} } = \set {z_0}$
$\Box$

Define a function $g: D \to \C$ by:

$\map g z = \map {f'} {z_0} \paren {z - z_0} + \map f {z_0}$
From Derivative of Complex Polynomial, it follows that $g$ has a primitive $G: D \to \C$, defined by:

$\map G z = \dfrac {\map {f'} {z_0} } 2 \paren {z - z_0}^2 + \map f {z_0} z$
From Fundamental Theorem of Calculus for Contour Integrals, it follows that for all $n \in \N$:

$(3): \quad \ds \oint_{\partial \triangle_n} \map g z \rd z = 0$

Let $\epsilon > 0$ be given.
By Linear Bound between Complex Function and Derivative, there exists $r > 0$ such that $\cmod {\map f z - \map g z} \le \epsilon \cmod {z - z_0}$ for all $z \in \map {N_r} {z_0}$.
We now find $n \in \N$ such that $\triangle_n \subseteq \map {N_r} {z_0}$, which must exist as the triangles in $\sequence {\triangle_n}_{n \mathop \in \N}$ grow small enough to fit into the open disk $\map {N_r} {z_0}$.
Then:














\(\ds \cmod {\oint_{\partial \triangle} \map f z \rd z}\)

\(\le\)







\(\ds 4^n \cmod {\oint_{\partial \triangle_n} \map f z \rd z}\)





by $(2)$














\(\ds \)

\(=\)







\(\ds 4^n \cmod {\oint_{\partial \triangle_n} \map f z - \map g z \rd z}\)





by $(3)$ and Linear Combination of Contour Integrals














\(\ds \)

\(\le\)







\(\ds 4^n \epsilon \max_{z \in  \partial \triangle_n \cup \Int {\triangle_n} } \cmod {z - z_0} \map L {\partial \triangle_n}\)





Estimation Lemma for Contour Integrals














\(\ds \)

\(<\)







\(\ds 4^n \epsilon \paren {\map L {\partial \triangle_n} }^2\)





by $(1)$














\(\ds \)

\(=\)







\(\ds 4^n \epsilon \paren {\dfrac 1 {2^n} \map L {\partial \triangle} }^2\)





repeated use of $(1)$














\(\ds \)

\(=\)







\(\ds \epsilon \map L {\partial \triangle}\)









As $\epsilon > 0$ was arbitrary, we must have:

$\ds \oint_{\partial \triangle} \map f z \rd z = 0$
$\Box$

As the vertices $A_1, A_2, A_3$ can be renamed in any order, it does not matter how we parameterize the simple closed contour $C$ with image $\partial \triangle$.
$\blacksquare$


Source of Name
This entry was named for Édouard Jean-Baptiste Goursat.


Historical Note
Goursat's Integral Lemma was originally published by Goursat in $1884$, in a version which used rectangles rather than triangles.
The formulation of the theorem shown here is due to Alfred Pringsheim.





