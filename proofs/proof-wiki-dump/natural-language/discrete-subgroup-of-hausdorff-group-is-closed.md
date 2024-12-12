# 

Source: https://proofwiki.org/wiki/Discrete_Subgroup_of_Hausdorff_Group_is_Closed

Theorem
Let $G$ be a Hausdorff topological group.
Let $H$ be a discrete subgroup of $G$.

Then $H$ is closed in $G$.


Proof
Let $g \in \overline H$ be in the closure of $H$.
We will show that $g \in H$.
Aiming for a contradiction, suppose $g \notin H$.
Let $e$ be the identity of $G$.
Because $H$ is discrete, there exists an open set $U \subset G$ such that $U \cap H = \set e$.
Then $V = U \cap U^{-1}$ is an open neighborhood of $e$ in $G$.
By Right and Left Regular Representations in Topological Group are Homeomorphisms, $g V$ is a neighborhood of $g$ in $G$.
By definition of closure, $g V \cap H \ne \O$.
Let $h \in g V \cap H$.
Because $g \ne h$ and $G$ is Hausdorff, there exists a neighborhood $W$ of $g$ in $G$ with $h \notin W$.
Then $g V \cap W$ is a neighborhood of $g$.
Let $k \in g V \cap W \cap H$.
Then $k \ne h$.
Then














\(\ds k^{-1} h\)

\(\in\)







\(\ds \paren {g V \cap H}^{-1} \cdot \paren {g V \cap H}\)




















\(\ds \)

\(=\)







\(\ds \paren {g V}^{-1}g V \cap H\)




















\(\ds \)

\(=\)







\(\ds V^{-1} V \cap H\)




















\(\ds \)

\(=\)







\(\ds V \cap H\)




















\(\ds \)

\(\subset\)







\(\ds U \cap H\)









Bu assumption, $k^{-1} h = e$, so $k = h$, which is a contradiction.
Thus, by Proof by Contradiction, $g \in H$.
Thus $\overline H = H$.
Thus $H$ is closed.
$\blacksquare$


Also see
Topological Group is T1 iff T2
Discrete Subgroup of Real Numbers is Closed




