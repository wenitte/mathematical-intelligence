# 

Source: https://proofwiki.org/wiki/Relation_Induced_by_Strict_Positivity_Property_is_Compatible_with_Multiplication

Theorem
Let $\struct {D, +, \times}$ be an ordered integral domain where $P$ is the (strict) positivity property.
Let the relation $<$ be defined on $D$ as:

$\forall a, b \in D: a < b \iff \map P {-a + b}$

Then $<$ is compatible with $\times$ in the following sense:

$\forall x, y, z \in D: x < y, \map P z \implies \paren {z \times x} < \paren {z \times y}$
$\forall x, y, z \in D: x < y, \map P z \implies \paren {x \times z} < \paren {y \times z}$


Proof
If $x < y$ then $\map P {-x + y}$.
Hence:














\(\ds \)

\(\)







\(\ds \map P {-x + y}, \, \map P z\)




















\(\ds \)

\(\leadsto\)







\(\ds \map P {z \times \paren {-x + y} }\)





Definition of Strict Positivity Property














\(\ds \)

\(\leadsto\)







\(\ds \map P {-z \times x + z \times y}\)





Distributivity of $\times$ over $+$














\(\ds \)

\(\leadsto\)







\(\ds z \times x < z \times y\)









The other result follows from the fact that $\times$ is commutative in an integral domain.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $2$: Ordered and Well-Ordered Integral Domains: $\S 7$. Order: Theorem $9: \ \text{O} 2$




