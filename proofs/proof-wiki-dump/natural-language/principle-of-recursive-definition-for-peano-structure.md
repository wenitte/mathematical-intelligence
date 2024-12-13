# 

Source: https://proofwiki.org/wiki/Principle_of_Recursive_Definition_for_Peano_Structure

Theorem
Let $\struct {P, 0, s}$ be a Peano structure.
Let $T$ be a set.
Let $a \in T$.
Let $g: T \to T$ be a mapping.

Then there exists exactly one mapping $f: P \to T$ such that:

$\forall x \in P: \map f x = \begin{cases}
a & : x = 0 \\
\map g {\map f n} & : x = \map s n
\end{cases}$


Proof
For each $n \in P$, define $\map A n$ as:

$\map A n = \set {h: P \to T \mid \map h 0 = a \land \forall m < n: \map h {\map s n} = \map g {\map h m} }$

This article needs to be linked to other articles.In particular: Ordering $<$ on Peano StructureYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
First, we prove for all $n \in P$ that $\map A n$ is not empty.
More formally, we prove that $A = \set {n \in P: \map A n \ne \O} = P$.
For $n = 0$, there are no $m < n$, so any mapping $h: P \to T$ with $\map h 0 = a$ is an element of $\map A 0$.
Since the constant mapping $\map h n = a$ satisfies this condition, it follows that $0 \in A$.

Now suppose that $n \in A$, and let $h \in \map A n$.
Define $h': P \to T$ by, for all $n' \in P$:

$\map {h'} {n'} = \begin {cases}
\map h {n'} & : n' \le n \\
\map g {\map h n} & : n' > n
\end {cases}$
To check that $h' \in \map A {\map s n}$, we have to verify that:

$\forall m < \map s n: \map {h'} {\map s m} = \map g {\map {h'} m}$
Since $h \in \map A n$, only the case $m = n$ needs to be verified:














\(\ds \map {h'} {\map s n}\)

\(=\)







\(\ds \map g {\map h n}\)





as $\map s n > n$














\(\ds \)

\(=\)







\(\ds \map g {\map {h'} n}\)





Definition of $h'$



Therefore $h' \in \map A {\map s n}$, and so $\map A {\map s n} \ne \O$.
That means $\map s n \in A$, and by Axiom $(\text P 5)$, we conclude $A = P$.

Now let $A' = \set {n \in P: \forall h, h' \in \map A n: \map h n = \map {h'} n}$.
Then by definition of $\map A )$, it follows that $0 \in A'$.
Suppose now that $n \in A'$, and let $h, h' \in \map A {\map s n}$.
Then:














\(\ds \map h {\map s n}\)

\(=\)







\(\ds \map g {\map h n}\)





as $h \in \map A {\map s n}$














\(\ds \)

\(=\)







\(\ds \map g {\map {h'} n}\)





as $h, h' \in \map A n$














\(\ds \)

\(=\)







\(\ds \map {h'} {\map s n}\)





as $h \in \map A {\map s n}$



Hence $\map s n \in A'$, and by Axiom $(\text P 5)$, we conclude $A' = P$.
Because any $f: \N \to T$ as in the theorem statement needs to be in all $\map A n$, it follows that such an $f$ is necessarily unique.

Finally, we can define $f: P \to T$ by:

$\map f n = \map {h_n} n$
where $h_n \in \map A n$.

It is immediate from the definition of the $\map A n$ that:

$\forall m, n, m < n: \map A n \subseteq \map A m$
Hence, for every $m, n$ such that $m < n$:

$\map {h_m} m = \map {h_n} m$
Thus, for all $m < n$:

$\map f m = \map {h_n} m$
Since $h_n \in \map A n$, it follows that also:

$f \in \map A n$
Thus, since $n$ was arbitrary, it follows that for all $n \in P$:

$\map f {\map s n} = \map g {\map f n}$
as desired.
$\blacksquare$





