# 

Source: https://proofwiki.org/wiki/Pointwise_Convergence_implies_Convergence_Almost_Everywhere

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space. 
Let $f : X \to \R$ be a $\Sigma$-measurable function.
For each $n \mathop \in \N$, let $f_n : X \to \R$ be a $\Sigma$-measurable function.

Then:

if $\sequence {f_n}_{n \mathop \in \N}$ converges pointwise to $f$, it converges almost everywhere to $f$.


Proof
If $\sequence {f_n}_{n \mathop \in \N}$ converges pointwise to $f$, then: 

$\sequence {\map {f_n} x}_{n \mathop \in \N}$ converges to $\map f x$ for each $x \in X$.
So:

$\set {x \in X : \sequence {\map {f_n} x}_{n \mathop \in \N} \text { does not converge to } \map f x} = \O$
From Measure of Empty Set is Zero, we have: 

$\map \mu \O = 0$
So:

$\map \mu {\set {x \in X : \sequence {\map {f_n} x}_{n \mathop \in \N} \text { does not converge to } \map f x} } = 0$
So:

$\sequence {f_n}_{n \mathop \in \N}$ converges almost everywhere to $f$.
$\blacksquare$





