# 

Source: https://proofwiki.org/wiki/Quotient_Metric_on_Vector_Space_is_Invariant_Pseudometric



Theorem
Let $K$ be a field.
Let $X$ be a vector space over $K$. 
Let $d$ be an invariant metric on $X$.
Let $N$ be a vector subspace of $X$.
Let $X/N$ be the quotient vector space of $X$ modulo $N$.
Let $\pi : X \to X/N$ be the quotient mapping.
Let $d_N$ be the quotient metric on $X/N$ induced by $d$.

Then $d_N$ is an invariant pseudometric.


Proof
Proof of Metric Space Axiom $(\text M 1)$
Let $x, y \in X$.
Then, we have:

$\ds \map {d_N} {\map \pi x, \map \pi x} = \inf_{z \mathop \in N} \map d {x - x, z} = \inf_{z \mathop \in N} \map d { {\mathbf 0}_X, z}$
Since $N$ is a vector subspace, we have ${\mathbf 0}_X \in N$.
From Metric Space Axiom $(\text M 1)$, we have $\map d { {\mathbf 0}_X, {\mathbf 0}_X} = 0$, and so:

$\ds \inf_{z \mathop \in N} \map d { {\mathbf 0}_X, z} \le 0$
Since we also have:

$\ds \inf_{z \mathop \in N} \map d { {\mathbf 0}_X, z} \ge 0$
we obtain:

$\ds \inf_{z \mathop \in N} \map d { {\mathbf 0}_X, z} = 0$
Hence we have proved Metric Space Axiom $(\text M 1)$ for $d_N$.
$\Box$

Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality
Let $x, y, z \in X$. 
Applying Metric Space Axiom $(\text M 2)$: Triangle Inequality to $d$, we have:

$\map d {x, z + n} \le \map d {x, y + n'} + \map d {y + n', z + n}$
for each $n, n' \in N$.
That is, using the translation invariance of $d$:

$\map d {x - z, n} \le \map d {x - y, n'} + \map d {y - z, n - n'}$
for each $n, n' \in N$.
Taking the infimum over $n \in N$, we have: 














\(\ds \map {d_N} {\map \pi x, \map \pi z}\)

\(=\)







\(\ds \inf_{n \mathop \in N} \map d {x - z, n}\)





Definition of Invariant Metric on Vector Space














\(\ds \)

\(\le\)







\(\ds \inf_{n \mathop \in N} \paren {\map d {x - y, n'} + \map d {y - z, n - n'} }\)





Infimum preserves Inequalities














\(\ds \)

\(=\)







\(\ds \map d {x - y, n'} + \inf_{n \mathop \in N} \map d {y - z, n - n'}\)





Infimum Plus Constant














\(\ds \)

\(=\)







\(\ds \map d {x - y, n'} + \inf_{n^\ast \mathop \in N - n'} \map d {y - z, n^\ast}\)




















\(\ds \)

\(=\)







\(\ds \map d {x - y, n'} + \inf_{n^\ast \mathop \in N} \map d {y - z, n^\ast}\)





Definition of Vector Subspace














\(\ds \)

\(=\)







\(\ds \map d {x - y, n'} + \map {d_N} {\map \pi y, \map \pi z}\)





Definition of Quotient Metric on Vector Space



Taking the infimum over $n' \in N$, using Infimum preserves Inequalities and Infimum Plus Constant, we have:

$\map {d_N} {\map \pi x, \map \pi z} \le \map {d_N} {\map \pi x, \map \pi y} + \map {d_N} {\map \pi y, \map \pi z}$
Hence we have proved Metric Space Axiom $(\text M 2)$: Triangle Inequality for $d_N$.
$\Box$

Proof of Metric Space Axiom $(\text M 3)$
Let $x, y \in X$. 
Then we have: 














\(\ds \map {d_N} {\map \pi x, \map \pi y}\)

\(=\)







\(\ds \inf_{z \mathop \in N} \map d {x - y, z}\)




















\(\ds \)

\(=\)







\(\ds \inf_{z \mathop \in N} \map d {y - x, -z}\)





Symmetry of Invariant Metric on Vector Space














\(\ds \)

\(=\)







\(\ds \inf_{z' \mathop \in -N} \map d {y - x, z'}\)




















\(\ds \)

\(=\)







\(\ds \inf_{z \mathop \in N} \map d {y - x, z}\)





Definition of Vector Subspace














\(\ds \)

\(=\)







\(\ds \map {d_N} {\map \pi y, \map \pi x}\)





Definition of Quotient Metric on Vector Space



Hence we have proved Metric Space Axiom $(\text M 3)$ for $d_N$. 
$\Box$

Proof of translation invariance
Let $\map \pi x, \map \pi y, \map \pi z \in X/N$ for $x, y, z \in X$.
We have:














\(\ds \map {d_N} {\map \pi x + \map \pi z, \map \pi y + \map \pi z}\)

\(=\)







\(\ds \map {d_N} {\map \pi {x + z}, \map \pi {y + z} }\)





Quotient Mapping is Linear Transformation














\(\ds \)

\(=\)







\(\ds \inf_{n \mathop \in N} \map d {\paren {x + z} - \paren {y + z}, n}\)




















\(\ds \)

\(=\)







\(\ds \inf_{n \mathop \in N} \map d {x - y, n}\)




















\(\ds \)

\(=\)







\(\ds \map {d_N} {\map \pi x, \map \pi y}\)









So $d_N$ is an invariant pseudometric.
$\blacksquare$





