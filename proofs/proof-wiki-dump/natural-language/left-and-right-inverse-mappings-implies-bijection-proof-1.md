# 

Source: https://proofwiki.org/wiki/Left_and_Right_Inverse_Mappings_Implies_Bijection/Proof_1

Theorem
Let $f: S \to T$ be a mapping.
Let $f$ be such that:

$\exists g_1: T \to S: g_1 \circ f = I_S$
$\exists g_2: T \to S: f \circ g_2 = I_T$
where both $g_1$ and $g_2$ are mappings.

Then $f$ is a bijection.


Proof
Suppose:

$\exists g_1: T \to S: g_1 \circ f = I_S$
$\exists g_2: T \to S: f \circ g_2 = I_T$
We have that the Identity Mapping is Bijection, thus $I_S$ and $I_T$ are both bijections.
From Injection if Composite is Injection, if $I_S = g_1 \circ f$ is an injection, then so is $f$.
From Surjection if Composite is Surjection, if $I_T = f \circ g_2$ is a surjection, then so is $f$.
So $f$ is both an injection and a surjection and, by definition, therefore also a bijection.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions: Theorem $5.4$




