# 

Source: https://proofwiki.org/wiki/Component_Mappings_of_Set_Coproduct_are_Injective

Theorem
Let $S_1$ and $S_2$ be sets.
Let $\struct {C, i_1, i_2}$ be a coproduct of $S_1$ and $S_2$.

Then $i_1$ and $i_2$ are injections.


Proof
By definition of coproduct:

for all sets $X$ and mappings $f_1: S_1 \to X$ and $f_1: S_1 \to X$
there exists a unique mapping $h: C \to X$ such that:
$h \circ i_1 = f_1$
$h \circ i_2 = f_2$

Let $X := S_1$ and $f_1: S_1 \to X = I_{S_1}$ where $I_{S_1}$ denotes the identity mapping.
We have:

$h \circ i_1 = I_{S_1}$
From Identity Mapping is Injection, $I_{S_1}$ is an injection.
From Injection if Composite is Injection it follows that $i_1$ is an injection.

By setting $X := S_2$ and $f_2 := I_{S_2}$ it follows in the same way that $i_2$ is also an injection.
Hence the result.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Exercise $18$




