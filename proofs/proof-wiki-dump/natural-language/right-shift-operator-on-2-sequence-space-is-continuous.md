# 

Source: https://proofwiki.org/wiki/Right_Shift_Operator_on_2-Sequence_Space_is_Continuous

Theorem
Let $\struct {\ell^2, \norm {\, \cdot \,}_2}$ be the $2$-sequence space with $2$-norm.
Let $R : \ell^2 \to \ell^2$ be the right shift operator.

Then $R$ is continuous on $\struct {\ell^2, \norm {\, \cdot \,}_2}$.


Proof
Let $\sequence {a_n}_{n \mathop \in \N} = \tuple {a_1, a_2, a_3, \ldots}$ be a $2$-sequence.














\(\ds \norm {\map R {\sequence {a_n}_{n \mathop \in \N} } }_2\)

\(=\)







\(\ds \norm { R \tuple {a_1, a_2, a_3, \ldots} }_2\)




















\(\ds \)

\(=\)







\(\ds \norm {\tuple {0, a_1, a_2, \ldots} }_2\)





Definition of Right Shift Operator














\(\ds \)

\(=\)







\(\ds \sqrt {0^2 + \sum_{i \mathop = 1}^\infty \size {a_i}^2}\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\sum_{i \mathop = 1}^\infty \size {a_i}^2}\)




















\(\ds \)

\(=\)







\(\ds 1 \cdot \norm {\sequence {a_n}_{n \mathop \in \N} }_2\)









By Continuity of Linear Transformation between Normed Vector Spaces, $R$ is continuous in $\struct {\ell^2, \norm {\, \cdot \,}_2}$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.3$: The normed space $\map {CL} {X,Y}$




