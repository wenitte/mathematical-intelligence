# 

Source: https://proofwiki.org/wiki/Definitions_of_Genera_are_Equivalent



Theorem
In appropriate circumstances, the following definitions of genus are equivalent:

Genus of Manifold
The genus of a compact topological manifold is the number of handles it has.


Genus of Riemann Surface
The genus of a Riemann surface $R$ is the number of linearly independent holomorphic $1$-forms that are defined on $R$.


Genus of Plane Algebraic Curve
Let $\CC$ be a plane algebraic curve with no singular points.
The genus of $\CC$ is defined as:

$\dbinom {d - 1} 2$
where $d$ denotes the degree of $\CC$.



This article is complete as far as it goes, but it could do with expansion.In particular: Explain what those circumstances areYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Proof

This article needs to be tidied.In particular: please make an attempt to comply with house style and rules. It's good manners.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Theorem: Let $C$ be a non-singular projective algebraic curve of degree $n$. Then the genus of $C$ as a Riemann surface is

$
g=\frac{(n-1)(n-2)}{2} .
$
Proof: Take the map $f=y / x$ from $C$ to $\mathbf{P}^1$.
By Ramification points of y/x,
the ramification points occur where the tangents pass through $[0,0,1]$ and are therefore given by the equation

$\frac{\partial P}{\partial z}=0$
The multiplicity is bigger than 2 only if $\map{I_p}{C, T_p}>2$, i.e. if $p$ is an inflection point, but there are only finitely many of these, so by a projective transformations we can assume that $[0,0,1]$ does not lie on the tangent to any one of them.
This means that each $m_k$ in the Riemann-Hurwitz Formula is 2, and it remains to calculate the number of ramification points.
This is the number of points of intersection of $P=0$, the curve $C$ of degree $n$, and $\partial P / \partial z=0$, a curve $D$ which is of degree $n-1$.
Since $C$ is nonsingular it is irreducible, and so $C$ and $D$ can have no common component.
We will use Bézout's Theorem, so we need to check that $[a]=\left[a_0, a_1, a_2\right] \in C \cap D$ is a nonsingular point of $D$ and that the tangent lines are distinct.
Now $\paren{P_{z x}, P_{z y}, P_{z z}}$ is not identically zero at $\left[a_0, a_1, a_2\right]$ because this would make the Hessian of $C$ vanish and we know that $\left[a_0, a_1, a_2\right]$ is not an inflection point.
This shows that $D$ is nonsingular here.
Suppose that the tangents of $C$ and $D$ coincide then $\paren{P_{z x}, P_{z y}, P_{z z}}$ is a multiple of $\paren{P_x, P_y, P_z}$.
As in our discussion of inflection points we use the symmetric bilinear form $B$ defined by the matrix of partial derivatives $P_{i j}$. Then $\map B{a, a}=0=\map B{a, \alpha}$ where the tangent line joins $[a]$ and $[\alpha]$. Put $v=(0,0,1)$.
By Euler's Homogeneous Function Theorem

$
a_0 P_{z x}+a_1 P_{z y}+a_2 P_{z z}=(n-1) P_z=0
$
since $P_z(a)=0$.
This gives $B(a, v)=0$.
Moreover since $P_{z z}(a)=\lambda P_z(a)=0$, we have $B(v, v)=0$.
Since $[a]$ is not an inflection point, $\map\det B \neq 0$ so from

$
0=\map B{a, a}=\map B{a, \alpha}=\map B{a, v}
$
we deduce $v=\mu a+\nu \alpha$. But then

$
0=\map B{v, v}=\nu^2\map B{\alpha, \alpha}
$
and, by Quadric containing a line is singular, this gives $\map\det B=0$ unless $\nu=0$. But then $[a]=[0,0,1]$ which we have specifically excluded.
We conclude that the tangents are distinct and it follows that the conditions for Bézout's Theorem hold, so the number of ramification points is exactly $n(n-1)$.
From the Riemann-Hurwitz Formula we obtain

$
2-2 g=2 n-n(n-1)
$
and so

$
g=\frac{1}{2}(n-1)(n-2) .
$
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): genus
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): genus
2009: Nigel Hitchin: Algebraic Curves (B3b course notes) Section 4.3 The degree-genus formula, Theorem 23, page 49




