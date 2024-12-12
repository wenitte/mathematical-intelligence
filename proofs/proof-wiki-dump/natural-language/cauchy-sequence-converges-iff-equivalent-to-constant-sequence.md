# 

Source: https://proofwiki.org/wiki/Cauchy_Sequence_Converges_Iff_Equivalent_to_Constant_Sequence

Theorem
Let $\struct {R, \norm {\,\cdot\,} }$ be a normed division ring.
Let $\CC$ be the ring of Cauchy sequences over $R$
Let $\NN$ be the set of null sequences.
Let $\\CC \,\big / \NN$ be the quotient ring of Cauchy sequences of $\CC$ by the maximal ideal $\NN$.
Let $\sequence {x_n} \in \CC$.
Then $\sequence {x_n}$ converges in $\struct {R, \norm {\,\cdot\,} }$ if and only if:

$\exists a \in R: \sequence {x_n} \in \sequence {a, a, a, \dotsc} + \NN$
where $\sequence {a, a, a, \dotsc} + \NN$ is the left coset in $\CC \, \big / \NN$ that contains the constant sequence $\sequence {a, a, a, \dotsc}$.


Proof
By definition, $\sequence {x_n}$ converges to $a \in R$ if and only if $\ds \lim_{n \mathop \to \infty} \norm {x_n - a} = 0$
Then:














\(\ds \lim_{n \mathop \to \infty} \norm {x_n - a}\)

\(=\)







\(\ds 0\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \sequence {x_n - a}\)

\(\in\)







\(\ds \NN\)





Definition of Null Sequence in Normed Division Ring








\(\ds \leadstoandfrom \ \ \)





\(\ds \sequence {x_n} - \sequence {a, a, a, \dotsc}\)

\(\in\)







\(\ds \NN\)





Definition of Addition in Ring of Cauchy Sequences








\(\ds \leadstoandfrom \ \ \)





\(\ds \sequence {x_n}\)

\(\in\)







\(\ds \sequence {a, a, a, \dotsc} + \NN\)





Element in Left Coset iff Product with Inverse in Subgroup



$\blacksquare$





