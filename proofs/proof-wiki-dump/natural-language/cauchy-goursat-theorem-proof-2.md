# 

Source: https://proofwiki.org/wiki/Cauchy-Goursat_Theorem/Proof_2

Theorem
Let $f: D \to \C$ be a holomorphic function, where $D \subseteq \C$ is a simply connected domain.
Let $C$ be a closed contour in $D$.

Then:

$\ds \oint_C \map f z \rd z = 0$


Proof
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





