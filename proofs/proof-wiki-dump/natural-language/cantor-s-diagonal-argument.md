# 

Source: https://proofwiki.org/wiki/Cantor%27s_Diagonal_Argument



Theorem
Let $S$ be a set such that $\card S > 1$, that is, such that $S$ is not a singleton.
Let $\mathbb F$ be the set of all mappings from the natural numbers $\N$ to $S$:

$\mathbb F = \set {f: \N \to S}$
Then $\mathbb F$ is uncountably infinite.


Corollary
Let $S$ be a set such that $\card S > 1$, that is, such that $S$ is not a singleton.
Let $\mathbb G$ be the set of all mappings from the integers $\Z$ to $S$:

$\mathbb G = \set {f: \Z \to S}$
Then $\mathbb G$ is uncountably infinite.


Proof
First we note that as $\card S > 1$, there are at least two elements of $S$ which are distinct.
Call these distinct elements $a$ and $b$.
That is:

$\exists a, b \in S: a \ne b$

First we show that $\mathbb F$ is infinite, as follows.

For each $m \in \N$, let $\phi_m$ be the mapping defined as:

$\map {\phi_m} n = \begin{cases}
a & : n \ne m \\
b & : n = m
\end{cases}$
Then:

$\forall m_1, m_2 \in \N: m_1 \ne m_2 \implies \phi_{m_1} \ne \phi_{m_2}$
as:

$b = \map {\phi_{m_1} } {m_1} \ne \map {\phi_{m_2} } {m_1} = a$
So the mapping $\Psi: \N \to \mathbb F$ defined as:

$\map \Psi n = \phi_n$
is an injection.
Thus $\mathbb F$ is infinite from Infinite if Injection from Natural Numbers.

Next we show that $\mathbb F$ is uncountable.
Let $\Phi: \N \to \mathbb F$ be a mapping.
For each $n \in \N$ let $f_n: \N \to S$ be the function $\map \Phi n$.
Let us define $g: \N \to \N$ by:

$\map g n = \begin{cases}
a & : \map {f_n} n \ne a \\
b & : \map {f_n} n = a
\end{cases}$
Then $g \in \mathbb F$, but:

$\forall n \in \N: \map g n \ne \map {f_n} n$
and so $g \ne f_n$.
Since $g$ is an element of $\mathbb F$ which is different from all the values taken by $\Phi$, it follows that $\Phi$ is not a surjection and hence not a bijection.
Thus no bijection exists between $\mathbb F$ and $\N$.
By definition of countably infinite, $\mathbb F$ is countably infinite if and only if there is a bijection between $\mathbb F$ and $\N$.
Therefore $\mathbb F$ is uncountable.
$\blacksquare$


Also known as
The technique of Cantor's Diagonal Argument is also referred to as diagonalization.

Examples
Set of Mappings from Integers to Boolean Set is Uncountable
Let $S$ be the Boolean set defined as:

$S = \set {0, 1}$
Let $\mathbb G$ be the set of all mappings from the integers $\Z$ to $S$:

$\mathbb G = \set {f: \Z \to S}$
Then $\mathbb G$ is uncountably infinite.


Also see
Set of Infinite Sequences is Uncountable, which is a basic application of this technique.


Source of Name
This entry was named for Georg Cantor.


Historical Note
Georg Cantor was the first on record to have used the technique of what is now referred to as Cantor's Diagonal Argument when proving the Real Numbers are Uncountable.


Sources
1979: John E. Hopcroft and Jeffrey D. Ullman: Introduction to Automata Theory, Languages, and Computation ... (previous) ... (next): Chapter $1$: Preliminaries: $1.4$ Set Notation: Infinite sets
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $1$: General Background: $\S 3$ A non-denumerable set
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Cantor's Diagonal Theorem




