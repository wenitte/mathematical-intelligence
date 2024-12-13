# 

Source: https://proofwiki.org/wiki/Left_Congruence_Class_Modulo_Subgroup_is_Left_Coset



Theorem
Let $G$ be a group, and let $H \le G$ be a subgroup.
Let $\RR^l_H$ be the equivalence defined as left congruence modulo $H$.
The equivalence class $\eqclass g {\RR^l_H}$ of an element $g \in G$ is the left coset $g H$.

This is known as the left congruence class of $g \bmod H$.


Proof
Let $x \in \eqclass g {\RR^l_H}$.
Then:














\(\ds x\)

\(\in\)







\(\ds \eqclass g {\RR^l_H}\)














\(\ds \leadsto \ \ \)

\(\ds \exists h \in H: \, \)



\(\ds g^{-1} x\)

\(=\)







\(\ds h\)





Definition of Left Congruence Modulo $H$








\(\ds \leadsto \ \ \)

\(\ds \exists h \in H: \, \)



\(\ds x\)

\(=\)







\(\ds g h\)





Group properties








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds g H\)





Definition of Left Coset








\(\ds \leadsto \ \ \)





\(\ds \eqclass g {\RR^l_H}\)

\(\subseteq\)







\(\ds g H\)





Definition of Subset




Now let $x \in g H$.
Then:














\(\ds x\)

\(\in\)







\(\ds g H\)














\(\ds \leadsto \ \ \)

\(\ds \exists h \in H: \, \)



\(\ds x\)

\(=\)







\(\ds g h\)





Definition of Left Coset








\(\ds \leadsto \ \ \)





\(\ds g^{-1} x\)

\(=\)







\(\ds h \in H\)





Group properties








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \eqclass g {\RR^l_H}\)





Definition of Left Congruence Modulo $H$








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds g H \subseteq \eqclass g {\RR^l_H}\)





Definition of Subset




Thus:

$\eqclass g {\RR^l_H} = g H$
that is, the equivalence class $\eqclass g {\RR^l_H}$ of an element $g \in G$ equals the left coset $g H$.
$\blacksquare$


Also see
Right Congruence Class Modulo Subgroup is Right Coset
Left Coset Space forms Partition
Element of Group is in Unique Left Coset of Subgroup


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Theorem $11.1$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 37$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 42.3$ Another approach to cosets
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $5$: Cosets and Lagrange's Theorem: Proposition $5.4$




