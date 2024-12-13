# 

Source: https://proofwiki.org/wiki/Inverse_of_Generator_of_Cyclic_Group_is_Generator



Theorem
Let $\gen g = G$ be a cyclic group.

Then:

$G = \gen {g^{-1} }$
where $g^{-1}$ denotes the inverse of $g$.

Thus, in general, a generator of a cyclic group is not unique.


Proof 1
Let $\gen g = G$.
Then from Set of Words Generates Group:

$\map W {\set {g, g^{-1} } } = G$
But:

$\gen {g^{-1} } = \map W {\set {g, g^{-1} } }$
and the result follows.
$\blacksquare$


Proof 2
Let $C_n = \gen g$ be the cyclic group of order $n$.
By definition, $g^n = e$.
We have that $n - 1$ is coprime to $n$.
So it follows from that Power of Generator of Cyclic Group is Generator iff Power is Coprime with Order that:

$C_n = \gen {g^{n - 1} }$
But from Inverse Element is Power of Order Less 1:

$g^{n - 1} = g^{-1}$
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $5$: Subgroups: Exercise $14$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 44 \alpha$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 39$. Cyclic Groups




