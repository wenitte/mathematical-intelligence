# 

Source: https://proofwiki.org/wiki/Order-Extension_Principle



Theorem
Let $S$ be a set.
Let $\preceq$ be an ordering on $S$.

Then there exists a total ordering $\le$ on $S$ such that:

$\forall a, b \in S: \paren {a \preceq b \implies a \le b}$


Strict Orderings
Let $S$ be a set.
Let $\prec$ be a strict ordering on $S$.

Then there exists a strict total ordering $<$ on $S$ such that:

$\forall a, b \in S: a \prec b \implies a < b$


Proof 1
Let $\preceq$ be an ordering on the set $S$.
If $\preceq$ is a total ordering, the result is complete.

Suppose, then, that $\preceq$ is not a total ordering.
Let $\TT$ be the set of orderings on $S$ that extend $\preceq$, ordered by inclusion.
Let $C$ be a chain in $T$.
By Union of Chain of Orderings is Ordering, $\bigcup C$ is an ordering.
Thus every chain in $\TT$ has an upper bound in $\TT$.
By Zorn's Lemma, $\TT$ has a maximal element, $\RR$.

$\RR$ is seen to be the total ordering whose existence is to be demonstrated, as follows:
Suppose that:

$\exists a, b \in S: \tuple {a, b} \notin \RR \land \tuple {b, a} \notin \RR$
Let $\RR'$ be the relation defined as:

$\RR' := \RR \cup \set {\tuple {a, b} }$
Let $\RR'^-$ be the transitive closure of $\RR'$.
Then by Partial Ordering can be Expanded to compare Additional Pair, $\RR'^-$ is an ordering.
But $\RR'^- \supsetneq \RR$, contradicting the maximality of $\RR$.
Thus, $\RR$ is a total ordering.
$\blacksquare$


Proof 2
Let $\prec$ be the reflexive reduction of $\preceq$.
By Reflexive Reduction of Ordering is Strict Ordering, $\prec$ is a strict ordering.
By the strict form of the Order-Extension Principle, there exists a strict total ordering $<$ on $S$ such that:

$\forall a, b \in S: \paren {a \prec b \implies a < b}$
Let $\le$ be the reflexive closure of $<$.
Let $a, b \in S$.
If $a \preceq b$, then by Law of Excluded Middle either $a \prec b$ or $a = b$.
If $a = b$, then by the definition of reflexive closure, $a \le b$.
If $a \prec b$, then by the choice of $<$, $a < b$ so $a \le b$.
Thus for all $a, b \in S$, $a \preceq b \implies a < b$.
By Reflexive Closure of Strict Total Ordering is Total Ordering, $\le$ is a total ordering.
$\blacksquare$


Remarks

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Extract these comments and demonstrate their truth formally.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
As shown in Proof 2, the order-extension principle is weaker than the Boolean Prime Ideal Theorem (BPI).
It is known that it is in fact strictly weaker than BPI.
However, it cannot be proved in Zermel-Fraenkel set theory without the Axiom of Choice.
In fact it is known to be strictly stronger than the Ordering Principle.





