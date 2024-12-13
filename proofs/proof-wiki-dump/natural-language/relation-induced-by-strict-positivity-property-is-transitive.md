# 

Source: https://proofwiki.org/wiki/Relation_Induced_by_Strict_Positivity_Property_is_Transitive

Theorem
Let $\struct {D, +, \times}$ be an ordered integral domain where $P$ is the (strict) positivity property.
Let the relation $<$ be defined on $D$ as:

$\forall a, b \in D: a < b \iff \map P {-a + b}$

Then $<$ is a transitive relation.


Proof
Let $a < b$ and $b < c$.
Thus:














\(\ds \)

\(\)







\(\ds a < b, b < c\)




















\(\ds \)

\(\leadsto\)







\(\ds \map P {-a + b}, \map P {-b + c}\)





Definition of $<$














\(\ds \)

\(\leadsto\)







\(\ds \map P {\paren {-a + b} + \paren {-b + c} }\)





Definition of Strict Positivity Property














\(\ds \)

\(\leadsto\)







\(\ds \map P {-a + c}\)





Properties of $+$ in $D$














\(\ds \)

\(\leadsto\)







\(\ds a < c\)





Definition of $<$



And so $<$ is seen to be transitive.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $2$: Ordered and Well-Ordered Integral Domains: $\S 7$. Order: Theorem $8$




