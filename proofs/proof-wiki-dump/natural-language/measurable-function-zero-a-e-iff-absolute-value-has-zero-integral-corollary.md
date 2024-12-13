# 

Source: https://proofwiki.org/wiki/Measurable_Function_Zero_A.E._iff_Absolute_Value_has_Zero_Integral/Corollary

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f: X \to \overline \R$ be a non-negative integrable function.
Let $A, B \in \Sigma$ have $A \subseteq B$. 

Then: 

$\ds \int_A f \rd \mu = \int_B f \rd \mu$
if and only if: 

$f \times \chi_{B \setminus A} = 0$ $\mu$-almost everywhere.


Proof
We can write: 

$B = A \cup \paren {B \setminus A}$
From Integral of Positive Measurable Function over Disjoint Union, we have: 

$\ds \int_B f \rd \mu = \int_A f \rd \mu + \int_{B \setminus A} f \rd \mu$
Since: 

$\ds \int_B f \rd \mu = \int_A f \rd \mu$
we get: 

$\ds \int_{B \setminus A} f \rd \mu = 0$
From the definition of the $\mu$-integral over $A$, we have: 

$\ds \int \paren {f \times \chi_{B \setminus A} } \rd \mu$
From Measurable Function Zero A.E. iff Absolute Value has Zero Integral, we have: 

$\ds \int \paren {f \times \chi_{B \setminus A} } \rd \mu = 0$ if and only if $f \times \chi_{B \setminus A} = 0$ $\mu$-almost everywhere.
So:

$\ds \int_A f \rd \mu = \int_B f \rd \mu$
if and only if:

$f \times \chi_{B \setminus A} = 0$ $\mu$-almost everywhere.
$\blacksquare$





