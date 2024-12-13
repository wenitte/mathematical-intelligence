# 

Source: https://proofwiki.org/wiki/Riemann_Integral_Operator_is_Continuous_Linear_Transformation

Theorem
Let $\struct {C \closedint a b, \norm {\, \cdot \,}_\infty}$ be the normed vector space of real-valued functions continuous on $\closedint a b \subseteq \R$ equipped with the supremum norm.
Let $T : C \closedint a b \to \R$ be the Riemann integral operator:

$\ds \forall \mathbf x \in C \closedint a b : \map T {\mathbf x} = \int_a^b \map {\mathbf x} t \rd t$

Then $T$ is a continuous mapping.


Proof
We have that Integral Operator is Linear.
Furthermore:














\(\ds \size {T \mathbf x}\)

\(=\)







\(\ds \size {\int_a^b \map {\mathbf x} t \rd t}\)




















\(\ds \)

\(\le\)







\(\ds \int_a^b \size {\map {\mathbf x} t} \rd t\)




















\(\ds \)

\(\le\)







\(\ds \int_a^b \norm {\map {\mathbf x} t}_\infty \rd t\)





Definition:Supremum Norm on Space of Continuous on Closed Interval Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \paren {b - a} \norm {\mathbf x}_\infty\)









By Continuity of Linear Transformation between Normed Vector Spaces, $T$ is continuous.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.3$: The normed space $\map {CL} {X,Y}$




