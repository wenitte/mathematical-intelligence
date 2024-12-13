# 

Source: https://proofwiki.org/wiki/Krull%27s_Theorem



Theorem
Let $R$ be a non-null ring with unity.
Then $R$ has a maximal ideal.


Outline of Proof
We use Zorn's Lemma to construct a maximal ideal.


Proof
Let $\struct {P, \subseteq}$ be the ordered set consisting of all proper ideals of $R$, ordered by inclusion.
The theorem is proved by applying Zorn's Lemma to $P$.
First, we check that the conditions for Zorn's Lemma are met: $P$ must be non-empty, and every non-empty chain in $P$ must have an upper bound.

$P$ is non-empty
Since $R$ is non-null, the zero ideal is a proper ideal of $R$, and thus an element of $P$.


Every non-empty chain in $P$ has an upper bound in $P$
Let $\sequence {I_\alpha}_{\alpha \mathop \in A}$ be a non-empty chain of ideals in $P$.
Let $\ds I = \bigcup_{\alpha \mathop \in A} I_\alpha$.
We will show that $I$ is an upper bound in $P$ for the chain $\sequence {I_\alpha}_{\alpha \mathop \in A}$.


$I$ is a proper ideal of $R$
By By Union of Chain of Proper Ideals is Proper Ideal, $I$ is a proper ideal of $R$.


$I$ is an upper bound for the chain $\sequence {I_\alpha}$
Since $I$ is a proper ideal of $R$, it is an element of our ordered set $P$.
$I$ is the union of the $I_\alpha$, so $I_\alpha \subseteq I$ for all $\alpha \in A$.
This means that $I$ is an upper bound in $P$ for the chain $\sequence {I_\alpha}_{\alpha \mathop \in A}$.


Applying Zorn's Lemma
We have shown that the conditions for Zorn's Lemma are met:

$(1): \quad P$ is non-empty
$(2): \quad$ every non-empty chain in $P$ has an upper bound.
Applying Zorn's Lemma to $\struct {P, \subseteq}$ gives us a maximal element $M$.
This $M$ is a proper ideal of $R$ which is not contained in any other proper ideal.
So by definition, $M$ is a maximal ideal of $R$.
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice, by way of Zorn's Lemma.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Source of Name
This entry was named for Wolfgang Krull.





