# 

Source: https://proofwiki.org/wiki/Diagonal_Relation_on_Ring_is_Ordering_Compatible_with_Ring_Structure

Theorem
Let $\struct {R, +, \circ, \preceq}$ be a ring whose zero is $0_R$.

Then the diagonal relation $\Delta_R$ on $R$ is an ordering compatible with the ring structure of $R$.


Proof
From Diagonal Relation is Ordering and Equivalence, we have that $\Delta_R$ is actually an ordering on $R$.
From the definition of the diagonal relation:

$\tuple {x, y} \in \Delta_R \iff x = y$
Thus:














\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \Delta_R\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds x + z\)

\(=\)







\(\ds y + z\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x + z, y + z}\)

\(\in\)







\(\ds \Delta_R\)









Similarly:














\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \Delta_R\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds z + x\)

\(=\)







\(\ds z + y\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {z + x, z + y}\)

\(\in\)







\(\ds \Delta_R\)









So $\Delta_R$ is compatible with $+$.

Then note that:














\(\ds \tuple {0_R, x}\)

\(\in\)







\(\ds \Delta_R\)


















\(\, \ds \land \, \)

\(\ds \tuple {0_R, y}\)

\(\in\)







\(\ds \Delta_R\)














\(\ds \leadsto \ \ \)





\(\ds 0_R\)

\(=\)







\(\ds x\)


















\(\, \ds \land \, \)

\(\ds 0_R\)

\(=\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds 0_R\)

\(=\)







\(\ds x \circ y\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {0_R, x \circ y}\)

\(\in\)







\(\ds \Delta_R\)









Hence the result, from the definition of an ordering compatible with the ring structure of $R$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $23$. The Field of Rational Numbers




