# 

Source: https://proofwiki.org/wiki/Multiplicative_Regular_Representations_of_Units_of_Topological_Ring_are_Homeomorphisms/Lemma_2

Theorem
Let $\struct{R, + , \circ}$ be a ring with unity $1_R$.

Let $I_R : R \to R$ be the identity mapping on $R$.
For all $y \in R$, let $y * I_R : R \to R$ be the mapping defined by:

$\forall z \in R: \map {\paren {y * I_R} } z = y * \map {I_R} z$
For all $y \in R$, let $I_R * y : R \to R$ be the mapping defined by:

$\forall z \in R: \map {\paren {I_R * y} } z = \map {I_R} z * y$

Let $x \in R$ be a unit of $R$ with product inverse $x^{-1}$.

Then:

$x * I_R$ is a bijection and $x^{-1} * I_R$ is the inverse of $x * I_R$
$I_R * x$ is a bijection and $I_R * x^{-1}$ is the inverse of $I_R * x$


Proof
Consider the composite of $x * I_R$ with $x^{-1} * I_R$.










\(\ds \forall y \in R: \, \)



\(\ds \map {\paren {\paren {x * I_R} \circ \paren {x^{-1} * I_R} } } y\)

\(=\)







\(\ds \map {\paren {x * I_R} } {\map {\paren {x^{-1} * I_R} } y}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {x * I_R} } {x^{-1} * y}\)




















\(\ds \)

\(=\)







\(\ds x * \paren {x^{-1} * y}\)




















\(\ds \)

\(=\)







\(\ds \paren {x * x^{-1} } * y\)




















\(\ds \)

\(=\)







\(\ds y\)




















\(\ds \)

\(=\)







\(\ds \map {I_R} y\)









From Equality of Mappings, $\paren {x * I_R} \circ \paren {x^{-1} * I_R} = I_R$.

Consider the composite of $x^{-1} * I_R$ with $x * I_R$.










\(\ds \forall y \in R: \, \)



\(\ds \map {\paren {\paren {x^{-1} * I_R} \circ \paren {x * I_R} } } y\)

\(=\)







\(\ds \map {\paren {x^{-1} * I_R} } {\map {\paren {x * I_R} } y}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {x^{-1} * I_R} } {x * y}\)




















\(\ds \)

\(=\)







\(\ds x^{-1} * \paren {x * y}\)




















\(\ds \)

\(=\)







\(\ds \paren {x^{-1} * x} * y\)




















\(\ds \)

\(=\)







\(\ds y\)




















\(\ds \)

\(=\)







\(\ds \map {I_R} y\)









From Equality of Mappings, $\paren {x^{-1} * I_R} \circ \paren {x * I_R} = I_R$.

Hence $x * I_R$ has a left inverse and a right inverse.
From definition 2 of bijection, $x * I_R$ is a bijection and the inverse is $x^{-1} * I_R$.

Similarly, $I_R * x$ is a bijection and the inverse is $I_R * x^{-1}$.
$\blacksquare$





