# 

Source: https://proofwiki.org/wiki/Integer_Multiples_under_Addition_form_Subgroup_of_Integers



Theorem
Let $\struct {\Z, +}$ denote the additive group of integers.
Let $n \Z$ be the set of integer multiples of $n$.

Then $\struct {n \Z, +}$ is a subgroup of $\struct {\Z, +}$.

Hence $\struct {n \Z, +}$ can be justifiably referred to as the additive group of integer multiples.


Proof
Clearly $0 \in n \Z$ so $n \Z \ne \O$.
Now suppose $x, y \in n \Z$.
Then $\exists r, s \in \Z: x = n r, y = n s$.
Also, $-y = - n s$.
So $x - y = n \paren {r - s}$.
As $r - s \in \Z$ it follows that $x - y \in n \Z$.
So by the One-Step Subgroup Test it follows that $\struct {n \Z, +}$ is a subgroup of the additive group of integers $\struct {\Z, +}$.
$\blacksquare$


Also see
Definition:Additive Group of Integer Multiples


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 5.2$. Subgroups: Example $92$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $5$: Cosets and Lagrange's Theorem: Example $5.7$




