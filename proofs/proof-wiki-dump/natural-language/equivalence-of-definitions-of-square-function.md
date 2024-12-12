# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Square_Function



Theorem
Let $\F$ denote one of the standard classes of numbers: $\N$, $\Z$, $\Q$, $\R$, $\C$.
The following definitions of the concept of Square Function are equivalent:

Definition 1
The square (function) on $\GF$ is the mapping $f: \GF \to \GF$ defined as:

$\forall x \in \GF: \map f x = x \times x$
where $\times$ denotes multiplication.

Definition 2
The square (function) on $\GF$ is the mapping $f: \GF \to \GF$ defined as:

$\forall x \in \F: \map f x = x^2$
where $x^2$ denotes the $2$nd power of $x$.


Proof
By definition of $n$th power (for positive $n$):

$x^n = \begin {cases} 1 & : n = 0 \\ x \times x^{n - 1} & : n > 0 \end {cases}$
Thus:














\(\ds x^2\)

\(=\)







\(\ds x \times x^1\)




















\(\ds \)

\(=\)







\(\ds x \times x \times x^0\)




















\(\ds \)

\(=\)







\(\ds x \times x \times 1\)




















\(\ds \)

\(=\)







\(\ds x \times x\)









Hence the result.
$\blacksquare$





