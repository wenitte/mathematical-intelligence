# 

Source: https://proofwiki.org/wiki/Conjugate_of_Subgroup_is_Subgroup/Proof_1

Theorem
Let $G$ be a group.
Let $H \le G$ be a subgroup of $G$.

Then the conjugate of $H$ by $a$ is a subgroup of $G$:

$\forall H \le G, a \in G: H^a \le G$


Proof
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


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 6.6$. Normal subgroups: Example $124$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 45$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $7$: Normal subgroups and quotient groups: Proposition $7.2$




