# 

Source: https://proofwiki.org/wiki/One-Step_Subgroup_Test



Theorem
Let $\struct {G, \circ}$ be a group.
Let $H$ be a subset of $G$.

Then $\struct {H, \circ}$ is a subgroup of $\struct {G, \circ}$ if and only if:

$(1): \quad H \ne \O$, that is, $H$ is non-empty
$(2): \quad \forall a, b \in H: a \circ b^{-1} \in H$.


Corollary
Let $G$ be a group.
Let $\O \subset H \subseteq G$ be a non-empty subset of $G$.

Then $H$ is a subgroup of $G$ if and only if:

$H H^{-1} \subseteq H$
where:

$H^{-1}$ is the inverse of $H$
$H H ^{-1}$ is the product of $H$ with $H^{-1}$.


Proof
Sufficient Condition
Let $H$ be a subset of $G$ that fulfils the conditions given.
It is noted that the fact that $H$ is non-empty is one of the conditions.
It is also noted that the group operation of $\struct {H, \circ}$ is the same as that for $\struct {G, \circ}$, that is, $\circ$.

So it remains to show that $\struct {H, \circ}$ is a group.

We check the four group axioms:


Group Axiom $\text G 1$: Associativity
From Restriction of Associative Operation is Associative, associativity is inherited by $\struct {H, \circ}$ from $\struct {G, \circ}$.


Group Axiom $\text G 2$: Existence of Identity Element
Let $e$ be the identity of $\struct {G, \circ}$.
Since $H$ is non-empty, $\exists x \in H$.
If we take $a = x$ and $b = x$, then $a \circ b^{-1} = x \circ x^{-1} = e \in H$, where $e$ is the identity element.


Group Axiom $\text G 3$: Existence of Inverse Element
If we take $a = e$ and $b = x$, then $a \circ b^{-1} = e \circ x^{-1} = x^{-1} \in H$.
Thus every element of $H$ has an inverse also in $H$.


Group Axiom $\text G 0$: Closure
Let $x, y \in H$.
Then $y^{-1} \in H$, so we may take $a = x$ and $b = y^{-1}$.
So:

$a \circ b^{-1} = x \circ \paren {y^{-1} }^{-1} = x \circ y \in H$
Thus, $H$ is closed.

Therefore, $\struct {H, \circ}$ satisfies all the group axioms, and is therefore a group.

Therefore $\struct {H, \circ}$ is a subgroup of $\struct {G, \circ}$.
$\Box$


Necessary Condition
Now suppose $\struct {H, \circ}$ is a subgroup of $\struct {G, \circ}$.

$(1): \quad H \le G \implies H \ne \O$ from the fact that $H$ is a group and therefore can not be empty.
$(2): \quad$ As $\struct {H, \circ}$ is a group, it is closed and every element has an inverse. So it follows that $\forall a, b \in H: a \circ b^{-1} \in H$.
$\blacksquare$


Also see
One-Step Subgroup Test using Subset Product
Two-Step Subgroup Test


Linguistic Note
The One-Step Subgroup Test is so called despite the fact that, on the face of it, there are two steps to the test.
This is because the fact that the subset must be non-empty is frequently assumed as one of the "givens", and is then not specifically included as one of the tests to be made.


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 5.2$. Subgroups
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Theorem $8.4: \ 1^\circ - 3^\circ$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.9$: Subgroups: Lemma $8$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 35 \alpha$
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\S 1.2$
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $0$: Some Conventions and some Basic Facts
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 36.4$: Subgroups
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $4$: Subgroups: Proposition $4.2$




