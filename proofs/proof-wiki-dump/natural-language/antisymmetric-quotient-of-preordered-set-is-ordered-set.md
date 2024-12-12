# 

Source: https://proofwiki.org/wiki/Antisymmetric_Quotient_of_Preordered_Set_is_Ordered_Set

Theorem
Let $\struct {S, \precsim}$ be a preordered set.
Let $\sim$ be the equivalence relation $S$ induced by $\precsim$.
Let $\struct {S / {\sim}, \preceq}$ be the antisymmetric quotient of $\struct {S, \precsim}$.

Then:

$\struct {S / {\sim}, \preceq}$ is an ordered set.
$\forall P, Q \in S / {\sim}: \paren {P \preceq Q} \land \paren {p \in P} \land \paren {q \in Q} \implies p \precsim q$

This second statement means that we could just as well have defined $\preceq$ by letting $P \preceq Q$ if and only if:

$\forall p \in P: \forall q \in Q: p \precsim q$


Proof
By the definition of equivalence relation, $\sim$ is transitive, reflexive, and symmetric.
By the definition of preordering, $\precsim$ is transitive and reflexive.

From Preordering induces Ordering, $\preceq$ is an ordering.

Let $P, Q \in S / {\sim}$ with $P \preceq Q$.
Then by the definition of $\preceq$, there are $p \in P$ and $q \in Q$ such that $p \precsim q$.
Let $p' \in P$ and $q' \in Q$.
By the definition of quotient set:

$p' \sim p$
$q \sim q'$
Thus by the definition of $\sim$:

$p' \precsim p$
$q \precsim q'$
Since $p \precsim q$ and $\precsim$ is transitive:

$p' \precsim q'$
We have shown that:

$\forall P, Q \in S / {\sim}: \paren {P \preceq Q} \land \paren {p \in P} \land \paren {q \in Q} \implies p \precsim q$
$\blacksquare$





