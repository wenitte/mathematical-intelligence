# 

Source: https://proofwiki.org/wiki/Apotome_is_Irrational



Theorem
Every apotome is irrational, i.e.:

$\ds \forall a, b \in \set {x \in \R_{>0} : x^2 \in \Q}: \paren {\frac a b \notin \Q \land \paren {\frac a b}^2 \in \Q} \implies \paren {\paren {a - b} \notin \Q \land \paren {a - b}^2 \notin \Q}$

In the words of Euclid:

If from a rational straight line there be subtracted a rational straight line commensurable with the whole in square only, the remainder is irrational; and let it be called an apotome.
(The Elements: Book $\text{X}$: Proposition $73$)


Proof

Let $AB$ be a rational straight line.
Let a rational straight line $BC$ which is commensurable in square only with $AB$ be cut off from $AB$.

We have that $AB$ is incommensurable in length with $BC$.
We also have:

$AB : BC = AB^2 : AB \cdot AC$
Therefore from Proposition $11$ of Book $\text{X} $: Commensurability of Elements of Proportional Magnitudes:

$AB^2$ is incommensurable with $AB \cdot AC$.
But from Proposition $15$ of Book $\text{X} $: Commensurability of Sum of Commensurable Magnitudes:

$AB^2 + BC^2$ is commensurable with $AB^2$.
and from Proposition $6$ of Book $\text{X} $: Magnitudes with Rational Ratio are Commensurable:

$2 \cdot AB \cdot AC$ is commensurable with $AB \cdot AC$.
From Proposition $7$ of Book $\text{II} $: Square of Difference:

$AB^2 + BC^2 = 2 \cdot AB \cdot AC + CA^2$
and so from:

Proposition $13$ of Book $\text{X} $: Commensurable Magnitudes are Incommensurable with Same Magnitude
and:

Proposition $16$ of Book $\text{X} $: Incommensurability of Sum of Incommensurable Magnitudes
it follows that:

$AB^2 + BC^2$ is incommensurable with $AC^2$.
But $AB$ and $BC$ are rational.
Therefore $AC$ is irrational.

Such a straight line is known as an apotome.
$\blacksquare$


Historical Note
This proof is Proposition $73$ of Book $\text{X}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 3 (2nd ed.) ... (previous) ... (next): Book $\text{X}$. Propositions




