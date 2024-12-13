# 

Source: https://proofwiki.org/wiki/Relation_Induced_by_Strict_Positivity_Property_is_Compatible_with_Addition



Theorem
Let $\struct {D, +, \times}$ be an ordered integral domain where $P$ is the (strict) positivity property.
Let the relation $<$ be defined on $D$ as:

$\forall a, b \in D: a < b \iff \map P {-a + b}$

Then $<$ is compatible with $+$, that is:

$\forall x, y, z \in D: x < y \implies \paren {x + z} < \paren {y + z}$
$\forall x, y, z \in D: x < y \implies \paren {z + x} < \paren {z + y}$


Corollary
Let $\le$ be the relation defined on $D$ as:

$\le \ := \ < \cup \Delta_D$
where $\Delta_D$ is the diagonal relation.

Then $\le$ is compatible with $+$.


Proof
Let $a < b$:














\(\ds \)

\(\)







\(\ds a < b\)




















\(\ds \)

\(\leadsto\)







\(\ds \map P {-a + b}\)





by definition of $<$














\(\ds \)

\(\leadsto\)







\(\ds \map P {-a + b + \paren {-c} + c}\)





for any $c \in D$














\(\ds \)

\(\leadsto\)







\(\ds \map P {\paren {-a + \paren {-c} } + \paren {b + c} }\)





properties of $+$ in $D$














\(\ds \)

\(\leadsto\)







\(\ds \map P {-\paren {a + c} + \paren {b + c} }\)





properties of $+$ in $D$














\(\ds \)

\(\leadsto\)







\(\ds a + c < b + c\)





by definition of $<$














\(\ds \)

\(\leadsto\)







\(\ds c + a < c + b\)





commutativity of $+$



And so $<$ is seen to be compatible with $+$.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $2$: Ordered and Well-Ordered Integral Domains: $\S 7$. Order: Theorem $9: \ \text{O} 1$




