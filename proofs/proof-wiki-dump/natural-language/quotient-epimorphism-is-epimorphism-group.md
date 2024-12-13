# 

Source: https://proofwiki.org/wiki/Quotient_Epimorphism_is_Epimorphism/Group



Theorem
Let $G$ be a group.
Let $N$ be a normal subgroup of $G$.
Let $G / N$ be the quotient group of $G$ by $N$.

Let $q_N: G \to G / N$ be the quotient epimorphism from $G$ to $G / N$:

$\forall x \in G: \map {q_N} x = x N$

Then $q_N$ is a group epimorphism whose kernel is $N$.


Proof
The proof follows from Quotient Mapping on Structure is Epimorphism.
When $N \lhd G$, we have:










\(\ds \forall x, y \in G: \, \)



\(\ds \map {q_N} {x y}\)

\(=\)







\(\ds x y N\)





Definition of Quotient Group Epimorphism














\(\ds \)

\(=\)







\(\ds \paren {x N} \paren {y N}\)





Definition of Quotient Group














\(\ds \)

\(=\)







\(\ds \map {q_N} x \map {q_N} y\)





Definition of Quotient Group Epimorphism




Therefore $q$ is a homomorphism.
We have that:

$\forall x \in G: x N \in G / N = \map {q_N} x$
so $q$ is surjective.
Therefore $q$ is an epimorphism.

Let $x \in G$.














\(\ds x\)

\(\in\)







\(\ds \map \ker {q_N}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map {q_N} x\)

\(=\)







\(\ds e_{G/N}\)





Definition of Kernel of Group Homomorphism








\(\ds \leadstoandfrom \ \ \)





\(\ds x N\)

\(=\)







\(\ds e_{G/N} N\)





Definition of Quotient Group Epimorphism








\(\ds \leadstoandfrom \ \ \)





\(\ds x N\)

\(=\)







\(\ds N\)





Coset by Identity‎








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds N\)





Left Coset Equals Subgroup iff Element in Subgroup



thus proving that $\map \ker {q_N} = N$ from definition of subset.
$\blacksquare$


Motivation
In Kernel is Normal Subgroup of Domain it was shown that the kernel of a group homomorphism is a normal subgroup of its domain.
In that result it has been shown that every normal subgroup is a kernel of at least one group homomorphism of the group of which it is the  subgroup.
We see that when a subgroup is normal, its cosets make a group using the group operation defined as in this result.
However, it is not possible to make the left or right cosets of a non-normal subgroup into a group using the same sort of group operation.
Otherwise there would be a group homomorphism with that subgroup as the kernel, and we have seen that this can not be done unless the subgroup is normal.


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $7$: Homomorphisms: Exercise $6$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.10$: Theorem $24$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Quotient Groups: Theorem $3$
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2.2$: Homomorphisms
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 60 \beta$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 50.5$ Quotient groups
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $8$: The Homomorphism Theorem: Remark




