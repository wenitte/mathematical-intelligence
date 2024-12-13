# 

Source: https://proofwiki.org/wiki/Preimages_All_Exist_iff_Surjection/Corollary



Theorem
Let $f: S \to T$ be a mapping.
Let $f^{-1}$ be the inverse of $f$.


$\forall B \subseteq T, B \ne \O: f^{-1} \sqbrk B \ne \O$
if and only if:

$f$ is a surjection
where $f^{-1} \sqbrk B$ denotes the preimage of $B \subseteq T$.


Proof
Necessary Condition
Let $f$ be a surjection.
Let $B \subseteq T$ such that $B \ne \O$.
Then:

$\exists t \in T: t \in B$
From Preimages All Exist iff Surjection:

$\map {f^{-1} } t \ne \O$
As $t \in B$ it follows from Preimage of Subset is Subset of Preimage that:

$f^{-1} \sqbrk B \ne \O$
$B$ is arbitrary, so:

$\forall B \subseteq T, B \ne \O: f^{-1} \sqbrk B \ne \O$
$\Box$


Sufficient Condition
Suppose that:

$\forall B \subseteq T, B \ne \O: f^{-1} \sqbrk B \ne \O$
Aiming for a contradiction, suppose $f$ is not a surjection.
Then by definition:

$\exists t \in T: \neg \paren {\exists s \in S: \map f s = t}$
That is:

$\exists \set t \subseteq T: f^{-1} \sqbrk {\set t} = \O$
which contradicts the hypothesis.
So by Proof by Contradiction, $f$ is a surjection.
Hence the result.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 10$: Inverses and Composites




