# 

Source: https://proofwiki.org/wiki/Polar_Decomposition_for_Bounded_Linear_Operator_on_Hilbert_Space



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\GF$.
Let $T : \HH \to \HH$.

Then there exists a unique partial isometry $U : \HH \to \HH$ such that:

$T = U \cmod T$ and $\map \ker T = \map \ker U$
where $\cmod T$ is the modulus of $T$.
Further, $U^\ast T = \cmod T$. 


Proof
Existence
From the definition of the modulus, $\cmod T$ is positive and hence Hermitian.
We have, for each $x \in \HH$:














\(\ds \norm {\cmod T x}^2\)

\(=\)







\(\ds \innerprod {\cmod T x} {\cmod T x}\)





Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds \innerprod {\cmod T^2 x} x\)





Definition of Adjoint Linear Transformation














\(\ds \)

\(=\)







\(\ds \innerprod {\paren {T^\ast T} x} x\)





Definition of Modulus of Element of C*-Algebra














\(\ds \)

\(=\)







\(\ds \innerprod {T x} {T x}\)





Definition of Adjoint Linear Transformation, Adjoint is Involutive














\(\ds \)

\(=\)







\(\ds \norm {T x}^2\)









Hence, since $\cmod T$ and $T$ are linear, we have:

for $x, y \in \HH$ such that $\cmod T x = \cmod T y$, we have $T x = T y$.
We note in particular that $\map \ker T = \map \ker {\cmod T}$. 
We can therefore define $\widetilde U_0 : \Img {\cmod T} \to \Img T$ by:

$\map {\widetilde U_0} {\cmod T x} = T x$
for each $x \in \Img {\cmod T}$.
We show that this is linear.
Let $u, v \in \Img {\cmod T}$ and $\lambda \in \GF$.
Then there exists $x, y \in \HH$ such that $u = \cmod T x$ and $v = \cmod T y$. 
We then have:














\(\ds \map {\widetilde U_0} {u + \lambda v}\)

\(=\)







\(\ds \map {\widetilde U_0} {\cmod T x + \lambda \cmod T y}\)




















\(\ds \)

\(=\)







\(\ds \map {\widetilde U_0} {\map {\cmod T} {x + \lambda y} }\)





Definition of Linear Transformation














\(\ds \)

\(=\)







\(\ds \map T {x + \lambda y}\)





definition of $\widetilde U_0$














\(\ds \)

\(=\)







\(\ds T x + \lambda T y\)





Definition of Linear Transformation














\(\ds \)

\(=\)







\(\ds \map {\widetilde U_0} {\cmod T x} + \lambda \map {\widetilde U_0} {\cmod T y}\)




















\(\ds \)

\(=\)







\(\ds \widetilde U_0 u + \lambda \widetilde U_0 v\)









so $\widetilde U_0$ is linear transformation.
Since $\norm {T x} = \norm {\cmod T x}$ for each $x \in \HH$, this an linear isometry.
From Bounded Linear Transformation to Banach Space has Unique Extension to Closure of Domain: Corollary 3, there exists a linear isometry $\widetilde U : \map \cl {\Img {\cmod T} } \to \HH$ extending $\widetilde U_0$. 
From Extension of Bounded Linear Transformation from Closed Subspace of Hilbert Space to Whole Space, we can define a bounded linear transformation $U : \HH \to \HH$ by:

$U x = \widetilde U u$ for each $x \in \HH$
where $x = u + v$ for $u \in \map \cl {\Img {\cmod T} }$ and $v \in \map \cl {\Img {\cmod T} }^\bot$.

We show that $U$ is the desired map.
We first show that $U$ is a partial isometry. 
We note that since $\widetilde U$ is an isometry, we have $\ker {\widetilde U} = \set { {\mathbf 0}_\HH}$ from Linear Isometry is Injective.
For $u \in \map \cl {\Img {\cmod T} }$, we have $\norm {U u} = \norm {\widetilde U u} = \norm u$.
So $U$ is a linear isometry on $\map \cl {\Img {\cmod T} }$. 
We want to show that $\map \ker U^\bot = \map \cl {\Img {\cmod T} }$.
We first show that $\map \ker U = \map \cl {\Img {\cmod T} }^\bot$.
Let $x \in \map \ker U$. 
From Direct Sum of Subspace and Orthocomplement we can write $x = u + v$ for $u \in \map \cl {\Img {\cmod T} }$ and $v \in \map \cl {\Img {\cmod T} }^\bot$. 
Then we have $U x = \widetilde U u$.
If $u \ne {\mathbf 0}_\HH$, we have $U x \ne {\mathbf 0}_\HH$ since $\ker \widetilde U = \set { {\mathbf 0}_\HH}$, hence $x = v \in \map \cl {\Img {\cmod T} }^\bot$.
So we have $\map \ker U \subseteq \map \cl {\Img {\cmod T} }^\bot$.
The fact that $\map \cl {\Img {\cmod T} }^\bot \subseteq \map \ker U$ is immediate by construction.
So $\map \ker U = \map \cl {\Img {\cmod T} }^\bot$.
Hence from Double Orthocomplement is Closed Linear Span, we obtain:

$\map \ker U^\bot = \map \cl {\Img {\cmod T} }^{\bot \bot} = \map \cl {\Img {\cmod T} }$
Recalling that $U$ is an isometry on $\map \cl {\Img {\cmod T} }$, $U$ is an isometry on $\map \ker U^\bot$.
So $U$ is a partial isometry.

We now verify that $T = U \cmod T$.
For each $x \in \HH$, we have:














\(\ds U \cmod T x\)

\(=\)







\(\ds \widetilde U \cmod T x\)





since $\cmod T x \in \Img {\cmod T}$














\(\ds \)

\(=\)







\(\ds \widetilde U_0 \cmod T x\)





since $\cmod T x \in \Img {\cmod T}$














\(\ds \)

\(=\)







\(\ds T x\)





by definition of $\widetilde U_0$



So $T = U \cmod T$. 

We show that $\map \ker U = \map \ker T$. 
We have already shown that $\map \ker U = \map \cl {\Img {\cmod T} }^\bot$.
From Orthocomplement of Closure, we have $\map \cl {\Img {\cmod T} }^\bot = \Img {\cmod T}^\bot$. 
Further from Kernel of Linear Transformation is Orthocomplement of Image of Adjoint, we have:

$\Img {\cmod T}^\bot = \ker {\cmod T}$
since $\cmod T$ is Hermitian. 
Hence we have $\map \ker U = \map \ker {\cmod T}$.
We have already shown that $\map \ker {\cmod T} = \map \ker T$, so we have $\map \ker U = \map \ker T$. 

Lastly we show that $U^\ast T = \cmod T$.
Let $z \in \Img {\cmod T}$.
Then there exists $y \in \HH$ such that $z = \cmod T y$.
We then have:














\(\ds \innerprod {U^\ast T x} z\)

\(=\)







\(\ds \innerprod {U^\ast T x} {\cmod T y}\)




















\(\ds \)

\(=\)







\(\ds \innerprod {T x} {U \cmod T y}\)





Definition of Adjoint Linear Transformation, Adjoint is Involutive














\(\ds \)

\(=\)







\(\ds \innerprod {T x} {T y}\)





since $T = U \cmod T$ as already shown














\(\ds \)

\(=\)







\(\ds \innerprod {T^\ast T x} y\)





Definition of Adjoint Linear Transformation














\(\ds \)

\(=\)







\(\ds \innerprod {\cmod T^2 x} y\)





Definition of Modulus of Element of C*-Algebra














\(\ds \)

\(=\)







\(\ds \innerprod {\cmod T x} {\cmod T y}\)





since $\cmod T$ is Hermitian














\(\ds \)

\(=\)







\(\ds \innerprod {\cmod T x} z\)









for all $z \in \Img {\cmod T}$. 
Now take $z \in \map \cl {\Img {\cmod T} }$.
Then there exists a sequence $\sequence {z_n}_{n \mathop \in \N}$ in $\Img {\cmod T}$ such that $z_n \to z$.
Then we have:

$\innerprod {U^\ast T x} {z_n} = \innerprod {\cmod T x} {z_n}$ for each $n \in \N$.
From Inner Product is Continuous, we obtain:

$\innerprod {U^\ast T x} z = \innerprod {\cmod T x} z$ for each $z \in \map \cl {\Img T}$
by taking $n \to \infty$. 
For $z \in \HH$, write $z = u + v$ for $u \in \map \cl {\Img T}$ and $v \in \map \cl {\Img T}^\bot$ as before. 
We've already established that $\map \cl {\Img T}^\bot = \map \ker U$, and so:

$\innerprod {U^\ast T x} v = \innerprod {T x} {U v} = 0$
We also have:

$\innerprod {\cmod T x} v = 0$
by the definition of orthocomplement. 
We then have:














\(\ds \innerprod {U^\ast T x} z\)

\(=\)







\(\ds \innerprod {U^\ast T x} u + \innerprod {U^\ast T x} v\)




















\(\ds \)

\(=\)







\(\ds \innerprod {U^\ast T x} u\)




















\(\ds \)

\(=\)







\(\ds \innerprod {\cmod T x} u\)





we have equality for $z \in \map \cl {\Img T}$














\(\ds \)

\(=\)







\(\ds \innerprod {\cmod T x} u + \innerprod {\cmod T x} v\)




















\(\ds \)

\(=\)







\(\ds \innerprod {\cmod T x} z\)









for each $z \in \HH$.
In particular we have:

$\innerprod {U^\ast T x - \cmod T x} {U^\ast T x - \cmod T x} = 0$
So we have $U^\ast T x = \cmod T x$.
So $U^\ast T = \cmod T$.
$\Box$

Uniqueness
Take the $U$ constructed above. 
Suppose that $W$ is another partial isometry with:

$T = U \cmod T = W \cmod T$
with $\map \ker T = \map \ker U = \map \ker W$.
Hence $U$ and $W$ coincide on $\Img {\cmod T}$.
From Bounded Linear Transformation to Banach Space has Unique Extension to Closure of Domain: Corollary, $U$ and $W$ coincide on $\map \cl {\Img {\cmod T} }$.
We established earlier in the proof that $\map \ker U = \map \cl {\Img {\cmod T} }^\bot$, and so $\map \ker W = \map \cl {\Img {\cmod T} }^\bot$ as well.
Hence $U$ and $W$ also coincide on $\map \cl {\Img {\cmod T} }^\bot$.
Then for $x \in \HH$ we can write $x = u + v$ for $u \in \map \cl {\Img {\cmod T} }$ and $v \in \map \cl {\Img {\cmod T} }^\bot$, we have:

$W x = W u + W v = W u = U u + U v = U x$
So $W = U$.
$\blacksquare$


Sources
1990: Gerard J. Murphy: C*-Algebras and Operator Theory ... (previous) ... (next): $2.3$: Operators and Sesquilinear Forms




