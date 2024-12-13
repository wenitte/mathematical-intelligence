# 

Source: https://proofwiki.org/wiki/Inner_Product_with_Zero_Vector

Theorem
Let $\struct {V, \innerprod \cdot \cdot}$ be an inner product space.
Let $0_V$ be the zero vector of $V$.

Then: 

$\innerprod {0_V} x = \innerprod x {0_V} = 0$
for all $x \in V$.


Proof
We have: 














\(\ds \innerprod {0_V} x\)

\(=\)







\(\ds \innerprod {0_V + 0_V} x\)





Definition of Zero Vector














\(\ds \)

\(=\)







\(\ds \innerprod {0_V} x + \innerprod {0_V} x\)





linearity of inner product in first argument



so:

$\innerprod {0_V} x = 0$
From conjugate symmetry, we have: 

$\innerprod x {0_V} = \overline {\innerprod {0_V} x}$
so:

$\innerprod x {0_V} = \overline 0 = 0$
$\blacksquare$





