# 

Source: https://proofwiki.org/wiki/Pointwise_Exponentiation_preserves_A.E._Equality

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space and let $p \in \hointr 0 \infty$. 
Let $f, g : X \to \R$ be real-valued $\Sigma$-measurable functions such that: 

$\size f = \size g$ $\mu$-almost everywhere.

Then: 

$\size f^p = \size g^p$ $\mu$-almost everywhere.


Proof
Since: 

$\size f = \size g$ $\mu$-almost everywhere
there exists a $\mu$-null set $N$ such that: 

if $\size {\map f x} \ne \size {\map g x}$ then $x \in N$.
If $\size {\map f x} = \size {\map g x}$, then $\size {\map f x}^p = \size {\map g x}^p$.
So by the Rule of Transposition, we have if $\size {\map f x}^p \ne \size {\map g x}^p$ then $\size {\map f x} \ne \size {\map g x}$.
So, if $x \in X$ has $\size {\map f x}^p \ne \size {\map g x}^p$ then $x \in N$. 
So:

$\size f^p = \size g^p$ $\mu$-almost everywhere.
$\blacksquare$





