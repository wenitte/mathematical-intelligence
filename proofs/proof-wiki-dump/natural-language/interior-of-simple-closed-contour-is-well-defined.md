# 

Source: https://proofwiki.org/wiki/Interior_of_Simple_Closed_Contour_is_Well-Defined

Theorem
Let $C$ be a simple closed contour in the complex plane.
Let $f : \closedint 0 1 \to \R^2$ be a Jordan curve.
Let $\phi : \R^2 \to \C$ be defined by:

$\map \phi {x, y} = x + i y$

Let $\Img C = \map \phi {\Img f}$, where $\Img C$ denotes the image of $C$, and $\Img f$ denotes the image of $f$.

Then the interior of $C$:

$\Int C = \map \phi {\Int f}$
is well-defined.
Here, $\Int f$ denotes the interior of $f$.


Proof
Let $C$ be defined as a concatenation of a (finite) sequence of directed smooth curves $\sequence {C_1, \ldots, C_n}$.
We show existence of a Jordan curve $f : \closedint 0 1 \to \R^2$ that fulfills the criteria $\map \phi {\Img f} = \Img C$.
Reparameterization of Directed Smooth Curve with Given Domain shows that $C_k$ can be reparameterized by a smooth path:

$\gamma_k: \closedint {\dfrac {k - 1} n} {\dfrac k n} \to \C$ for all $k \in \set {1, \ldots, n}$

Define $\gamma: \closedint 0 1 \to \C$ by:

$\map \gamma t = \map {\gamma_k} t$ for all $t \in \closedint {\dfrac {k - 1} n} {\dfrac k n}$

Reparameterization of Directed Smooth Curve Preserves Image shows that $\Img \gamma = \Img C$.
Pasting Lemma for Pair of Continuous Mappings on Closed Sets shows that $\gamma$ is continuous.
By definition of simple contour, it follows that:

$\map \gamma {t_1} \ne \map \gamma {t_2}$ for all $t_1 \in \hointr 0 1, t_2 \in \hointr 0 1$ with $t_1 \ne t_2$

By definition of closed contour, it follows that:

$\map \gamma 0 = \map \gamma 1$

Complex Plane is Homeomorphic to Real Plane shows that $\phi$ is a homeomorphism.
Composite of Continuous Mappings between Metric Spaces is Continuous shows that $\phi^{-1} \circ \gamma : \closedint 0 1 \to \R^2$ is continuous.
As $\phi^{-1}$ is a homeomorphism, it follows by the definition of Jordan curve that $\phi^{-1} \circ \gamma$ is a Jordan curve.
Set $f = \phi^{-1} \circ \gamma$.
We now have $\Img C = \map \phi {\Img f}$.
$\Box$

We show uniqueness of the definition of $\Int C$.
Let $g: \closedint 0 1 \to \R^2$ be a Jordan curve such that $\Img g = \Img f$.
Jordan Curve Theorem shows that the definition of the interior of a Jordan curve only depends on the image of the Jordan curve.
Then:

$\Int g = \Int f$
$\blacksquare$





