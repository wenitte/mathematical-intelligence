# 

Source: https://proofwiki.org/wiki/Continuous_Real-Valued_Function_on_Irreducible_Space_is_Constant

Theorem
Let $T = \struct {S, \tau}$ be a topological space which is irreducible.
Let $f: S \to \R$ be a continuous real-valued function.

Then $f$ is constant, that is:

$\exists a \in \R: \forall x \in S: \map f x = a$


Proof
By definition of $T = \struct {S, \tau}$ being irreducible:

$\forall U_1, U_2 \in \tau: U_1, U_2 \ne \O\implies U_1 \cap U_2 \ne \O$

For every $x \in \R$, define:

$L_x := f^{-1} \sqbrk {\openint {-\infty} x}$
$U_x := f^{-1} \sqbrk {\openint x \infty}$
By continuity of $f$, these are open in $T$.
They are also disjoint, because for each $s \in S$, $\map f s < x$ and $\map f s > x$ cannot both hold simultaneously.

Suppose now that $\map f s = a$ and $\map f {s'} = b$, for some $s, s' \in S$ and $a, b \in \R$ with $a < b$.
Define $c = \dfrac {a + b} 2$.
Then $a < c < b$, whence:

$s \in L_c$ and $s' \in U_c$
However, because $T$ is irreducible, it follows that either $L_c$ or $U_c$ must be empty.

This contradicts the existence of such $a$ and $b$.
Hence $f$ must be constant.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness




