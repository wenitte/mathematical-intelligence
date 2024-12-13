# 

Source: https://proofwiki.org/wiki/Number_of_Conjugates_is_Number_of_Cosets_of_Centralizer

Theorem
Let $G$ be a group.
Let $\map {C_G} a$ be the centralizer of $a$ in $G$.

Then the number of different conjugates of $a$ in $G$ equals the number of different (left) cosets of $\map {C_G} a$:

$\card {\conjclass a} = \index G {\map {C_G} a}$
where:

$\conjclass a$ is the conjugacy class of $a$ in $G$
$\index G {\map {C_G} a}$ is the index of $\map {C_G} a$ in $G$.

Consequently:

$\card {\conjclass a} \divides \order G$


Proof
Let $x, y \in \conjclass a$.
By definition of $\conjclass a$:

$x a x^{-1} = y a y^{-1}$
By Conjugates of Elements in Centralizer, this is the case if and only if $x$ and $y$ belong to the same left coset of $\map {C_G} a$.

Hence:

$\card {\conjclass a} = \index G {\map {C_G} a}$

It follows from Lagrange's Theorem that:

$\card {\conjclass a} \divides \order G$
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 48.2$ Conjugacy




