# 

Source: https://proofwiki.org/wiki/Non-Cyclic_Group_of_Order_p%5E2_has_p%2B3_Subgroups

Theorem
Let $p$ be a prime number.
Let $G$ be a non-cyclic group whose order is $p^2$.
Then $G$ has exactly $p + 3$ subgroups.


Proof
By Order of Element Divides Order of Finite Group, all elements of $G$ have order in $\set {1, p, p^2}$.
But as $G$ is non-cyclic, it can have no element of order $p^2$.
By Identity is Only Group Element of Order 1, $G$ has $p^2 - 1$ elements of order $p$.

Let $m$ denote the number of subgroups of $G$ of order $p$.

From Number of Order p Elements in Group with m Order p Subgroups, $G$ has $m \paren {p - 1}$ elements of order $p$.

Then:














\(\ds m \paren {p - 1}\)

\(=\)







\(\ds p^2 - 1\)




















\(\ds \)

\(=\)







\(\ds \paren {p + 1} \paren {p - 1}\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds p + 1\)









Together with the trivial subgroup and $G$ itself, that makes $p + 3$ subgroups.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Cosets and Lagrange's Theorem: Exercise $19 \ \text {(ii)}$




