# 

Source: https://proofwiki.org/wiki/Characterization_of_Projections



Theorem
Let $\HH$ be a Hilbert space.
Let $A \in \map B \HH$ be an idempotent operator.

Then the following are equivalent:

$(1): \quad A$ is a projection in the Hilbert space sense
$(2): \quad A$ is the orthogonal projection onto $\Img A$
$(3): \quad \norm A = 1$, where $\norm {\, \cdot \,}$ is the norm on bounded linear operators.
$(4): \quad A$ is Hermitian
$(5): \quad A$ is normal
$(6): \quad \forall h \in \HH: \innerprod {A h} h_\HH \ge 0$
$(7): \quad \forall h \in \HH: \innerprod {A h} h_\HH = \norm {A h}^2$


Proof
$(1)$ implies $(2)$
Let $K = \Img A$.
From Range of Idempotent is Kernel of Complementary Idempotent: Corollary 2, $K$ is a closed linear subspace of $\HH$. 
Hence we can define the orthogonal projection $P_K$. 
We just need to show that:

$A = P_K$
From Unique Point of Minimal Distance to Closed Linear Subspace of Hilbert Space iff Orthogonal, for each $h \in \HH$:

$P_K h$ is the unique element of $K$ such that $h - P_K h \perp K$
In other words:

$P_K h$ is the unique element of $K$ such that $h - P_K h \in K^\bot$, where $K^\bot$ is the orthocomplement of $K$.
Since $A$ is a projection, we have:

$K^\bot = \paren {\Img A}^\perp = \map \ker A$
Now note that we have:

$\map A {h - A h} = A h - A^2 h = A h - A h = {\mathbf 0}_\HH$
Since $P_K h$ is unique, we have $A h = P_K h$. 
Hence $A = P_K$.
$\Box$


$(2)$ implies $(3)$
This is shown in Orthogonal Projection is Bounded.
$\Box$


$(3)$ \implies $(1)$
Suppose that $\norm A = 1$. 
We aim to show that:

$\paren {\map \ker A}^\perp = \Img A$
Let $h \in \paren {\map \ker A}^\perp$. 
From Range of Idempotent is Kernel of Complementary Idempotent: Corollary 1, we have $\Img {I - A} = \map \ker A$. 
Hence $h - A h \in \map \ker A$. 
Hence $h \perp h - A h$. 
It follows that: 

$0 = \innerprod {h - A h} h = \norm h^2 - \innerprod {A h} h$
by the definition of the inner product norm.
Hence, we have:

$\innerprod {A h} h = \norm h^2$
Now, by Cauchy-Bunyakovsky-Schwarz Inequality: Inner Product Spaces, we have:

$\innerprod {A h} h \le \norm {A h} \norm h$
From Fundamental Property of Norm on Bounded Linear Transformation, we have:

$\norm {A h} \norm h \le \norm h^2$
Hence we have:

$\norm h^2 = \innerprod {A h} h \le \norm {A h} \norm h \le \norm h^2$
We can therefore conclude that:

$\norm {A h} \norm h = \norm h^2$
so that:

$\norm {A h} = \norm h$ for all $h \in \paren {\map \ker A}^\perp$
We now have, for $h \in \paren {\map \ker A}^\perp$:

$\norm {h - A h}^2 = \norm h^2 - 2 \map \Re {\innerprod {A h} h} + \norm {A h}^2$
from Square of Inner Product Norm of Sum. 
Now, since: 

$\innerprod {A h} h = \norm h^2$
we have:

$\norm {h - A h}^2 = 0$
Hence from Norm Axiom $\text N 1$: Positive Definiteness, we have $\paren {I - A} h = 0$ for all $h \in \paren {\map \ker A}^\perp$. 
Hence we have $\paren {\map \ker A}^\perp \subseteq \ker {I - A}$. 
Using Range of Idempotent is Kernel of Complementary Idempotent: Corollary 1 again we have $\paren {\map \ker A}^\perp \subseteq \Img A$. 
Now let $g \in \Img A = \ker {I - A}$. 
From Direct Sum of Subspace and Orthocomplement, there exists $g_1 \in \map \ker A$ and $g_2 \in \paren {\map \ker A}^\perp$ such that $g = g_1 + g_2$. 
Since $g \in \ker {I - A}$, we have $g = A g$. 
From linearity, we have $A g = A g_1 + A g_2 = A g_2$, since $g_1 \in \map \ker A$. 
We have already shown that $\paren {\map \ker A}^\perp \subseteq \ker {I - A}$, so $E g_2 = g_2$. 
So we have $\Img A \subseteq \paren {\map \ker A}^\perp$. 
Hence we have $\Img A = \paren {\map \ker A}^\perp$.
We conclude that $A$ is a projection.
$\Box$


$(2)$ implies $(7)$
Let $h \in \HH$. 
Again from Direct Sum of Subspace and Orthocomplement, we can pick $h_1 \in \Img A$ and $h_2 \in \paren {\Img A}^\perp$ such that:

$h = h_1 + h_2$
So that, from linearity:

$A h = A h_1 + A h_2 = A h_1$
Since $A$ is a projection, we have:
$\paren {\Img A}^\perp = \map \ker A$
so that $A h_2 = {\mathbf 0}_\HH$. 
We therefore have:

$\innerprod {A h} h = \innerprod {\map A {h_1 + h_2} } {h_1 + h_2} = \innerprod {A h_1} {h_1 + h_2}$
Since the inner product is linear in its first argument we have:

$\innerprod {A h_1} {h_1 + h_2} = \innerprod {A h_1} {h_1} + \innerprod {A h_1} {h_2}$
Since $h_2 \in \paren {\Img A}^\bot$, we have $\innerprod {A h_1} {h_2} = 0$ and hence:

$\innerprod {A h} h = \innerprod {A h_1} {h_1} = \norm {h_1}^2$
From Fixed Points of Idempotent Operator, since $h_1 \in \Img A$, we have:

$h_1 = A h_1 = A h$
So we have:

$\innerprod {A h} h = \norm {A h}^2$
from the definition of the inner product norm. 
$\Box$


$(7)$ implies $(6)$
Immediate since $\norm {A h}^2 \ge 0$ for each $h \in \HH$. 
$\Box$


$(6)$ implies $(1)$
We again wish to show:

$\paren {\map \ker A}^\perp = \Img A$
We first show that:

$\map \ker A \perp \Img A$
Let $h_1 \in \map \ker A$ and $h_2 \in \Img A$. 
From $(6)$, we have:

$0 \le \innerprod {\map A {h_1 + h_2} } {h_1 + h_2}$
while:














\(\ds \innerprod {\map A {h_1 + h_2} } {h_1 + h_2}\)

\(=\)







\(\ds \innerprod {A h_1} {h_1 + h_2}\)





since $h_2 \in \map \ker A$














\(\ds \)

\(=\)







\(\ds \innerprod {A h_1} {h_1} + \innerprod {A h_1} {h_2}\)





Inner Product is Sesquilinear














\(\ds \)

\(=\)







\(\ds \innerprod {h_1} {h_1} + \innerprod {h_1} {h_2}\)





Fixed Points of Idempotent Operator














\(\ds \)

\(=\)







\(\ds \norm {h_1}^2 + \innerprod {h_1} {h_2}\)





Definition of Inner Product Norm



Hence we have:

$-\norm {h_1}^2 \le \innerprod {h_1} {h_2}$
Suppose that:

$\innerprod {h_1} {h_2} = \alpha \ne 0$ for some $h_1 \in \Img A$ and $h_2 \in \map \ker A$.
From Kernel of Linear Transformation is Linear Subspace, we have:

$-2 \alpha^{-1} \norm {h_1}^2 h_2 \in \map \ker A$
Hence by swapping $h_2$ for $-2 \alpha^{-1} \norm {h_1}^2 h_2$, we have:

$-\norm {h_1}^2 \le -2 \alpha^{-1} \norm {h_1}^2 \innerprod {h_1} {h_2}$
Hence:

$-\norm {h_1}^2 \le -2 \norm {h_1}^2$
Then we have $\norm {h_1}^2 = 0$ and hence $h_1 = {\mathbf 0}_\HH$ from Norm Axiom $\text N 1$: Positive Definiteness. 
This contradicts that $\innerprod {h_1} {h_2} \ne 0$. 
So we have $\innerprod {h_1} {h_2} = 0$ for all $h_1 \in \Img A$ and $h_2 \in \map \ker A$. 
Now for general $x \in \HH$, we can again use Direct Sum of Subspace and Orthocomplement to decompose:

$x = x_1 + x_2$
where $x_1 \in \Img A$ and $x_2 \in \map \ker A$. 
Then we have $\innerprod x {h_2} = \innerprod {x_1} {h_2} + \innerprod {x_2} {h_2} = \innerprod {x_2} {h_2}$. 
So if $\innerprod x {h_2} = 0$ for all $h_2 \in \map \ker A$, we have $\innerprod {x_2} {h_2}$ for all $x_2 \in \map \ker A$. 
Then $x_2 \in \map \ker A \cap \paren {\map \ker A}^\perp = \set 0$. 
So $x_2 = {\mathbf 0}_\HH$ and $x \in \Img A$. 
Hence $\paren {\map \ker A}^\perp = \Img A$.
$\Box$


$(1)$ implies $(4)$
Let $h, g \in \HH$. 
By Direct Sum of Subspace and Orthocomplement, decompose:

$h = h_1 + h_2$
and:

$g = g_1 + g_2$
for $h_1, g_1 \in \Img A$ and $h_2, g_2 \in \map \ker A$. 
Since $A$ is a projection, we have:

$\map \ker A = \paren {\Img A}^\perp$
Hence we have: 














\(\ds \innerprod {A h} g\)

\(=\)







\(\ds \innerprod {A h_1} {g_1 + g_2}\)




















\(\ds \)

\(=\)







\(\ds \innerprod {h_1} {g_1} + \innerprod {h_1} {g_2}\)





Fixed Points of Idempotent Operator














\(\ds \)

\(=\)







\(\ds \innerprod {h_1} {g_1}\)





since $g_2 \in \paren {\Img A}^\perp$ and $h_1 \in \Img A$



Similarly, we have:














\(\ds \innerprod {A^\ast h} g\)

\(=\)







\(\ds \innerprod h {A^{\ast \ast} g}\)





Definition of Adjoint Linear Transformation














\(\ds \)

\(=\)







\(\ds \innerprod h {A g}\)





Adjoint is Involutive














\(\ds \)

\(=\)







\(\ds \innerprod {h_1} {g_1} + \innerprod {h_1} {g_2}\)




















\(\ds \)

\(=\)







\(\ds \innerprod {h_1} {g_1}\)









Hence we have:

$\innerprod {A^\ast h} g = \innerprod {A h} g$
so:

$\innerprod {A^\ast h - A h} g = 0$
Setting $g = A^\ast h - A h$ and applying Norm Axiom $\text N 1$: Positive Definiteness we have:

$A^\ast h = A h$ for each $h \in \HH$.
Hence $A$ is Hermitian.
$\Box$


$(4)$ implies $(5)$
Suppose that $A$ is Hermitian. 
We have:

$A^\ast A = A^2 = A A^\ast$
So $A$ is normal.
$\Box$


$(5)$ implies $(1)$
From Characterization of Normal Operators, we have:

$\norm {A h} = \norm {A^\ast h}$ for each $h \in \HH$.
Hence we have $h \in \map \ker A$ if and only if $\norm {A h} = 0$ if and only if $\norm {A^\ast h} = 0$. 
That is, from Norm Axiom $\text N 1$: Positive Definiteness, we have $\map \ker A = \ker {A^\ast}$. 
From Kernel of Linear Transformation is Orthocomplement of Image of Adjoint and Adjoint is Involutive, we have:

$\ker {A^\ast} = \paren {\Img A}^\perp$
Hence:

$\map \ker A = \paren {\Img A}^\perp$
So $A$ is a projection.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $II.3.3$




