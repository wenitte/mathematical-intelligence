# 

Source: https://proofwiki.org/wiki/Inversion_Mapping_is_Permutation/Proof_2



Theorem
Let $\struct {G, \circ}$ be a group.
Let $\iota: G \to G$ be the inversion mapping on $G$.

Then $\iota$ is a permutation on $G$.


Proof
Proof of Surjection
Let $a \in G$.
By definition of $\iota$:

$\iota(a^{-1}) = \left({a^{-1}}\right)^{-1}$
By Inverse of Inverse:

$\left({a^{-1}}\right)^{-1} = a$
Hence $a$ has a preimage.
Since $a$ was arbitrary, $\iota$ is a surjection.


Proof of Injection
Suppose for some $a, b \in G$ that:

$\iota \left({a}\right) = \iota \left({b}\right)$
Then by the definition of $\iota$:

$a^{-1} = b^{-1}$
It follows from Inverse in Group is Unique that:

$a = b$
Hence $\iota$ is an injection.
$\Box$

Hence by definition $\iota$ is a bijection.
A bijection from a set to itself is by definition a permutation.
$\blacksquare$





