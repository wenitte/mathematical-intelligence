# 

Source: https://proofwiki.org/wiki/Local_Membership_of_Equalizer



Theorem
Let $\mathbf C$ be a metacategory.
Let $e: E \to C$ be the equalizer of $f, g : C \to D$.

Then a variable element $z: Z \to C$ is a local member of $e$ if and only if $f \circ z = g \circ z$:

$z \in_C e \iff f \circ z = g \circ z$


Proof
Firstly, note that by Equalizer is Monomorphism, local membership of $e$ is defined.


Necessary Condition
Suppose that $z \in_C e$.
By definition of local membership, there is an $h: Z \to E$ such that $z = e \circ h$.
Then since $e$ is the equalizer of $f$ and $g$:

$f \circ e = g \circ e$
from which we deduce:

$f \circ z = f \circ e \circ h = g \circ e \circ h = g \circ z$
by using metacategory axiom $(\text C 3)$, that is associativity of $\circ$.
$\Box$


Sufficient Condition
Suppose that $f \circ z = g \circ z$.
Since $e$ is the equalizer of $f$ and $g$, we find $h: Z \to E$ such that:

$z = e \circ h$
Hence $z \in_C e$, by definition of local membership.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 5.1$: Example $5.3$




