# 

Source: https://proofwiki.org/wiki/Pointwise_Minimum_of_Simple_Functions_is_Simple

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $f, g : X \to \R$ be simple functions. 

Then the pointwise minimum $\min \set {f, g}: X \to \R$ is also simple function.


Proof 1
From Pointwise Sum of Simple Functions is Simple Function:

$f + g$ is simple.
From Scalar Multiple of Simple Function is Simple Function:

$-g$ is simple.
Then, from Pointwise Sum of Simple Functions is Simple Function we have: 

$f - g$ is simple.
From Absolute Value of Simple Function is Simple Function:

$\size {f - g}$ is simple.
So, from Scalar Multiple of Simple Function is Simple Function, we have: 

$-\size {f - g}$ is simple.
From Pointwise Sum of Simple Functions is Simple Function, we then have: 

$\paren {f + g} - \size {f - g}$ is simple.
Finally, from Scalar Multiple of Simple Function is Simple Function, we have: 

$\dfrac 1 2 \paren {\paren {f + g} - \size {f - g} }$ is simple.
By Minimum Function in terms of Absolute Value, we have: 

$\ds \min \set {f, g} = \frac 1 2 \paren {\paren {f + g} - \size {f - g} }$
so:

$\min \set {f, g}$ is simple.
$\blacksquare$


Proof 2
From Simple Function is Measurable, we have that: 

$f$ and $g$ are $\Sigma$-measurable.
For brevity let:

$h = \min \set {f, g}$
From Pointwise Minimum of Measurable Functions is Measurable, we have that: 

$h$ is $\Sigma$-measurable.
From Measurable Function is Simple Function iff Finite Image Set, we aim to show that: 

$\map h X$ is a finite set.
From Measurable Function is Simple Function iff Finite Image Set, we have: 

$\map f X$ and $\map g X$ are finite sets.
Let $x \in X$. 
If $\map f x < \map g x$, then: 

$\map h x = \map f x$
so that: 

$\map h x \in \map f X$
If $\map g x \le \map f x$, then: 

$\map h x = \map g x$
so that: 

$\map h x \in \map g X$
Since for $x \in X$ we have either $\map g x \le \map f x$ or $\map f x < \map g x$, we obtain:

$\map h X \subseteq \map f X \cup \map g X$
From Union of Finite Sets is Finite, we have that: 

$\map f X \cup \map g X$ is finite.
Then, from Subset of Finite Set is Finite: 

$\map h X$ is finite.
So:

$h$ is simple.
$\blacksquare$





