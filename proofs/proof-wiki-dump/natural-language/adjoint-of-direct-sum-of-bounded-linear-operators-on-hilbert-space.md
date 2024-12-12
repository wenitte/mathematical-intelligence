# 

Source: https://proofwiki.org/wiki/Adjoint_of_Direct_Sum_of_Bounded_Linear_Operators_on_Hilbert_Space

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\sequence {\family {\HH_i, \innerprod \cdot \cdot_i} }_{i \mathop \in I}$ be a $I$-indexed family of Hilbert spaces over $\GF$.
For each $i \in I$, let $T_i : \HH_i \to \HH_i$ be a bounded linear operator.
Suppose that:

$\ds \sup_{i \mathop \in I} \norm {T_i}_{\map B {\HH_i} } < \infty$
where $\norm {\, \cdot \,}_{\map B {\HH_i} }$ is the norm of a bounded linear operator on $\HH_i$.
Let:

$\ds \HH = \bigoplus_{i \mathop \in I} \HH_i$
be the Hilbert space direct sum of $\sequence {\family {\HH_i, \innerprod \cdot \cdot_i} }_{i \mathop \in I}$ with inner product $\innerprod \cdot \cdot$ and norm $\norm {\, \cdot \,}$.
Let:

$\ds T = \bigoplus_{i \mathop \in I} T_i$
and:

$\ds \bigoplus_{i \mathop \in I} T_i^\ast$
be the direct sum of $\family {T_i}_{i \mathop \in I}$ and $\family {T_i^\ast}_{i \mathop \in I}$ respectively.

Then:

$\ds T^\ast = \bigoplus_{i \mathop \in I} T_i^\ast$
That is:

$\ds \paren {\bigoplus_{i \mathop \in I} T_i}^\ast = \bigoplus_{i \mathop \in I} T_i^\ast$


Proof
From Norm of Adjoint, we have:

$\norm {T_i}_{\map B {\HH_i} } = \norm {T_i^\ast}_{\map B {\HH_i} }$
and hence:

$\ds \sup_{i \mathop \in I} \norm {T_i^\ast}_{\map B {\HH_i} } < \infty$
so we can indeed define $\ds \bigoplus_{i \mathop \in I} T_i^\ast$.
Let $f, g \in \HH$. 
We then have:














\(\ds \innerprod {T f} g\)

\(=\)







\(\ds \sum \set {\innerprod {T_i \map f i} {\map g i}_i : i \in I}\)




















\(\ds \)

\(=\)







\(\ds \sum \set {\innerprod {\map f i} {T_i^\ast \map g i}_i : i \in I}\)





Definition of Adjoint Linear Transformation














\(\ds \)

\(=\)







\(\ds \innerprod f {\paren {\bigoplus_{i \mathop \in I} T_i^\ast} g}\)





Definition of Direct Sum of Bounded Linear Operators on Hilbert Space



and hence conclude:

$\ds T^\ast = \bigoplus_{i \mathop \in I} T_i^\ast$
$\blacksquare$





