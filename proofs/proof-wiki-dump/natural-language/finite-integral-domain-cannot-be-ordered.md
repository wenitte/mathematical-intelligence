# 

Source: https://proofwiki.org/wiki/Finite_Integral_Domain_cannot_be_Ordered

Theorem
Let $\struct {D, +, \times}$ be an integral domain whose unity is $1_D$ and whose order is finite.

Then $D$ cannot be an ordered integral domain.


Proof
Let $\struct {D, +, \times}$ be an integral domain whose order is $n$.
Aiming for a contradiction, suppose there exists a (strict) positivity property $P$ on $\struct {D, +, \times}$.
From Unity of Ordered Integral Domain is Strictly Positive, we have that $\map P {1_D}$.

Let $\struct {D, +}$ be the additive group of $\struct {D, +, \times}$.
From Order of Element Divides Order of Finite Group, the order of $1_D$ is also finite.
So:

$\exists m \in \N: m \cdot 1_D = 0_D$
where $0_D$ is the zero of $D$.
But then from the General Positivity Rule in Ordered Integral Domain that would mean $\map P {0_D}$ which contradicts the trichotomy law of the positivity property.
Further, note that from Inverse Element is Power of Order Less 1 we have that $-1_D = \paren {m - 1} \cdot 1_D$.
But from the General Positivity Rule in Ordered Integral Domain $\map P {\paren {m - 1} \cdot 1_D}$ and so $\map P {-1_D}$ which is an even more dramatic way of showing that the trichotomy law of the positivity property is contradicted.
Hence an integral domain whose order is finite can not be ordered.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $2$: Ordered and Well-Ordered Integral Domains: $\S 7$. Order: Example $11$




