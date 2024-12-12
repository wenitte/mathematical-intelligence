# 

Source: https://proofwiki.org/wiki/Addition_is_Arithmetically_Definable

Theorem
Let $f: \N^2 \to \N$ be defined as:

$\map f {x, y} = x + y$
Then there exists a WFF $\map \phi {z, x, y}$ of $3$ free variables and containing no quantifiers such that:

$z = \map f {x, y} \iff \N \models \map \phi {\sqbrk z, \sqbrk x, \sqbrk y}$
where $\sqbrk a$ is the unary representation of $a \in \N$.


Proof
Define:

$\map \phi {z, x, y} := z = x + y$
Correctness is trivial.
$\blacksquare$





