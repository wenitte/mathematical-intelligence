# 

Source: https://proofwiki.org/wiki/Relation_Induced_by_Strict_Positivity_Property_is_Compatible_with_Addition/Corollary

Corollary to Relation Induced by Strict Positivity Property is Compatible with Addition
Let $\struct {D, +, \times}$ be an ordered integral domain where $P$ is the (strict) positivity property.
Let $\le$ be the relation defined on $D$ as:

$\le \ := \ < \cup \Delta_D$
where $\Delta_D$ is the diagonal relation.

Then $\le$ is compatible with $+$.


Proof
Let $a \le b$.
If $a \ne b$ then:

$a < b$
and Relation Induced by Strict Positivity Property is Compatible with Addition applies.
Otherwise $a = b$.
But $\struct {D, +}$ is the additive group of $\struct {D, +, \times}$ and the Cancellation Laws apply:

$a + c = b + c \iff a = b \iff c + a = c + b$
So $\le$ is seen to be compatible with $+$.
$\blacksquare$





