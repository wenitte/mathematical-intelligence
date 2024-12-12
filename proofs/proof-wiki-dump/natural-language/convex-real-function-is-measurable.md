# 

Source: https://proofwiki.org/wiki/Convex_Real_Function_is_Measurable

Theorem
Let $f : \R \to \R$ be a convex real function.
Then $f$ is measurable. 


Proof 1
From Convex Real Function is Continuous, $f$ is continuous.
From Continuous Mapping is Measurable, $f$ is measurable.
$\blacksquare$


Proof 2
From Convex Real Function is Pointwise Supremum of Affine Functions: Corollary, there exists a countable set $\SS \subseteq \R^2$ such that: 

$\ds \map f x = \sup_{\tuple {a, b} \mathop \in \SS} \paren {a x + b}$
for each $x \in \R$.
From Linear Function is Continuous, the map $x \mapsto a x + b$ is continuous for each $\tuple {a, b} \in \SS$. 
From Continuous Mapping is Measurable, the map $x \mapsto a x + b$ is measurable.
Since $\SS$ is countable, we can apply Pointwise Supremum of Measurable Functions is Measurable to obtain that $f$ is measurable.
$\blacksquare$





