# 

Source: https://proofwiki.org/wiki/Convergent_Sequence_of_Continuous_Real_Functions_is_Integrable_Termwise

Theorem
Let $I = \closedint a b \subseteq \R$ be a closed real interval.
Let $\struct {\map CI, \norm {\, \cdot \,}_\infty}$ be the normed vector space of real-valued functions continuous on $I$ equipped with the supremum norm.
Let $\sequence {f_k}_{k \mathop \in \N_{>0} } \in C \closedint a b$ be a sequence.
Suppose $\ds \sum_{k \mathop = 1}^\infty f_k$ converges to $f$ in $\struct {\map C I, \norm {\, \cdot \,}_\infty}$.

Then:

$\ds \sum_{k \mathop = 1}^\infty \int_a^b f_k \rd t = \int_a^b \map f t \rd t$


Proof













\(\ds \int_a^b \map f t \rd t\)

\(=\)







\(\ds T f\)





Definition of Riemann Integral Operator














\(\ds \)

\(=\)







\(\ds T \lim_{n \mathop \to \infty} s_n\)





Definition of Convergent Series in Normed Vector Space














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} T s_n\)





Riemann Integral Operator is Continuous Linear Transformation, Continuous Mappings preserve Convergent Sequences














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_a^b \map {s_n} t \rd t\)





Definition of Riemann Integral Operator














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \sum_{k \mathop = 1}^n \int_a^b \map {f_k} t \rd t\)





Definition of Sequence of Partial Sums














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \int_a^b \map {f_k} t \rd t\)









$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.3$: The normed space $\map {CL} {X,Y}$




