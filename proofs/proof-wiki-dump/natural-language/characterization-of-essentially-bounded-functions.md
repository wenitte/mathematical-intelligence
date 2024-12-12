# 

Source: https://proofwiki.org/wiki/Characterization_of_Essentially_Bounded_Functions



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space. 
Let $f : X \to \R$ be a $\Sigma$-measurable function.

The following statements are equivalent:

$(1) \quad$ $f$ is essentially bounded.
$(2) \quad$ There exists a bounded function $g : X \to \R$ such that $f = g$ $\mu$-almost everywhere.


Proof
$(1)$ implies $(2)$
Suppose that there exists $c \in \R$ such that: 

$\map \mu {\set {x \in X : \size {\map f x} > c} } = 0$
Let:

$A = \set {x \in X : \size {\map f x} \le c}$
Define a function $g : X \to \overline \R$ by: 

$\map g x = \begin{cases}\map f x & x \in A \\ 0 & x \not \in A\end{cases}$
Then:

$\size {\map g x} \le c$ for all $x \in X$.
So:

$g$ is bounded.
Then if $x \in X$ is such that $\map f x \ne \map g x$, we must have $x \in X \setminus A$.
But by hypothesis:

$\map \mu {X \setminus A} = \map \mu {\set {x \in X : \size {\map f x} > c} } = 0$
So:

$f = g$ $\mu$-almost everywhere.
$\Box$


$(2)$ implies $(1)$
Suppose that: 

there exists a bounded function $g : X \to \R$ such that $f = g$ $\mu$-almost everywhere.
That is, there exists a $\mu$-null set $N \subseteq X$ such that: 

if $x \in X$ is such that $\map f x \ne \map g x$ then $x \in N$.
Let: 

$\ds M = \sup_{x \mathop \in X} \size {\map g x} < \infty$
Since: 

$g \le M$
if $x \in X$ is such that: 

$\map f x > M$
then: 

$\map f x \ne \map g x$
so:

$x \in N$
So:

$\set {x \in X : \size {\map f x} > M} \subseteq N$
From Absolute Value of Measurable Function is Measurable, we have that: 

$\size f$ is $\Sigma$-measurable.
So, from Characterization of Measurable Functions we have: 

$\set {x \in X : \size {\map f x} > M}$ is $\Sigma$-measurable.
Then from Null Sets Closed under Subset, since $\map \mu N = 0$, we have: 

$\map \mu {\set {x \in X : \size {\map f x} > M} } = 0$
That is: 

$f$ is essentially bounded.
$\blacksquare$





