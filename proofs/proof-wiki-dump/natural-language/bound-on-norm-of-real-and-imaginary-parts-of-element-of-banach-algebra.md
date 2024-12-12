# 

Source: https://proofwiki.org/wiki/Bound_on_Norm_of_Real_and_Imaginary_Parts_of_Element_of_Banach_*-Algebra

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a Banach $\ast$-algebra.
Let $x \in A$.
Let $\map \Re x$ and $\map \Im x$ be the real and imaginary parts of $x$ respectively.

Then:

$\norm {\map \Re x} \le \norm x$
and:

$\norm {\map \Im x} \le \norm x$
for each $x \in A$. 


Proof
Let $x \in A$.
Then we have:














\(\ds \norm {\frac 1 2 \paren {x + x^\ast} }\)

\(=\)







\(\ds \frac 1 2 \norm {x + x^\ast}\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(\le\)







\(\ds \frac 1 2 \paren {\norm x + \norm {x^\ast} }\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\norm x + \norm x}\)





Definition of Banach *-Algebra














\(\ds \)

\(=\)







\(\ds \norm x\)









and:














\(\ds \norm {\frac 1 {2 i} \paren {x - x^\ast} }\)

\(=\)







\(\ds \frac 1 2 \norm {x - x^\ast}\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(\le\)







\(\ds \frac 1 2 \paren {\norm x + \norm {x^\ast} }\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\norm x + \norm x}\)





Definition of Banach *-Algebra














\(\ds \)

\(=\)







\(\ds \norm x\)









$\blacksquare$





