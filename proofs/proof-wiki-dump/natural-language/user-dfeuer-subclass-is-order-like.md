# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Subclass_is_Order-Like

Theorem
Let $A$, $B$, and $C$ be classes.
Then:

$A \subseteq A$
If $A \subseteq B$ and $B \subseteq C$ then $A \subseteq C$
If $A \subseteq B$ and $B \subseteq A$ then $A = B$.


Proof
By the law of identity, $\forall x: (x \in A \implies x \in A)$.
Thus by the definition of subclass, $A \subseteq A$.
Suppose that $A \subseteq B$ and $B \subseteq C$.
Let $x \in A$.
Then by the definition of subclass, $x \in B$.
Thus by the definition of subclass, $x \in C$.
As this holds for all $x \in A$, $A \subseteq C$.
Suppose that $A \subseteq B$ and $B \subseteq A$.
Then $\forall x: x \in A \iff x \in B$.
Thus by the axiom of extensionality, $A = B$.
$\blacksquare$


Remark
Although these properties look a lot like the properties that define an ordering, there is no "subclass relation", and hence no "subclass ordering". Specifically, a relation is a class of ordered pairs of sets; each component of an ordered pair must be a set. However, there is a subset relation on the universal class.





