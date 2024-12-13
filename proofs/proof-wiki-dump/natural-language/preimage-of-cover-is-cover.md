# 

Source: https://proofwiki.org/wiki/Preimage_of_Cover_is_Cover

Theorem
Let $\phi: S \to T$ be a mapping between the sets $S$ and $T$.
Let $\UU$ be a cover of $T$.

Then the set:

$\set {\map {\phi^{-1} } U: U \in \UU}$
is a cover of $S$.


Proof
Let $x \in S$.
Then $\map \phi x \in T$.
Since $\UU$ is a cover of $T$:

$\exists U \in \UU: \map \phi x \in U$
By definition of preimage, $x \in \map {\phi^{-1} } U$.
So:

$\forall x \in S: \exists \map {\phi^{-1} } U \in S: x \in \map {\phi^{-1} } U$
That is, $\set {\map {\phi^{-1} } U: U \in \UU}$ is a cover of $S$.
$\blacksquare$





