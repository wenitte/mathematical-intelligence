# 

Source: https://proofwiki.org/wiki/Cardinality_of_Cartesian_Product_of_Finite_Sets/General_Result

Theorem
Let $\ds \prod_{k \mathop = 1}^n S_k$ be the cartesian product of a (finite) sequence of sets $\sequence {S_n}$.

Then:

$\ds \card {\prod_{k \mathop = 1}^n S_k} = \prod_{k \mathop = 1}^n \card {S_k}$

This can also be written:

$\card {S_1 \times S_2 \times \ldots \times S_n} = \card {S_1} \times \card {S_2} \times \ldots \times \card {S_n}$


Corollary
Let $S$ be a finite set.
Let $S^n$ be a cartesian space on $S$.

Then:

$\card {S^n} = \card S^n$


Proof

This article needs to be tidied.In particular: I'll get to itPlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Proof by mathematical induction.
Let:

$\ds \map P n = \paren {\card {\prod_{k \mathop = 1}^n S_k} = \prod_{k \mathop = 1}^n \card {S_k} }$
For $n = 1$:

$\ds \card {\prod_{k \mathop = 1}^1 S_k} = \card{S_1} = \prod_{k \mathop = 1}^1 \card {S_k}$
These equalities follow directly from the definition of a finite cartesian product.
Thus $\map P n$ is true for $n = 1$. 

For $n = m + 1$ we have:

$\ds \card {\prod_{k \mathop = 1}^{m + 1} S_k} = \card {\paren {\prod_{k \mathop = 1}^m S_k} \times S_{m + 1} }$
Applying Cardinality of Cartesian Product of Finite Sets:

$\ds \card {\paren {\prod_{k \mathop = 1}^m S_k} \times S_{m + 1} } = \card {\prod_{k \mathop = 1}^m S_k} \times \card {S_{m + 1} }$
Applying the induction step for $n = m$:

$\ds \card {\prod_{k \mathop = 1}^m S_k} \times \card {S_{m + 1} } = \prod_{k \mathop = 1}^m \card {S_k} \times \card {S_{m + 1} } = \prod_{k \mathop = 1}^{m + 1} \card {S_k}$
Hence for $n = m + 1$, assuming $\map P m$:

$\ds \card {\prod_{k \mathop = 1}^{m + 1} S_k} = \prod_{k \mathop = 1}^{m + 1} \card {S_k}$
which completes the proof.
$\blacksquare$





