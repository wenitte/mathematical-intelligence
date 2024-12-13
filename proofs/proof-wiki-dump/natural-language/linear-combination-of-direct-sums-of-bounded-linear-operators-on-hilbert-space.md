# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Direct_Sums_of_Bounded_Linear_Operators_on_Hilbert_Space

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\sequence {\family {\HH_i, \innerprod \cdot \cdot_i} }_{i \mathop \in I}$ be a $I$-indexed family of Hilbert spaces over $\GF$.
For each $i \in I$, let $T_i : \HH_i \to \HH_i$ and $S_i : \HH_i \to \HH_i$ be bounded linear operators.
Let $\lambda \in \GF$.
Suppose that:

$\ds \sup_{i \mathop \in I} \norm {T_i}_{\map B {\HH_i} } < \infty$
and:

$\ds \sup_{i \mathop \in I} \norm {S_i}_{\map B {\HH_i} } < \infty$
where $\norm {\, \cdot \,}_{\map B {\HH_i} }$ is the norm of a bounded linear operator on $\HH_i$.
Let:

$\ds \HH = \bigoplus_{i \mathop \in I} \HH_i$
be the Hilbert space direct sum of $\sequence {\family {\HH_i, \innerprod \cdot \cdot_i} }_{i \mathop \in I}$ with inner product $\innerprod \cdot \cdot$ and norm $\norm {\, \cdot \,}$.
Let:

$\ds T = \bigoplus_{i \mathop \in I} T_i$
$\ds S = \bigoplus_{i \mathop \in I} S_i$
$\ds \bigoplus_{i \mathop \in I} \paren {T_i + \lambda S_i}$
be the direct sum of $\family {T_i}_{i \mathop \in I}$, $\family {S_i}_{i \mathop \in I}$ and $\family {T_i + \lambda S_i}_{i \mathop \in I}$ respectively.

Then we have:

$\ds T + \lambda S = \bigoplus_{i \mathop \in I} \paren {T_i + \lambda S_i}$
That is:

$\ds \bigoplus_{i \mathop \in I} T_i + \lambda \bigoplus_{i \mathop \in I} S_i = \bigoplus_{i \mathop \in I} \paren {T_i + \lambda S_i}$


Proof
First, from Norm Axiom $\text N 3$: Triangle Inequality and Norm Axiom $\text N 2$: Positive Homogeneity, we have:














\(\ds \norm {T_i + \lambda S_i}_{\map B {\HH_i} }\)

\(\le\)







\(\ds \norm {T_i}_{\map B {\HH_i} } + \cmod \lambda \norm {S_i}_{\map B {\HH_i} }\)




















\(\ds \)

\(\le\)







\(\ds \sup_{i \mathop \in I} \norm {T_i}_{\map B {\HH_i} } + \cmod \lambda \sup_{i \mathop \in I} \norm {S_i}_{\map B {\HH_i} }\)









Hence:

$\ds \sup_{i \mathop \in I} \norm {T_i + \lambda S_i}_{\map B {\HH_i} } \le \sup_{i \mathop \in I} \norm {T_i}_{\map B {\HH_i} } + \cmod \lambda \sup_{i \mathop \in I} \norm {S_i}_{\map B {\HH_i} } < \infty$
Hence the direct sum:

$\ds \bigoplus_{i \mathop \in I} \paren {T_i + \lambda S_i}$ is well-defined.
Let $f \in \HH$ and $i \in I$.
We have:














\(\ds \map {\paren {\paren {\bigoplus_{i \mathop \in I} T_i} f} } i + \lambda \map {\paren {\paren {\bigoplus_{i \mathop \in I} S_i} f} } i\)

\(=\)







\(\ds T_i \map f i + \lambda S_i \map g i\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {\paren {\bigoplus_{i \mathop \in I} \paren {T_i + \lambda S_i} } f} } i\)









Hence we have:

$\ds \paren {\bigoplus_{i \mathop \in I} T_i} f + \lambda \paren {\bigoplus_{i \mathop \in I} S_i} f = \paren {\bigoplus_{i \mathop \in I} \paren {T_i + \lambda S_i} } f$
for each $f \in \HH$.
Hence:

$\ds \bigoplus_{i \mathop \in I} T_i + \lambda \bigoplus_{i \mathop \in I} S_i = \bigoplus_{i \mathop \in I} \paren {T_i + \lambda S_i}$
$\blacksquare$





