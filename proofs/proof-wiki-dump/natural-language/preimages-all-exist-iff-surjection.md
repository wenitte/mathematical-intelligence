# 

Source: https://proofwiki.org/wiki/Preimages_All_Exist_iff_Surjection



Theorem
Let $f: S \to T$ be a mapping.
Let $f^{-1}$ be the inverse of $f$.

Let $\map {f^{-1} } t$ be the preimage of $t \in T$.
Then $\map {f^{-1} } t$ is empty for no $t \in T$ if and only if $f$ is a surjection.


Corollary
$\forall B \subseteq T, B \ne \O: f^{-1} \sqbrk B \ne \O$
if and only if:

$f$ is a surjection
where $f^{-1} \sqbrk B$ denotes the preimage of $B \subseteq T$.


Proof 1
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


Direct Proof
Suppose that there is no $t \in T$ such that $\map {f^{-1} } t$ is empty.
By Denial of Existence, this is equivalent to saying that for all $t \in T$, $\map {f^{-1} } t$ is not empty.
This is equivalent to the statement that $\map {f^{-1} } t$ contains at least one element for each $t \in T$.
In other words, for each $t \in T$, there exists an $s\in S$ such that $\map f s = t$.
This is the definition of $f$ being surjective.
Thus if there is no $t \in T$ such that $\map {f^{-1} } t$ is empty, then $f$ is surjective.
Since this proof only uses statements of equivalence, it also shows that $f$ being surjective implies that there is no $t \in T$ such that $\map {f^{-1} } t$ is empty.
$\blacksquare$





