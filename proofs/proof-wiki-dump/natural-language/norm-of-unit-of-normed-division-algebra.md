# 

Source: https://proofwiki.org/wiki/Norm_of_Unit_of_Normed_Division_Algebra

Theorem
Let $\struct {A_F, \oplus}$ be a normed division algebra.
Let the unit of $\struct {A_F, \oplus}$ be $1_A$.

Then:

$\norm {1_A} = 1$
where $\norm {1_A}$ denotes the norm of $1_A$.


Proof
By definition:

$\forall a, b \in A_F: \norm {a \oplus b} = \norm a \norm b$
So:

$\norm {1_A} = \norm {1_A \oplus 1_A} = \norm {1_A} \norm {1_A}$
So $\norm {1_A} \in \R$ is idempotent under real multiplication.
From Idempotent Elements of Ring with No Proper Zero Divisors, only $0 \in \R$ and $1 \in \R$ fit that bill.
But $\norm {1_A}$ can not be $0$ as that would make:

$\forall a \in A_F: \norm a = \norm {1_A \oplus a} = \norm {1_A} \norm a = 0 \norm a = 0$
which contradicts the definition of the norm.
Hence the result.
$\blacksquare$


Sources
2002: John C. Baez: The Octonions: 1.1 Preliminaries




