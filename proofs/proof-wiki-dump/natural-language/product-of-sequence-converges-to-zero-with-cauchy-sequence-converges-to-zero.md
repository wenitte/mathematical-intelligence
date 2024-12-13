# 

Source: https://proofwiki.org/wiki/Product_of_Sequence_Converges_to_Zero_with_Cauchy_Sequence_Converges_to_Zero

Theorem
Let $\struct {R, \norm {\,\cdot\,} }$ be a normed division ring with zero $0$.
Let $\sequence {x_n}$ and $\sequence {y_n} $ be sequences in $R$.
Let $\sequence {x_n}$ converge to $0$.
Let $\sequence {y_n}$ be a Cauchy sequence.
Then:

$\sequence {x_n y_n}$ and $\sequence {y_n x_n}$ converge to $0$.


Proof
By Cauchy Sequence is Bounded in Normed Division Ring:

$\exists M \in \R_{>0}: \forall n, \norm {x_n} \le M$
Given $\epsilon > 0$.
Since $\sequence {x_n}$ converges to $0$ then: 

$\exists N \in \N: \forall n > N, \norm {x_n} < \dfrac \epsilon M$
Hence:














\(\ds \norm {x_n y_n - 0}\)

\(=\)







\(\ds \norm {x_n y_n}\)




















\(\ds \)

\(=\)







\(\ds \norm {x_n} \norm {y_n}\)





Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(<\)







\(\ds \norm {x_n} M\)





$\sequence {y_n}$ is bounded by $M$














\(\ds \)

\(<\)







\(\ds \paren { \dfrac \epsilon M } M\)





$\sequence {x_n}$ converges to $0$














\(\ds \)

\(=\)







\(\ds \epsilon\)









Similarly, $\norm {y_n x_n - 0} < \epsilon$
The result follows by definition of convergence in normed division rings.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.2$: Completions




