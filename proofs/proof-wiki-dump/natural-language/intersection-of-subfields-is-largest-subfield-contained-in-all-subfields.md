# 

Source: https://proofwiki.org/wiki/Intersection_of_Subfields_is_Largest_Subfield_Contained_in_all_Subfields

Theorem
Let $\struct {F, +, \circ}$ be a field.
Let $\mathbb K$ be a non-empty set of subfields of $F$.
Let $\bigcap \mathbb K$ be the intersection of the elements of $\mathbb K$.

Then $\bigcap \mathbb K$ is the largest subfield of $F$ contained in each element of $\mathbb K$.


Proof
Let $L = \bigcap \mathbb K$.
From Intersection of Subfields is Subfield, $\struct {L, +, \circ}$ is itself a subfield of $\struct {F, +, \circ}$.
A field is by definition also a division subring.
Thus $\struct {L, +, \circ}$ is the largest division subring of $F$ contained in each element of $\mathbb K$.

But as $\struct {F, +, \circ}$ is a field, $\circ$ is commutative.
So by Restriction of Commutative Operation is Commutative, $\struct {L, +, \circ}$ is also a field.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $23$. The Field of Rational Numbers: Theorem $23.1$




