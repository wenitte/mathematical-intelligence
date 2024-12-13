# 

Source: https://proofwiki.org/wiki/Relation_Induced_by_Strict_Positivity_Property_is_Trichotomy

Theorem
Let $\struct {D, +, \times}$ be an ordered integral domain where $P$ is the (strict) positivity property.
Let the relation $<$ be defined on $D$ as:

$\forall a, b \in D: a < b \iff \map P {-a + b}$

Then $\forall a, b \in D:$ exactly one of the following conditions applies:

$a < b$
$a = b$
$a > b$
That is, $<$ is a trichotomy.


Proof
Take any $a, b \in D$ and consider $-a + b$.
From the trichotomy law of ordered integral domains, exactly one of the following applies:

$(1): \quad \map P {-a + b}$
$(2): \quad \map P {-\paren {-a + b} }$
$(3): \quad -a + b = 0$
Taking each of these in turn and taking into account that $\struct {D, +}$ is the additive group of $\struct {D, +, \times}$:





\(\text {(1)}: \quad\)









\(\ds \)

\(\)







\(\ds \map P {-a + b}\)




















\(\ds \)

\(\leadsto\)







\(\ds a < b\)





Definition of $<$



$\Box$





\(\text {(2)}: \quad\)









\(\ds \)

\(\)







\(\ds \map P {-\paren {-a + b} }\)




















\(\ds \)

\(\leadsto\)







\(\ds \map P {-b + a}\)




















\(\ds \)

\(\leadsto\)







\(\ds b < a\)





Definition of $<$



$\Box$





\(\text {(3)}: \quad\)









\(\ds \)

\(\)







\(\ds -a + b = 0\)




















\(\ds \)

\(\leadsto\)







\(\ds a = b\)





adding $a$ to both sides



$\Box$
The result has been proved.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $2$: Ordered and Well-Ordered Integral Domains: $\S 7$. Order: Theorem $9: \ \text{O} 3$




