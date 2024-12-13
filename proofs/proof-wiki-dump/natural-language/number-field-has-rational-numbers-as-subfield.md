# 

Source: https://proofwiki.org/wiki/Number_Field_has_Rational_Numbers_as_Subfield

Theorem
Let $F$ be a number field.

The field of rational numbers $\struct {\Q, +, \times}$ is a subfield of $F$.


Proof
Let $F$ be a number field.
By definition, $F$ is a subfield of the field of complex numbers $\struct {\C, +, \times}$
We have that Rational Numbers form Subfield of Complex Numbers.
Let $G = \Q \cap F$ be the intersection of $\Q$ with $F$.
By Intersection of Subfields is Subfield, $G$ is a subfield of $\C$ and so also a number field.
From Intersection is Subset we have that $G \subseteq \Q$.
So $G$ is a field which is also a subset of $\Q$.
Hence by definition $G$ is a subfield of $\Q$.

But from Rational Numbers form Prime Field, $\struct {\Q, +, \times}$ is a prime field.
That is, the only subfield of $\Q$ is $\Q$ itself.
Hence:

$G = \Q$
and from Intersection with Subset is Subset‎:

$\Q \subseteq F$

Hence $\Q$ is a subset of $F$ which is also a field.
That is, $\Q$ is a subfield of $F$.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $3$: Field Theory: Definition and Examples of Field Structure: $\S 88 \delta$




