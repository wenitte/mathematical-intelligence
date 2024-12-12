# 

Source: https://proofwiki.org/wiki/Complex_Plane_is_Homeomorphic_to_Real_Plane

Theorem
Let $\C$ denote the complex plane.
Let $\R^2$ denote the Euclidean plane.

Then the function $\phi : \R^2 \to \C$ defined by:

$\map \phi {x, y} = x + i y$
is a homeomorphism between $\R^2$ and $\C$.


Proof
Define $\phi^{-1} : \C \to \R^2$ by:

$\map {\phi^{-1} } z = \tuple {\map \Re z, \map \Im z}$

Then $\phi^{-1}$ is the inverse of $\phi$, as:

$\map \phi {\map { \phi^{-1} } z} = \map \Re z + i \map \Im z = z$
$\map {\phi^{-1} } {\map \phi {x, y} } = \tuple {\map \Re {x + i y}, \map \Im {x + i y} } = \tuple {x, y}$

By definition of bijection, it follows that $\phi$ is bijective.
We show continuity of $\phi$.
Complex Plane is Metric Space shows that for $\map \phi {x_1, y_1} = x_1 + i y_1, \map \phi {x_2, y_2} = x_2 + i y_2$, we have:

$\cmod {\map \phi {x_2, y_2} - \map \phi {x_1, y_1} } = \sqrt {\paren {x_2 - x_1}^2 + \paren {y_2 - y_1}^2}$
which is equal to the distance between $\tuple {x_1, x_2}$ and $\tuple {y_1, y_2}$ in the Euclidean metric on the Euclidean plane.
Let $\epsilon \in \R_{>0}$.
With $\delta = \epsilon$, we have:

$\sqrt {\paren {x_2 - x_1}^2 + \paren {y_2 - y_1}^2} < \delta \implies \cmod {\map \phi {x_2, y_2} - \map \phi {x_1 , y_1} } < \epsilon$
which shows the continuity of $\phi$.
The continuity of $\phi^{-1}$ is proven the same way.
$\blacksquare$





