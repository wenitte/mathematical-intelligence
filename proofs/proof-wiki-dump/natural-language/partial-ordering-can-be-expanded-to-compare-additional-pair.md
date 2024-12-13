# 

Source: https://proofwiki.org/wiki/Partial_Ordering_can_be_Expanded_to_compare_Additional_Pair

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $a$ and $b$ be non-comparable elements of $S$.
That is, let:

$a \not\preceq b$
and:

$b \not\preceq a$

Let ${\preceq'} = {\preceq} \cup \set {\tuple {a, b} }$.
Let $\preceq'^+$ be the transitive closure of $\preceq'$.

Then:

$\preceq'^+$ is an ordering.

$\preceq'^+$ can be defined by letting $p \preceq'^+ q$ if and only if:

$p \preceq q$ or
$p \preceq a$ and $b \preceq q$.


Proof 1
$\preceq'^+$ is a superset of $\preceq$.
By Relation Contains Diagonal Relation iff Reflexive:

$\Delta_S \subseteq \preceq$
where $\Delta_S$ denotes the diagonal relation.
By Subset Relation is Transitive it follows that:

$\Delta_S \subseteq \preceq'^+$
By Relation Contains Diagonal Relation iff Reflexive, it follows that $\preceq'^+$ is reflexive.
$\Box$

$\preceq'^+$ is transitive by the definition of transitive closure as the smallest transitive superset.
$\Box$

Next we will establish that if $x \preceq'^+ y$ then either $x \preceq y$ or $x \preceq a$ and $b \preceq y$.
Let $x, y \in S$ and let $x \preceq'^+ y$.
By the finite chain definition of transitive closure, for some $n \in \N_{>0}$ there are $x_0, x_1, \dots, x_n$ such that: 

$x_0 = x$
$x_n = y$
$(1): \quad x_0 \preceq' x_1 \preceq' \cdots \preceq' x_n$
Assume that this sequence between $x_0$ and $x_n$ is as short as possible.
That is, let $n$ be the smallest number such that such a sequence exists.
In $(1)$, at most one of the relations can be $a \preceq' b$:
If there were a segment of the form $a \preceq' b \preceq' \cdots \preceq' a \preceq' b$, then the sequence could be shortened by replacing that with $a \preceq' b$.
Thus $(1)$ takes one of these forms:

$(a): \quad x_0 \preceq x_1 \preceq \cdots \preceq x_n$
$(b): \quad x_0 \preceq \cdots \preceq x_j \preceq a \preceq' b \preceq x_{j+3} \preceq \cdots \preceq x_n$
If $(a)$, Transitive Chaining shows that:

$x_0 \preceq x_n$
That is, $x \preceq y$.
If $(b)$, Transitive Chaining shows that:

$x_0 \preceq a \preceq' b \preceq x_n$
That is, $x \preceq a$ and $b \preceq y$.
So whenever $x \preceq'^+ y$, either:

$x \preceq y$ or both
$x \preceq a$ and $b \preceq y$
$\Box$

Aiming for a contradiction, suppose that $x \preceq'^+ y$, $y \preceq'^+ x$, and $x \ne y$.
By the above, we must have:

$(1a): \quad x \preceq y$ or both
$(1b): \quad x \preceq a$ and $b \preceq y$
$(2a): \quad y \preceq x$ or both
$(2b): \quad y \preceq a$ and $b \preceq x$.
If $(1a)$ and $(2a)$ hold, then $x \preceq y$ and $y \preceq x$.
Thus $x = y$ by antisymmetry of $\preceq$, contradicting the assumption that $x \ne y$.
If $(1b)$ and $(2a)$ hold, then $b \preceq y$, and $y \preceq x$, and $x \preceq a$.
By Transitive Chaining, $b \preceq a$.
This contradicts the premise that $a$ and $b$ are non-comparable.
A similar contradiction results if $(1a)$ and $(2b)$ hold.
If $(1b)$ and $(2b)$ hold, then $b \preceq x$ and $x \preceq a$.
Thus by transitivity, $b \preceq a$.
This contradicts the premise that $a$ and $b$ are non-comparable.

We have shown that assuming $\preceq'^+$ is not antisymmetric leads to a contradiction, so:

$\preceq'^+$ is antisymmetric.
$\Box$

Since $\preceq'^+$ is transitive and antisymmetric, it is an ordering.
We must now show that for $p, q \in S$, $p \preceq'^+ q$ if and only if:

$p \preceq q$ or
$p \preceq a$ and $b \preceq q$.
We have already shown above that $p \preceq'^+ q$ implies one of these conditions.
We now prove the converse.
Suppose that $p \preceq q$.
Then $p \preceq' q$ by Set is Subset of Union.
By the definition of transitive closure:

$p \preceq'^+ q$
Suppose instead that $p \preceq a$ and $a \preceq q$.
Then by Set is Subset of Union and the definition of $\preceq'$:

$p \preceq' a$
$a \preceq' b$
$b \preceq' q$
Thus by the definition of transitive closure:

$p \preceq'^+ a$
$a \preceq'^+ b$
$b \preceq'^+ q$
Since the transitive closure is transitive, Transitive Chaining shows that $p \preceq'^+ q$.
Thus the statement that $p \preceq'^+ q$ is equivalent to the conditions described in the theorem statement.
$\blacksquare$


Proof 2
Let $\prec$ be the reflexive reduction of $\preceq$.
Let $\prec' = {\prec} \cup \set {\tuple {a, b} }$.
By Reflexive Reduction of Ordering is Strict Ordering, $\prec$ is a strict ordering.
Define a relation $\prec'_2$ by letting $p \prec'_2 q$ if and only if:

$p \prec q$ or
$p \preceq a$ and $b \preceq q$
By Strict Ordering can be Expanded to Compare Additional Pair, $\prec'_2$ is a strict ordering and is the transitive closure of $\prec'$.
Then the reflexive closure of $\prec'_2$, ${\prec'_2}^=$ is the transitive reflexive closure of $\prec'$.
From Equivalence of Definitions of Reflexive Transitive Closure, ${\prec'_2}^=$ is the transitive closure of the reflexive closure of $\prec'$.
The reflexive closure of $\prec'$ is $\preceq'$, so ${\prec'_2}^=$ is the transitive closure of $\preceq'$.
But ${\prec'_2}^=$ is clearly the relation defined by the two conditions in the theorem statement.
$\blacksquare$





