# 

Source: https://proofwiki.org/wiki/Right_Congruence_Class_Modulo_Subgroup_is_Right_Coset



Theorem
Let $G$ be a group, and let $H \le G$ be a subgroup.

Let $\RR^r_H$ be the equivalence defined as right congruence modulo $H$.
The equivalence class $\eqclass g {\RR^r_H}$ of an element $g \in G$ is the right coset $H g$.

This is known as the right congruence class of $g \bmod H$.


Proof
Let $x \in \eqclass g {\RR^r_H}$.
Then:














\(\ds x\)

\(\in\)







\(\ds \eqclass g {\RR^r_H}\)














\(\ds \leadsto \ \ \)

\(\ds \exists h \in H: \, \)



\(\ds x g^{-1}\)

\(=\)







\(\ds h\)





Definition of Right Congruence Modulo $H$








\(\ds \leadsto \ \ \)

\(\ds \exists h \in H: \, \)



\(\ds x\)

\(=\)







\(\ds h g\)





Group Properties








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds H g\)





Definition of Right Coset








\(\ds \leadsto \ \ \)





\(\ds \eqclass g {\RR^r_H}\)

\(\subseteq\)







\(\ds H g\)





Definition of Subset




Now let $x \in g H$.
Then:














\(\ds x\)

\(\in\)







\(\ds H g\)














\(\ds \leadsto \ \ \)

\(\ds \exists h \in H: \, \)



\(\ds x\)

\(=\)







\(\ds h g\)





Definition of Right Coset








\(\ds \leadsto \ \ \)





\(\ds x g^{-1}\)

\(=\)







\(\ds h \in H\)





Group Properties








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \eqclass g {\RR^r_H}\)





Definition of Right Congruence Modulo $H$








\(\ds \leadsto \ \ \)





\(\ds H g\)

\(\subseteq\)







\(\ds \eqclass g {\RR^r_H}\)





Definition of Subset




Thus:

$\eqclass g {\RR^r_H} = H g$
That is, the equivalence class $\eqclass g {\RR^r_H}$ of an element $g \in G$ equals the right coset $g H$.
$\blacksquare$


Also see
Left Congruence Class Modulo Subgroup is Left Coset
Right Coset Space forms Partition
Element of Group is in Unique Right Coset of Subgroup


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 6.1$. The quotient sets of a subgroup
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Theorem $11.1$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.9$: Subgroups: Theorem $11$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 42.3$ Another approach to cosets




