# 

Source: https://proofwiki.org/wiki/Cardinality_of_Codomain_of_Surjection



Theorem
Let $S$ be a set.
Let:

$\card S = n$
where $\card S$ denotes the cardinality of $S$.
Let $f: S \to T$ be a surjection.
Then $\card T \le n$.

The equality:

$\card T = n$
occurs if and only if $f$ is a bijection.


Proof
We have that $\card S = n$.
Then by definition of cardinality:

there is a surjection from $S$ to $T$
if and only if:

there is a surjection from $\N_n$ to $T$.
So we need consider the case only when $S = \N_n$.

By definition of surjection:

$\forall x \in T: f^{-1} \sqbrk {\set x} \ne \O$
where $f^{-1} \sqbrk {\set x}$ denotes the preimage of $\set x$ under $f$.
From the Well-Ordering Principle, $\N$ is well-ordered.
Therefore by Subset of Well-Ordered Set is Well-Ordered, $S = \N_n$ is well-ordered.
We have that $f^{-1} \sqbrk {\set x} \subseteq S$.
Therefore $f^{-1} \sqbrk {\set x}$ is also well-ordered.
Therefore, by definition of well-ordered set, $f^{-1} \sqbrk {\set x}$ has a smallest element.

Let $g: T \to S$ be the mapping defined as:

$\forall x \in T: g \paren x =$ the smallest element of $f^{-1} \sqbrk {\set x}$

Let $x \in T$.
Then:

$g \paren x \in f^{-1} \sqbrk {\set x}$
so:

$f \paren {g \paren x} = x$
Thus:

$f \circ g = I_T$
and by Identity Mapping is Bijection:

$I_T: T \to g \sqbrk T$ is a bijection.
By Cardinality of Subset of Finite Set:

$\card {g \sqbrk T} \le n$

Let $\card {g \sqbrk T} = m$.
By Set Equivalence behaves like Equivalence Relation:

$\card T = m$
elements.

Suppose $m = n$.
Then by Cardinality of Subset of Finite Set:

$g \sqbrk T = S$
so $g: T \to S$ is a bijection.
Therefore:














\(\ds f\)

\(=\)







\(\ds f \circ I_S\)




















\(\ds \)

\(=\)







\(\ds f \circ g \circ g^{-1}\)




















\(\ds \)

\(=\)







\(\ds I_S \circ g^{-1}\)




















\(\ds \)

\(=\)







\(\ds g^{-1}\)










So $f: S \to T$ is a bijection.
$\blacksquare$


Also presented as
This result can also be presented as:

The mapping $f: S \to T$ cannot be a surjection if $\card S < \card T$.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 17$: Finite Sets: Theorem $17.6$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.10$: Finite Sequences: Proposition $\text{A}.10.1: \ 2$
2008: David Joyner: Adventures in Group Theory (2nd ed.) ... (previous) ... (next): Chapter $2$: 'And you do addition?': $\S 2.1$: Functions: Ponderable $2.1.4$




