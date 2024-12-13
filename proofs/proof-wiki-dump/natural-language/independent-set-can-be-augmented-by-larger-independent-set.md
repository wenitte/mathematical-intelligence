# 

Source: https://proofwiki.org/wiki/Independent_Set_can_be_Augmented_by_Larger_Independent_Set



Theorem
Let $M = \struct{S, \mathscr I}$ be a matroid.
Let $X, Y \in \mathscr I$ such that:

$\size X < \size Y$

Then there exists non-empty $Z \subseteq Y \setminus X$ such that:

$X \cup Z \in \mathscr I$
$\size {X \cup Z} = \size Y$


Corollary
Let $B \subseteq S$ be a base of $M$.
Then:

$\exists Z \subseteq B \setminus X : \card{X \cup Z} = \card B  : X \cup Z$ is a base of $M$


Proof
Let $\mathscr Z = \set {Z \subseteq Y \setminus X : X \cup Z \in \mathscr I}$
Note that $\O \in \mathscr Z $
So $\mathscr Z \ne \O$

Let $Z_0 \in \mathscr Z : \size {Z_0} = \max \set {\size Z : Z \in \mathscr Z}$

Aiming for a contradiction, suppose:

$\size {X \cup Z_0} < \size Y$
By matroid axiom $(\text I 3)$:

$\exists y \in Y \setminus \paren{X \cup Z_0} : X \cup Z_0 \cup \set y \in \mathscr I$
By choice of $Z_0$ and $y$:

$Z_0 \cup \set y \subseteq Y \setminus X$
So:

$Z_0 \cup \set y \in \mathscr Z$
Then:














\(\ds \size {Z_0 \cup \set y}\)

\(=\)







\(\ds \size {Z_0} + \size {\set y}\)





Corollary to Cardinality of Set Union














\(\ds \)

\(=\)







\(\ds \size {Z_0} + 1\)





Cardinality of Singleton














\(\ds \)

\(>\)







\(\ds \size {Z_0}\)










This contradicts the choice of $Z_0$.

It follows that:














\(\ds \size Y\)

\(\le\)







\(\ds \size {X \cup Z_0}\)




















\(\ds \)

\(=\)







\(\ds \size X + \size {Z_0}\)





Corollary to Cardinality of Set Union








\(\ds \leadsto \ \ \)





\(\ds \size {Z_0}\)

\(\ge\)







\(\ds \size Y - \size X\)










From Finite Set Contains Subset of Smaller Cardinality:

$\exists Z \subseteq Z_0 : \size Z = \size Y - \size X$
Then:














\(\ds \size {X \cup Z}\)

\(=\)







\(\ds \size X + \size Z\)





Corollary to Cardinality of Set Union














\(\ds \)

\(=\)







\(\ds \size Y\)










We have:














\(\ds \card Z\)

\(=\)







\(\ds \card Y - \card X\)




















\(\ds \)

\(>\)







\(\ds 0\)





As $\card X < \card Y$








\(\ds \leadsto \ \ \)





\(\ds Z\)

\(\neq\)







\(\ds \O\)





Cardinality of Empty Set



$\blacksquare$


Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 5.$ Properties of independent sets and bases, Theorem $5.1$




