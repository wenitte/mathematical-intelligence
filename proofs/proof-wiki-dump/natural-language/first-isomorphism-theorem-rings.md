# 

Source: https://proofwiki.org/wiki/First_Isomorphism_Theorem/Rings



Theorem
Let $\phi: R \to S$ be a ring homomorphism.
Let $\map \ker \phi$ be the kernel of $\phi$.

Then:

$\Img \phi \cong R / \map \ker \phi$
where $\cong$ denotes ring isomorphism.


Proof
From Ring Homomorphism whose Kernel contains Ideal, let $J = \map \ker \phi$.
This gives the ring homomorphism $\mu: R / \map \ker \phi \to S$ as follows:


$\begin {xy} \xymatrix@L + 2mu@ + 1em {
 R \ar[rr]^*{\nu}
   \ar[rdrd]_*{\phi}
& & R / \map \ker \phi \ar[dd]_*{\mu} \\
\\
& & S 
} \end {xy}$

That is:

$\phi = \mu \circ \nu$
Then we have:

$\map \ker \mu = \map \ker \phi / \map \ker \phi$
This is the null subring of $R / \map \ker \phi$ by Quotient Ring Defined by Ring Itself is Null Ring.

Then from Kernel is Trivial iff Monomorphism it follows that $\mu$ is a monomorphism.
From $\phi = \mu \circ \nu$, we have:

$\Img \mu = \Img \phi$
It follows that $\mu$ is an isomorphism.
$\blacksquare$


Also known as
The First Ring Isomorphism Theorem is also referred to as the First Fundamental Theorem on Ring Homomorphisms.
It can also be called the First Isomorphism Theorem for Rings.


Also see
Isomorphism Theorems
Universal Property of Quotient Ring


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Rings: $\S 24$. Homomorphisms: Theorem $47$
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2.2$: Homomorphisms: Theorem $2.9$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 60.3$ Factor rings




