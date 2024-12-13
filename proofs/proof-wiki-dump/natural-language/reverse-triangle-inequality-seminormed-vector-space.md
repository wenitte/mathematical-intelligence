# 

Source: https://proofwiki.org/wiki/Reverse_Triangle_Inequality/Seminormed_Vector_Space

Theorem
Let $\struct {K, +, \circ}$ be a division ring with norm $\norm {\,\cdot\,}_K$.
Let $X$ be a vector space over $K$.
Let $p$ be a seminorm on $X$.

Then:

$\forall x, y \in X : \size {\map p x - \map p y} \le \map p {x - y}$

This article, or a section of it, needs explaining.In particular: $\size {\map p x - \map p y}$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof
We have:














\(\ds \map p x - \map p y\)

\(=\)







\(\ds \map p {x - y + y} - \map p y\)




















\(\ds \)

\(\le\)







\(\ds \map p {x - y} + \map p y - \map p y\)





Seminorm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \map p {x - y}\)










We also have:














\(\ds \map p y - \map p x\)

\(=\)







\(\ds \map p {y - x + x} - \map p x\)




















\(\ds \)

\(\le\)







\(\ds \map p {y - x} + \map p x - \map p x\)





Seminorm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \map p {y - x}\)




















\(\ds \)

\(=\)







\(\ds \norm {-1}_K \map p {x - y}\)





Seminorm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \map p {x - y}\)





Norm of Negative of Unity of Division Ring




Therefore:

$-\map p {x - y} \le \map p x - \map p y \le \map p {x - y}$

This article, or a section of it, needs explaining.In particular: There is a step missing: $-\map p {x - y} \le \map p x - \map p y$ not explicitly demonstratedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
In view of Definition of Absolute Value, the claim is proved.
$\blacksquare$





