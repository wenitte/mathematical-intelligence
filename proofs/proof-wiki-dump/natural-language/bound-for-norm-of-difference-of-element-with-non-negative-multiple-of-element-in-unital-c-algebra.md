# 

Source: https://proofwiki.org/wiki/Bound_for_Norm_of_Difference_of_Element_with_Non-Negative_Multiple_of_Element_in_Unital_C*-Algebra

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra. 
Let $\le_A$ be the canonical preordering of $A$.
Let $a, b \in A$ be such that:

${\mathbf 0}_A \le_A a \le_A b \le_A {\mathbf 1}_A$

Then we have:

$\norm {x - b x}^2 \le \norm {x^\ast \paren { {\mathbf 1}_A - a} x}$
and:

$\norm {x - x b}^2 \le \norm {x \paren { {\mathbf 1}_A - a} x^\ast}$
for each $x \in A$. 


Proof
We have from Scalar Multiplication by Minus One reverses Preordering in Vector Space:

$-{\mathbf 1}_A \le_A -b \le_A -a \le_A {\mathbf 0}_A$
From $(1)$ in the definition of a preordered vector space, we have:

${\mathbf 1}_A - {\mathbf 1}_A \le_A {\mathbf 1}_A - b \le_A {\mathbf 1}_A$
so that:

${\mathbf 0}_A \le_A {\mathbf 1}_A - b \le_A {\mathbf 1}_A$
From Bounds on Hermitian Element of Unital C*-Algebra in terms of Bounds on Spectrum, we have:

$\map {\sigma_A} { {\mathbf 1}_A - b} \subseteq \closedint 0 1$
We have:














\(\ds \norm {x - b x}^2\)

\(=\)







\(\ds \norm {\paren { {\mathbf 1}_A - b} x}^2\)




















\(\ds \)

\(=\)







\(\ds \norm {x^\ast \paren { {\mathbf 1}_A - b}^2 x}\)





Definition of C* Identity



For $t \in \closedint 0 1$, we have:

$0 \le t^2 \le t$
Hence we have:

${\mathbf 0}_A \le_A \paren { {\mathbf 1}_A - b}^2 \le_A {\mathbf 1}_A - b$
from Continuous Function applied to Normal Element of Unital C*-Algebra is Positive iff Function is Non-Negative: Corollary.
From Conjugation in C*-Algebra preserves Positivity: Corollary, we have:

${\mathbf 0}_A \le_A x^\ast \paren { {\mathbf 1}_A - b}^2 x \le_A x^\ast \paren { {\mathbf 1}_A - b} x$
From Norm Preserves Ordering on Positive Elements of C*-Algebra, we have:

$\norm {x^\ast \paren { {\mathbf 1}_A - b}^2 x} \le \norm {x^\ast \paren { {\mathbf 1}_A - b} x}$
From the inequality:

$-b \le_A -a$
we apply $(1)$ in the definition of a preordered vector space to obtain:

${\mathbf 1}_A - b \le_A {\mathbf 1}_A - a$
Applying Conjugation in C*-Algebra preserves Positivity: Corollary, we have:

${\mathbf 0}_A \le_A x^\ast \paren { {\mathbf 1}_A - b} x \le_A x^\ast \paren { {\mathbf 1}_A - a} x$
From Norm Preserves Ordering on Positive Elements of C*-Algebra, we have:

$\norm {x^\ast \paren { {\mathbf 1}_A - b} x} \le \norm {x^\ast \paren { {\mathbf 1}_A - a} x}$
Hence we have shown:

$\norm {x - b x}^2 \le \norm {x^\ast \paren { {\mathbf 1}_A - a} x}$
To finish we now have:














\(\ds \norm {x - x b}^2\)

\(=\)







\(\ds \norm {x^\ast - b x^\ast}^2\)





Definition of Banach *-Algebra














\(\ds \)

\(\le\)







\(\ds \norm {\paren {x^\ast}^\ast \paren { {\mathbf 1}_A - a} x^\ast}\)





from what we have shown already














\(\ds \)

\(=\)







\(\ds \norm {x \paren { {\mathbf 1}_A - a} x^\ast}\)





Definition of Involution on Algebra



$\blacksquare$


Sources
2000: John B. Conway: A Course in Operator Theory ... (previous) ... (next): Lemma $4.2$




