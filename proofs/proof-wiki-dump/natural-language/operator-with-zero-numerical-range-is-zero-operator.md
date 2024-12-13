# 

Source: https://proofwiki.org/wiki/Operator_with_Zero_Numerical_Range_is_Zero_Operator



Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$. 
Let $\norm {\, \cdot \,}$ be the inner product norm on $\struct {\HH, \innerprod \cdot \cdot}$.
Let $\struct {\map D T, T}$ be a densely-defined linear operator on $\HH$ such that:

$\map W T = \set 0$
where $\map W T$ is the numerical range of $T$. 

Then $T = 0$. 


Corollary
Let $\DD$ be a dense linear subspace of $\HH$. 
Let $\struct {\DD, T}$ and $\struct {\DD, S}$ be densely-defined linear operators on $\HH$ such that:

$\innerprod {T x} x = \innerprod {S x} x$ for each $x \in \DD$.

Then $T = S$.


Proof
Let $x, y \in \map D T$. 
Since $\map W T = \set 0$, we have:

$\innerprod {\map T {x + y} } {x + y} = \innerprod {T x} x = \innerprod {T y} y = 0$
From Inner Product is Sesquilinear, we have:

$\innerprod {T x} x + \innerprod {T x} y + \innerprod {T y} x + \innerprod {T y} y = 0$
That is:

$\innerprod {T x} y = -\innerprod {T y} x$
Similarly, replacing $y$ with $i y$ and applying Inner Product is Sesquilinear, we have:

$-i \innerprod {T x} y = -\innerprod {\map T {i y} } x$
Since $T$ is linear, we have:

$\innerprod {T x} y = \innerprod {T y} x$
Hence:

$\innerprod {T x} y = -\innerprod {T x} y$
This gives:

$\innerprod {T x} y = 0$ for all $x, y \in \map D T$.
That is:

$T x \in \map D T^\bot$ for all $x \in \map D T$
where $\map D T^\bot$ is the orthocomplement of $\map D T$.
From Linear Subspace Dense iff Zero Orthocomplement, we have $\map D T^\bot = \set 0$.
Hence:

$T x = 0$ for all $x \in \map D T$.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $12.7$: Bounded Operators




