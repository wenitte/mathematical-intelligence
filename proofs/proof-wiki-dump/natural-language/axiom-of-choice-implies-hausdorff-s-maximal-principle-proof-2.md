# 

Source: https://proofwiki.org/wiki/Axiom_of_Choice_implies_Hausdorff%27s_Maximal_Principle/Proof_2

Theorem
Let the Axiom of Choice be accepted.
Then Hausdorff's Maximal Principle holds.


Proof
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


Source of Name
This entry was named for Felix Hausdorff.





