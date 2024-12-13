# 

Source: https://proofwiki.org/wiki/Necessary_and_Sufficient_Condition_for_Diagonal_Operator_to_be_Invertible



Theorem
Let $\mathbb F \in \set {\R, \C}$.
Let $\sequence {\lambda_n}_{n \mathop \in \N_{> 0} }$ be a bounded sequence in $\mathbb F$.
Let $\ell^2$ be the $2$-sequence space.
Let $\map {CL} {\ell^2} := \map {CL} {\ell^2, \ell^2}$ be the continuous linear transformation space on $\ell^2$.
Let $\Lambda \in \map {CL} {\ell^2}$ be the diagonal operator such that:

$\forall \mathbf x := \tuple {x_1, x_2, \ldots} \in \ell^2 : \map \Lambda {\mathbf x} = \tuple {\lambda_1 \cdot x_1, \lambda_2 \cdot x_2, \ldots}$

Then $\Lambda$ is invertible in $\map {CL} {\ell^2}$ if and only if $\ds \inf_{n \mathop \in \N_{> 0} } \sequence {\size {\lambda_n} } > 0$ where $\inf$ denotes the infimum.

Proof
Necessary Condition
Suppose $\ds \inf_{n \mathop \in \N_{> 0} } \sequence {\size {\lambda_n} } > 0$.
Then:










\(\ds \forall k \in \N_{> 0}: \, \)



\(\ds \size {\lambda_k}\)

\(\ge\)







\(\ds \inf_{n \mathop \in \N_{> 0} } \sequence {\size {\lambda_n} }\)




















\(\ds \)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)

\(\ds \forall k \in \N_{> 0}: \, \)



\(\ds \lambda_k\)

\(\ne\)







\(\ds 0\)









Moreover:














\(\ds \sup_{n \mathop \in \N_{> 0} } \size {\frac 1 {\lambda_n} }\)

\(=\)







\(\ds \sup_{n \mathop \in \N_{> 0} } \frac 1 {\size {\lambda_n} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\ds \inf_{n \mathop \in \N_{> 0} } \size {\lambda_n} }\)









Let $V : \ell^2 \to \ell^2$ be a mapping such that:

$\ds \forall \mathbf a := \sequence {a_n}_{n \mathop \in \N} = \tuple {a_1, a_2, \ldots} : \map V {\mathbf a} = \tuple {\frac {a_1} {\lambda_1}, \frac {a_2} {\lambda_2}, \ldots}$
Then $V \in \map {CL} {\ell^2}$.
Furthremore:










\(\ds \forall \mathbf a \in \ell^2: \, \)



\(\ds \map V {\map \Lambda {\mathbf a} }\)

\(=\)







\(\ds \map V {\sequence {\lambda_n a_n}_{n \mathop \in \N_{> 0} } }\)




















\(\ds \)

\(=\)







\(\ds \sequence {\frac{\lambda_n a_n}{\lambda_n} }_{n \mathop \in \N_{> 0} }\)




















\(\ds \)

\(=\)







\(\ds \sequence {a_n}_{n \mathop \in \N_{> 0} }\)




















\(\ds \)

\(=\)







\(\ds \map I { \sequence {a_n}_{n \mathop \in \N_{> 0} } }\)




















\(\ds \)

\(=\)







\(\ds \sequence {\lambda_n \frac {a_n }{\lambda_n} }_{n \mathop \in \N_{> 0} }\)




















\(\ds \)

\(=\)







\(\ds \map \Lambda {\sequence {\frac{a_n}{\lambda_n} }_{n \mathop \in \N_{> 0} } }\)




















\(\ds \)

\(=\)







\(\ds \map \Lambda {\map V {\mathbf a} }\)









Therefore:

$\Lambda V = V \Lambda = I$
Hence, $\Lambda$ is invertible.
Finally, the unique inverse of $\Lambda$ is $\Lambda^{-1} = V$
$\Box$

Sufficient Condition
Suppose $\Lambda$ is invertible in $\map {CL} {\ell^2}$.
Then there is a unique inverse $\Lambda^{-1}$ of $\Lambda$:

$\ds \exists \Lambda^{-1} \in \map {CL} {\ell^2} : \Lambda \circ \Lambda^{-1} = \Lambda^{-1} \circ \Lambda = I$
Furthermore, Invertible Operator is not Zero Operator.
Thus:

$\exists \mathbf x \in \ell^2 : \map {\Lambda^{-1} } {\mathbf x} \ne \mathbf 0$
We have that P-Sequence Space with P-Norm forms Normed Vector Space.
Hence:










\(\ds \forall \mathbf x \in \ell^2: \, \)



\(\ds \norm {\mathbf x}_2\)

\(=\)







\(\ds \norm {\map I {\mathbf x} }_2\)




















\(\ds \)

\(=\)







\(\ds \norm { \map {\Lambda^{-1} } {\map \Lambda {\mathbf x} } }_2\)




















\(\ds \)

\(\le\)







\(\ds \norm {\Lambda^{-1} } \norm{\map \Lambda {\mathbf x} }_2\)





Supremum Operator Norm as Universal Upper Bound








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {\norm {\Lambda^{-1} } } \norm {\mathbf x}_2\)

\(\le\)







\(\ds \norm {\map \Lambda {\mathbf x} }_2\)









Let $\mathbf x := \mathbf e_k = \tuple {\underbrace{0, \ldots, 0}_{k - 1}, 1, 0, \ldots}$
Then:










\(\ds \forall k \in \N_{> 0}: \, \)



\(\ds \size {\lambda_k}\)

\(=\)







\(\ds \norm {\map \Lambda {\mathbf e_k} }_2\)




















\(\ds \)

\(\ge\)







\(\ds \frac 1 {\norm {\Lambda^{-1} } } \norm {\mathbf e_k}_2\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\norm {\Lambda^{-1} } }\)









Therefore:

$\ds \inf_{k \mathop \in \N_{> 0} } \size {\lambda_k} \ge \frac 1 {\norm {\Lambda^{-1} } } > 0$
$\Box$
$\blacksquare$

Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.4$: Composition of continuous linear transformations




