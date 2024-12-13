# 

Source: https://proofwiki.org/wiki/Intersection_of_Subfields_is_Subfield

Theorem
Let $\struct {F, +, \circ}$ be a field.
Let $\mathbb K$ be a non-empty set of subfields of $F$.

Then the intersection $\ds \bigcap \mathbb K$ of the members of $\mathbb K$ is itself a subfield of $F$.


Proof
Let $\ds L = \bigcap \mathbb K$.
A field is by definition also a division ring.
From Intersection of Division Subrings is Division Subring, $L$ is itself a division subring of $F$.

As $\struct {F, +, \circ}$ is a field, $\circ$ is commutative on $F$.
By Restriction of Commutative Operation is Commutative, it follows that $\circ$ is also commutative on $L$.
Thus $\struct {L, +, \circ}$ is a division ring where $\circ$ is commutative.
Thus, by definition, of $\struct {L, +, \circ}$ is a field.
Hence the result.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Fields: $\S 16$. Subfields: Theorem $27$




