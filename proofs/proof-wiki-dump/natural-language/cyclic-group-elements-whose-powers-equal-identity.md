# 

Source: https://proofwiki.org/wiki/Cyclic_Group_Elements_whose_Powers_equal_Identity

Theorem
Let $G$ be a cyclic group whose identity is $e$ and whose order is $n$.
Let $d \divides n$.

Then there exist exactly $d$ elements $x \in G$ satisfying the equation $x^d = e$.
These are the elements of the group $G_d$ generated by $g^{n / d}$: 

$G_d = \gen {g^{n / d} }$


Proof
From the argument in Subgroup of Finite Cyclic Group is Determined by Order, it follows that $x$ satisfies the equation $x^d = e$ if and only if $x$ is a power of $g^{n/d}$.
Thus there are $d$ solutions to this equation.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 43 \alpha$



