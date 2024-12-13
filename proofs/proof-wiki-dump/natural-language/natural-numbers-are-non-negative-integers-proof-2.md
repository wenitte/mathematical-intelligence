# 

Source: https://proofwiki.org/wiki/Natural_Numbers_are_Non-Negative_Integers/Proof_2



Theorem
Let $m \in \Z$. Then:

$(1): \quad m \in \N \iff 0 \le m$
$(2): \quad m \in \N_{> 0} \iff 0 < m$
$(3): \quad m \notin \N \iff -m \in \N_{> 0}$

That is, the natural numbers are precisely those integers which are greater than or equal to zero.


Proof
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
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 5$: The system of integers




