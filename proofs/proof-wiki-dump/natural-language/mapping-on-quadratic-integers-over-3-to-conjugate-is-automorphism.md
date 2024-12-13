# 

Source: https://proofwiki.org/wiki/Mapping_on_Quadratic_Integers_over_3_to_Conjugate_is_Automorphism



Theorem
Let $\Z \sqbrk {\sqrt 3}$ denote the set of quadratic integers over $3$:

$\Z \sqbrk {\sqrt 3} := \set {a + b \sqrt 3: a, b \in \Z}$
that is, all numbers of the form $a + b \sqrt 3$ where $a$ and $b$ are integers.

Then the mapping $\phi: \Z \sqbrk {\sqrt 3} \to \Z \sqbrk {\sqrt 3}$ defined as:

$\forall x = a + b \sqrt 3 \in \Z \sqbrk {\sqrt 3}: \map \phi {a + b \sqrt 3} = a - b \sqrt 3$
is a ring automorphism.


Proof
We have Quadratic Integers over 2 form Subdomain of Reals.
First we note that:

$\forall x \in \Z \sqbrk {\sqrt 3}: \map \phi x \in \Z \sqbrk {\sqrt 3}$


Proof of Bijection
Let $\map \phi {a + b \sqrt 3} = \map \phi {a' + b' \sqrt 3}$.
Then:

$a - b \sqrt 3 = a' - b' \sqrt 3$
and so:

$a + b \sqrt 3 = a' + b' \sqrt 3$
So $\phi$ is injective.

Now let $y = c + d \sqrt 3 \in \Z \sqbrk {\sqrt 3}$.
We have that:














\(\ds \map \phi {c + \paren {-d} \sqrt 3}\)

\(=\)







\(\ds c - \paren {-d} \sqrt 3\)




















\(\ds \)

\(=\)







\(\ds c + d \sqrt 3\)










Hence:

$\forall y \in \Z \sqbrk {\sqrt 3}: \exists x \in \Z \sqbrk {\sqrt 3}: \map \phi x = y$
and so $\phi$ is surjective.
So $\phi$ is a bijection.


Proof of Morphism
Now consider $x = a + b \sqrt 3, y = c + d \sqrt 3$.














\(\ds \map \phi x + \map \phi y\)

\(=\)







\(\ds \map \phi {a + b \sqrt 3} + \map \phi {c + d \sqrt 3}\)




















\(\ds \)

\(=\)







\(\ds \paren {a - b \sqrt 3} + \paren {c - d \sqrt 3}\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \paren {a + c} - \paren {b + d} \sqrt 3\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\paren {a + c} + \paren {b + d} \sqrt 3}\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \map \phi {x + y}\)










Then:














\(\ds \map \phi x \map \phi y\)

\(=\)







\(\ds \map \phi {a + b \sqrt 3} \map \phi {c + d \sqrt 3}\)




















\(\ds \)

\(=\)







\(\ds \paren {a - b \sqrt 3} \paren {c - d \sqrt 3}\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \paren {a c + 2 b d} - \paren {b c + a d} \sqrt 3\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\paren {a c + 2 b d} + \paren {b c + a d} \sqrt 3}\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \map \phi {x y}\)










So $\phi$ is a ring homomorphism which is also a bijection, whose image equals its domain.
Hence the result by definition of ring automorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures: Exercise $6.7 \ \text {(b)}$




