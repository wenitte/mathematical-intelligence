# 

Source: https://proofwiki.org/wiki/Diagonal_Operator_over_2-Sequence_Space_is_Continuous_Linear_Transformation



Theorem
Let $\Bbb K = \set {\R, \C}$.
Let $\sequence {\lambda_n}_{n \mathop \in \N_{> 0} }$ be a bounded sequence in $\Bbb K$.
Let $\struct {\ell^2, \norm {\, \cdot \,}_2}$ be the normed $2$-sequence space.
Let $\mathbf x = \tuple {a_1, a_2, a_3, \ldots} \in \ell^2$.
Suppose $\Lambda : \ell^2 \to \ell^2$ is a diagonal operator such that:

$\Lambda \tuple {a_1, a_2, a_3, \ldots} = \tuple {\lambda_1 a_1, \lambda_2 a_2, \lambda_3 a_3, \ldots}$

Then $\Lambda \in \map {CL} {\ell^2}$.


Proof
Linearity
Let $\sequence {a_n}_{n \mathop \in \N_{> 0} }, \sequence {b_n}_{n \mathop \in \N_{> 0} } \in \ell^2$.














\(\ds \map \Lambda {k \sequence {a_n} + \sequence {b_n} }\)

\(=\)







\(\ds \map \Lambda {\sequence {k a_n + b_n} }\)





$P$-sequence space is a vector space














\(\ds \)

\(=\)







\(\ds \sequence {\lambda_n \paren{k a_n + b_n} }\)




















\(\ds \)

\(=\)







\(\ds \sequence {\lambda_n k a_n + \lambda_n b_n }\)




















\(\ds \)

\(=\)







\(\ds k \sequence {\lambda_n a_n} + \sequence {\lambda_n b_n}\)





$P$-sequence space is a vector space














\(\ds \)

\(=\)







\(\ds k \map \Lambda {\sequence {a_n} } + \map \Lambda {\sequence {b_n} }\)









By linearity of transformations:

$\Lambda \in \map \LL {\ell^2}$


Continuity
For $\tuple {a_n}_{n \mathop \in \N_{> 0} }$:














\(\ds \norm {\Lambda \mathbf x }_2^2\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \size {\lambda_n a_n}^2\)





Definition of P-Norm














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \size {\lambda_n}^2 \size {a_n}^2\)





Complex Modulus of Product of Complex Numbers














\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\sup_{n \mathop \in \N_{> 0} } \size{\lambda_n} }^2 \size {a_n}^2\)





Definition of Supremum of Sequence














\(\ds \)

\(=\)







\(\ds \paren {\sup_{n \mathop \in \N_{> 0} } \size{\lambda_n} }^2 \sum_{n \mathop = 1}^\infty \size {a_n}^2\)




















\(\ds \)

\(=\)







\(\ds \paren {\sup_{n \mathop \in \N_{> 0} } \size{\lambda_n} }^2 \norm {\mathbf x}_2^2\)





Definition of P-Norm



By Continuity of Linear Transformation between Normed Vector Spaces:

$\Lambda \in \map C {\ell^2}$.
By definition:

$\Lambda \in \map {CL} {\ell^2}$
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.3$: The normed space $\map {CL} {X,Y}$. Operator norm and the normed space $\map {CL} {X, Y}$




