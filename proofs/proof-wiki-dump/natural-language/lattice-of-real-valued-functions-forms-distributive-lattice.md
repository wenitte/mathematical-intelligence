# 

Source: https://proofwiki.org/wiki/Lattice_of_Real-Valued_Functions_forms_Distributive_Lattice

Theorem
Let $\struct {S, \tau_{_S} }$ be a topological space.
Let $\R$ denote the real number line.

Let $\struct {\R^S, \vee, \wedge, \le}$ be the lattice of real-valued functions from $S$ where:

$\forall f, g \in \R^S : f \vee g : S \to \R$ is defined by:
$\forall s \in S : \map {\paren{f \vee g}} s = \max \set{\map f s, \map g s}$
$\forall f, g \in \R^S : f \wedge g : S \to \R$ is defined by:
$\forall s \in S : \map {\paren{f \wedge g}} s = \min \set{\map f s, \map g s}$
$\forall f, g \in \R^S : f \le g$ if and only if:
$\forall x \in S : \map f x \le \map g x$

Then:

$\struct {\R^S, \vee, \wedge, \le}$ is a distributive lattice.


Proof
From Usual Ordering on Real Numbers is Total Ordering:

$\struct {\R, \le}$ is totally ordered
where $\le$ denotes the usual ordering on $\R$.

From Totally Ordered Set is Lattice

$\struct{\R, \le}$ is a lattice.

By definition of join:

$\forall x, y \in \R : x \vee y = \sup \set {x, y}$
where $x \vee y$ denotes the join of $x$ and $y$ in $\struct {\R, \le}$.

From Max Operation Yields Supremum of Parameters:

$\forall x, y \in \R : \map \max {x, y} = \sup \set {x, y} = x \vee y$

By definition of meet:

$\forall x, y \in \R : x \wedge y = \inf \set {x, y}$
where $x \wedge y$ denotes the meet of $x$ and $y$ in $\struct {\R, \le}$.

From Min Operation Yields Infimum of Parameters:

$\forall x, y \in \R : \map \min {x, y} = \inf \set {x, y} = x \wedge y$

From Structure Induced by Lattice Operations is Lattice:

$\struct {\R^S, \vee, \wedge, \le}$ is a lattice.

From Max and Min Operations are Distributive over Each Other:

$\struct {\R, \vee, \wedge, \le}$ is a distributive lattice.

From Structure Induced by Distributive Operation is Distributive:

$\struct {\R^S, \vee, \wedge, \le}$ is a distributive lattice.
$\blacksquare$





