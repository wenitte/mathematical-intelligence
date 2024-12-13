# 

Source: https://proofwiki.org/wiki/Normal_Subgroup_induced_by_Congruence_Relation_defines_that_Congruence



Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $\RR$ be a congruence relation for $\circ$.
Let $\eqclass e \RR$ be the equivalence class of $e$ under $\RR$.
Let $N = \eqclass e \RR$ be the normal subgroup induced by $\RR$.

Then $\RR$ is the equivalence relation $\RR_N$ defined by $N$.


Proof
Let $\RR_N$ be the equivalence defined by $N$.
Then:














\(\ds x\)

\(\RR\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds e\)

\(\RR\)







\(\ds \paren {x^{-1} \circ y}\)





$\RR$ is compatible with $\circ$








\(\ds \leadsto \ \ \)





\(\ds \paren {e \circ e}\)

\(\RR\)







\(\ds \paren {x^{-1} \circ y}\)





Group properties








\(\ds \leadsto \ \ \)





\(\ds x^{-1} \circ y\)

\(\in\)







\(\ds N\)





Definition of $N$




But from Congruence Class Modulo Subgroup is Coset:

$x \mathrel {\RR_N} y \iff x^{-1} \circ y \in N$
Thus:

$\RR = \RR_N$
$\blacksquare$


Also see
Congruence Relation induces Normal Subgroup
Congruence Relation on Group induces Normal Subgroup
Quotient Structure on Group defined by Congruence equals Quotient Group


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Theorem $11.5$




