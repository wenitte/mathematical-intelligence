# 

Source: https://proofwiki.org/wiki/Extreme_Set_in_Compact_Convex_Set_contains_Extreme_Point



Theorem
Let $\struct {X, \norm \cdot}$ be a normed vector space over $\R$. 
Let $K$ be a non-empty compact convex subset of $X$.
Let $E$ be an extreme set of $K$. 

Then $E$ contains an extreme point of $K$.


Proof
Let $P$ be the set of extreme sets in $K$ that are contained in $E$. 
Since $E \in P$, $P$ is certainly non-empty.
Define a relation $\preceq$ on $P$ by $A \preceq B$ if and only if $B \subseteq A$. 
From Subset Relation is Ordering and Dual Ordering is Ordering, we have:

$\struct {P, \preceq}$ is an ordered set.
We show that every non-empty chain in $\struct {P, \preceq}$ has an upper bound. 
We will then invoke Zorn's Lemma.

Lemma
every non-empty chain in $\struct {P, \preceq}$ has an upper bound.
$\Box$

From Zorn's Lemma, we have that $P$ has a maximal element.
Let $M$ be a maximal element of $P$. 
Then $M$ is an extreme set of $K$ such that: 

whenever $M_\ast \in P$ has $M \preceq M_\ast$ we have $M_\ast = M$
and:

$M \subseteq E$
That is: 

whenever a extreme set $M_\ast \subseteq E$ of $K$ has $M_\ast \subseteq M$, we have $M_\ast = M$.
So $M$ does not properly contain any other extreme set of $K$.
With view to apply Point in Convex Set is Extreme Point iff Singleton is Extreme Set, we show that $M$ is a singleton. 
Aiming for a contradiction, suppose suppose that $a, b \in M$ with $a \ne b$. 
Then from Normed Dual Space Separates Points, there exists an $f \in X^\ast$ with: 

$\map f a \ne \map f b$
where $X^\ast$ is the normed dual of $X$. 
So either: 

$\map f a > \map f b$
or:

$\map f a < \map f b$
Without loss of generality suppose that $\map f a < \map f b$.
Otherwise, swap $a$ and $b$. 
Define: 

$\ds M^f = \set {x \in M : \map f x = \max_{y \in M} \map f y}$
From Preimage of Maximum of Bounded Linear Functional on Extreme Set in Convex Compact Set is Extreme Set, we have that: 

$M^f$ is an extreme set in $K$.
We also have: 

$M^f \subseteq M \subseteq E$
However, from the definition of maximum, we have: 

$\ds \map f b \le \max_{y \in M} \map f y$
So we have: 

$\ds \map f a < \max_{y \in M} \map f y$
So:

$a \not \in M^f$
So:

$M^f$ is a proper subset of $M$
and:

$M^f$ is an extreme set of $K$ contained in $E$.
This contradicts the maximality of $M$. 
So $M$ is a singleton, and:

$M = \set x$
for some $x \in X$.
Since $M \subseteq E$, in particular we have $x \in E$.
From Point in Convex Set is Extreme Point iff Singleton is Extreme Set, we have: 

$x$ is an extreme point in $K$ that is contained in $E$.
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice, by way of Zorn's Lemma.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $21.6$: The Krein-Milman Theorem




