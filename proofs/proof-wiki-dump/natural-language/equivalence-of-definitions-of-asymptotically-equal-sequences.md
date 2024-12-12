# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Asymptotically_Equal_Sequences



Theorem
Let $\sequence {a_n}$ and $\sequence {b_n}$ be sequences in $\R$.

The following definitions of the concept of Asymptotically Equal Sequences are equivalent:

Definition 1
Let $b_n \ne 0$ for all $n$.

$\sequence {a_n}$ is asymptotically equal to  $\sequence {b_n}$ if and only if:

$\ds \lim_{n \mathop \to \infty} \dfrac {a_n} {b_n} = 1$
Definition 2
$\sequence {a_n}$ is asymptotically equal to  $\sequence {b_n}$ if and only if:

$a_n - b_n = \map \oo {b_n}$
where $\oo$ denotes little-$\oo$ notation.

Definition 3
$\sequence {a_n}$ is asymptotically equal to  $\sequence {b_n}$ if and only if:

$a_n - b_n = \map \oo {a_n}$
where $\oo$ denotes little-$\oo$ notation.


Proof
$(1)$ iff $(2)$













\(\ds \lim_{n \mathop \to \infty} \dfrac {a_n} {b_n}\)

\(\to\)







\(\ds 1\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \lim_{n \mathop \to \infty} \paren {\dfrac {a_n} {b_n} - \dfrac {b_n} {b_n} }\)

\(\to\)







\(\ds 0\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \lim_{n \mathop \to \infty} \dfrac {a_n - b_n} {b_n}\)

\(\to\)







\(\ds 0\)














\(\ds \leadstoandfrom \ \ \)





\(\ds a_n - b_n\)

\(=\)







\(\ds \map \oo {b_n}\)









$\Box$


Definition $(2)$ iff $(3)$
Let $a_n - b_n = \map \oo {b_n}$.
Let $0 < \epsilon < 1/2$.
Then:














\(\ds \epsilon \cdot \size {b_n}\)

\(\ge\)







\(\ds \size {a_n - b_n}\)





For $n$ sufficiently large














\(\ds \)

\(=\)







\(\ds \paren {1 - \epsilon} \size {a_n - b_n} + \epsilon \cdot \size {a_n - b_n}\)




















\(\ds \)

\(\ge\)







\(\ds \paren {1 - \epsilon} \size {a_n - b_n} - \epsilon \cdot \size {a_n} + \epsilon \cdot \size {b_n}\)





Triangle Inequality



So:

$\size {a_n - b_n} \le \dfrac {\epsilon \cdot \size {a_n} } {1 - \epsilon} \le 2 \epsilon \cdot \size {a_n}$
Thus:

$a_n - b_n = \map \oo {a_n}$
The other implication follows by symmetry.
$\blacksquare$





