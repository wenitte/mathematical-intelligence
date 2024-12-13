# 

Source: https://proofwiki.org/wiki/Operator_with_Zero_Numerical_Range_is_Zero_Operator/Corollary

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$. 
Let $\norm {\, \cdot \,}$ be the inner product norm on $\struct {\HH, \innerprod \cdot \cdot}$.
Let $\DD$ be a dense linear subspace of $\HH$. 
Let $\struct {\DD, T}$ and $\struct {\DD, S}$ be densely-defined linear operators on $\HH$ such that:

$\innerprod {T x} x = \innerprod {S x} x$ for each $x \in \DD$.

Then $T = S$.


Proof
From Inner Product is Sesquilinear, we have:

$\innerprod {\paren {T - S} x} x = 0$ for each $x \in \DD$.
Applying Operator with Zero Numerical Range is Zero Operator to the densely-defined linear operator $\struct {\DD, T - S}$, we have:

$T - S = 0$
That is:

$T = S$
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $12.7$: Bounded Operators




