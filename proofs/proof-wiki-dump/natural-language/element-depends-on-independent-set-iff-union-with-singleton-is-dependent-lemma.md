# 

Source: https://proofwiki.org/wiki/Element_Depends_on_Independent_Set_iff_Union_with_Singleton_is_Dependent/Lemma



Theorem
Let $M = \struct{S, \mathscr I}$ be a matroid.
Let $X \in \mathscr I$.
Let $x \in S : x \notin X$.
Let $X \cup \set x$ be dependent.

Let $A \in \mathscr I$ such that $A \subseteq X \cup \set x$.

Then:

$\size A \le \size X$


Proof
Case 1: $x \in A$
Let $x \in A$.
We have:














\(\ds A \setminus \set x\)

\(\subseteq\)







\(\ds \paren {X \cup \set x} \setminus \set x\)





Set Difference over Subset














\(\ds \)

\(=\)







\(\ds \paren {X \setminus \set x} \cup \paren {\set x \setminus \set x}\)





Set Difference is Right Distributive over Union














\(\ds \)

\(=\)







\(\ds X \cup \paren {\set x \setminus \set x}\)





Set Difference with Disjoint Set














\(\ds \)

\(=\)







\(\ds X \cup \O\)





Set Difference with Superset is Empty Set














\(\ds \)

\(=\)







\(\ds X\)





Union with Empty Set




Aiming for a contradiction, suppose:

$A \setminus \set x = X$
Then:














\(\ds X \cup \set x\)

\(=\)







\(\ds \paren {A \setminus \set x} \cup \set x\)




















\(\ds \)

\(=\)







\(\ds A\)





Set Difference Union Second Set is Union



So:

$X \cup \set x$ is independent.
This contradicts:

$X \cup \set x$ is dependent.

So:

$A \setminus \set x \subsetneq X$
Then:














\(\ds \size X\)

\(>\)







\(\ds \size {A \setminus \set x}\)





Cardinality of Proper Subset of Finite Set














\(\ds \)

\(=\)







\(\ds \size A - \size {\set x}\)





Cardinality of Set Difference with Subset














\(\ds \)

\(=\)







\(\ds \size A - 1\)





Cardinality of Singleton



So:

$\size A \le \size X$
$\Box$


Case 2: $x \notin A$
Let $x \notin A$.
Then:














\(\ds A\)

\(=\)







\(\ds \paren {X \cup \set x} \cap A\)





Intersection with Subset is Subset














\(\ds \)

\(=\)







\(\ds \paren {X \cap A} \cup \paren {\set x \cap A}\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds \paren {X \cap A}  \cup \O\)





Intersection With Singleton is Disjoint if Not Element














\(\ds \)

\(=\)







\(\ds X \cap A\)





Union with Empty Set



From Intersection with Subset is Subset:

$A \subseteq X$
From Cardinality of Subset of Finite Set:

$\size A \le \size X$
$\Box$

In either case:

$\size A \le \size X$
$\blacksquare$





