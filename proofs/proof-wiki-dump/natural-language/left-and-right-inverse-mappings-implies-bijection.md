# 

Source: https://proofwiki.org/wiki/Left_and_Right_Inverse_Mappings_Implies_Bijection



Theorem
Let $f: S \to T$ be a mapping.
Let $f$ be such that:

$\exists g_1: T \to S: g_1 \circ f = I_S$
$\exists g_2: T \to S: f \circ g_2 = I_T$
where both $g_1$ and $g_2$ are mappings.

Then $f$ is a bijection.


Proof 1
Suppose:

$\exists g_1: T \to S: g_1 \circ f = I_S$
$\exists g_2: T \to S: f \circ g_2 = I_T$
We have that the Identity Mapping is Bijection, thus $I_S$ and $I_T$ are both bijections.
From Injection if Composite is Injection, if $I_S = g_1 \circ f$ is an injection, then so is $f$.
From Surjection if Composite is Surjection, if $I_T = f \circ g_2$ is a surjection, then so is $f$.
So $f$ is both an injection and a surjection and, by definition, therefore also a bijection.
$\blacksquare$


Proof 2
Suppose:

$\exists g_1: T \to S: g_1 \circ f = I_S$
$\exists g_2: T \to S: f \circ g_2 = I_T$
From Injection iff Left Inverse, it follows that $f$ is an injection.
From Surjection iff Right Inverse, it follows that $f$ is a surjection.
So $f$ is both an injection and a surjection and, by definition, therefore also a bijection.


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $1.3: \ 11$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Mappings: Exercise $15$




