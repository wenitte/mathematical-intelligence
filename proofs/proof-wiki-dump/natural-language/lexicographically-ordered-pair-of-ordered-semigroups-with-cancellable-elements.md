# 

Source: https://proofwiki.org/wiki/Lexicographically_Ordered_Pair_of_Ordered_Semigroups_with_Cancellable_Elements



Theorem
Let $\struct {S_1, \circ_1, \preccurlyeq_1}$ and $\struct {S_2, \circ_2, \preccurlyeq_2}$ be ordered semigroups.

Let $\struct {S_1 \times S_2, \odot} := \struct {S_1, \circ_1} \times \struct {S_2, \circ_2}$ denote the external direct product of $\struct {S_1, \circ_1}$ and $\struct {S_2, \circ_2}$.
Let $\struct {S_1 \times S_2, \preccurlyeq_l} := \struct {S_1, \preccurlyeq_1} \otimes^l \struct {S_2, \preccurlyeq_2}$ denote the lexicographic order of $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$:

$\tuple {x_1, x_2} \preccurlyeq_l \tuple {y_1, y_2} \iff \paren {x_1 \prec_1 y_1} \lor \paren {x_1 = y_1 \land x_2 \preccurlyeq_2 y_2}$

Let every element of $\struct {S_1, \circ_1}$ be cancellable.

Then $\struct {S_1 \times S_2, \odot, \preccurlyeq_l}$ is also an ordered semigroup.


Converse
If $\circ_1$ is not a cancellable operation, then it may not necessarily be the case that $\preccurlyeq_l$ is compatible with $\odot$.


Proof
From Lexicographic Order is Ordering we have that $\struct {S_1 \times S_2, \preccurlyeq_l}$ is an ordered set.
From External Direct Product of Semigroups, $\struct {S_1 \times S_2, \odot}$ is a semigroup.
It remains to be shown that $\preccurlyeq_l$ is compatible with $\odot$.

Let $\tuple {x_1, x_2}, \tuple {y_1, y_2} \in S_1 \times S_2$ be arbitrary such that $\tuple {x_1, x_2} \preccurlyeq_l \tuple {y_1, y_2}$.


Case $1$
First suppose $x_1 = y_1$.













\(\ds \tuple {x_1, x_2}\)

\(\preccurlyeq_l\)







\(\ds \tuple {y_1, y_2}\)














\(\ds \leadsto \ \ \)





\(\ds x_1\)

\(=\)







\(\ds y_1\)


















\(\, \ds \land \, \)

\(\ds x_2\)

\(\preccurlyeq_2\)







\(\ds y_2\)














\(\ds \leadsto \ \ \)

\(\ds \forall \tuple {z_1, z_2} \in S_1 \times S_2: \, \)



\(\ds x_1 \circ_1 z_1\)

\(=\)







\(\ds y_1 \circ_1 z_1\)





Definition of Relation Compatible with Operation












\(\, \ds \land \, \)

\(\ds x_2 \circ_2 z_2\)

\(\preccurlyeq_2\)







\(\ds y_2 \circ_2 z_2\)


















\(\, \ds \land \, \)

\(\ds z_1 \circ_1 x_1\)

\(=\)







\(\ds z_1 \circ_1 y_1\)


















\(\, \ds \land \, \)

\(\ds z_2 \circ_2 x_2\)

\(\preccurlyeq_2\)







\(\ds z_2 \circ_2 y_2\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x_1 \circ_1 z_1, x_2 \circ_2 z_2}\)

\(\preccurlyeq_l\)







\(\ds \tuple {y_1 \circ_1 z_1, y_2 \circ_2 z_2}\)





Definition of Lexicographic Order












\(\, \ds \land \, \)

\(\ds \tuple {z_1 \circ_1 x_1, z_2 \circ_2 x_2}\)

\(\preccurlyeq_l\)







\(\ds \tuple {z_1 \circ_1 y_1, z_2 \circ_2 y_2}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x_1, x_2} \odot \tuple {z_1, z_2}\)

\(\preccurlyeq_l\)







\(\ds \tuple {y_1, y_2} \odot \tuple {z_1, z_2}\)





Definition of External Direct Product












\(\, \ds \land \, \)

\(\ds \tuple {z_1, z_2} \odot \tuple {x_1, x_2}\)

\(\preccurlyeq_l\)







\(\ds \tuple {z_1, z_2} \odot \tuple {y_1, y_2}\)











Case $2$
Now suppose $x_1 \prec_1 y_1$.













\(\ds \tuple {x_1, x_2}\)

\(\preccurlyeq_l\)







\(\ds \tuple {y_1, y_2}\)














\(\ds \leadsto \ \ \)





\(\ds x_1\)

\(\prec_1\)







\(\ds y_1\)














\(\ds \leadsto \ \ \)

\(\ds \forall \tuple {z_1, z_2} \in S_1 \times S_2: \, \)



\(\ds x_1 \circ_1 z_1\)

\(\prec_1\)







\(\ds y_1 \circ_1 z_1\)





Reflexive Reduction of Relation Compatible with Cancellable Operation is Compatible












\(\, \ds \land \, \)

\(\ds z_1 \circ_1 x_1\)

\(\prec_1\)







\(\ds z_1 \circ_1 y_1\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x_1 \circ_1 z_1, x_2 \circ_2 z_2}\)

\(\preccurlyeq_l\)







\(\ds \tuple {y_1 \circ_1 z_1, y_2 \circ_2 z_2}\)





Definition of Lexicographic Order












\(\, \ds \land \, \)

\(\ds \tuple {z_1 \circ_1 x_1, z_2 \circ_2 x_2}\)

\(\preccurlyeq_l\)







\(\ds \tuple {z_1 \circ_1 y_1, z_2 \circ_2 y_2}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x_1, x_2} \odot \tuple {z_1, z_2}\)

\(\preccurlyeq_l\)







\(\ds \tuple {y_1, y_2} \odot \tuple {z_1, z_2}\)





Definition of External Direct Product












\(\, \ds \land \, \)

\(\ds \tuple {z_1, z_2} \odot \tuple {x_1, x_2}\)

\(\preccurlyeq_l\)







\(\ds \tuple {z_1, z_2} \odot \tuple {y_1, y_2}\)









and the proof is complete.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups: Exercise $15.6$




