# 

Source: https://proofwiki.org/wiki/Kernel_of_Linear_Transformation_contained_in_Kernel_of_different_Linear_Transformation_implies_Transformations_are_Proportional

Theorem
Let $V$ be a complex vector space.
Let $\map \LL {V, \C}$ be the space of all linear transformations from $V$ to complex numbers $\C$.
Let $\ell, L \in \map \LL {V, \C}$ be such that $\ker \ell \subseteq \ker L$ where $\ker$ denotes the kernel.

Then:

$\exists c \in \C : L = c \ell$


Proof
Suppose $\ell = \mathbf 0$.
Then $\ker \ell = V$, i.e. the kernel of $\ell$ is the entire vector space $V$.
Moreover:

$\ker \ell \subseteq \ker L \implies \ker L = V$
Therefore $L = \mathbf 0$, and we can set $c = 0$ to have:

$L = \mathbf 0 = 0 \cdot \ell$

Suppose $\ell \ne \mathbf 0$.
By Linear Transformation Maps Zero Vector to Zero Vector:

$\exists v_0 \in V : v_0 \ne \mathbf 0 : \map \ell {v_0} \ne 0$
Let $v \in V$.
Let:

$w = v - c_v v_0$
where $c_v \in \C$.
Then:














\(\ds \map L v\)

\(=\)







\(\ds \map L {c_v v_0 + w}\)




















\(\ds \)

\(=\)







\(\ds c_v \map L {v_0} + \map L w\)





Definition of Linear Transformation



Suppose $w \in \ker \ell$.
Then $w \in \ker L$ and:

$\map \ell w = \map L w = 0$.
Now we will seek for $w$ such that $\map \ell w = 0$.














\(\ds \map \ell w\)

\(=\)







\(\ds \map \ell v - c_v \map \ell {v_0}\)




















\(\ds \)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds c_v\)

\(=\)







\(\ds \frac {\map \ell v }{\map \ell {v_0} }\)









Hence, if $\ds c_v = \frac {\map \ell v }{\map \ell {v_0} }$ then:














\(\ds \map L v\)

\(=\)







\(\ds \frac {\map \ell v }{\map \ell {v_0} } \map L {v_0}\)




















\(\ds \)

\(=\)







\(\ds \frac {\map L {v_0} }{\map \ell {v_0} } \map \ell v\)









Therefore:

$\ds c = \frac {\map L {v_0} }{\map \ell {v_0} }$

$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.2$: Derivatives in the distributional sense




