# 

Source: https://proofwiki.org/wiki/Intersection_of_Subgroups_of_Prime_Order

Theorem
Let $G$ be a group whose identity is $e$.
Let $H$ and $K$ be subsets of $G$ such that:

$\order H = \order K = p$
$H \ne K$
$p$ is prime.

Then:

$H \cap K = \set e$

That is, the intersection of two unequal subgroups of a group, both of whose order is the same prime, consists solely of the identity.


Proof
From Intersection of Subgroups is Subgroup:

$H \cap K \le G$
and:

$H \cap K \le H$
where $\le$ denotes subgrouphood.

So:














\(\ds H \cap K\)

\(\le\)







\(\ds H\)





Intersection of Subgroups is Subgroup








\(\ds \leadsto \ \ \)





\(\ds \order {H \cap K}\)

\(\divides\)







\(\ds \order H\)





Lagrange's Theorem








\(\ds \leadsto \ \ \)





\(\ds \order {H \cap K}\)

\(\divides\)







\(\ds p\)














\(\ds \leadsto \ \ \)





\(\ds \order {H \cap K}\)

\(=\)







\(\ds 1 \text{ or } p\)





$p$ is prime




Because $H \ne K$ and $\order H = \order k$, it follows that $H \nsubseteq K$.
So:














\(\ds H \cap K\)

\(\ne\)







\(\ds H\)





Intersection with Subset is Subset‎








\(\ds \leadsto \ \ \)





\(\ds H \cap K\)

\(\subset\)







\(\ds H\)














\(\ds \leadsto \ \ \)





\(\ds \order {H \cap K}\)

\(<\)







\(\ds \order H = p\)














\(\ds \leadsto \ \ \)





\(\ds \order {H \cap K}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds H \cap K\)

\(=\)







\(\ds \set e\)





Definition of Trivial Group



$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 43$. Lagrange's theorem: Worked Example $1$




