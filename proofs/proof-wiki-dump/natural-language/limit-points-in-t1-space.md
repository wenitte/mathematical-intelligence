# 

Source: https://proofwiki.org/wiki/Limit_Points_in_T1_Space



Theorem
Let $T = \struct {S, \tau}$ be a topological space which satisfies the $T_1$ (Fréchet) axiom.
Let $H \subset S$ be any subset of $S$.
Let $x \in H$.

Then $x$ is a limit point of $H$ if and only if every neighborhood of $x$ contains infinitely many points of $H$.


Proof
Necessary Condition
Suppose every neighborhood of $x$ contains infinitely many points of $H$.
Let $N$ be an open neighborhood of $x$.
Then $H \cap N$ is infinite, and so is $H \cap \paren {N \setminus \set x}$.
Since $N$ is arbitrary, $x$ is a limit point of $H$ by definition.
$\Box$


Sufficient Condition
We prove the contrapositive:

Suppose there exists some neighborhood $V$ of $x$ containing only finitely many points of $H$.
Then there exists some open set $N \subseteq V$ such that $x \in N$.
By Set Intersection Preserves Subsets, $N \cap H \subseteq V \cap H$.
By Subset of Finite Set is Finite, $N \cap H$ is finite.

For each $y \in H \cap N$ and $y \ne x$, since $T$ is $T_1$:

$\exists U_y \in \tau: x \in U_y, y \notin U_y$

Consider the set $\ds U = N \cap \bigcap_{y \mathop \in H \cap \paren {N \setminus \set x} } U_y$.
This is a finite intersection of open sets.
By General Intersection Property of Topological Space, $U \in \tau$.
By Definition of Set Intersection, since $x \in N$ and $x \in U_y$ for all $y \in H \cap \paren {N \setminus \set x}$, we have $x \in U$.
Therefore $U$ is an open neighborhood of $x$.

Aiming for a contradiction, suppose $H \cap \paren {U \setminus \set x} \ne \O$.
Let $z \in H \cap \paren {U \setminus \set x}$.
Then:














\(\ds \)

\(\)







\(\ds z \in H \land z \in U \setminus \set x\)





Definition of Set Intersection














\(\ds \)

\(\leadsto\)







\(\ds z \in H \land z \notin \set x \land z \in U\)





Definition of Set Complement














\(\ds \)

\(\leadsto\)







\(\ds z \in H \land z \notin \set x \land z \in N \land \paren {\forall y} \paren {y \in H \cap \paren {N \setminus \set x} \implies z \in U_y}\)





Definition of Set Intersection














\(\ds \)

\(\leadsto\)







\(\ds z \in H \land z \in N \setminus \set x \land \paren {\forall y} \paren {y \in H \cap \paren {N \setminus \set x} \implies z \in U_y}\)





Definition of Set Complement














\(\ds \)

\(\leadsto\)







\(\ds z \in H \cap \paren {N \setminus \set x} \land \paren {\forall y} \paren {y \in H \cap \paren {N \setminus \set x} \implies z \in U_y}\)





Definition of Set Intersection














\(\ds \)

\(\leadsto\)







\(\ds z \in H \cap \paren {N \setminus \set x} \land z \in U_z\)





Universal Instantiation



But from definition of $U_z$: 

$z \in H \cap \paren {N \setminus \set x} \implies z \notin U_z$
which is a contradiction.
This shows that $H \cap \paren {U \setminus \set x} = \O$.

By Definition of Limit Point of Set, $x$ is not a limit point of $H$.
Thus the contrapositive is proved.
$\blacksquare$





