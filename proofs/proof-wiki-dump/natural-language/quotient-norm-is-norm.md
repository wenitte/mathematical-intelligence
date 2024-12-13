# 

Source: https://proofwiki.org/wiki/Quotient_Norm_is_Norm



Theorem
Let $\Bbb F \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space over $\Bbb F$. 
Let $N$ be a closed linear subspace of $X$.
Let $X/N$ be the quotient vector space of $X$ modulo $N$.
Let $\norm {\, \cdot \,}_{X/N}$ be the quotient norm on $X/N$.

Then $\norm {\, \cdot \,}_{X/N}$ is indeed a norm. 


Proof
Norm is Well-Defined and Finite
Let $\pi$ be the quotient map associated with $X/N$.
We show that if $x, x' \in X$ have $\map \pi x = \map \pi {x'}$, then: 

$\ds \inf_{z \mathop \in N} \norm {x - z} = \inf_{z \mathop \in N} \norm {x' - z}$
From Quotient Mapping is Linear Transformation:

$\map \pi {x' - x} = 0$
From Kernel of Quotient Mapping:

$x' - x \in N$
Since $N$ is a linear subspace of $X$:

$\paren {x' - x} + N = N$
So, we may manipulate: 














\(\ds \inf_{z \mathop \in N} \norm {x - z}\)

\(=\)







\(\ds \inf_{z \mathop \in \paren {x' - x} + N} \norm {x - \paren {z - \paren {x' - x} } }\)




















\(\ds \)

\(=\)







\(\ds \inf_{z \mathop \in \paren {x' - x} + N} \norm {x' - z}\)




















\(\ds \)

\(=\)







\(\ds \inf_{z \mathop \in N} \norm {x' - z}\)









and so the quotient norm is well-defined.
Since: 

$\norm {x - z} \ge 0$
for all $z \in N$, we also have: 

$\ds \inf_{z \mathop \in N} \norm {x - z} \ge 0$
$\Box$


Proof of Norm Axiom $\text N 1$: Positive Definiteness
First, we can calculate: 














\(\ds \norm {0_{X/N} }_{X/N}\)

\(=\)







\(\ds \norm {\map \pi 0}_{X/N}\)




















\(\ds \)

\(=\)







\(\ds \inf_{z \mathop \in N} \norm z\)




















\(\ds \)

\(=\)







\(\ds 0\)





since $0 \in N$ and $\norm z \ge 0$ for each $z \in N$



Conversely, suppose that: 

$\ds \inf_{z \mathop \in N} \norm {x - z} = 0$
Then by the definition of infimum, for each $n \in \N$ there exists $z_n \in N$ such that: 

$\ds \norm {x - z_n} < \frac 1 n$
By the Squeeze Theorem, we then have: 

$\ds \lim_{n \mathop \to \infty} \norm {x - z_n} = 0$
From Sequence in Normed Vector Space Convergent to Limit iff Norm of Sequence minus Limit is Null Sequence, we then have: 

$z_n \to x$
Since $N$ is closed:

$x \in N$
So from Kernel of Quotient Mapping:

$\map \pi x = 0_{X/N}$
and hence:

$\norm {\map \pi x}_{X/N} = 0$
So we have: 

$\norm {\map \pi x}_{X/N} = 0$ if and only if $x = 0_{X/N}$
$\Box$ 


Proof of Norm Axiom $\text N 2$: Positive Homogeneity
Let $t \in \Bbb F$. 
Clearly if $t = 0$, we have: 

$\norm {t \map \pi x}_{X/N} = 0$
So take $t \ne 0$. 
We have: 














\(\ds \norm {t \map \pi x}_{X/N}\)

\(=\)







\(\ds \norm {\map \pi {t x} }_{X/N}\)





Quotient Mapping is Linear Transformation














\(\ds \)

\(=\)







\(\ds \inf_{z \mathop \in N} \norm {t x - z}\)









Since $N$ is a linear subspace of $X$: 

$\ds \paren {\frac 1 t} N = N$
So: 














\(\ds \inf_{z \mathop \in N} \norm {t x - z}\)

\(=\)







\(\ds \inf_{z \mathop \in \paren {1/t} N} \norm {t x - t z}\)




















\(\ds \)

\(=\)







\(\ds \cmod t \inf_{z \mathop \in \paren {1/t} N} \norm {x - z}\)





Norm Axiom $\text N 2$: Positive Homogeneity for $\norm {\, \cdot \,}$














\(\ds \)

\(=\)







\(\ds \cmod t \inf_{z \mathop \in N} \norm {x - z}\)




















\(\ds \)

\(=\)







\(\ds \cmod t \norm {\map \pi x}_{X/N}\)









$\Box$


Proof of Norm Axiom $\text N 3$: Triangle Inequality
We first argue that: 

$\ds \inf_{z \mathop \in N} \norm {x - z} = \inf_{z_1, z_2 \mathop \in N} \norm {x - \paren {z_1 + z_2} }$
First, for each $z_1, z_2 \in N$ we have:

$z_1 + z_2 \in N$
so:

$\ds \inf_{z \mathop \in N} \norm {x - z} \le \inf_{z_1, z_2 \mathop \in N} \norm {x - \paren {z_1 + z_2} }$
Conversely, we have $0 \in N$ and so $z, 0 \in N$ have $z + 0 = z$, and so we also get:


This article needs to be tidied.In particular: the grammar of the above needs reviewingPlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
$\ds \inf_{z_1, z_2 \mathop \in N} \norm {x - \paren {z_1 + z_2} } \le \inf_{z \mathop \in N} \norm {x - z}$
and hence: 

$\ds \inf_{z \mathop \in N} \norm {x - z} = \inf_{z_1, z_2 \mathop \in N} \norm {x - \paren {z_1 + z_2} }$
We now have for $x, y \in X$: 














\(\ds \norm {\map \pi x + \map \pi y}_{X/N}\)

\(=\)







\(\ds \norm {\map \pi {x + y} }_{X/N}\)





Quotient Mapping is Linear Transformation














\(\ds \)

\(=\)







\(\ds \inf_{z \mathop \in N} \norm {\paren {x + y} - z}\)





Definition of Quotient Norm














\(\ds \)

\(=\)







\(\ds \inf_{z_1, z_2 \mathop \in N} \norm {\paren {x + y} - \paren {z_1 + z_2} }\)




















\(\ds \)

\(\le\)







\(\ds \inf_{z_1, z_2 \mathop \in N} \paren {\norm {x - z_1} + \norm {y - z_2} }\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \inf_{z_1, z_2 \mathop \in N} \norm {x - z_1} + \inf_{z_1, z_2 \mathop \in N} \norm {y - z_2}\)




















\(\ds \)

\(=\)







\(\ds \inf_{z_1 \mathop \in N} \norm {x - z_1} + \inf_{z_2 \mathop \in N} \norm {y - z_2}\)




















\(\ds \)

\(=\)







\(\ds \norm {\map \pi x}_{X/N} + \norm {\map \pi y}_{X/N}\)









$\blacksquare$





