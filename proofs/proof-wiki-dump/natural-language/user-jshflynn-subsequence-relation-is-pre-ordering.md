# 

Source: https://proofwiki.org/wiki/User:Jshflynn/Subsequence_Relation_is_Pre-Ordering



Theorem
Let $A$ be a set of sequences.

Let $\approx$ be a relation on $A$ such that for all $a, b \in A$ we have that $a \approx b$ iff $a$ is a subsequence of $b$.

Then $\approx$ is a preordering on $A$.


Proof
Let $\langle a_n \rangle, \langle b_n \rangle, \langle c_n \rangle \in A$.


Reflexivity
Let $I_\N$ be the identity mapping on $\mathbb{N}$.

As $I_\N$ is a strictly increasing sequence and:


$\langle a_n \rangle = \langle a_{I_n} \rangle$

It follows from the definition of subsequence that $\langle a_n \rangle \approx \langle a_n \rangle$.

$\Box$

Transitivity
Let $\langle a_n \rangle \approx \langle b_n \rangle$ and $\langle b_n \rangle \approx \langle c_n \rangle$

By the definition of subsequence:


$\operatorname{Ran}\left(\langle a_n \rangle \right) \subseteq \operatorname{Ran}\left(\langle b_n \rangle \right)$

And


$\operatorname{Ran}\left(\langle b_n \rangle \right) \subseteq \operatorname{Ran}\left(\langle c_n \rangle \right)$

So from Subset Relation is Transitive:


$\operatorname{Ran}\left(\langle a_n \rangle \right) \subseteq \operatorname{Ran}\left(\langle c_n \rangle \right)$

Hence all terms of $\langle a_n \rangle$ are terms of $\langle c_n \rangle$.

Now choosing $a_i , a_j$ as terms of $\langle a_n \rangle$ such that $i < j$. 

We have from above that $a_i$ and $a_j$ are in $\langle b_n \rangle$ and from the assumption that $\langle a_n \rangle \approx \langle b_n \rangle$ we also have that $a_i$ precedes $a_j$ in $\langle b_n \rangle$.

From above we have that $a_i$ and $a_j$ are in $\langle c_n \rangle$ and from the assumption that $\langle b_n \rangle \approx \langle c_n \rangle$ we also have that $a_i$ precedes $a_j$ in $\langle c_n \rangle$.

Hence $\langle a_n \rangle$ is a subsequence of $\langle c_n \rangle$ and $\approx$ is transitive.

$\blacksquare$





