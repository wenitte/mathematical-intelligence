# 

Source: https://proofwiki.org/wiki/Ordinal_Multiplication_is_Left_Cancellable



Theorem
Let $x, y, z$ be ordinals.
Let $z \ne 0$.

Then:

$\ds \paren {z \cdot x} = \paren {z \cdot y} \implies x = y$
That is, ordinal multiplication is left cancellable.


Proof
For the proof, $<$, $\in$, and $\subsetneq$ will be used interchangeably.
This is justified by Transitive Set is Proper Subset of Ordinal iff Element of Ordinal.

Since $z \ne 0$ and $z \not < 0$, $0 < z$ by Ordinal Membership is Trichotomy.
Note that:














\(\ds x < y \land z > 0\)

\(\implies\)







\(\ds \paren {z \cdot x} < \paren {z \cdot y}\)





Membership is Left Compatible with Ordinal Multiplication














\(\ds y < x \land z > 0\)

\(\implies\)







\(\ds \paren {z \cdot y} < \paren {z \cdot x}\)





Membership is Left Compatible with Ordinal Multiplication



In addition:














\(\ds \paren {z \cdot x} = \paren {z \cdot y}\)

\(\implies\)







\(\ds \paren {z \cdot x} \not < \paren {z \cdot y} \land \paren {z \cdot y} \not < \paren {z \cdot x}\)





No Membership Loops



This contradicts the consequents of the first two equations, so:














\(\ds \)

\(\leadsto\)







\(\ds x \not < y \land y \not < x\)





Rule of Transposition, Praeclarum Theorema














\(\ds \)

\(\leadsto\)







\(\ds x = y\)





Ordinal Membership is Trichotomy



$\blacksquare$


Also see
Natural Number Multiplication is Cancellable


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.20$




