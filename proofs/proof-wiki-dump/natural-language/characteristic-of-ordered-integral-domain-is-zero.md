# 

Source: https://proofwiki.org/wiki/Characteristic_of_Ordered_Integral_Domain_is_Zero

Theorem
Let $\struct {D, +, \circ}$ be an ordered integral domain whose zero is $0_D$ and whose unity is $1_D$.
Let $\Char D$ be the characteristic of $D$.

Then $\Char D = 0$.

Let $g: \Z \to D$ be the mapping defined as:

$\forall n \in \Z: \map g n = n \cdot 1_D$
where $n \cdot 1_D$ is defined as the $n$th power of $1_D$.

Then $g$ is the only monomorphism from the ordered ring $\Z$ onto the ordered ring $D$.


Proof
By Properties of Ordered Ring $(5)$:

$\forall n \in \Z_{>0}: n \cdot 1_D > 0$
Thus:

$\forall p > 0: \Char D \ne p$
Hence:

$\Char D = 0$
and so $g$ is a monomorphism from $\Z$ into $D$.

Also, if $m < p$, then $p - m \in \Z_+$, so:

$p \cdot 1_D - m \cdot 1_D > 0_D$
Hence:

$\map g m < \map g p$
Thus by Monomorphism from Total Ordering, $g$ is a monomorphism from $\Z$ into $D$.
$\blacksquare$



This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: We have a new and more axiomatic definition of an ordered integral domain which we may want to bring this into line with. Ultimately it boils down to the fact that an ordering on an integral domain is a lot more rigid than for a ring, such that totality is a consequence of the trichotomy law.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $24$. The Division Algorithm: Theorem $24.11$




