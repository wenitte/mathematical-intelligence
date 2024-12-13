# 

Source: https://proofwiki.org/wiki/Inverse_Element_of_Injection



Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be an injection.

Then:

$\map {f^{-1} } y = x \iff \map f x = y$


Proof
Necessary Condition
Let $y = \map f x$.
From the definition of the preimage of an element:

$\map {f^{-1} } y = \set {x \in S: \tuple {y, x} \in f}$
Thus:

$x \in \map {f^{-1} } y$
By definition of injection, $\map {f^{-1} } y$ is a singleton:

$\map {f^{-1} } y = \set x$
which can be expressed as:

$\map {f^{-1} } y = x$
$\Box$


Sufficient Condition
Let $\map {f^{-1} } y = x$.
Thus by definition of direct image mapping:

$\map {f^\gets} {\set y} = \set x$
Then:

$\map {f^\to} {\map {f^\gets} {\set y} } = \map {f^\to} {\set x}$
So from the Image of Preimage under Mapping: Corollary:

$\set y = \map {f^\to} {\set x}$
and so by definition of direct image mapping:

$y = \map f x$
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 10$: Inverses and Composites




