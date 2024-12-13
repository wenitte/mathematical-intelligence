# 

Source: https://proofwiki.org/wiki/Inverse_of_Generator_of_Cyclic_Group_is_Generator/Proof_2

Theorem
Let $\gen g = G$ be a cyclic group.

Then:

$G = \gen {g^{-1} }$
where $g^{-1}$ denotes the inverse of $g$.

Thus, in general, a generator of a cyclic group is not unique.


Proof
Let $C_n = \gen g$ be the cyclic group of order $n$.
By definition, $g^n = e$.
We have that $n - 1$ is coprime to $n$.
So it follows from that Power of Generator of Cyclic Group is Generator iff Power is Coprime with Order that:

$C_n = \gen {g^{n - 1} }$
But from Inverse Element is Power of Order Less 1:

$g^{n - 1} = g^{-1}$
$\blacksquare$


Also see
Inverse of Generator of Cyclic Group is Generator/Proof 1: note that from Inverse Element is Power of Order Less 1:
$g^{n - 1} = g^{-1}$




