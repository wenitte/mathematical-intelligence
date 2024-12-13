# 

Source: https://proofwiki.org/wiki/Seminorm_on_Vector_Space_induces_Norm_on_Quotient



Theorem
Let $\GF \in \set {\R, \C}$.
Let $X$ be a vector space over $\GF$.
Let $p$ be a seminorm on $X$.
Let:

$N = \set {x \in X : \map p x = 0}$
From Set of Points for which Seminorm is Zero is Vector Subspace, $N$ is a vector subspace.
Let $X/N$ be the quotient vector space of $X$ modulo $N$.
Let $\pi : X \to X/N$ be the quotient mapping.

Then the mapping $\norm {\, \cdot \,} : X/N \to \hointr 0 \infty$ defined by:

$\norm {\map \pi x} = \map p x$
is well-defined and a norm on $X/N$.


Proof
We first want to show that if $\map \pi x = \map \pi y$ for $x, y \in X$, then $\map p x = \map p y$. 
From Quotient Mapping is Linear Transformation and Kernel of Quotient Mapping, it is enough to show that:

if $y - x \in N$ then $\map p x = \map p y$.
It is therefore enough to show that if $x \in X$ and $z \in N$, then:

$\map p {x + z} = \map p x$
Let $x \in X$ and $z \in N$. 
Then $\map p z = 0$. 
From Reverse Triangle Inequality: Seminormed Vector Space, we have:

$\map p x = \size {\map p x - \map p z} \le \map p {x + z}$
From Norm Axiom $\text N 3$: Triangle Inequality, we also have:

$\map p {x + z} \le \map p x + \map p z = \map p x$
Hence we have $\map p {x + z} = \map p x$. 
Hence $\norm {\, \cdot \,}$ is well-defined.
We now prove the norm axioms. 


Proof of Norm Axiom $\text N 1$: Positive Definiteness
Let $x \in X$. 
We have $\norm {\map \pi x} = 0$ if and only if $\map p x = 0$. 
Hence by the definition of $N$, we have $\norm {\map \pi x} = 0$ if and only if $x \in N$. 
From Kernel of Quotient Mapping, we have $\map \pi x = {\mathbf 0}_{X/N}$.
So for $x \in X$ we have $\norm {\map \pi x} = 0$ if and only if $\map \pi x = {\mathbf 0}_{X/N}$.
Hence we have proven Norm Axiom $\text N 1$: Positive Definiteness.
$\Box$


Proof of Norm Axiom $\text N 2$: Positive Homogeneity
Let $x \in X$ and $\lambda \in \GF$.
Then, we have:














\(\ds \norm {\lambda \map \pi x}\)

\(=\)







\(\ds \norm {\map \pi {\lambda x} }\)




















\(\ds \)

\(=\)







\(\ds \map p {\lambda x}\)




















\(\ds \)

\(=\)







\(\ds \cmod \lambda \map p x\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \cmod \lambda \norm {\map \pi x}\)









So we have proven Norm Axiom $\text N 2$: Positive Homogeneity. 
$\Box$


Proof of Norm Axiom $\text N 3$: Triangle Inequality
Let $x, y \in X$.
Then, we have:














\(\ds \norm {\map \pi x + \map \pi y}\)

\(=\)







\(\ds \norm {\map \pi {x + y} }\)




















\(\ds \)

\(=\)







\(\ds \map p {x + y}\)




















\(\ds \)

\(\le\)







\(\ds \map p x + \map p y\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \norm {\map \pi x} + \norm {\map \pi y}\)









Hence we have proven Norm Axiom $\text N 3$: Triangle Inequality.
$\blacksquare$





