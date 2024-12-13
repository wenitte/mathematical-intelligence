# 

Source: https://proofwiki.org/wiki/Set_is_Equivalent_to_Proper_Subset_of_Power_Set

Theorem
Every set is equivalent to a proper subset of its power set:

$\forall S: \exists T \subset \powerset S: S \sim T$


Proof
To show equivalence between two sets, we need to demonstrate that a bijection exists between them.
We will now define such a bijection.
Let $T = \set {\set x: x \in S}$.










\(\ds \forall x \in S: \, \)



\(\ds \set x\)

\(\subseteq\)







\(\ds S\)





Definition of Subset








\(\ds \leadsto \ \ \)





\(\ds \set x\)

\(\in\)







\(\ds \powerset S\)





Definition of Power Set








\(\ds \leadsto \ \ \)





\(\ds T\)

\(\subseteq\)







\(\ds \powerset S\)





Definition of Subset




Now we define the mapping $\phi: S \to T$:

$\phi: S \to T: \forall x \in S: \map \phi x = \set x$

$\phi$ is an injection:

$\forall x, y \in S: \set x = \set Y \implies x = y$ by definition of set equality

$\phi$ is a surjection:

$\forall \set x \in T: \exists x \in S: \map \phi x = \set x$

So $\phi$, being both an injection and a surjection, is a bijection by definition.

To show that $T \subset \powerset S$, that is, is a proper subset of $\powerset S$, we merely note that $\O \in \powerset S$ by Empty Set is Element of Power Set, but $\O \notin T$.
Thus $T \subseteq \powerset S$ but $\powerset S \nsubseteq T$.
Hence the result.
$\blacksquare$





