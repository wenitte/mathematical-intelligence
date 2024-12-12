# 

Source: https://proofwiki.org/wiki/Dual_of_Ordered_Semigroup_is_Ordered_Semigroup

Theorem
Let $\struct {S, \circ, \preccurlyeq}$ be an ordered semigroup.
Then its dual $\struct {S, \circ, \succcurlyeq}$ is also an ordered semigroup.


Proof
From Dual Ordering is Ordering, we have that $\struct {S, \succcurlyeq}$ is an ordered set.
We also note from the definition that $\struct {S, \circ}$ is a semigroup.

It remains to be demonstrated that $\succcurlyeq$ is compatible with $\circ$.

Recall that $\struct {S, \circ, \preccurlyeq}$ is an ordered semigroup.
Hence a fortiori $\preccurlyeq$ is compatible with $\circ$.

Let $x, y \in S$ be arbitrary such that $x \succcurlyeq y$.
We have:














\(\ds x\)

\(\succcurlyeq\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(\preccurlyeq\)







\(\ds x\)





Definition of Dual Ordering








\(\ds \leadsto \ \ \)





\(\ds \paren {y \circ z}\)

\(\preccurlyeq\)







\(\ds \paren {x \circ z}\)





Definition of Relation Compatible with Operation








\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ z}\)

\(\succcurlyeq\)







\(\ds \paren {y \circ z}\)









and similarly:














\(\ds x\)

\(\succcurlyeq\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(\preccurlyeq\)







\(\ds x\)





Definition of Dual Ordering








\(\ds \leadsto \ \ \)





\(\ds \paren {z \circ y}\)

\(\preccurlyeq\)







\(\ds \paren {z \circ x}\)





Definition of Relation Compatible with Operation








\(\ds \leadsto \ \ \)





\(\ds \paren {z \circ x}\)

\(\succcurlyeq\)







\(\ds \paren {z \circ y}\)









Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups: Exercise $15.3$




