# 

Source: https://proofwiki.org/wiki/Field_of_Prime_Characteristic_has_Unique_Prime_Subfield

Theorem
Let $F$ be a field whose characteristic is $p$.
Then there exists a unique $P \subseteq F$ such that:

$(1): \quad P$ is a subfield of $F$
$(2): \quad P \cong \Z_p$.
That is, $P \cong \Z_p$ is a unique minimal subfield of $F$, and all other subfields of $F$ contain $P$.

This field $P$ is called the prime subfield of $F$.


Proof
Let $\struct {F, +, \times}$ be a field whose unity is $1_F$ such that $\Char F = p$.
Let $P$ be a prime subfield of $F$.
From Field has Prime Subfield, this has been shown to exist.

We can consistently define a mapping $\phi: \Z_p \to F$ by:

$\forall n \in \Z_p: \map \phi {\eqclass n p} = n \cdot 1_F$

Suppose $a, b \in \eqclass n p$.
Then:

$a = n + k_1 p, b = n + k_2 p$
So:














\(\ds \map \phi a\)

\(=\)







\(\ds \map \phi {n + k_1 p}\)




















\(\ds \)

\(=\)







\(\ds \paren {n + k_1 p} \cdot 1_F\)




















\(\ds \)

\(=\)







\(\ds n \cdot 1_F + k_1 p \cdot 1_F\)




















\(\ds \)

\(=\)







\(\ds n \cdot 1_F\)









and similarly for $b$, showing that $\phi$ is well-defined.

Let $C_a, C_b \in \Z_p$.
Let $a \in C_a, b \in C_b$ such that $a = a' + k_a p, b = b' + k_b p$.
Then:














\(\ds \map \phi {C_a} + \map \phi {C_b}\)

\(=\)







\(\ds \map \phi {a' + k_a p} + \map \phi {b' + k_b p}\)




















\(\ds \)

\(=\)







\(\ds \paren {a' + k_a p} \cdot 1_F + \paren {b' + k_b p} \cdot 1_F\)




















\(\ds \)

\(=\)







\(\ds \paren {a' + k_a p + b' + k_b p} \cdot 1_F\)





Integral Multiple Distributes over Ring Addition














\(\ds \)

\(=\)







\(\ds \paren {a' + b'} \cdot 1_F + \paren {\paren {k_a p + k_b p} \cdot 1_F}\)




















\(\ds \)

\(=\)







\(\ds \paren {a' + b'} \cdot 1_F\)




















\(\ds \)

\(=\)







\(\ds \map \phi {C_a +_p C_b}\)









Similarly for $\map \phi {C_a} \times \map \phi {C_b}$.

So $\phi$ is a ring homomorphism.
From Ring Homomorphism from Field is Monomorphism or Zero Homomorphism, it follows that $\phi$ is a ring monomorphism.

Thus it follows that $P = \Img \phi$ is a subfield of $F$ such that $P \cong \Z_p$.

Let $K$ be a subfield of $F$.
let $P = \Img \phi$ as defined above.
We know that $1_F \in K$.
It follows that $1_F \in K \implies P \subseteq K$.
Thus $K$ contains a subfield $P$ such that $P$ is isomorphic to $\Z_p$.

The uniqueness of $P$ follows from the fact that if $P_1$ and $P_2$ are both minimal subfields of $F$, then $P_1 \subseteq P_2$ and $P_2 \subseteq P_1$, thus $P_1 = P_2$.
$\blacksquare$


Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 3$. Homomorphisms: Theorem $3.2$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 61$. Characteristic of an integral domain or field




