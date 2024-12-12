# 

Source: https://proofwiki.org/wiki/Brouwer%27s_Fixed_Point_Theorem/Smooth_Mapping


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
A smooth mapping $f$ of the closed unit ball $B^n \subset \R^n$ into itself has a fixed point:

$\forall f \in \map {C^\infty} {B^n \to B^n}: \exists x \in B^n: \map f x = x$


Proof
Suppose there exists such a mapping $f$ of the unit ball to itself without fixed points.
Since $\map f x \ne x$, the two points $x$ and $\map f x$ are distinct and there is a unique ray from $x$ to $\map f x$ on which they both lie.
Call this line $L$ and let $\map h x = \partial B^n \cap L$.
If $x \in \partial B^n$, then $\map h x = x$ and $h$ restricts to the identity on $\partial B^n$.
Since $x$ is in the line segment between $\map f x$ and $\map h x$, one may write the vector $\map h x - \map f x$ as a multiple $t$ times the vector $x - \map f x$, where $t \ge 1$.
Hence:

$\map h x = t x + \paren {1 - t} \map f x$
Since $f$ is smooth, the smoothness of $t$ with respect to $x$ implies the smoothness of $h$.
Taking the dot product of both sides of this formula and noting that $\size {\map h x} = 1$:

$t^2 \size {x - \map f x}^2 + 2 t \map f x \cdot \paren {x - \map f x} + \size {\map f x}^2 - 1 = 0$
Applying the Quadratic Formula gives:

$t = \dfrac {\map f x \cdot \paren {\map f x - x} } {\size {x - \map f x}^2}$
an expression for $t$ in smooth terms of $x$.
Hence $h$ is a smooth retract of a compact manifold onto its boundary, which contradicts the Retraction Theorem.
$\blacksquare$


Source of Name
This entry was named for Luitzen Egbertus Jan Brouwer.





