# 

Source: https://proofwiki.org/wiki/Order-Extension_Principle/Proof_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S$ be a set.
Let $\preceq$ be an ordering on $S$.

Then there exists a total ordering $\le$ on $S$ such that:

$\forall a, b \in S: \paren {a \preceq b \implies a \le b}$


Proof
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


Axiom of Choice
This proof depends on the Axiom of Choice, by way of Zorn's Lemma.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.





