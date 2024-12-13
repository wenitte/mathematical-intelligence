# 

Source: https://proofwiki.org/wiki/Limit_of_Functions_that_Agree

Theorem
Let $f$ and $g$ be real functions.
Let $f$ and $g$ agree for all $x$ in a deleted neighborhood of $c$.
Let the limit:

$\ds \lim_{x \mathop \to c} \map f x$
exist.

Then the limit:

$\ds \lim_{x \mathop \to c} \map g x$
also exists, and:

$\ds \lim_{x \mathop \to c} \map f x = \lim_{x \mathop \to c} \map g x$


Proof
By hypothesis:

$\map f x = \map g x$
for all $x$ such that:

$x \in \R: 0 < \size {\alpha - x} < \epsilon$
Putting $c$ for $\alpha$ and $\delta$ for $\epsilon$, this is equivalent to:

$x \in \R: 0 < \size {x - c} < \delta$

By definition, that the limit of $\map f x$ exists is to say:

$\exists L: \forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: 0 < \size {x - c} < \delta \implies \size {\map f x - L} < \epsilon$
For all $x$ relevant, we can substitute $\map f x$ with $\map g x$ and get:

$\exists L: \forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: 0 < \size {x - c} < \delta \implies \size {\map g x - L} < \epsilon$
The result follows by the definition of limit.
$\blacksquare$


Sources
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): Appendix $A$: Functions That Agree at All But One Point




