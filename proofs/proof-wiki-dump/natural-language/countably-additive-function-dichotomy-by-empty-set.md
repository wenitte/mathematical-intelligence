# 

Source: https://proofwiki.org/wiki/Countably_Additive_Function_Dichotomy_by_Empty_Set

Theorem
Let $\AA$ be a $\sigma$-algebra.
Let $\overline \R$ denote the extended set of real numbers.
Let $f: \AA \to \overline \R$ be a function be a countably additive function.

Then the exactly one of the following is true:

$\paren 1$: $\map f \O = 0$
$\paren 2$: $\map f \O = + \infty$. Moreover, $\map f A = + \infty$ for all $A \in \AA$.
$\paren 3$: $\map f \O = - \infty$. Moreover, $\map f A = - \infty$ for all $A \in \AA$.


Proof
Suppose $\map f \O \ne 0$.

Then:














\(\ds \map f \O\)

\(=\)







\(\ds \map f {\bigcup_{n \mathop \in \N} \O}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \in \N} \map f \O\)





Definition of Countably Additive Function














\(\ds \)

\(\in\)







\(\ds \set {+\infty, -\infty}\)









$\Box$

Furthermore, for each $A \in \AA$ we have:














\(\ds \map f A\)

\(=\)







\(\ds \map f {A \cup \bigcup_{\N_{>0} }\O}\)




















\(\ds \)

\(=\)







\(\ds \map f A + \sum_{n \mathop \in \N_{>0} } \map f \O\)





Definition of Countably Additive Function














\(\ds \)

\(=\)







\(\ds \begin {cases}
+\infty & : \map f \O = +\infty \\
-\infty & : \map f \O = -\infty \end {cases}\)










$\blacksquare$





