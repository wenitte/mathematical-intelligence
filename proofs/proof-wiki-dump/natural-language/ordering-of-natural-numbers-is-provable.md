# 

Source: https://proofwiki.org/wiki/Ordering_of_Natural_Numbers_is_Provable



Theorem
Let $x, y \in \N$.
Suppose $x < y$.
Let $\sqbrk a$ denote the unary representation of $a \in \N$.
Then $\sqbrk x < \sqbrk y$ is a theorem of minimal arithmetic.

Proof
Fix $x$, and let $z > 0$ be arbitrary.
Proceed by induction on $z$.


Basis for the Induction
Suppose $z = 1$.
The following is a formal proof:

By Equality is Reflexive, $\sqbrk x = \sqbrk x$.
By Rule of Addition, $\sqbrk x < \sqbrk x \lor \sqbrk x = \sqbrk x$.
By Axiom $\text M 8$, $\sqbrk x < \map s {\sqbrk x} \iff \paren {\sqbrk x < \sqbrk x \lor \sqbrk x = \sqbrk x}$
By Biconditional Elimination and Modus Ponendo Ponens, $\sqbrk x < \map s {\sqbrk x}$
But:

$\map s x = x + 1 = x + z$
Therefore:

$\sqbrk {x + z} = \sqbrk {\map s x} = \map s {\sqbrk x}$
and the above proves:

$\sqbrk x < \sqbrk {x + z}$
$\Box$


Induction Hypothesis
Suppose that there is a formal proof of:

$\sqbrk x < \sqbrk {x + z}$


Induction Step
The following is a formal proof:

By the induction hypothesis, $\sqbrk x < \sqbrk {x + z}$
By Rule of Addition, $\sqbrk x < \sqbrk {x + z} \lor \sqbrk x = \sqbrk {x + z}$
By Axiom $\text M 8$, $\sqbrk x < \map s {\sqbrk {x + z} } \iff \sqbrk x < \sqbrk {x + z} \lor \sqbrk x = \sqbrk {x + z}$
By Biconditional Elimination and Modus Ponendo Ponens, $\sqbrk x < \map s {\sqbrk {x + z} }$
But $\map s {\sqbrk {x + z} } = \sqbrk {\map s {x + z} } = \sqbrk {x + \map s z}$.
Therefore, the above proves:

$\sqbrk x < \sqbrk {x + \map s z}$
which satisfies the induction step.
$\Box$

Thus, by the Principle of Mathematical Induction, there is such a proof for every $z > 0$.

But by definition of ordering:

$x < y \iff \exists z > 0: x + z = y$.
But then the formal proof above is also a proof for $\sqbrk x < \sqbrk y$.
$\blacksquare$





