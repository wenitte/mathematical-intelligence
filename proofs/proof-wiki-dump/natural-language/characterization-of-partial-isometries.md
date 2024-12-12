# 

Source: https://proofwiki.org/wiki/Characterization_of_Partial_Isometries



Theorem
Let $\struct {\HH_1, \innerprod \cdot \cdot_1}$ and $\struct {\HH_2, \innerprod \cdot \cdot_2}$ be Hilbert spaces. 
Let $T : \HH_1 \to \HH_2$ be a bounded linear transformation.

The following statements are equivalent:

$(1) \quad$ $T$ is a partial isometry
$(2) \quad$ $T = T T^\ast T$
$(3) \quad$ $T^\ast T$ is a Hilbert space projection
$(4) \quad$ $T T^\ast$ is a Hilbert space projection.


Proof
$(2)$ implies $(3)$
Suppose that $T = T T^\ast T$.
We then have $T^\ast T = T^\ast \paren {T T^\ast T} = \paren {T^\ast T}^2$.
From Product of Element in *-Star Algebra with its Star is Hermitian, $T^\ast T$ is Hermitian.
Hence from Characterization of Projections, $T^\ast T$ is a Hilbert space projection.
$\Box$


$(3)$ implies $(2)$
Suppose that:

$T^\ast T$ is a Hilbert space projection
We then have, for $x \in \HH_1$:














\(\ds \norm {T x}^2_2\)

\(=\)







\(\ds \innerprod {T x} {T x}_2\)





Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds \innerprod {T^\ast T x} x_1\)





Definition of Adjoint Linear Transformation














\(\ds \)

\(=\)







\(\ds \innerprod {\paren {T^\ast T}^2 x} x_1\)





$T^\ast T$ is idempotent














\(\ds \)

\(=\)







\(\ds \innerprod {T^\ast T x} {T^\ast T x}_1\)





Definition of Adjoint Linear Transformation, Definition of Hermitian Operator














\(\ds \)

\(=\)







\(\ds \norm {T^\ast T x}^2\)





Definition of Inner Product Norm



We then have, for $x \in \HH_1$:

$\innerprod {T x} {T T^\ast T x} = \innerprod {T^\ast T x} {T^\ast T x} = \norm {T^\ast T x}^2$
from the definition of the adjoint and inner product norm.
From Square of Inner Product Norm of Sum, we have:

$\norm {T \paren {I - T^\ast T} x}^2 = \norm {T x}^2 - 2 \map \Re {\innerprod {T x} {T T^\ast T x} } + \norm {T^\ast T x}^2$
We have:

$\innerprod {T x} {T T^\ast T x} = \norm {T^\ast T x}^2 = \norm {T x}^2$
So we have:

$2 \map \Re {\innerprod {T x} {T T^\ast T x} } + \norm {T^\ast T x}^2 = -2 \norm {T x}^2 + \norm {T x}^2 = -\norm {T x}^2$
and hence:

$\norm {T \paren {I - T^\ast T} x}^2 = 0$
Hence from Norm Axiom $\text N 1$: Positive Definiteness, we have:

$T \paren {I - T^\ast T} x = {\mathbf 0}_\HH$ for each $x \in \HH_1$.
We conclude that:

$T = T T^\ast T$
$\Box$


$(3)$ implies $(4)$
Suppose that:

$T^\ast T$ is a Hilbert space projection
We then have:














\(\ds \paren {T T^\ast}^3\)

\(=\)







\(\ds \paren {T T^\ast} \paren {T T^\ast} \paren {T T^\ast}\)




















\(\ds \)

\(=\)







\(\ds T \paren {T^\ast T} \paren {T^\ast T} T^\ast\)




















\(\ds \)

\(=\)







\(\ds T \paren {T^\ast T}^2 T^\ast\)




















\(\ds \)

\(=\)







\(\ds T \paren {T^\ast T} T^\ast\)





$T^\ast T$ is idempotent














\(\ds \)

\(=\)







\(\ds \paren {T T^\ast}^2\)









Hence:

$\paren {T T^\ast}^3 - \paren {T T^\ast}^2 = {\mathbf 0}_{\map B {\HH_2} }$
From the Spectral Mapping Theorem for Polynomials and Spectrum of Zero Vector in Algebra, we have that:

$\set {z^3 - z^2 : z \in \map \sigma {T T^\ast} } = \set 0$
So if $z \in \map \sigma {T T^\ast}$ then $z^3 - z^2 = 0$. 
That is, $z = 0$ or $z = 1$.
Then $\map \sigma {T T^\ast} \subseteq \set {0, 1}$.
From Product of Element in *-Star Algebra with its Star is Hermitian, $T T^\ast$ is Hermitian.
Hence $T T^\ast$ is in particular normal. 
So from Normal Element of C*-Algebra is Projection iff Spectrum contains only Zero and One, $T T^\ast$ is idempotent.
From Characterization of Projections, $T T^\ast$ is then a Hilbert space projection.
$\Box$


$(4)$ implies $(3)$
To reiterate, the fact that $(3) \implies (4)$ shows:

if $T^\ast T$ is a Hilbert space projection then $T T^\ast$ is a Hilbert space projection.
From Adjoint is Involutive, we have:

$T^{\ast \ast} = T$
Hence swapping $T$ for $T^\ast$ in the above we have that:

if $T T^\ast$ is a Hilbert space projection then $T^\ast T$ is a Hilbert space projection.
Hence we have that $(4)$ implies $(3)$. 
$\Box$


$(2)$ implies $(1)$
Suppose that $T = T T^\ast T$.
We show that in this case, $T^\ast T$ is the orthogonal projection onto $\paren {\map \ker T}^\perp$.
From Product of Element in *-Star Algebra with its Star is Hermitian, $T^\ast T$ is Hermitian.
Further from:

$T = T T^\ast T$
we have that:

$T^\ast T = \paren {T^\ast T}^2$
So $T^\ast T$ is Hermitian and idempotent. 
So from Characterization of Projections, we have that $T^\ast T$ is a Hilbert space projection.
Hence from Characterization of Projections, $\Img {T^\ast T}$ is closed.
We just need to show that $\Img {T^\ast T} = \paren {\map \ker T}^\perp$. 
From Kernel of Linear Transformation is Orthocomplement of Image of Adjoint, we have:

$\map \ker T = \paren {\Img {T^\ast} }^\perp$
Hence:

$\paren {\map \ker T}^\perp = \paren {\Img {T^\ast} }^{\perp \perp}$
From Double Orthocomplement is Closed Linear Span, we have:

$\paren {\Img {T^\ast} }^{\perp \perp} = \paren {\Img {T^\ast} }^-$
We have:














\(\ds T^\ast\)

\(=\)







\(\ds T^\ast \paren {T T^\ast}^\ast\)





Adjoint of Composition of Linear Transformations is Composition of Adjoints














\(\ds \)

\(=\)







\(\ds T^\ast T T^\ast\)





Adjoint of Composition of Linear Transformations is Composition of Adjoints, Adjoint is Involutive



Hence for each $x \in \HH_1$ we have:

$T^\ast x = \map {T^\ast T} {T^\ast x}$
So $\Img {T^\ast} \subseteq \Img {T^\ast T}$.
Clearly we have $\Img {T^\ast T} \subseteq \Img {T^\ast}$, so we obtain $\Img {T^\ast} = \Img {T^\ast T}$.
Hence we have:

$\paren {\map \ker T}^\perp = \paren {\Img {T^\ast T} }^- = \Img {T^\ast T}$
from Set is Closed iff Equals Topological Closure.
Hence $T^\ast T$ is an orthogonal projection onto $\paren {\map \ker T}^\perp$.
Now, for $x \in \paren {\map \ker T}^\perp$ we have:

$\paren {T^\ast T} x = x$
from Fixed Points of Orthogonal Projection.
We therefore have, for $x \in \paren {\map \ker T}^\perp$:














\(\ds \norm {T x}^2\)

\(=\)







\(\ds \innerprod {T x} {T x}_2\)





Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds \innerprod x {T^\ast T x}_1\)





Definition of Adjoint Linear Transformation














\(\ds \)

\(=\)







\(\ds \innerprod x x_1\)




















\(\ds \)

\(=\)







\(\ds \norm x^2_1\)





Definition of Inner Product Norm



Hence:

$\norm {T x} = \norm x$ for each $x \in \paren {\map \ker T}^\perp$.
$\Box$


$(1)$ implies $(3)$
Suppose that:

$T$ is a partial isometry.
Let $P$ be the orthogonal projection onto $\paren {\map \ker T}^\perp$.
From Orthogonal Projection is Projection and Characterization of Projections, $P$ is Hermitian.
We show that $T^\ast T = P$.
Let $x \in \paren {\map \ker T}^\perp$.
We then have:
Then:














\(\ds \innerprod {T^\ast T x} x_1\)

\(=\)







\(\ds \innerprod {T x} {T x}_2\)





Definition of Adjoint Linear Transformation














\(\ds \)

\(=\)







\(\ds \norm {T x}^2_2\)





Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds \norm x^2_1\)





Definition of Partial Isometry














\(\ds \)

\(=\)







\(\ds \norm {P x}^2_1\)





Fixed Points of Orthogonal Projection














\(\ds \)

\(=\)







\(\ds \innerprod {P x} {P x}_1\)





Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds \innerprod {P^2 x} x_1\)





Definition of Adjoint Linear Transformation














\(\ds \)

\(=\)







\(\ds \innerprod {P x} x_1\)





$P$ is idempotent



From Operator with Zero Numerical Range is Zero Operator: Corollary, we obtain $T^\ast T = P$. 
In particular, $T^\ast T$ is a projection by Characterization of Projections.
$\blacksquare$


Sources
1990: Gerard J. Murphy: C*-Algebras and Operator Theory ... (previous) ... (next): $2.3$: Operators and Sesquilinear Forms




