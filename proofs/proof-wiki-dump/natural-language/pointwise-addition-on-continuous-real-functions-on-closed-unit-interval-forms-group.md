# 

Source: https://proofwiki.org/wiki/Pointwise_Addition_on_Continuous_Real_Functions_on_Closed_Unit_Interval_forms_Group



Theorem
Let $J \subseteq \R$ denote the closed unit interval $\closedint 0 1$.
Let $\map {\mathscr C} J$ denote the set of all continuous real functions from $J$ to $\R$.
Let $\R^J$ denote the set of all mappings from $J$ to $\R$.

Let $\struct {\R^J, +}$ denote the algebraic structure on $\R^J$ induced by addition:

$\forall f, g \in \R^J: \map {\paren {f + g} } x = \map f x + \map g x$
Then $\struct {\map {\mathscr C} J, +}$ is a subgroup of $\struct {\R^J, +}$.


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
From Constant Real Function is Continuous $f_0$ is continuous.
Hence $f_0 \in \mathscr C$.
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
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.17 \ \text {(a)}$




