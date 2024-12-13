# 

Source: https://proofwiki.org/wiki/Natural_Numbers_are_Non-Negative_Integers/Proof_1



Theorem
Let $m \in \Z$. Then:

$(1): \quad m \in \N \iff 0 \le m$
$(2): \quad m \in \N_{> 0} \iff 0 < m$
$(3): \quad m \notin \N \iff -m \in \N_{> 0}$

That is, the natural numbers are precisely those integers which are greater than or equal to zero.


Proof
Let $m \in \N$.
Then by definition of $0$:

$0 \le m$
Conversely, let $m \in \Z: 0 \le m$.
Then:

$\exists x, y \in \N: m = x - y$
Thus:

$y \le m + y = x$
By Naturally Ordered Semigroup: NO 3:

$\exists z \in \N: z + y = x = m + y$
From Naturally Ordered Semigroup: NO 2, $y$ is cancellable.
Hence:
$m = z \in \N_{> 0}$
Thus $(1)$ holds.

$(2)$ follows from $(1)$.

We infer from $(1)$ that:

$m \notin \N \iff m < 0$
We infer from $(2)$ that:

$-m > 0 \iff -m \in \N_{> 0}$
But by Ordering of Inverses in Ordered Monoid:

$m < 0 \iff -m > 0$
Therefore $(3)$ also holds.
$\blacksquare$


Warning
From a strictly purist point of view it is inaccurate to say that the natural numbers are the non-negative integers, as an integer is technically an element of an equivalence class composed of pairs of elements of $\N$, constructed as detailed in Construction of Inverse Completion.
However, because an Inverse Completion is Unique, it follows that the natural numbers can be considered to be a substructure of the integers from the Inverse Completion Theorem.
With that caveat in mind, the theorem holds.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $20$. The Integers: Theorem $20.7$




