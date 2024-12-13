# 

Source: https://proofwiki.org/wiki/Ring_Homomorphism_Preserves_Subrings/Proof_3

Theorem
Let $\phi: \struct {R_1, +_1, \circ_1} \to \struct {R_2, +_2, \circ_2}$ be a ring homomorphism.
Let $S$ be a subring of $R_1$.

Then $\phi \sqbrk S$ is a subring of $R_2$.


Proof
Let $S$ be a subring of $R_1$.
Since $S \ne \O$ it follows that $\phi \sqbrk S \ne \O$.
Let $x, y \in \phi \sqbrk S$.
Then:

$\exists s, t \in S: x = \map \phi s, y = \map \phi t$

So:














\(\ds x +_2 \paren {-y}\)

\(=\)







\(\ds \map \phi s +_2 \paren {-\map \phi t}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {s +_1 \paren {-t} }\)





as $\phi$ is a homomorphism



As $S$ is a subring of $R_1$, it is closed under $+_1$ and the taking of negatives.
Thus $s +_1 \paren {-t} \in S$ and so $x +_2 \paren {-y} \in \phi \sqbrk S$.

Similarly:














\(\ds x \circ_2 y\)

\(=\)







\(\ds \map \phi s \circ_2 \map \phi t\)




















\(\ds \)

\(=\)







\(\ds \map \phi {s \circ_1 t}\)





as $\phi$ is a homomorphism



Because $S$ is a subring of $R_1$, it is closed under $\circ_1$.
Thus $s \circ_1 t \in S$ and so $x \circ_2 y \in \phi \sqbrk S$.
The result follows from Subring Test.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Rings: $\S 24$. Homomorphisms: Theorem $46 \ \text{(i)}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 57.3$ Ring homomorphisms: $\text{(i)}$




