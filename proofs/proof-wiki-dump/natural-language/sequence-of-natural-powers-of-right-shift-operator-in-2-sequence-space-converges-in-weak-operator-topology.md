# 

Source: https://proofwiki.org/wiki/Sequence_of_Natural_Powers_of_Right_Shift_Operator_in_2-Sequence_Space_Converges_in_Weak_Operator_Topology

Theorem
Let $\struct {\ell^2, \norm {\, \cdot \,}_2}$ be the $2$-sequence normed vector space.
Let $\map {CL} {\ell^2} := \map {CL} {\ell^2, \ell^2}$ be the continuous linear transformation space.
Let $R \in \map {CL} {\ell^2}$ be the right shift operator over $\ell^2$.
Let $\sequence {R^n}_{n \mathop \in \N}$ be a sequence.
Let $\mathbf 0 \in \map {CL} {\ell^2}$ be the zero mapping.

Then $\sequence {R^n}_{n \mathop \in \N}$ converges to $\mathbf 0$ in the weak operator topology.


Proof
By Representation Theorem:

$\ds \forall \phi \in \map {CL} {\ell^2, \C} : \exists \mathbf x_\phi = \sequence {\map {\mathbf x_\phi} k}_{k \mathop \in \N} \in \ell^2 : \forall \mathbf a = \sequence {\map {\mathbf a} k}_{k \mathop \in \N} \in \ell^2 : \map \phi {\mathbf a} = \sum_{k \mathop = 1}^\infty \map {\mathbf a} k \paren{\map {\mathbf x_\phi} k}^*$
where $*$ denotes the complex conjugation.
Furthermore:










\(\ds \forall \mathbf a \in \ell^2 : \forall \phi \in \map {CL} {\ell^2, \C}: \, \)



\(\ds \size {\map \phi {R^n \mathbf a} }^2\)

\(=\)







\(\ds \size {\sum_{k \mathop = 1}^\infty \map {\mathbf a} k \paren{\map {\mathbf x_\phi} {n + k} }^* }^2\)




















\(\ds \)

\(\le\)







\(\ds \norm {\mathbf a}^2_2 \sum_{k \mathop = 1}^\infty \size {\map {\mathbf x_\phi} {n + k} }^2\)





Cauchy-Schwarz Inequality








\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty } \size {\map \phi {R^n \mathbf a} }^2\)

\(\le\)







\(\ds \lim_{n \mathop \to \infty} \norm {\mathbf a}^2_2 \sum_{k \mathop = 1}^\infty \size {\map {\mathbf x_\phi} {n + k} }^2\)




















\(\ds \)

\(=\)







\(\ds \norm {\mathbf a}^2_2 \lim_{n \mathop \to \infty} \sum_{k \mathop = 1}^\infty \size {\map {\mathbf x_\phi} {n + k} }^2\)





Multiple Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds \norm {\mathbf a}^2_2 \sum_{k \mathop = 1}^\infty  \lim_{n \mathop \to \infty} \size {\map {\mathbf x_\phi} {n + k} }^2\)





Exchange of Limits














\(\ds \)

\(=\)







\(\ds 0\)





Definition of P-Sequence Space, Terms in Convergent Series Converge to Zero




Hence, $\sequence {R^n}_{n \mathop \in \N}$ converges to $\mathbf 0 \in \map {CL} {\ell^2}$ in the weak operator topology.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.3$: The normed space $\map {CL} {X, Y}$. Strong and weak operator topologies on $\map {CL} {X, Y}$




