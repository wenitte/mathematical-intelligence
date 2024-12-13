# 

Source: https://proofwiki.org/wiki/Product_of_Units_of_Integral_Domain_with_Finite_Number_of_Units

Theorem
Let $\struct {D, +, \circ}$ be an integral domain whose zero is $0_D$ and whose unity is $1_D$.
Let $D$ have a finite number of units.
Let $U_D$ be the set of units of $\struct {D, +, \circ}$.

Then:

$\ds \prod_{x \mathop \in U_D} x = -1_D$


Proof
Consider the set $S$ defined as:

$S = U_R \setminus \set {1_D, -1_D}$
If $S$ has even cardinality, it can be partitioned into doubletons of the form $\set {u, u^{-1} }$.
Each of these doubletons has a product of $1_D$.
The product of all these with $1_D$ and $-1_D$ is $-1_D$.

It remains to be shown that $S$ cannot be of odd cardinality.
Aiming for a contradiction, suppose $S$ has an odd number of elements.
Then after pairing off each $u \in D$ with its product inverse $u^{-1}$, we are left with one element of $S$ which is self-inverse.
But from Self-Inverse Element of Integral Domain is Unity or its Negative, this self-inverse element is either $1_D$ or $-1_D$.
These have already been counted.
Hence there cannot be an odd number of elements of $S$.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $9$: Rings: Exercise $12$




