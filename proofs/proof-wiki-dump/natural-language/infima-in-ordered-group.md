# 

Source: https://proofwiki.org/wiki/Infima_in_Ordered_Group

Theorem
Let $\struct {G, \circ, \preccurlyeq}$ be an ordered group.
Let $x, y, z \in G$ be arbitrary.

Let any one of the sets $\set {x, y}$, $\set {x \circ z, y \circ z}$ or $\set {z \circ x, z \circ y}$ admit an infimum.
Then all three sets admit an infimum, and:














\(\ds \inf \set {x \circ z, y \circ z}\)

\(=\)







\(\ds \inf \set {x, y} \circ z\)




















\(\ds \inf \set {z \circ x, z \circ y}\)

\(=\)







\(\ds z \circ \inf \set {x, y}\)











Proof
First we recall that by definition of ordered group, $\preccurlyeq$ is compatible with $\circ$:










\(\ds \forall x, y, z \in G: \, \)



\(\ds x \preccurlyeq y\)

\(\implies\)







\(\ds x \circ z \preccurlyeq y \circ z\)














\(\ds \land \ \ \)





\(\ds x \preccurlyeq y\)

\(\implies\)







\(\ds z \circ x \preccurlyeq z \circ y\)










Let $\set {x, y}$ admit an infimum $c$.
Then by definition of infimum:

$(1): \quad c$ is a lower bound of $\set {x, y}$ in $G$
$(2): \quad d \preccurlyeq c$ for all lower bounds $d$ of $\set {x, y}$ in $S$.

Thus we have:














\(\ds c\)

\(\preccurlyeq\)







\(\ds x\)





Definition of Lower Bound of Set












\(\, \ds \land \, \)

\(\ds c\)

\(\preccurlyeq\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds c \circ z\)

\(\preccurlyeq\)







\(\ds x \circ z\)





Definition of Relation Compatible with Operation












\(\, \ds \land \, \)

\(\ds c \circ z\)

\(\preccurlyeq\)







\(\ds y \circ z\)









Hence $\inf \set {x, y} \circ z$ is a lower bound of $\set {x \circ z, y \circ z}$.

Let $d$ be a lower bound of $\set {x \circ z, y \circ z}$.
Then as $G$ is a group we have that:

$d = d' \circ z$
for some $d' \in G$.
Then:














\(\ds d' \circ z\)

\(\preccurlyeq\)







\(\ds x \circ z\)





Definition of Lower Bound of Set












\(\, \ds \land \, \)

\(\ds d' \circ z\)

\(\preccurlyeq\)







\(\ds y \circ z\)














\(\ds \leadsto \ \ \)





\(\ds d' \circ z \circ z^{-1}\)

\(\preccurlyeq\)







\(\ds x \circ z \circ z^{-1}\)





Definition of Relation Compatible with Operation












\(\, \ds \land \, \)

\(\ds d' \circ z \circ z^{-1}\)

\(\preccurlyeq\)







\(\ds y \circ z \circ z^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds d'\)

\(\preccurlyeq\)







\(\ds x\)





Group Axiom $\text G 3$: Existence of Inverse Element












\(\, \ds \land \, \)

\(\ds d'\)

\(\preccurlyeq\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds d'\)

\(\preccurlyeq\)







\(\ds c\)





Definition of Infimum of Set: $d'$ is a lower bound of $\set {x, y}$








\(\ds \leadsto \ \ \)





\(\ds d' \circ z\)

\(\preccurlyeq\)







\(\ds c \circ z\)





Definition of Relation Compatible with Operation



Hence $\inf \set {x, y} \circ z$ is a lower bound of $\set {x \circ z, y \circ z}$ which is smaller than an arbitrary lower bound $d$ of $\set {x \circ z, y \circ z}$.
That is, $\inf \set {x, y} \circ z$ is an infimum of $\set {x \circ z, y \circ z}$.
$\Box$

Let $\set {x \circ z, y \circ z}$ admit an infimum $c$.
Then by definition of infimum:

$(1): \quad c$ is a lower bound of $\set {x \circ z, y \circ z}$ in $G$
$(2): \quad d \preccurlyeq c$ for all lower bounds $d$ of $\set {x \circ z, y \circ z}$ in $S$.
As $G$ is a group, there exists $c' \in G$ such that $c' \circ z = c$.

Thus we have:














\(\ds c' \circ z\)

\(\preccurlyeq\)







\(\ds x \circ z\)





Definition of Lower Bound of Set












\(\, \ds \land \, \)

\(\ds c' \circ z\)

\(\preccurlyeq\)







\(\ds y \circ z\)














\(\ds \leadsto \ \ \)





\(\ds c' \circ z \circ z^{-1}\)

\(\preccurlyeq\)







\(\ds x \circ z \circ z^{-1}\)





Definition of Relation Compatible with Operation












\(\, \ds \land \, \)

\(\ds c' \circ z \circ z^{-1}\)

\(\preccurlyeq\)







\(\ds y \circ z \circ z^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds c'\)

\(\preccurlyeq\)







\(\ds x\)





Group Axiom $\text G 3$: Existence of Inverse Element












\(\, \ds \land \, \)

\(\ds c'\)

\(\preccurlyeq\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds z \circ c'\)

\(\preccurlyeq\)







\(\ds z \circ x\)





Definition of Relation Compatible with Operation












\(\, \ds \land \, \)

\(\ds z \circ c'\)

\(\preccurlyeq\)







\(\ds z \circ y\)









Hence $z \circ c'$ is a lower bound of $\set {z \circ x, z \circ y}$.

Let $d$ be a lower bound of $\set {z \circ x, z \circ y}$.
As $G$ is a group, there exists $d' \in G$ such that $z \circ d' = d$.

Then:














\(\ds d\)

\(\preccurlyeq\)







\(\ds z \circ x\)





Definition of Lower Bound of Set












\(\, \ds \land \, \)

\(\ds d\)

\(\preccurlyeq\)







\(\ds z \circ y\)




















\(\ds z \circ d'\)

\(\preccurlyeq\)







\(\ds z \circ x\)





Definition of $d'$












\(\, \ds \land \, \)

\(\ds z \circ d'\)

\(\preccurlyeq\)







\(\ds z \circ y\)














\(\ds \leadsto \ \ \)





\(\ds z \circ d'\)

\(\preccurlyeq\)







\(\ds z \circ c'\)





Definition of Infimum of Set: $z \circ d'$ is a lower bound of $\set {z \circ x, z \circ y}$








\(\ds \leadsto \ \ \)





\(\ds d\)

\(\preccurlyeq\)







\(\ds z \circ c'\)





Definition of $d'$



Hence $z \circ c'$ is a lower bound of $\set {z \circ x, z \circ y}$ which is smaller than an arbitrary lower bound $d$ of $\set {z \circ x, z \circ y}$.
That is, $z \circ c'$ is an infimum of $\set {z \circ x, z \circ y}$.
$\Box$

Let $\set {z \circ x, z \circ y}$ admit an infimum $c$.
Then by definition of infimum:

$(1): \quad c$ is a lower bound of $\set {z \circ x, z \circ y}$ in $G$
$(2): \quad d \preccurlyeq c$ for all lower bounds $d$ of $\set {z \circ x, z \circ y}$ in $S$.
As $G$ is a group, there exists $c' \in G$ such that $z \circ c' = c$.

Thus we have:














\(\ds z \circ c'\)

\(\preccurlyeq\)







\(\ds z \circ x\)





Definition of Lower Bound of Set












\(\, \ds \land \, \)

\(\ds z \circ c'\)

\(\preccurlyeq\)







\(\ds z \circ y\)














\(\ds \leadsto \ \ \)





\(\ds z^{-1} \circ z \circ c'\)

\(\preccurlyeq\)







\(\ds z^{-1} \circ z \circ x\)





Definition of Relation Compatible with Operation












\(\, \ds \land \, \)

\(\ds z^{-1} \circ z \circ c'\)

\(\preccurlyeq\)







\(\ds z^{-1} \circ z \circ y\)














\(\ds \leadsto \ \ \)





\(\ds c'\)

\(\preccurlyeq\)







\(\ds x\)





Group Axiom $\text G 3$: Existence of Inverse Element












\(\, \ds \land \, \)

\(\ds c'\)

\(\preccurlyeq\)







\(\ds y\)









Hence $c'$ is a lower bound of $\set {x, y}$.

Let $d$ be a lower bound of $\set {x, y}$.
Then:














\(\ds d\)

\(\preccurlyeq\)







\(\ds x\)





Definition of Lower Bound of Set












\(\, \ds \land \, \)

\(\ds d\)

\(\preccurlyeq\)







\(\ds y\)




















\(\ds z \circ d\)

\(\preccurlyeq\)







\(\ds z \circ x\)





Definition of $d'$












\(\, \ds \land \, \)

\(\ds z \circ d\)

\(\preccurlyeq\)







\(\ds z \circ y\)














\(\ds \leadsto \ \ \)





\(\ds z \circ d\)

\(\preccurlyeq\)







\(\ds z \circ c'\)





Definition of Infimum of Set: $z \circ d$ is a lower bound of $\set {z \circ x, z \circ y}$








\(\ds \leadsto \ \ \)





\(\ds z^{-1} \circ z \circ d\)

\(\preccurlyeq\)







\(\ds z^{-1} \circ z \circ c'\)





Definition of Relation Compatible with Operation








\(\ds \leadsto \ \ \)





\(\ds d\)

\(\preccurlyeq\)







\(\ds c'\)





Definition of $d'$



Hence $c'$ is a lower bound of $\set {x, y}$ which is smaller than an arbitrary lower bound $d$ of $\set {x, y}$.
That is, $c'$ is an infimum of $\set {x, y}$.
Hence by definition of $c'$:

$z \circ \inf \set {x, y} = \inf \set {z \circ x, z \circ y}$
$\Box$

Thus we have shown that if any of the three sets $\set {x, y}$, $\set {x \circ z, y \circ z}$ or $\set {z \circ x, z \circ y}$ admit an infimum, they all do, and:














\(\ds \inf \set {x \circ z, y \circ z}\)

\(=\)







\(\ds \inf \set {x, y} \circ z\)




















\(\ds \inf \set {z \circ x, z \circ y}\)

\(=\)







\(\ds z \circ \inf \set {x, y}\)









$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups: Exercise $15.10 \ \text {(b)}$




