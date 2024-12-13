# 

Source: https://proofwiki.org/wiki/Pointwise_Addition_on_Continuous_Real_Functions_forms_Group



Theorem
Let $C$ be the set of all continuous real functions on the set of real numbers $\R$.
Let $f, g \in C$.
Let $f + g$ be the pointwise sum of $f$ and $g$:

$\forall x \in R: \map {\paren {f + g} } x = \map f x + \map g x$

Then $\struct {C, +}$, the algebraic structure on $C$ induced by $+$, forms a group.


Proof
Taking the group axioms in turn:


Group Axiom $\text G 0$: Closure
From the Sum Rule for Continuous Real Functions, if $f$ and $g$ are continuous real functions then so is $f + g$.
Thus closure is demonstrated.
$\Box$


Group Axiom $\text G 1$: Associativity
Pointwise Addition is Associative.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
The constant function $f_0$ defined as:

$\forall x \in \R: \map {f_0} x = 0$
fulfils the role of the Identity:

$\forall x \in \R: \map {f_0} x + \map f x = 0 + \map f x = \map f x = \map f x + 0 = \map f x = \map {f_0} x$
Note that $f_0 \in C$ as the Constant Function is Uniformly Continuous, and hence continuous.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
From the Multiple Rule for Continuous Real Functions, if $\map f x$ is continuous then so is $\map g x$ where:

$\forall x \in \R: \map g x = -\map f x$.
Then we note that:

$\forall x \in \R: \map f x + \paren {-\map f x} = 0 = \paren {-\map f x} + \map f x$
So every element has an inverse.
$\Box$

All the group axioms are satisfied, hence the result.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Exercise $\text{U}$




