# 

Source: https://proofwiki.org/wiki/Inequality_of_Natural_Numbers_is_Provable/Lemma



Lemma for Inequality of Natural Numbers is Provable
Let $x, y \in \N$ be natural numbers.
Suppose $x < y$.
Then $\sqbrk y \ne \sqbrk x$ is a theorem of minimal arithmetic.


Proof
Fix $z \in \N_{> 0}$.
Proceed by induction on $x$:


Basis for the Induction
Suppose $x = 0$.
By Ordering of Natural Numbers is Provable:

$0 < \sqbrk z$
is a theorem.
The result:

$\sqbrk z \ne 0$
follows from Axiom $\text M 9$.
$\Box$


Induction Hypothesis
Suppose that:

$\sqbrk {x + z} \ne \sqbrk x$
is a theorem.


Induction Step
The following is a formal proof:

By the induction hypothesis:
$\sqbrk {x + z} \ne \sqbrk x$
By Axiom $\text M 2$:
$\map s {\sqbrk {x + z} } = \map s {\sqbrk x} \implies \sqbrk {x + z} = \sqbrk x$
By Rule of Transposition and Modus Ponendo Ponens:
$\map s {\sqbrk {x + z} } \ne \map s {\sqbrk x}$

But:

$\map s {\sqbrk {x + z} }$ is identical to $\sqbrk {\map s x + z}$
$\map s {\sqbrk x}$ is identical to $\sqbrk {\map s x}$
Therefore:

$\sqbrk {\map s x + z} \ne \sqbrk {\map s x}$
is a theorem.
$\Box$

By Principle of Mathematical Induction:

$\sqbrk {x + z} \ne \sqbrk x$
is a theorem for every $x \in \N$.
$\Box$

By definition of ordering on natural numbers:
$\exists z \in \N_{> 0}: x + z = y$
By the above:

$\sqbrk {x + z} \ne \sqbrk x$
is a theorem.
But as $x + z = y$, it is identical to:

$\sqbrk y \ne \sqbrk x$
Hence the result.
$\blacksquare$





