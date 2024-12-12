# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Each_Class_has_Subclass_which_is_not_Element

Theorem
Let $A$ be a class.

Then

$\exists B: B \subseteq A \land B \notin A$


Proof
Define a first-order formula $\varphi$ by letting

$\varphi(A,x) \iff x \in A \land \lnot(x \in x)$
Then by the Axiom Schema of Separation, there is a class $B$ such that for each set $x$:

$x \in B \iff \varphi(x)$
That is, for each set $x$:

$x \in B \iff x \in A \land x \notin x$
Suppose for the sake of contradiction that $B \in A$.
Then $B \in B \iff B \notin B$, a contradiction.
Thus $B \notin A$.
$\blacksquare$





