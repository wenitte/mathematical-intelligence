# 

Source: https://proofwiki.org/wiki/Essential_Image_is_Well-Defined_and_Smallest_Closed_Set_containing_Almost_All_Function_Values/Resolution_of_the_Identity

Theorem
Let $X$ be a topological space.
Let $\map \BB X$ be the Borel $\sigma$-algebra of $X$.
Let $\map \BB \C$ be the Borel $\sigma$-algebra of $\C$.
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\map B {\HH}$ be the space of bounded linear transformations on $\HH$.
Let $\EE : \map \BB X \to \map B {\HH}$ be a resolution of the identity.
Let $f : X \to \C$ be $\tuple {\map \BB X, \map \BB \C}$-measurable.

Then the essential image $\map {\operatorname {EssIm} } f$ is well-defined and is the $\subseteq$-least closed set such that there exists $A \in \map \BB X$ with $\map \EE A = 0$ such that:

if $\map f x \not \in \map {\operatorname {EssIm} } f$ then $x \in A$.


Proof
We first show that $\map {\operatorname {EssIm} } f$ is well-defined.
Let $\sequence {D_n}_{n \mathop \in \N}$ and $\sequence {D_n'}_{n \mathop \in \N}$ be analytic bases of $\C$ consisting of open balls.
Let $V$ be the union of those $D_i$ such that:

$\map \EE {f^{-1} \sqbrk {D_n} } = 0$ for each $n \in \N$.
Similarly let $V'$ be the union of those $D_i'$ such that:

$\map \EE {f^{-1} \sqbrk {D_n'} } = 0$ for each $n \in \N$.
We show that $V = V'$. 
It suffices to show that $V \subseteq V'$, since we can swap $V$ and $V'$. 
We first note that from Null Sets Closed under Countable Union: Resolution of the Identity, we have:

$\ds \map \EE {\bigcup_{n \mathop = 1}^\infty f^{-1} \sqbrk {D_n} } = 0$
So from Preimage of Union under Mapping: General Result, we have:

$\ds \bigcup_{n \mathop = 1}^\infty f^{-1} \sqbrk {D_n} = f^{-1} \sqbrk {\bigcup_{n \mathop = 1}^\infty D_n} = f^{-1} \sqbrk V$
and hence: 

$\map \EE {f^{-1} \sqbrk V} = 0$
and similarly:

$\map \EE {f^{-1} \sqbrk {V'} } = 0$
Let $x \in V$. 
Since $\sequence {D_n'}_{n \mathop \in \N}$ is an analytic basis of $\C$, there exists $m \in \N$ such that:

$x \in D_m' \subseteq V$
so that: 

$f^{-1} \sqbrk {D_m'} \subseteq f^{-1} \sqbrk V$
From Null Sets Closed under Subset: Resolution of the Identity, we have:

$\map \EE {f^{-1} \sqbrk {D'_m} } = 0$
By the definition of $V'$, we therefore have:

$D'_m \subseteq V'$
We have $x \in D'_m$ and so $x \in V'$.
So $V \subseteq V'$.
Hence we have $V = V'$. 
We then take:

$\map {\operatorname {EssIm} } f = \C \setminus V$

Note that $V$ is open as the union of open sets.
Hence $\map {\operatorname {EssIm} } f$ is closed.
Now suppose that $\map f x \not \in \map {\operatorname {EssIm} } f$.
Let $A = f^{-1} \sqbrk V$. 
We have noted that $\map \EE A = 0$.
Then if $\map f x \not \in \map {\operatorname {EssIm} } f$, we have $\map f x \in V$, and hence $x \in f^{-1} \sqbrk V = A$. 

We show that $\map {\operatorname {EssIm} } f$ is the $\subseteq$-least such closed subset of $\C$.
Fix an analytic basis $\sequence {D_n}_{n \mathop \in \N}$ consisting of open balls.
Let $\SS \subseteq \C$ be a closed set such that there exists $B \in \map \BB X$ with $\map \EE B = 0$ and such that:

if $\map f x \not \in \SS$ then $x \in B$.
In other words:

$f^{-1} \sqbrk {\C \setminus \SS} \subseteq B$
We show that $\map {\operatorname {EssIm} } f \subseteq \SS$. 
It suffices to show that $\C \setminus \SS \subseteq \C \setminus \map {\operatorname {EssIm} } f$ from Set Complement inverts Subsets. 
From Open Set is Union of Elements of Basis, there exists $I \subseteq \N$ such that:

$\ds \C \setminus \SS = \bigcup_{n \mathop \in I} D_n$
Since $\map \EE B = 0$, we have:

$\map \EE {f^{-1} \sqbrk {\C \setminus \SS} } = 0$
from Null Sets Closed under Subset: Resolution of the Identity. 
Applying Null Sets Closed under Subset: Resolution of the Identity again, we have:

$\map \EE {f^{-1} \sqbrk {D_n} } = 0$ for each $n \in I$.
Hence by the definition of $V$, we have:

$\ds \bigcup_{n \mathop \in I} D_n \subseteq V$
That is:

$\C \setminus \SS \subseteq V \subseteq \C \setminus \map {\operatorname {EssIm} } f$
so $\map {\operatorname {EssIm} } f \subseteq \SS$ as desired.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $12.20$: The algebra $\map {L^\infty} E$




