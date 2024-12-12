# 

Source: https://proofwiki.org/wiki/Elements_of_Abelian_Group_whose_Order_Divides_n_is_Subgroup

Theorem
Let $G$ be an abelian group whose identity element is $e$.
Let $n \in \Z_{>0}$ be a (strictly) positive integer .
Let $G_n$ be the subset of $G$ defined as:

$G_n = \set {x \in G: \order x \divides n}$
where:

$\order x$ denotes the order of $x$
$\divides$ denotes divisibility.

Then $G_n$ is a subgroup of $G$.


Proof
From Identity is Only Group Element of Order 1:

$\order e = 1$
and so from One Divides all Integers:

$\order e \divides n$
Thus $G_n \ne \O$.

Then:














\(\ds x\)

\(\in\)







\(\ds G_n\)














\(\ds \leadsto \ \ \)





\(\ds \order x\)

\(\divides\)







\(\ds n\)














\(\ds \leadsto \ \ \)





\(\ds \order {x^{-1} }\)

\(\divides\)







\(\ds n\)





Order of Group Element equals Order of Inverse








\(\ds \leadsto \ \ \)





\(\ds x^{-1}\)

\(\in\)







\(\ds G_n\)










Let $a, b \in G_n$ such that $\order a = r, \order b = s$.
Then from Order of Product of Abelian Group Elements Divides LCM of Orders of Elements:

$\order {a b} = \divides \lcm \set {a, b}$
But $r \divides n$ and $s \divides n$ by definition of $G_n$.
Therefore, by definition of lowest common multiple:

$\order {a b} \divides n$

Thus we have:

$G_n \ne \O$
$x \in G_n \implies x^{-1} \in G_n$
$a, b \in G_n \implies a b \in G_n$
and the result follows by the Two-Step Subgroup Test.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 41 \epsilon$




