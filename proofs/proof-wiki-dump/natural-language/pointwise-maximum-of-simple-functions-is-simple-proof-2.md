# 

Source: https://proofwiki.org/wiki/Pointwise_Maximum_of_Simple_Functions_is_Simple/Proof_2

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $f, g : X \to \R$ be simple functions. 

Then the pointwise maximum $\max \set {f, g}: X \to \R$ is also simple function.


Proof
From Simple Function is Measurable, we have that: 

$f$ and $g$ are $\Sigma$-measurable.
For brevity let:

$h = \max \set {f, g}$
From Pointwise Maximum of Measurable Functions is Measurable, we have that: 

$h$ is $\Sigma$-measurable.
From Measurable Function is Simple Function iff Finite Image Set, we aim to show that: 

$\map h X$ is a finite set.
From Measurable Function is Simple Function iff Finite Image Set, we have: 

$\map f X$ and $\map g X$ are finite sets.
Let $x \in X$. 
If $\map f x < \map g x$, then: 

$\map h x = \map g x$
so that: 

$\map h x \in \map g X$
If $\map g x \le \map f x$, then: 

$\map h x = \map f x$
so that: 

$\map h x \in \map f X$
Since for $x \in X$ we have either $\map g x \le \map f x$ or $\map f x < \map g x$, we obtain:

$\map h X \subseteq \map f X \cup \map g X$
From Union of Finite Sets is Finite, we have that: 

$\map f X \cup \map g X$ is finite.
Then, from Subset of Finite Set is Finite: 

$\map h X$ is finite.
So:

$h$ is simple.
$\blacksquare$





