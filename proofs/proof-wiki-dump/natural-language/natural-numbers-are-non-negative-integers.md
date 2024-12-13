# 

Source: https://proofwiki.org/wiki/Natural_Numbers_are_Non-Negative_Integers



Theorem
Let $m \in \Z$. Then:

$(1): \quad m \in \N \iff 0 \le m$
$(2): \quad m \in \N_{> 0} \iff 0 < m$
$(3): \quad m \notin \N \iff -m \in \N_{> 0}$

That is, the natural numbers are precisely those integers which are greater than or equal to zero.


Proof 1
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


Proof 2
Consider the formal definition of the integers: $x = \eqclass {a, b} {}$ is an equivalence class of ordered pairs of natural numbers.
Let $x \in \Z_{>0}$ be a (strictly) positive integer.
Thus by definition:

$x > 0$
This is equivalent to the condition that $a > b$.
Hence:

$x = \eqclass {b + u, b} {}$
for some $u \in \N_{>0}$.
It is immediate that:

$\forall c \in \N: \eqclass {b + u, b} {} = \eqclass {c + u, c} {}$

Consider the mapping $\phi: \N_{>0} \to \Z_{>0}$ defined as:

$\forall u \in \N_{>0}: \map \phi u = u'$
where $u' \in \Z$ be the (strictly) positive integer $\eqclass {b + u, b} {}$.
From the above we have that $\phi$ is well-defined.
Let $\eqclass {b + u, b} {} = \eqclass {c + v, c} {}$.
Then:

$b + u + c = b + c + v$
and so:

$u = v$
Hence $\phi$ is an injection.
Next note that all $u' \in \Z_{>0}$ can be expressed in the form:

$u' = \eqclass {b + u, b} {}$
for arbitrary $b$.
Hence $\phi$ is a surjection.
Hence $\phi$ is an isomorphism.
By defining $\map \phi 0 = \eqclass {b, b} {}$ we see that $\N$ and $\Z_{\ge 0}$ are isomorphic.
$\blacksquare$


Warning
From a strictly purist point of view it is inaccurate to say that the natural numbers are the non-negative integers, as an integer is technically an element of an equivalence class composed of pairs of elements of $\N$, constructed as detailed in Construction of Inverse Completion.
However, because an Inverse Completion is Unique, it follows that the natural numbers can be considered to be a substructure of the integers from the Inverse Completion Theorem.
With that caveat in mind, the theorem holds.


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers




