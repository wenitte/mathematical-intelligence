# 

Source: https://proofwiki.org/wiki/Quotient_Metric_on_Vector_Space_is_Well-Defined

Theorem
Let $K$ be a field.
Let $X$ be a vector space over $K$. 
Let $d$ be an invariant metric on $X$.
Let $N$ be a vector subspace of $X$.
Let $X/N$ be the quotient vector space of $X$ modulo $N$.
Let $\pi : X \to X/N$ be the quotient mapping. 

Then the mapping $d_N : X/N \times X/N \to \hointr 0 \infty$ defined by:

$\ds \map {d_N} {\map \pi x, \map \pi y} = \inf_{z \mathop \in N} \map d {x - y, z}$
for each $\map \pi x, \map \pi y \in X/N$, is well-defined. 


Proof
Let $x, y \in X$.
Then $\map d {x - y, z} \ge 0$ for all $z \in N$, and so:

$\ds \inf_{z \mathop \in N} \map d {x - y, z}$ exists as a real number.
Let $x', y' \in X$ be such that $\map \pi x = \map \pi {x'}$ and $\map \pi y = \map \pi {y'}$.
We now need to show that if $x', y' \in X$ are such that:

$\map \pi x = \map \pi {x'}$
and:

$\map \pi y = \map \pi {y'}$
then:

$\ds \inf_{z \mathop \in N} \map d {x - y, z} = \inf_{z \mathop \in N} \map d {x' - y', z}$
From Quotient Mapping is Linear Transformation, we have $\map \pi {x' - x} = {\mathbf 0}_{X/N}$ and $\map \pi {y' - y} = {\mathbf 0}_{X/N}$. 
From Kernel of Quotient Mapping, we obtain $x' \in x + N$ and $y' \in y + N$.
Then there exists $z_1, z_2 \in N$ such that $x' = x + z_1$ and $y' = y + z_2$. 
Then we have:














\(\ds \inf_{z \mathop \in N} \map d {x' - y', z}\)

\(=\)







\(\ds \inf_{z \mathop \in N} \map d {x + z_1 - \paren {y + z_2}, z}\)




















\(\ds \)

\(=\)







\(\ds \inf_{z \mathop \in N} \map d {\paren {x - y} + \paren {z_1 - z_2}, z}\)




















\(\ds \)

\(=\)







\(\ds \inf_{z \mathop \in N} \map d {x - y, z - \paren {z_1 - z_2} }\)





Definition of Invariant Metric on Vector Space














\(\ds \)

\(=\)







\(\ds \inf_{z' \mathop \in N - \paren {z_1 - z_2} } \map d {x - y, z'}\)




















\(\ds \)

\(=\)







\(\ds \inf_{z' \mathop \in N} \map d {x - y, z'}\)





Definition of Vector Subspace



as required.
$\blacksquare$





