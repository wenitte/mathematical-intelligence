# 

Source: https://proofwiki.org/wiki/Pointwise_Multiplication_preserves_A.E._Equality

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f, g, h : X \to \overline \R$ be functions with: 

$f = g$ $\mu$-almost everywhere.

Then: 

$f \times h = g \times h$ $\mu$-almost everywhere
where $f \times h$ and $g \times h$ are the pointwise products of $f$ and $h$, and $g$ and $h$ respectively.


Proof
Since:

$f = g$ $\mu$-almost everywhere
there exists a $\mu$-null set $N \subseteq X$ such that: 

if $x \in X$ has $\map f x \ne \map g x$ then $x \in N$.
Note that if $x \in X$ is such that: 

$\map f x = \map g x$
then: 

$\map f x \map h x = \map g x \map h x$
By the Rule of Transposition, we therefore have: 

if $x \in X$ has $\map f x \map h x \ne \map g x \map h x$ then $\map f x \ne \map g x$.
So: 

if $x \in X$ has $\map f x \map h x \ne \map g x \map h x$ then $x \in N$.
Since $N$ is $\mu$-null, we therefore have: 

$f \times h = g \times h$ $\mu$-almost everywhere.
$\blacksquare$





