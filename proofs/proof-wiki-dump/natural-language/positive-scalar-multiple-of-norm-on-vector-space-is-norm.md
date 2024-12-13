# 

Source: https://proofwiki.org/wiki/Positive_Scalar_Multiple_of_Norm_on_Vector_Space_is_Norm



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space over $\GF$. 
Let $\alpha > 0$ be a real number. 
Define $\norm {\, \cdot \,}' : X \to \R_{\ge 0}$ by: 

$\norm x' = \alpha \norm x$
for each $x \in X$.

Then $\norm {\, \cdot \,}'$ is a norm on $X$. 


Proof
Norm Axiom $\text N 1$: Positive Definiteness
Suppose that $x \in X$ is such that: 

$\norm x' = 0$
Then we have: 

$\alpha \norm x = 0$
Since $\alpha > 0$, it follows that: 

$\norm x = 0$
From Norm Axiom $\text N 1$: Positive Definiteness, we have $x = {\mathbf 0}_X$.
$\Box$

Norm Axiom $\text N 2$: Positive Homogeneity
Let $\lambda \in \GF$ and $x \in X$.
Then we have: 














\(\ds \norm {\lambda x}'\)

\(=\)







\(\ds \alpha \norm {\lambda x}\)




















\(\ds \)

\(=\)







\(\ds \alpha \cmod \lambda \norm x\)





Norm Axiom $\text N 2$: Positive Homogeneity for $\norm {\, \cdot \,}'$














\(\ds \)

\(=\)







\(\ds \cmod \lambda \norm x'\)









$\Box$

Norm Axiom $\text N 3$: Triangle Inequality
Let $x, y \in X$.
Then we have: 














\(\ds \norm {x + y}'\)

\(=\)







\(\ds \alpha \norm {x + y}\)




















\(\ds \)

\(\le\)







\(\ds \alpha \paren {\norm x + \norm y}\)





Norm Axiom $\text N 3$: Triangle Inequality, $\alpha > 0$














\(\ds \)

\(=\)







\(\ds \alpha \norm x + \alpha \norm y\)




















\(\ds \)

\(=\)







\(\ds \norm x' + \norm y'\)









$\blacksquare$





