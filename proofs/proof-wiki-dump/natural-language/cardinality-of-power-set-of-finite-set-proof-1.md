# 

Source: https://proofwiki.org/wiki/Cardinality_of_Power_Set_of_Finite_Set/Proof_1

Theorem
Let $S$ be a set such that:

$\card S = n$
where $\card S$ denotes the cardinality of $S$,

Then:

$\card {\powerset S} = 2^n$
where $\powerset S$ denotes the power set of $S$.


Proof
Let $T = \set {0, 1}$.
For each $A \in \powerset S$, we consider the characteristic function $\chi_A: S \to T$ defined as:

$\forall x \in S: \map {\chi_A} x = \begin{cases}
1 & : x \in A \\
0 & : x \notin A
\end{cases}$

Now consider the mapping $f: \powerset S \to T^S$:

$\forall A \in \powerset S: \map f A = \chi_A$
where $T^S$ is the set of all mappings from $S$ to $T$.

Also, consider the mapping $g: T^S \to \powerset S$:

$\forall \phi \in T^S: \map g \phi = \phi^{-1} \sqbrk {\set 1}$
where $\phi^{-1} \sqbrk {\set 1}$ is the preimage of $\set 1$ under $\phi$.

Consider the characteristic function of $\phi^{-1} \sqbrk {\set 1}$, denoted $\chi_{\phi^{-1} \sqbrk {\set 1} }$.

We have:










\(\ds \forall x \in S: \, \)



\(\ds \map {\chi_{\phi^{-1} \sqbrk {\set 1} } } x\)

\(=\)







\(\ds \begin{cases} 1 & : x \in \phi^{-1} \sqbrk {\set 1} \\ 0 & : x \notin \phi^{-1} \sqbrk {\set 1} \end{cases}\)




















\(\ds \)

\(=\)







\(\ds \begin{cases} 1 & : \map \phi x = 1 \\ 0 & : \map \phi x = 0 \end{cases}\)




















\(\ds \)

\(=\)







\(\ds \map \phi x\)










So:










\(\ds \forall \phi \in T^S: \, \)



\(\ds \map {\paren {f \circ g} } \phi\)

\(=\)







\(\ds \map f {\phi^{-1} } {\sqbrk {\set 1} }\)




















\(\ds \)

\(=\)







\(\ds \chi_{\phi^{-1} \sqbrk {\set 1} }\)




















\(\ds \)

\(=\)







\(\ds \phi\)









So $f \circ g = I_{T^S}$, that is, the identity mapping on $T^S$.

So far so good. Now we consider the preimage of $\set 1$ under $\chi_A$:

$\chi_A^{-1} \sqbrk {\set 1} = A$
from the definition of the characteristic function $\chi_A$ above.
Thus:










\(\ds \forall A \in \powerset S: \, \)



\(\ds \map {\paren {g \circ f} } A\)

\(=\)







\(\ds \map g {\map f A}\)




















\(\ds \)

\(=\)







\(\ds \map g {\chi_A}\)




















\(\ds \)

\(=\)







\(\ds \chi_A^{-1} \sqbrk {\set 1}\)




















\(\ds \)

\(=\)







\(\ds A\)









So $g \circ f = I_{\powerset S}$, that is, the identity mapping on $\powerset S$.

It follows from Bijection iff Left and Right Inverse that $f$ and $g$ are bijections.

Thus by Cardinality of Set of All Mappings the result follows.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 8$: Functions
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 3.7$. Similar sets: Example $57$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 19$: Combinatorial Analysis: Theorem $19.5$
1972: A.G. Howson: A Handbook of Terms used in Algebra and Analysis ... (previous) ... (next): $\S 2$: Sets and functions: Graphs and functions
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 8$: Theorem $8.1$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: Further exercises: $3$




