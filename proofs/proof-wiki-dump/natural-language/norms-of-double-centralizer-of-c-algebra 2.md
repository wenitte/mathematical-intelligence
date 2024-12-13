# 

Source: https://proofwiki.org/wiki/Norms_of_Double_Centralizer_of_C*-Algebra

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $\tuple {L, R}$ be a double centralizer of $A$.

Then $\norm L_{\map B A} = \norm R_{\map B A}$, where $\norm L_{\map B A}$ and $\norm R_{\map B A}$ denotes the norm of a bounded linear transformation.


Proof
For each $a, b \in A$, we have:














\(\ds \norm {a \map L b}\)

\(=\)







\(\ds \norm {\map R a b}\)





Definition of Double Centralizer of C*-Algebra














\(\ds \)

\(\le\)







\(\ds \norm {\map R a} \norm b\)





Definition of Norm on Algebra














\(\ds \)

\(\le\)







\(\ds \norm R_{\map B A} \norm a \norm b\)





Fundamental Property of Norm on Bounded Linear Transformation



Hence by Norm of Element of C*-Algebra as Supremum over Closed Unit Ball, we have:

$\ds \norm {\map L b} = \sup_{\norm a \le 1} \norm {a \map L b} \le \norm R_{\map B A} \norm b$
By the definition of the norm of a bounded linear transformation, we have:

$\norm L_{\map B A} \le \norm R_{\map B A}$

For each $a, b \in A$, we also have:














\(\ds \norm {\map R a b}\)

\(=\)







\(\ds \norm {a \map L b}\)





Definition of Double Centralizer of C*-Algebra














\(\ds \)

\(\le\)







\(\ds \norm a \norm {\map L b}\)





Definition of Norm on Algebra














\(\ds \)

\(\le\)







\(\ds \norm L_{\map B A} \norm a \norm b\)





Fundamental Property of Norm on Bounded Linear Transformation



Hence by Norm of Element of C*-Algebra as Supremum over Closed Unit Ball, we have:

$\ds \norm {\map R a} = \sup_{\norm a \le 1} \norm {\map R a b} \le \norm L_{\map B A} \norm b$
By the definition of the norm of a bounded linear transformation, we have:

$\norm R_{\map B A} \le \norm L_{\map B A}$
We conclude:

$\norm L_{\map B A} = \norm R_{\map B A}$
$\blacksquare$


Sources
1990: Gerard J. Murphy: C*-Algebras and Operator Theory ... (previous) ... (next): $2.1$: $\text C^\ast$-Algebras




