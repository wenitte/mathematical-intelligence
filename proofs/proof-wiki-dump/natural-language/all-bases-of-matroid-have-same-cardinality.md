# 

Source: https://proofwiki.org/wiki/All_Bases_of_Matroid_have_same_Cardinality



Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $\rho: \powerset S \to \Z$ be the rank function of $M$.
Let $B$ be a base of $M$.

Then:

$\size B = \map \rho S$

That is, all bases of $M$ have the same cardinality, which is the rank of $M$.


Corollary
Let $X \subseteq S$ be any independent subset of $M$.

Then:

$\card X \le \card B$


Proof
By definition of the rank function:

$\map \rho S = \max \set{\size X : X \subseteq S, X \in \mathscr I}$
Let $B_1$ be an independent subset such that:

$\size {B_1} = \map \rho S$

It is shown that $B_1$ is a base.
Let $X$ be an independent superset of $B_1$.
From Cardinality of Subset of Finite Set:

$\size {B_1} \le \size X$
By choice of $B_1$:

$\size X \le \size {B_1}$
It follows that:

$\size X = \size {B_1}$
From Cardinality of Proper Subset of Finite Set:

$X = B_1$
It follows that $B_1$ is a maximal independent subset.
That is, $B_1$ is a base.

It is now shown that any other base has the same cardinality as $B_1$.
Let $B_2$ be any other base.
By choice of $B_1$:

$\size {B_2} \le \size {B_1}$
Aiming for a contradiction, suppose $\size {B_2} < \size {B_1}$.
From Independent Set can be Augmented by Larger Independent Set there exists $Z \subseteq B_1 \setminus B_2$ such that:

$B_2 \cup Z \in \mathscr I$
$\size{B_2 \cup Z} = \size{B_1}$
This contradicts the maximality of $B_2$ in $\mathscr I$.
Then:

$\size {B_2} = \size {B_1} = \map \rho S$
$\blacksquare$


Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 5.$ Properties of independent sets and bases




