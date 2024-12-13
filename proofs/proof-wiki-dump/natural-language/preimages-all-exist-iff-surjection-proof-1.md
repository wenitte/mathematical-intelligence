# 

Source: https://proofwiki.org/wiki/Preimages_All_Exist_iff_Surjection/Proof_1



Theorem
Let $f: S \to T$ be a mapping.
Let $f^{-1}$ be the inverse of $f$.

Let $\map {f^{-1} } t$ be the preimage of $t \in T$.
Then $\map {f^{-1} } t$ is empty for no $t \in T$ if and only if $f$ is a surjection.


Proof
Necessary Condition
We use a Proof by Contraposition.
To that end, suppose:

$\exists t \in T: \map {f^{-1} } t = \O$
That is:

$\neg \paren {\forall t \in T: \exists s \in S: \map f s = t}$
So, by definition, $f: S \to T$ is not a surjection.

From Rule of Transposition it follows that if $f$ is a surjection:
$\neg \exists t \in T: \map {f^{-1} } t = \O$
$\Box$


Sufficient Condition
We again use a Proof by Contraposition.
To that end, suppose $f$ is not a surjection.
Then by definition:

$\exists t \in T: \neg \paren {\exists s \in S: \map f s = t}$
That is:

$\exists t \in T: \map {f^{-1} } t = \O$
From Rule of Transposition it follows that if $\neg \exists t \in T: \map {f^{-1} } t = \O$, then $f$ is a surjection.
$\blacksquare$





