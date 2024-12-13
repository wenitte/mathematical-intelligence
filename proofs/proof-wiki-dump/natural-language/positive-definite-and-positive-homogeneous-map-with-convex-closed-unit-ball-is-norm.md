# 

Source: https://proofwiki.org/wiki/Positive_Definite_and_Positive_Homogeneous_Map_with_Convex_Closed_Unit_Ball_is_Norm

Theorem
Let $\mathbb F$ be a subfield of $\C$. 
Let $X$ be a vector space over $\mathbb F$. 
Let $N : X \to \R_{\ge 0}$ be a positive definite and positive homogeneous function.
That is: 

$(1): \quad$ $\map N x = 0$ if and only if $x = 0$
$(2): \quad$ $\map N {\lambda x} = \cmod \lambda \map N x$ for each $x \in X$ and $\lambda \in \mathbb F$.
Suppose further that: 

$B = \set {x \in X : \map N x \le 1}$ is convex.

Then: 

$N$ is a norm on $X$.


Proof
Note that $N$ satisfies Norm Axiom $\text N 1$: Positive Definiteness and Norm Axiom $\text N 2$: Positive Homogeneity.
So we only need to verify Norm Axiom $\text N 3$: Triangle Inequality.
That is, we want to show that: 

$\map N {x + y} \le \map N x + \map N y$
for each $x, y \in X$. 
Fix $x, y \in X$. 
If $\map N x = 0$, then $x = 0$ and we have: 














\(\ds \map N {x + y}\)

\(=\)







\(\ds \map N y\)




















\(\ds \)

\(=\)







\(\ds \map N x + \map N y\)









Similarly, if $\map N y = 0$, then $y = 0$ and: 














\(\ds \map N {x + y}\)

\(=\)







\(\ds \map N x\)




















\(\ds \)

\(=\)







\(\ds \map N x + \map N y\)









In both cases we clearly have: 

$\map N {x + y} \le \map N x + \map N y$
So suppose that $\map N x > 0$ and $\map N y > 0$.
We then have: 














\(\ds \map N {\frac x {\map N x} }\)

\(=\)







\(\ds \frac {\map N x} {\map N x}\)





since $N$ is positive homogeneous














\(\ds \)

\(=\)







\(\ds 1\)









so:

$\dfrac x {\map N x} \in B$
Similarly: 














\(\ds \map N {\frac y {\map N y} }\)

\(=\)







\(\ds \frac {\map N y} {\map N y}\)





since $N$ is positive homogeneous














\(\ds \)

\(=\)







\(\ds 1\)









so:

$\dfrac y {\map N y} \in B$
Now note that we can write: 

$1 = \dfrac {\map N x} {\map N x + \map N y} + \dfrac {\map N y} {\map N x + \map N y}$
Since $B$ is convex, we have: 

$\dfrac {\map N x} {\map N x + \map N y} \paren {\dfrac x {\map N x} } + \dfrac {\map N y} {\map N x + \map N y} \paren {\dfrac y {\map N y} } \in B$
That is: 














\(\ds \frac {\map N x} {\map N x + \map N y} \paren {\frac x {\map N x} } + \frac {\map N y} {\map N x + \map N y} \paren {\frac y {\map N y} }\)

\(=\)







\(\ds \frac x {\map N x + \map N y} + \frac y {\map N x + \map N y}\)




















\(\ds \)

\(=\)







\(\ds \frac {x + y} {\map N x + \map N y}\)




















\(\ds \)

\(\in\)







\(\ds B\)









That is: 

$\map N {\dfrac {x + y} {\map N x + \map N y} } \le 1$
Using positive homogeneity, we then obtain: 

$\dfrac {\map N {x + y} } {\map N x + \map N y} \le 1$
so:

$\map N {x + y} \le \map N x + \map N y$
as was required.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $3.1$: Norms




