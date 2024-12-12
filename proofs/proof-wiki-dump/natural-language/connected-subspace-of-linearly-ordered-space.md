# 

Source: https://proofwiki.org/wiki/Connected_Subspace_of_Linearly_Ordered_Space



Theorem
Let $\struct {S, \preceq, \tau}$ be a linearly ordered space.
Let $Y \subseteq S$.

Then $Y$ is connected in $\struct {S, \tau}$ if and only if both of the following hold:

$(1): \quad Y$ is convex in $S$
$(2): \quad \struct {Y, \preceq \restriction_Y}$ is a linear continuum, where $\restriction$ denotes restriction.


Proof
Necessary Conditions
Let $Y$ be connected in $\struct {S, \tau}$.
Aiming for a contradiction, suppose $Y$ is not convex in $S$.
Then there exist $a, b, c \in S$ such that:

$a \prec b \prec c$
$a, c \in Y$ but $b \notin Y$
Recall that:

$b^\prec$ denotes the (strict) lower closure of $b$: $b^\prec = \set {u \in S: u \prec b}$
$b^\succ$ denotes the (strict) upper closure of $b$: $b^\succ = \set {u \in S: b \prec u}$
We have that $Y \cap b^\prec$ and $Y \cap b^\succ$ are separated in $Y$.


This article, or a section of it, needs explaining.In particular: We probably need a link to a result proving the above statement.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
That is, by definition, $Y$ is disconnected.
Hence by Proof by Contradiction it follows that $Y$ is convex in $S$.
$\Box$

Aiming for a contradiction, suppose $Y$ is convex in $S$, but not a linear continuum.
Then by Order Topology on Convex Subset is Subspace Topology, the subspace topology on $Y$ is the same as the order topology on $Y$.
Thus by Linearly Ordered Space is Connected iff Linear Continuum, $Y$ is disconnected.
Hence by Proof by Contradiction it follows that $Y$ is a linear continuum.
$\Box$


Sufficient Condition
Suppose that $Y$ is convex in $S$ and a linear continuum.
Then the result follows from:

Order Topology on Convex Subset is Subspace Topology
Linearly Ordered Space is Connected iff Linear Continuum.
$\blacksquare$


Also see
Subset of Real Numbers is Interval iff Connected
Compact Subspace of Linearly Ordered Space




