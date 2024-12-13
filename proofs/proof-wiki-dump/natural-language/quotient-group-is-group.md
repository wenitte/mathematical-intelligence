# 

Source: https://proofwiki.org/wiki/Quotient_Group_is_Group



Theorem
Let $G$ be a group.
Let $N$ be a normal subgroup of $G$.

Then the quotient group $G / N$ is indeed a group.


Corollary
Let $G$ be a group.
Let $N$ be a normal subgroup of $G$.

If $G$ is finite, then:

$\index G N = \order {G / N}$


Proof
By Subgroup is Normal iff Left Cosets are Right Cosets, the set of left cosets for $N$ equals the set of right cosets.
It follows that $G / N$ does not depend on whether left cosets are used to define it or right cosets.
Without loss of generality, we will work with the left cosets.

By definition of quotient group, the elements of $G / N$ are the cosets of $N$ in $G$, where the group operation is defined as:

$\paren {a N} \paren {b N} = \paren {a b} N$

The operation has been shown in Coset Product is Well-Defined to be a well-defined operation.
Now we need to demonstrate that $G / N$ is a group.


Group Axiom $\text G 0$: Closure
This follows from Coset Product is Well-Defined.
As $a b \in G$, it follows that $\paren {a b} N$ is a left coset.
Thus $G / N$ is closed.
$\Box$


Group Axiom $\text G 1$: Associativity
The associativity of coset product follows directly from Subset Product within Semigroup is Associative:














\(\ds a N \paren {b N c N}\)

\(=\)







\(\ds a N \paren {b c N}\)





Definition of Coset Product














\(\ds \)

\(=\)







\(\ds a \paren {b c} N\)





Definition of Coset Product














\(\ds \)

\(=\)







\(\ds \paren {a b} c N\)





Group Axiom $\text G 1$: Associativity for $G$














\(\ds \)

\(=\)







\(\ds \paren {a b} N c N\)





Definition of Coset Product














\(\ds \)

\(=\)







\(\ds \paren {a N b N} c N\)





Definition of Coset Product



Thus $G / N$ is associative.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
The left coset $e N = N$ serves as the identity:










\(\ds \forall x \in G: \, \)



\(\ds N \paren {x N}\)

\(=\)







\(\ds \paren {e N} \paren {x N}\)





Coset by Identity














\(\ds \)

\(=\)







\(\ds \paren {e x} N\)





Definition of Coset Product














\(\ds \)

\(=\)







\(\ds x N\)





Group Axiom $\text G 2$: Existence of Identity Element for $G$




Similarly $\paren {x N} N = x N$.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
We have $\paren {x N}^{-1} = x^{-1} N$:














\(\ds \paren {x N} \paren {x^{-1} N}\)

\(=\)







\(\ds \paren {x x^{-1} } N\)





Definition of Coset Product














\(\ds \)

\(=\)







\(\ds e N\)





Definition of Inverse Element for $G$














\(\ds \)

\(=\)







\(\ds N\)





Group Axiom $\text G 2$: Existence of Identity Element for $G$




Similarly $\paren {x^{-1} N} \paren {x N} = N$.

Thus $x^{-1} N$ is the inverse of $x N$.
$\Box$

All the group axioms are seen to be fulfilled, and $G / N$ has been shown to be a group.
$\blacksquare$


Also see
From Subgroup is Normal iff Left Cosets are Right Cosets, the left coset space of a normal subgroup is equal to its right coset space.

It follows that $G / N$ does not depend on whether left cosets are used to define it or right cosets.
Thus we do not need to distinguish between the left quotient group and the right quotient group - the two are one and the same.


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 6.7$. Quotient groups
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Theorem $11.4$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.10$: Theorem $24$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Quotient Groups: Theorem $3$
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2.2$: Homomorphisms
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 47$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 50.3$ Quotient groups
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $7$: Normal subgroups and quotient groups: Proposition $7.11$




