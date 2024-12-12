# 

Source: https://proofwiki.org/wiki/Compact_Complement_Topology_is_Irreducible

Theorem
Let $T = \struct {\R, \tau}$ be the compact complement topology on $\R$.

Then $T$ is an irreducible space.


Proof
Let $U_1, U_2 \in \tau$ be open in $T$.
Let $\relcomp \R {U_1} = V_1$ and $\relcomp \R {U_2} = V_2$.
By definition of compact complement topology, $V_1, V_2 \subseteq \R$ such that $V_1$ and $V_2$ are both compact.
$V_1$ and $V_2$ are both bounded by definition of compact in $\R$, so their union is likewise bounded: above by $\max \set {\sup V_1, \sup V_2}$ and below by $\min \set {\inf V_1, \inf V_2}$.
So $V_1 \cup V_2$ can not equal $\R$ as $\R$ is not bounded.
So:














\(\ds \relcomp \R {V_1 \cup V_2}\)

\(\ne\)







\(\ds \O\)














\(\ds \leadsto \ \ \)





\(\ds \relcomp \R {V_1} \cap \relcomp \R {V_2}\)

\(\ne\)







\(\ds \O\)





De Morgan's Laws: Complement of Union








\(\ds \leadsto \ \ \)





\(\ds U_1 \cap U_2\)

\(\ne\)







\(\ds \O\)









So any two open sets in $T$ are not disjoint and so $T$ is irreducible space by definition.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $22$. Compact Complement Topology: $3$




