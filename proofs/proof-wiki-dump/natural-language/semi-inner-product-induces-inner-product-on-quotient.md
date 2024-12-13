# 

Source: https://proofwiki.org/wiki/Semi-Inner_Product_induces_Inner_Product_on_Quotient



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {V, \innerprod \cdot \cdot}$ be a semi-inner product space over $\GF$.
Let:

$N = \set {x \in V : \innerprod x x = 0}$
Let $X/N$ be the quotient vector space of $X$ modulo $N$. 
Define:

$\innerprod {x + N} {y + N}_{X/N} = \innerprod x y$
for each $x, y \in X$. 

Then $\innerprod \cdot \cdot_{X/N}$ is an inner product on $X/N$.


Proof
First note that Zero Set of Semi-Inner Product is Vector Subspace shows that $N$ is a vector subspace and hence $X/N$ is well-defined.
We show that $\innerprod \cdot \cdot_{X/N}$ is well-defined. 
We need to show that if $x, y, x', y' \in X$ are such that $x - x' \in N$ and $y - y' \in N$, then $\innerprod x y = \innerprod {x'} {y'}$. 
We have:














\(\ds \innerprod x y\)

\(=\)







\(\ds \innerprod {x - x' + x'} {y - y' + y'}\)




















\(\ds \)

\(=\)







\(\ds \innerprod {x - x'} {y - y' + y'} + \innerprod {x'} {y - y' + y'}\)




















\(\ds \)

\(=\)







\(\ds \innerprod {x - x'} {y - y'} + \innerprod {x - x'} {y'} + \innerprod {x'} {y - y'} + \innerprod {x'} {y'}\)









From Cauchy-Bunyakovsky-Schwarz Inequality: Inner Product Spaces, we have:

$\cmod {\innerprod {x - x'} {y - y'} }^2 \le \innerprod {x - x'} {x - x'} \innerprod {y - y'} {y - y'} = 0$
since $x - x' \in N$ and $y - y' \in N$.
We also have:

$\cmod {\innerprod {x - x'} {y'} }^2 \le \innerprod {x - x'} {x - x'} \innerprod {y'} {y'} = 0$
since $x - x' \in N$.
Finally:

$\cmod {\innerprod {x'} {y - y'} }^2 \le \innerprod {x'} {x'} \innerprod {y - y'} {y - y'} = 0$
since $y - y' \in N$. 
So we have $\innerprod {x - x'} {y - y'} + \innerprod {x - x'} {y'} + \innerprod {x'} {y - y'} = 0$ and we obtain:

$\innerprod x y = \innerprod {x'} {y'}$
Hence $\innerprod \cdot \cdot_{X/N}$ is well-defined.
We just need to verify that $\innerprod \cdot \cdot_{X/N}$ is an inner product on $X/N$.


Proof of conjugate symmetry
Let $x, y \in X$.
We have:














\(\ds \overline {\innerprod {x + N} {y + N}_{X/N} }\)

\(=\)







\(\ds \overline {\innerprod x y}\)




















\(\ds \)

\(=\)







\(\ds \innerprod y x\)





conjugate symmetry of $\innerprod \cdot \cdot$














\(\ds \)

\(=\)







\(\ds \innerprod {y + N} {x + N}_{X/N}\)









$\Box$


Proof of linearity in first argument
Let $x, y, z \in X$, we have:














\(\ds \innerprod {\paren {x + N} + \paren {y + N} } {z + N}_{X/N}\)

\(=\)







\(\ds \innerprod {\paren {x + y} + N} {z + N}_{X/N}\)





Definition of Quotient Vector Space














\(\ds \)

\(=\)







\(\ds \innerprod {x + y} z\)




















\(\ds \)

\(=\)







\(\ds \innerprod x z + \innerprod y z\)





linearity in first argument for $\innerprod \cdot \cdot$














\(\ds \)

\(=\)







\(\ds \innerprod {x + N} {z + N}_{X/N} + \innerprod {y + N} {z + N}_{X/N}\)









$\Box$


Proof of non-negative definiteness
Let $x \in X$.
We have:

$\innerprod {x + N} {x + N}_{X/N} = \innerprod x x \in \R_{\ge 0}$
From non-negative definiteness of $\innerprod \cdot \cdot$ .
$\Box$


Proof of positiveness
Let $x \in X$.
Again we have:

$\innerprod {x + N} {x + N}_{X/N} = \innerprod x x$
So $\innerprod {x + N} {x + N}_{X/N} = 0$ if and only if $\innerprod x x = 0$ if and only if $x \in N$.
This is, if and only if $x + N = {\mathbf 0}_{X/N}$.
$\blacksquare$





