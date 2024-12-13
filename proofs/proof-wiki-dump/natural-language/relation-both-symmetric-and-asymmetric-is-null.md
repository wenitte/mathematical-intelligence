# 

Source: https://proofwiki.org/wiki/Relation_both_Symmetric_and_Asymmetric_is_Null

Theorem
Let $\RR$ be a relation in $S$ which is both symmetric and asymmetric.
Then:

$\RR = \O$


Proof
Let $\RR \ne \O$.
Then:

$\exists \tuple {x, y} \in \RR$
Now, either $\tuple {y, x} \in \RR$ or $\tuple {y, x} \notin \RR$.
If $\tuple {y, x} \in \RR$, then $\RR$ is not asymmetric.
If $\tuple {y, x} \notin \RR$, then $\RR$ is not symmetric.
Therefore, if $\RR \ne \O$, $\RR$ can not be both symmetric and asymmetric.

Let $\RR = \O$.
Then:

$\forall x, y \in S: \tuple {x, y} \notin \RR \land \tuple {y, x} \notin \RR$
From Biconditional as Disjunction of Conjunctions:

$\tuple {p \land q} \lor \tuple {\neg p \land \neg q} \vdash p \iff q$
Thus:

$\forall x, y \in S: \tuple {x, y} \in \RR \iff \tuple {y, x} \in \RR$
So the condition for symmetry is fulfilled, and $\RR = \O$ is symmetric.

As $\RR = \O$:

$\forall x, y \in S: \tuple {x, y} \notin \RR$
From False Statement implies Every Statement $\neg p \vdash p \implies q$, we can deduce:

$\forall x, y \in S: \tuple {x, y} \notin \RR$
therefore:

$\forall x, y \in S: \tuple {x, y} \in \RR \implies \forall x, y \in S: \tuple {y, x} \notin \RR$
This is the definition of asymmetric.

Thus the only relation $\RR$ to be both symmetric and asymmetric is $\RR = \O$.
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $4$: The Predicate Calculus $2$: $5$ Properties of Relations




