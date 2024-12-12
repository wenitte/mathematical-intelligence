# 

Source: https://proofwiki.org/wiki/Element_of_*-Algebra_Uniquely_Decomposes_into_Hermitian_Elements



Theorem
Let $\struct {A, \ast}$ be a $\ast$-algebra over $\C$. 
Let $a \in A$.

Then there exists unique Hermitian elements $b, c \in A$ such that:

$a = b + i c$
In particular, $b = \map \Re a$ and $c = \map \Im a$ where $b$ and $c$ are the real and imaginary parts of $a$ respectively.


Proof
Proof of Existence

This needs considerable tedious hard slog to complete it.In particular: fill in $\text C^\ast x$ with templateTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let:

$b = \map \Re a = \dfrac 1 2 \paren {a + a^\ast}$
and:

$c = \map \Im a = \dfrac 1 {2 i} \paren {a - a^\ast}$
Then we have using $(\text C^\ast 2)$ and $(\text C^\ast 1)$: 

$b^\ast = \dfrac 1 2 \paren {a^\ast + a^{\ast \ast} } = \dfrac 1 2 \paren {a + a^\ast} = b$
and:














\(\ds c^\ast\)

\(=\)







\(\ds -\frac 1 {2 i} \paren {a^\ast - a^{\ast \ast} }\)





$(\text C^\ast 4)$, $(\text C^\ast 2)$














\(\ds \)

\(=\)







\(\ds -\frac 1 {2 i} \paren {a^\ast - a}\)





$(\text C^\ast 1)$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \paren {a - a^\ast}\)




















\(\ds \)

\(=\)







\(\ds c\)









We therefore have: 














\(\ds b + i c\)

\(=\)







\(\ds \frac 1 2 \paren {a + a^\ast} + \frac i {2 i} \paren {a - a^\ast}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {a + a^\ast + a - a^\ast}\)




















\(\ds \)

\(=\)







\(\ds a\)









$\Box$

Proof of Uniqueness
Suppose that $b_1, c_1, b_2, c_2 \in A$ are Hermitian elements such that:

$a = b_1 + i c_1 = b_2 + i c_2$
Then, we have:

$b_1 - b_2 = i \paren {c_2 - c_1}$
Using $(\text C^\ast 4)$ and $(\text C^\ast 2)$, we have:

$b_1 - b_2 = -i \paren {c_2 - c_1} = -\paren {b_1 - b_2}$
So we have $b_1 = b_2$. 
Hence we have $i \paren {c_2 - c_1} = 0$.
Hence $c_1 = c_2$.
Hence we have the desired uniqueness.
$\blacksquare$


Sources
1990: Gerard J. Murphy: C*-Algebras and Operator Theory ... (previous) ... (next): $2.1$: $C^\ast$-Algebras




