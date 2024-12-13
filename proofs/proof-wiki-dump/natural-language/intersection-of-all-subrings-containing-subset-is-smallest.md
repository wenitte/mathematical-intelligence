# 

Source: https://proofwiki.org/wiki/Intersection_of_All_Subrings_Containing_Subset_is_Smallest

Theorem
Let $\struct {R, +, \circ}$ be a ring.
Let $S \subseteq R$ be a subset of $R$.
Let $L$ be the intersection of the set of all subrings of $R$ containing $S$.

Then $L$ is the smallest subring of $R$ containing $S$. 


Proof
From Intersection of Subrings is Subring, $L$ is indeed a subring of $R$.
Let $T$ be a subring of $R$ containing $S$.

Let $x, y \in L$.
By the Subring Test, we have that:














\(\ds x - y\)

\(\in\)







\(\ds L\)




















\(\ds x \circ y\)

\(\in\)







\(\ds L\)









By Intersection is Largest Subset, it follows that $x, y \in T$.

But $T$ is also a subring of $R$.
So, by the Subring Test again, we have that:














\(\ds x - y\)

\(\in\)







\(\ds T\)




















\(\ds x \circ y\)

\(\in\)







\(\ds T\)









So by definition of subset, $L \subseteq T$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $22$. New Rings from Old: Theorem $22.4$




