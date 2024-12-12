# 

Source: https://proofwiki.org/wiki/Conjugate_of_Subgroup_is_Subgroup



Theorem
Let $G$ be a group.
Let $H \le G$ be a subgroup of $G$.

Then the conjugate of $H$ by $a$ is a subgroup of $G$:

$\forall H \le G, a \in G: H^a \le G$


Proof 1
Let $H \le G$.

First, we show that $x, y \in H^a \implies x \circ y \in H^a$:














\(\ds x, y\)

\(\in\)







\(\ds H^a\)














\(\ds \leadsto \ \ \)





\(\ds a x a^{-1}, a y a^{-1}\)

\(\in\)







\(\ds H\)





Definition of Conjugate of Group Subset








\(\ds \leadsto \ \ \)





\(\ds \paren {a x a^{-1} } \paren {a y a^{-1} }\)

\(\in\)







\(\ds H\)





Group Axiom $\text G 0$: Closure








\(\ds \leadsto \ \ \)





\(\ds a \paren {x y} a^{-1}\)

\(\in\)







\(\ds H\)














\(\ds \leadsto \ \ \)





\(\ds x y\)

\(\in\)







\(\ds H^a\)





Definition of Conjugate of Group Subset




Next, we show that $x \in H^a \implies x^{-1} \in H^a$:














\(\ds x\)

\(\in\)







\(\ds H^a\)














\(\ds \leadsto \ \ \)





\(\ds a x a^{-1}\)

\(\in\)







\(\ds H\)





Definition of Conjugate of Group Subset








\(\ds \leadsto \ \ \)





\(\ds \paren {a x a^{-1} }^{-1} = a x^{-1} a^{-1}\)

\(\in\)







\(\ds H\)





Power of Conjugate equals Conjugate of Power








\(\ds \leadsto \ \ \)





\(\ds x^{-1}\)

\(\in\)







\(\ds H^a\)





Definition of Conjugate of Group Subset




Thus by the Two-Step Subgroup Test, $H^a \le G$.
$\blacksquare$


Proof 2
Let $*: G \times G / H \to G / H$ be the group action on the (left) coset space:

$\forall g \in G, \forall g' H \in G / H: g * \paren {g' H} := \paren {g g'} H$
It is established in Action of Group on Coset Space is Group Action that $*$ is a group action.

Then from Stabilizer of Coset under Group Action on Coset Space:

$\Stab {a H} = a H a^{-1}$
where $\Stab {a H}$ the stabilizer of $a H$ under $*$.

The result follows from Stabilizer is Subgroup.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Exercise $\text{R}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 35 \gamma$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Cosets and Lagrange's Theorem: Exercise $5$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $7$: Normal subgroups and quotient groups: Exercise $1$




