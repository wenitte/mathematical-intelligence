# 

Source: https://proofwiki.org/wiki/Image_of_Element_under_Inverse_Mapping



Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping such that its inverse $f^{-1}: T \to S$ is also a mapping.

Then:

$\forall x \in S, y \in T: \map f x = y \iff \map {f^{-1} } y = x$


Corollary 1
$\forall x \in S: \map {f^{-1} } {\map f x} = x$


Corollary 2
$\forall y \in T: \map f {\map {f^{-1} } y} = y$


Proof
Sufficient Condition
Let $f: S \to T$ be a mapping.
From the definition of inverse mapping:

$f^{-1} = \set {\tuple {y, x}: \tuple {x, y} \in f}$

Let $y = \map f x$.
From the definition of the preimage of an element:

$\map {f^{-1} } y = \set {s \in S: \tuple {y, x} \in f}$
Thus:

$x \in \map {f^{-1} } y$

However, $f^{-1}$ is a mapping.
Therefore, by definition:

$\forall y \in T: \tuple {y, x_1} \in f^{-1} \land \tuple {y, x_2} \in f^{-1} \implies x_1 = x_2$
Thus:

$\forall s \in \map {f^{-1} } y: s = x$
Thus:

$\map {f^{-1} } y = \set x$
That is:

$x = \map {f^{-1} } y$
$\Box$


Necessary Condition
Let $\map {f^{-1} } y = x$.
By definition of inverse mapping:

$\map f x = y$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions: Theorem $5.2$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 22.3$: Injections; bijections; inverse of a bijection




