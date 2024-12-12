# 

Source: https://proofwiki.org/wiki/Characterization_of_Finite_Rank_Operators

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {\HH, \innerprod \cdot \cdot_\HH}$ and $\struct {\KK, \innerprod \cdot \cdot_\KK}$ be Hilbert spaces over $\GF$.
Let $T \in \map {B_{00} } {\HH, \KK}$ be a bounded finite rank operator.
Let $n = \map \dim {\operatorname {ran} T}$ be the rank of $T$.

Then there are orthonormal vectors $e_1, \ldots, e_n \in \HH$ and vectors $g_1, \ldots, g_n \in \KK$ such that:

$\forall h \in \HH: T h = \ds \sum_{i \mathop = 1}^n \innerprod h {e_i}_\HH g_i$


Proof
Let: 

$\set {e_1, e_2, \ldots, e_n}$
be a basis of $T \sqbrk \HH$.
By Gram-Schmidt Orthogonalization, there exists an orthonormal subset such that: 

$\set {g_1, g_2, \ldots, g_n}$
that is a basis of $T \sqbrk \HH$.
So we have $T x \in \map \span {g_1, g_2, \ldots, g_n}$ for each $x \in \HH$.
So, we can write: 

$\ds T x = \sum_{i \mathop = 1}^n \map {\alpha_i} x g_i$
for functions $\alpha_i : \HH \to \GF$. 
We show that each $\alpha_i$ is a bounded linear functional. 
For each $\lambda, \mu \in \GF$ and $x, y \in \HH$ such that: 














\(\ds \sum_{i \mathop = 1}^n \map {\alpha_i} {\lambda x + \mu y} g_i\)

\(=\)







\(\ds \map T {\lambda x + \mu y}\)




















\(\ds \)

\(=\)







\(\ds \lambda T x + \mu T y\)





Definition of Linear Transformation














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \paren {\lambda \map {\alpha_i} x + \mu \map {\alpha_i} y} g_i\)









So:

$\ds \sum_{i \mathop = 1}^n \paren {\map {\alpha_i} {\lambda x + \mu y} - \paren {\lambda \map {\alpha_i} x + \mu \map {\alpha_i} y} } g_i = \mathbf 0_\KK$
From Orthogonal Set is Linearly Independent Set, $g_1, g_2, \ldots, g_n \in \KK$ are linearly independent. 
So we have: 

$\map {\alpha_i} {\lambda x + \mu y} = \lambda \map {\alpha_i} x + \mu \map {\alpha_i} y$
for each $i$. 
So each $\alpha_i$ is a linear functional. 
From Pythagoras's Theorem (Inner Product Space), we have: 

$\ds \norm {T x}^2_\KK = \sum_{i \mathop = 1}^n \cmod {\map {\alpha_i} x}^2$
for each $x \in \HH$. 
So we have: 

$\cmod {\map {\alpha_i} x} \le \norm {T x}_\KK$
for each $x \in \HH$.
From Fundamental Property of Norm on Bounded Linear Transformation, we have: 

$\cmod {\map {\alpha_i} x} \le \norm T_{\map \BB {\HH, \KK} } \norm x_\HH$
for each $x \in \HH$. 
So each $\alpha_i$ is a bounded linear functional.
From Riesz Representation Theorem (Hilbert Spaces), there exists $e_i$ such that: 

$\map {\alpha_i} x = \innerprod x {e_i}$
for each $x \in \HH$. 
Then we have: 

$\ds T x = \sum_{i \mathop = 1}^n \innerprod x {e_i}_\HH g_i$
for each $x \in \HH$. 


This theorem requires a proof.In particular: Forgot to prove that the $e_i$s can be made orthonormal. This is easy, but will do laterYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {II}.4$ Exercise $8$




