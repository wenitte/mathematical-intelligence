# 

Source: https://proofwiki.org/wiki/Pointwise_Scalar_Multiplication_preserves_A.E._Equality

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f, g : X \to \overline \R$ be extended real-valued functions such that: 

$f = g$ $\mu$-almost everywhere.
Let $\lambda \in \overline \R$.

Then: 

$\lambda \cdot f = \lambda \cdot g$ $\mu$-almost everywhere
where $\lambda \cdot f$ denotes pointwise scalar multiplication.


Proof
Since:

$f = g$ $\mu$-almost everywhere
there exists a $\mu$-null set $N \subseteq X$ such that: 

if $\map f x \ne \map g x$ then $x \in N$.
Note that if $\map f x = \map g x$ then $\lambda \map f x = \lambda \map g x$. 
So, from the Rule of Transposition we have:

if $\lambda \map f x \ne \lambda \map g x$ then $\map f x \ne \map g x$
so:

if $\lambda \map f x \ne \lambda \map g x$ then $x \in N$.
So, we have: 

$\lambda \cdot f = \lambda \cdot g$ $\mu$-almost everywhere.
$\blacksquare$





