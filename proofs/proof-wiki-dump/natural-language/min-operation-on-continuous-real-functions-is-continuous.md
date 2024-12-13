# 

Source: https://proofwiki.org/wiki/Min_Operation_on_Continuous_Real_Functions_is_Continuous



Theorem
Let $f: \R \to \R$ and $g: \R \to \R$ be real functions.
Let $f$ and $g$ be continuous at a point $a \in \R$.
Let $h: \R \to \R$ be the real function defined as:

$\map h x := \map \min {\map f x, \map g x}$

Then $h$ is continuous at $a$.


Proof
From Min Operation Representation on Real Numbers

$\min \set{x, y} = \dfrac 1 2 \paren {x + y - \size {x - y} }$
Hence:

$\min \set {\map f x, \map g x} = \dfrac 1 2 \paren {\map f x + \map g x - \size {\map f x - \map g x} }$
From Difference Rule for Continuous Real Functions:

$\map f x - \map g x$ is continuous at $a$.
From Absolute Value of Continuous Real Function is Continuous:

$\size {\map f x - \map g x}$ is continuous at $a$.
From Sum Rule for Continuous Real Functions:

$\map f x + \map g x$ is continuous at $a$
and hence from Difference Rule for Continuous Real Functions again:

$\map f x + \map g x - \size {\map f x - \map g x}$ is continuous at $a$
From Multiple Rule for Continuous Real Functions:

$\dfrac 1 2 \paren {\map f x + \map g x - \size {\map f x - \map g x} }$ is continuous at $a$.
$\blacksquare$


Also see
Max Operation on Continuous Real Functions is Continuous


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: Exercise $1.5: 18 \ \text {(b)}$




