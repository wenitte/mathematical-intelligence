# 

Source: https://proofwiki.org/wiki/Inverse_of_Infimum_in_Ordered_Group_is_Supremum_of_Inverses



Theorem
Let $\struct {G, \circ, \preccurlyeq}$ be an ordered group.
Let $x, y \in G$.

Then:

$\set {x, y}$ admits an infimum in $G$
if and only if:

$\set {x^{-1}, y^{-1} }$ admits a supremum in $G$
in which case:

$\paren {\inf \set {x, y} }^{-1} = \sup \set {x^{-1}, y^{-1} }$


Proof
Sufficient Condition
Let $\set {x, y}$ admits an infimum $c$ in $G$.
Then:














\(\ds c\)

\(\preccurlyeq\)







\(\ds x\)





as $c$ is a lower bound of $\set {x, y}$












\(\, \ds \land \, \)

\(\ds c\)

\(\preccurlyeq\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds x^{-1}\)

\(\preccurlyeq\)







\(\ds c^{-1}\)





Inversion Mapping Reverses Ordering in Ordered Group












\(\, \ds \land \, \)

\(\ds y^{-1}\)

\(\preccurlyeq\)







\(\ds c^{-1}\)









and so $c^{-1}$ is an upper bound of $\set {x^{-1}, y^{-1} }$.

Suppose $d$ is an upper bound of $\set {x^{-1}, y^{-1} }$.
Then:














\(\ds x^{-1}\)

\(\preccurlyeq\)







\(\ds d\)





Definition of Upper Bound of Set












\(\, \ds \land \, \)

\(\ds y^{-1}\)

\(\preccurlyeq\)







\(\ds d\)














\(\ds \leadsto \ \ \)





\(\ds d^{-1}\)

\(\preccurlyeq\)







\(\ds x\)





Inversion Mapping Reverses Ordering in Ordered Group












\(\, \ds \land \, \)

\(\ds d^{-1}\)

\(\preccurlyeq\)







\(\ds y\)









That is, $d^{-1}$ is a lower bound of $\set {x, y}$.
But because $c$ is an infimum of $\set {x, y}$:














\(\ds c\)

\(\preccurlyeq\)







\(\ds d^{-1}\)





Definition of Infimum of Set








\(\ds \leadsto \ \ \)





\(\ds c^{-1}\)

\(\preccurlyeq\)







\(\ds d\)





Inversion Mapping Reverses Ordering in Ordered Group



That is, for an arbitrary upper bound $d$ of $\set {x^{-1}, y^{-1} }$:

$c^{-1} \preccurlyeq d$
and so $c^{-1}$ is a supremum of $\set {x^{-1}, y^{-1} }$ by definition.

That is:

$\paren {\inf \set {x, y} }^{-1} = \sup \set {x^{-1}, y^{-1} }$
$\Box$


Necessary Condition
Let $\set {x^{-1}, y^{-1} }$ admit a supremum $c$ in $G$.
Then:














\(\ds x^{-1}\)

\(\preccurlyeq\)







\(\ds c\)





as $c$ is an upper bound of $\set {x, y}$












\(\, \ds \land \, \)

\(\ds y^{-1}\)

\(\preccurlyeq\)







\(\ds c\)














\(\ds \leadsto \ \ \)





\(\ds c^{-1}\)

\(\preccurlyeq\)







\(\ds x\)





Inversion Mapping Reverses Ordering in Ordered Group












\(\, \ds \land \, \)

\(\ds c^{-1}\)

\(\preccurlyeq\)







\(\ds y\)









and so $c^{-1}$ is a lower bound of $\set {x, y}$.

Suppose $d$ is a lower bound of $\set {x, y}$.
Then:














\(\ds d\)

\(\preccurlyeq\)







\(\ds x\)





Definition of Upper Bound of Set












\(\, \ds \land \, \)

\(\ds d\)

\(\preccurlyeq\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds x^{-1}\)

\(\preccurlyeq\)







\(\ds d^{-1}\)





Inversion Mapping Reverses Ordering in Ordered Group












\(\, \ds \land \, \)

\(\ds y^{-1}\)

\(\preccurlyeq\)







\(\ds d^{-1}\)









That is, $d^{-1}$ is an upper bound of $\set {x, y}$.
But because $c$ is a supremum of $\set {x^{-1}, y^{-1} }$:














\(\ds d^{-1}\)

\(\preccurlyeq\)







\(\ds c\)





Definition of Supremum of Set








\(\ds \leadsto \ \ \)





\(\ds d\)

\(\preccurlyeq\)







\(\ds c^{-1}\)





Inversion Mapping Reverses Ordering in Ordered Group



That is, for an arbitrary lower bound $d$ of $\set {x, y}$:

$d \preccurlyeq c^{-1}$
and so $c^{-1}$ is an infimum of $\set {x, y}$ by definition.

That is:

$\paren {\inf \set {x, y} } = \sup \set {x^{-1}, y^{-1} }^{-1}$
from which it follows from Group Axiom $\text G 3$: Existence of Inverse Element that:

$\paren {\inf \set {x, y} }^{-1} = \sup \set {x^{-1}, y^{-1} }$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups: Exercise $15.10 \ \text {(c)}$




