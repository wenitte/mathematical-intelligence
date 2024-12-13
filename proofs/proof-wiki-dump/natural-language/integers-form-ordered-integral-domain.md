# 

Source: https://proofwiki.org/wiki/Integers_form_Ordered_Integral_Domain



Theorem
The integers $\Z$ form an ordered integral domain under addition and multiplication.


Proof 1
From Integers form Integral Domain we have that $\struct {\Z, +, \times}$ forms an integral domain.
From Natural Numbers are Non-Negative Integers we have that the set $\N$ can be considered as a subset of the integers.
Then we have that $\struct {\N_{>0}, +, \times}$ is a (commutative) semiring.
So it follows by definition of semiring, in particular the fact that $+$ and $\times$ on $\N_{> 0}$ are closed, that:

$\forall a, b \in \N_{> 0}: a + b \in \N_{>0}$
$\forall a, b \in \N_{> 0}: a \times b \in \N_{>0}$
It follows that we can define a property $P$ on $\Z$ such that:

$\forall x \in \Z: \map P x \iff x \in \N_{>0}$

Checking that $P$ fulfils the conditions for it to be the (strict) positivity property:

$(1): \quad \forall a, b \in \Z: \map P a \land \map P b \implies \map P {a + b}$
Follows directly from the fact that $\map P x \iff x \in \N_{> 0}$.

$(2): \quad \forall a, b \in \Z: \map P a \land \map P b \implies \map P {a \times b}$
Follows directly from the fact that $\map P x \iff x \in \N_{> 0}$.

$(3): \quad \forall a \in \Z: \map P a \lor \map P {-a} \lor a = 0$
This follows from the definition of the integers as the Inverse Completion of Natural Numbers.
If $a \in \Z - \N$ then $\exists b \in \N: a + b = 0$ and so $a = -b$.
Hence the conditions are fulfilled and $\struct {\Z, +, \times}$ forms an ordered integral domain.
$\blacksquare$


Proof 2
From Integers form Integral Domain we have that $\struct {\Z, +, \times}$ forms an integral domain.
From Integers form Totally Ordered Ring, $\struct {\Z, +, \times}$ is a totally ordered ring.
Hence the result.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $2$: Ordered and Well-Ordered Integral Domains: $\S 7$. Order: Example $9$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers




