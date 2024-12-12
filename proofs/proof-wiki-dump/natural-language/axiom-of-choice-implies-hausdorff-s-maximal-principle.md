# 

Source: https://proofwiki.org/wiki/Axiom_of_Choice_implies_Hausdorff%27s_Maximal_Principle



Theorem
Let the Axiom of Choice be accepted.
Then Hausdorff's Maximal Principle holds.


Statement of Axiom of Choice
For every set of non-empty sets, it is possible to provide a mechanism for choosing one element of each element of the set.

$\ds \forall s: \paren {\O \notin s \implies \exists \paren {f: s \to \bigcup s}: \forall t \in s: \map f t \in t}$
That is, one can always create a choice function for selecting one element from each element of the set.


Statement of Hausdorff's Maximal Principle
Let $A$ be a non-empty set of sets.
Let $S$ be the set of all chain of sets of $A$ (ordered under the subset relation).
Then every element of $S$ is a subset of a maximal element of $S$ under the subset relation.


Proof 1
Let $S$ be the set of all chains of $\PP$.
$S \ne \O$ since the empty set is an element of $S$. 
From Subset Relation is Ordering, we have that $\struct {S, \subseteq}$ is partially ordered by inclusion.
Let $C$ be a totally ordered subset of $\struct {S, \subseteq}$.
Then $\bigcup C$ is a chain in $C$ by Set of Chains is Closed under Chain Unions under Subset Relation.
This shows that $S$, ordered by set inclusion, is an inductive ordered subset.
By applying Zorn's Lemma, the result follows.
$\blacksquare$


Proof 2
Let $\preceq$ be an ordering on the set $\PP$.
Let $X$ be a chain in $\struct {\PP, \preceq}$.
By definition, a maximal chain in $\PP$ that includes $X$ is a chain $Y$ in $\PP$ such that $X \subseteq Y$ and there is no chain $Z$ in $\PP$ with $X \subseteq Z$ and $Y \subsetneq Z$.

Let us define $\CC$ as:

$\CC = \leftset {Y : Y}$ is a chain in $\PP$ and $\rightset {X \subseteq Y}$
Then:

a maximal chain in $\PP$ that includes $X$
and:

a maximal element of $\CC$ under the partial order induced on $\CC$ by inclusion
are one and the same.
It thus suffices to show that $\CC$ contains such a maximal element.

According to Zorn's Lemma, $\CC$ contains a maximal element if each chain in $\CC$ has an upper bound in $\CC$.
Let $W$ be an arbitrary chain in $\CC$.
Let $Z = \bigcup W$.
It will be shown that $Z$ is an upper bound for $W$ in $\CC$.

Let $a, b \in Z$.
Then:

$\exists A, B \in W: a \in A, b \in B$
Since $W$ is a chain in $\CC$, one of $A$ and $B$ includes the other.
Without loss of generality, suppose $A \subseteq B$.
Then $a, b \in B$.
Since $B$ is a chain in $\PP$, either $a \preceq b$ or $b \preceq a$.
Therefore $Z$ is a chain in $\PP$.
By definition of $Z$, we have that:

$\forall A \in W: A \subseteq Z$
Thus $Z$ is an upper bound for $W$ under inclusion.
Finally we have that:

$\forall A \in W: X \subseteq A$
and so $X \subseteq Z$.
Thus:

$Z \in \CC$
We have shown that for an arbitrary chain $W$ in $\CC$, $W$ has an upper bound $Z$ in $\CC$.
The result follows.
$\blacksquare$


Proof 3
Let $\struct {\CC, \subseteq}$ be the set of all chains in $P$ ordered by inclusion. 
By Set of Chains is Closed under Chain Unions under Subset Relation, $\CC$ is a chain complete ordered set.
Now define $f: \CC \to \CC$ as follows:

If $C$ is a maximal chain then $\map f C = C$.
Otherwise $f$ chooses arbitrarily, using the axiom of choice, some chain $D$ which strictly contains $C$.
By construction, $\map f C \supseteq C$.
By the above, $\CC$ is chain complete.
Therefore the Bourbaki-Witt Fixed Point Theorem applies and $f$ has a fixed point $\map F M = M$.
But by the above construction, the only fixed points of $f$ are maximal chains.
Therefore $M$ is a maximal chain.
$\blacksquare$





