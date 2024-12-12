# 

Source: https://proofwiki.org/wiki/Fixed_Point_of_Composition_of_Inflationary_Mappings



Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $f, g: S \to S$ be inflationary mappings.
Let $x \in S$.

Then:

$x$ is a fixed point of $f \circ g$
if and only if:

$x$ is a fixed point of both $f$ and $g$.


Proof
Necessary Condition
Follows from Fixed Point of Mappings is Fixed Point of Composition.
$\Box$


Sufficient Condition
Let $h = f \circ g$.
Let $x$ be a fixed point of $h$.
Then by definition of composition:

$\map f {\map g x} = x$
Since $f$ is inflationary:

$x \preceq \map g x$
Aiming for a contradiction, suppose $x \ne \map g x$.
Then $x \prec \map g x$.
Since $f$ is also inflationary:

$\map g x \preceq \map f {\map g x}$
Thus by Extended Transitivity:

$x \prec \map f {\map g x}$
But this contradicts the assumption that $x$ is a fixed point of $f \circ g$.
Therefore, $x = \map g x$, and $x$ is a fixed point of $g$.

Aiming for a contradiction, suppose $\map f x \ne x$.
Then $x \prec \map f x$.
As we have shown that $x = \map g x$, it follows that:

$x \prec \map f {\map g x}$
But this contradicts assumption that $x$ is a fixed point of $f \circ g$.
Hence, $x$ is also a fixed point of $f$.
$\blacksquare$





