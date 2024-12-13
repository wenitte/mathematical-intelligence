# 

Source: https://proofwiki.org/wiki/Intersection_of_Division_Subrings_Containing_Subset_is_Smallest

Theorem
Let $\struct {D, +, \circ}$ be a division ring.
Let $S \subseteq D$ be a subset of $D$.
Let $L$ be the intersection of the set of all division subrings of $D$ containing $S$.

Then $L$ is the smallest division subring of $D$ containing $S$. 


Proof
From Intersection of Division Subrings is Division Subring, $L$ is indeed a division subring of $D$.
Let $T$ be a division subring of $D$ containing $S$.
Let $x, y \in L$.
By the Division Subring Test, we have that:














\(\ds x - y\)

\(\in\)







\(\ds L\)




















\(\ds x \circ y\)

\(\in\)







\(\ds L\)




















\(\ds x^{-1} \circ y\)

\(\in\)







\(\ds L\)









By Intersection is Largest Subset, it follows that $x, y \in T$.

But $T$ is also a division subring of $D$.
So, by the Division Subring Test again, we have that:














\(\ds x - y\)

\(\in\)







\(\ds T\)




















\(\ds x \circ y\)

\(\in\)







\(\ds T\)




















\(\ds x^{-1} \circ y\)

\(\in\)







\(\ds T\)









So by definition of subset, $L \subseteq T$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $23$. The Field of Rational Numbers: Theorem $23.1$




