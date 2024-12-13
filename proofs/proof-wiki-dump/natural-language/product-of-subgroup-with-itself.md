# 

Source: https://proofwiki.org/wiki/Product_of_Subgroup_with_Itself

Theorem
Let $\struct {G, \circ}$ be a group.

Then:

$\forall H \le G: H \circ H = H$
where $\le$ denotes the subgroup relation.


Proof
From Magma Subset Product with Self, we have:

$H \circ H \subseteq H$

Let $e$ be the identity of $G$.
By Identity of Subgroup, it is also the identity of $H$.

So:














\(\ds h\)

\(\in\)







\(\ds H\)














\(\ds \leadsto \ \ \)





\(\ds e \circ h\)

\(\in\)







\(\ds H \circ H\)














\(\ds \leadsto \ \ \)





\(\ds h\)

\(\in\)







\(\ds H \circ H\)














\(\ds \leadsto \ \ \)





\(\ds H\)

\(\subseteq\)







\(\ds H \circ H\)









Hence the result from the definition of set equality.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 9$: Compositions Induced on the Set of All Subsets: Exercise $9.10 \ \text {(a)}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Cosets and Lagrange's Theorem: Exercise $2$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 50.1$ Quotient groups




