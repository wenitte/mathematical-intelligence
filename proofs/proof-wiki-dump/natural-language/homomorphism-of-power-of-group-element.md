# 

Source: https://proofwiki.org/wiki/Homomorphism_of_Power_of_Group_Element

Theorem
Let $\struct {G, \circ}$ and $\struct {H, \ast}$ be groups.
Let $\phi: S \to T$ be a group homomorphism.

Then:

$\forall n \in \Z: \forall g \in G: \map \phi {g^n} = \paren {\map \phi g}^n$


Proof
The result for $n \in \N_{>0}$ follows directly from General Morphism Property for Semigroups.
For $n = 0$, we use Homomorphism with Cancellable Codomain Preserves Identity.
For $n < 0$, we use Homomorphism with Identity Preserves Inverses, along with Index Laws for Monoids: Negative Index.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 7.2$. Some lemmas on homomorphisms: Example $133$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 47.5$ Homomorphisms and their elementary properties
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $8$: The Homomorphism Theorem: Exercise $4$




