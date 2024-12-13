# 

Source: https://proofwiki.org/wiki/Pointwise_Addition_preserves_A.E._Equality

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f, g, F, G : X \to \overline \R$ be functions with: 

$f = F$ $\mu$-almost everywhere
and:

$g = G$ $\mu$-almost everywhere
and the pointwise sums $f + g$ and $F + G$ well-defined.

Then: 

$f + g = F + G$ $\mu$-almost everywhere.


Proof
Since:

$f = F$ $\mu$-almost everywhere
there exists a $\mu$-null set $N_1 \subseteq X$ such that: 

if $x \in X$ has $\map f x \ne \map F x$ then $x \in N_1$.
Since: 

$g = G$ $\mu$-almost everywhere
there exists a $\mu$-null set $N_2 \subseteq X$ such that: 

if $x \in X$ has $\map G x \ne \map G x$ then $x \in N_2$
Note that if $x \in X$ is such that: 

$\map f x = \map F x$
and:

$\map g x = \map G x$
then: 

$\map f x + \map g x = \map F x + \map G x$
whenever this sum is well-defined.
By the Rule of Transposition, we therefore have: 

if $x \in X$ has $\map f x + \map g x \ne \map F x + \map G x$ then $\map f x \ne \map F x$ or $\map g x \ne \map G x$.
That is, whenever $x \in X$ has $\map f x + \map g x \ne \map F x + \map G x$, we have: 

$x \in N_1 \cup N_2$
From Null Sets Closed under Countable Union, we have: 

$N_1 \cup N_2$ is $\mu$-null.
So:

$f + g = F + G$ $\mu$-almost everywhere.
$\blacksquare$





