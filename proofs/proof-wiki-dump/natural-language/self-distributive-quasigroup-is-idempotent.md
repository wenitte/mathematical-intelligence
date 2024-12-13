# 

Source: https://proofwiki.org/wiki/Self-Distributive_Quasigroup_is_Idempotent

Theorem
Let $\struct {S, \odot}$ be a self-distributive quasigroup.

Then $\odot$ is an idempotent operation.


Proof
Because $S$ is a quasigroup:

$\forall a, b \in S: \exists ! x \in S: x \odot a = b$
$\forall a, b \in S: \exists ! y \in S: a \odot y = b$
In particular:

$\exists ! x \in S: x \circ \paren {a \odot b} = y$
for arbitrary $a, b \in S$.
Let $y = a \odot \paren {a \odot b}$.
Because $\struct {S, \odot}$ is self-distributive:

$y = \paren {a \odot a} \odot \paren {a \odot b}$
Because $S$ is a quasigroup, we have a priori that:

$a = a \odot a$
As $a$ is arbitrary, the result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.21 \ \text{(c)}$




