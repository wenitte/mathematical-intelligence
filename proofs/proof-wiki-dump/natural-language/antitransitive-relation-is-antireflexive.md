# 

Source: https://proofwiki.org/wiki/Antitransitive_Relation_is_Antireflexive

Theorem
Let $S$ be a set.
Let $\RR \subseteq S \times S$ be a relation on $S$.
Let $\RR$ be antitransitive.

Then $\RR$ is also antireflexive.


Proof
Suppose $\RR \subseteq S \times S$ is not antireflexive.
Then $\exists x \in S: \tuple {x, x} \in \RR$. (In the case of $\RR$ being reflexive, the property holds for all $x \in S$.)
Thus $\RR$ is not antitransitive:














\(\ds \)

\(\)







\(\ds \tuple {x, x} \in \RR \land \tuple {x, x} \in \RR\)




















\(\ds \)

\(\leadsto\)







\(\ds \tuple {x, x} \in \RR\)





Rule of Idempotence



... which means $\exists x \in S$ such that the condition for antitransitivity is broken.
So $\RR \subseteq S \times S$ has to be antireflexive.
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $4$: The Predicate Calculus $2$: $5$ Properties of Relations: $165$




