# 

Source: https://proofwiki.org/wiki/Quotient_Set_Determined_by_Relation_Induced_by_Partition_is_That_Partition

Theorem
Let $S$ be a set.
Let $\PP$ be a partition of $S$.
Let $\RR$ be the equivalence relation induced by $\PP$.

Then the quotient set $S / \RR$ of $S$ is $\PP$ itself.


Proof
Let $P \subseteq S$ such that $P \in \PP$.
Let $x \in P$.
Then:














\(\ds y\)

\(\in\)







\(\ds \eqclass x \RR\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR\)





Definition of Equivalence Class








\(\ds \leadstoandfrom \ \ \)





\(\ds y\)

\(\in\)







\(\ds P\)





Definition of Equivalence Relation Induced by Partition



Therefore:

$P = \eqclass x \RR$
and so:

$P \in S / \RR$
and so:

$\PP \subseteq S / \RR$

Now let $x \in S$.
As $\PP$ is a partition:

$\exists P \in \PP: x \in P$
Then by definition of $\RR$:

$\tuple {x, y} \in \RR \iff y \in \eqclass x \RR$













\(\ds y\)

\(\in\)







\(\ds P\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR\)





Definition of Equivalence Relation Induced by Partition








\(\ds \leadstoandfrom \ \ \)





\(\ds y\)

\(\in\)







\(\ds \eqclass x \RR\)





Definition of Equivalence Class



Therefore:

$\eqclass x \RR = P$
and so:

$\eqclass x \RR \in \PP$
That is:

$\SS / \RR \subseteq \PP$

It follows by definition of set equality that:

$\SS / \RR = P$
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 10$: Equivalence Relations: Theorem $10.3$




