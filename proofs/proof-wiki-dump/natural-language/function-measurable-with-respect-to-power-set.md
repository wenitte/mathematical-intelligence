# 

Source: https://proofwiki.org/wiki/Function_Measurable_with_respect_to_Power_Set

Theorem
Let $\struct {X, \map \PP X}$ be a measurable space, where $\map \PP X$ is the power set of $X$. 
Let $f : X \to \overline \R$ be a function.

Then $f$ is $\map \PP X$-measurable function.


Proof
For each $\alpha \in \R$, we have: 

$\set {x \in X : \map f x \le \alpha} \subseteq X$
That is, from the definition of power set:

$\set {x \in X : \map f x \le \alpha} \in \map \PP X$
So for each $\alpha \in \R$:

the set $\set {x \in X : \map f x \le \alpha}$ is $\map \PP X$-measurable.
So:

$f$ is $\map \PP X$-measurable.
$\blacksquare$





